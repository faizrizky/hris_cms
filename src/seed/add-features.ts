/**
 * Menyamakan fitur CMS dengan seed: membuat yang belum ada, memperbarui yang sudah ada (isi dari seed menimpa),
 * mengunggah tangkapan layar aplikasi ke Media lalu memasangnya di fitur, hero beranda, dan hero halaman demo.
 *
 *   npm run seed:fitur
 */
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import config from '@payload-config'
import { getPayload, type Payload, type RequestContext } from 'payload'

import featuresData from './data/features.json'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const SCREENS_DIR = path.resolve(dirname, 'data/screens')
const SCREEN_FILE_PREFIX = 'aplikasi-'
const HOME_SCREEN = 'home'
const DEMO_SCREEN = 'home'

const context: RequestContext = { disableRevalidate: true, disableAudit: true }

const screenAlt = (name: string) => `Layar aplikasi HRIS: ${name}`

async function ensureScreenMedia(payload: Payload, cache: Map<string, number>, name: string): Promise<number> {
  const cached = cache.get(name)
  if (cached) return cached

  const filename = `${SCREEN_FILE_PREFIX}${name}.webp`
  const existing = await payload.find({ collection: 'media', where: { filename: { equals: filename } }, limit: 1, depth: 0, overrideAccess: true })
  const found = existing.docs[0]
  if (found) {
    cache.set(name, found.id)
    return found.id
  }

  const created = await payload.create({
    collection: 'media',
    overrideAccess: true,
    context,
    data: { alt: screenAlt(name) },
    filePath: path.join(SCREENS_DIR, `${name}.webp`),
    overwriteExistingFiles: true,
  })
  cache.set(name, created.id)
  return created.id
}

type LooseBlock = { blockType?: string; variant?: string; mockup?: Record<string, unknown>; visual?: Record<string, unknown> }

async function setPageScreens(payload: Payload, mediaIds: Map<string, number>) {
  const pageTargets = [
    { slug: 'home', apply: (block: LooseBlock, id: number) => block.blockType === 'hero' && block.variant === 'home' && Object.assign((block.mockup ??= {}), { phoneScreen: id }), screen: HOME_SCREEN },
    {
      slug: 'home',
      apply: (block: LooseBlock & { anchor?: string }, id: number) => block.blockType === 'featureBand' && block.anchor === 'absensi' && Object.assign(block, { screenImage: id }),
      screen: 'face-recognition',
    },
    {
      slug: 'home',
      apply: (block: LooseBlock & { anchor?: string }, id: number) => block.blockType === 'featureBand' && block.anchor === 'approval' && Object.assign(block, { screenImage: id }),
      screen: 'approvals',
    },
    { slug: 'demo', apply: (block: LooseBlock, id: number) => block.blockType === 'hero' && block.visual?.kind === 'phone' && Object.assign(block.visual, { screen: id }), screen: DEMO_SCREEN },
  ]

  for (const target of pageTargets) {
    const found = await payload.find({ collection: 'pages', where: { slug: { equals: target.slug } }, limit: 1, depth: 0, overrideAccess: true })
    const page = found.docs[0]
    if (!page) continue
    const layout = (page.layout ?? []) as LooseBlock[]
    const id = await ensureScreenMedia(payload, mediaIds, target.screen)
    layout.forEach((block) => target.apply(block, id))
    await payload.update({ collection: 'pages', id: page.id, data: { layout: layout as never }, overrideAccess: true, context })
  }
}

async function main() {
  const payload = await getPayload({ config })
  const mediaIds = new Map<string, number>()
  const existing = await payload.find({ collection: 'features', limit: 500, depth: 0, pagination: false, overrideAccess: true })
  const idBySlug = new Map<string, number>(existing.docs.map((doc) => [doc.slug as string, doc.id]))

  for (const { relatedSlugs: _related, screenFile, ...feature } of featuresData as (typeof featuresData[number] & { screenFile?: string })[]) {
    const screen = screenFile ? await ensureScreenMedia(payload, mediaIds, screenFile) : undefined
    const data = { ...feature, mock: { ...feature.mock, screen: screen ?? null }, _status: 'published' } as never
    const id = idBySlug.get(feature.slug)

    if (id) {
      await payload.update({ collection: 'features', id, overrideAccess: true, context, data })
    } else {
      const created = await payload.create({ collection: 'features', overrideAccess: true, context, data })
      idBySlug.set(feature.slug, created.id)
    }
  }

  for (const feature of featuresData) {
    const related = (feature.relatedSlugs ?? []).map((slug) => idBySlug.get(slug)).filter((id): id is number => Boolean(id))
    if (related.length === 0) continue
    await payload.update({ collection: 'features', id: idBySlug.get(feature.slug)!, overrideAccess: true, context, data: { related } as never })
  }

  await setPageScreens(payload, mediaIds)
  payload.logger.info(`Fitur disinkronkan: ${featuresData.length}, layar aplikasi: ${mediaIds.size}`)
}

try {
  await main()
  process.exit(0)
} catch (error) {
  console.error(error)
  process.exit(1)
}
