import config from '@payload-config'
import { getPayload } from 'payload'

import featuresData from './data/features.json'
import solutionsData from './data/solutions.json'
import {
  aboutPageSeed,
  pageCopySeed,
  homeSeed,
  legalPagesSeed,
  pricingPageSeed,
  siteSettingsSeed,
  type LegalPageSeed,
} from './data/content'

type Payload = Awaited<ReturnType<typeof getPayload>>

const LEXICAL_VERSION = 1

/** Mencegah hook revalidate memanggil landing selama seed. */
const SEED_CONTEXT = { disableRevalidate: true }

const textNode = (text: string) => ({
  type: 'text',
  text,
  format: 0,
  detail: 0,
  mode: 'normal',
  style: '',
  version: LEXICAL_VERSION,
})

const blockNode = (type: 'paragraph' | 'heading', text: string, tag?: 'h2') => ({
  type,
  ...(tag ? { tag } : {}),
  children: [textNode(text)],
  direction: 'ltr',
  format: '',
  indent: 0,
  version: LEXICAL_VERSION,
})

const toLexical = (page: LegalPageSeed) => ({
  root: {
    type: 'root',
    children: page.sections.flatMap((section) => [
      blockNode('heading', section.heading, 'h2'),
      ...section.paragraphs.map((paragraph) => blockNode('paragraph', paragraph)),
    ]),
    direction: 'ltr',
    format: '',
    indent: 0,
    version: LEXICAL_VERSION,
  },
})

const findIdBySlug = async (payload: Payload, collection: 'features' | 'solutions' | 'pages', slug: string) => {
  const result = await payload.find({
    collection,
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
    pagination: false,
  })

  return result.docs[0]?.id
}

const omitKey = <T extends object>(source: T, key: keyof T) =>
  Object.fromEntries(Object.entries(source).filter(([entryKey]) => entryKey !== key))

const seedFeatures = async (payload: Payload) => {
  const idBySlug = new Map<string, number>()

  for (const feature of featuresData) {
    const data = omitKey(feature, 'relatedSlugs')
    const existingId = await findIdBySlug(payload, 'features', feature.slug)
    // Data JSON bertipe string biasa; skema Payload memvalidasi nilainya saat disimpan.
    const doc = existingId
      ? await payload.update({ collection: 'features', id: existingId, data: data as never, context: SEED_CONTEXT })
      : await payload.create({ collection: 'features', data: data as never, context: SEED_CONTEXT })

    idBySlug.set(feature.slug, doc.id)
    payload.logger.info(`Fitur: ${feature.slug}`)
  }

  for (const { slug, relatedSlugs } of featuresData) {
    const related = relatedSlugs
      .map((relatedSlug) => idBySlug.get(relatedSlug))
      .filter((id): id is number => id !== undefined)

    await payload.update({ collection: 'features', id: idBySlug.get(slug) as number, data: { related }, context: SEED_CONTEXT })
  }

  return idBySlug
}

const seedSolutions = async (payload: Payload, featureIds: Map<string, number>) => {
  for (const solution of solutionsData) {
    const points = solution.points.map(({ featureSlug, ...point }) => ({
      ...point,
      feature: featureIds.get(featureSlug) as number,
    }))
    const data = { ...solution, points }
    const existingId = await findIdBySlug(payload, 'solutions', solution.slug)

    if (existingId) {
      await payload.update({ collection: 'solutions', id: existingId, data: data as never, context: SEED_CONTEXT })
    } else {
      await payload.create({ collection: 'solutions', data: data as never, context: SEED_CONTEXT })
    }

    payload.logger.info(`Solusi: ${solution.slug}`)
  }
}

const seedGlobals = async (payload: Payload) => {
  await payload.updateGlobal({ slug: 'site-settings', data: siteSettingsSeed as never, context: SEED_CONTEXT })
  await payload.updateGlobal({ slug: 'home', data: homeSeed as never, context: SEED_CONTEXT })
  await payload.updateGlobal({ slug: 'page-copy', data: pageCopySeed as never, context: SEED_CONTEXT })
  await payload.updateGlobal({ slug: 'pricing-page', data: pricingPageSeed as never, context: SEED_CONTEXT })
  await payload.updateGlobal({ slug: 'about-page', data: aboutPageSeed as never, context: SEED_CONTEXT })
  payload.logger.info('Global: site-settings, home, pricing-page, about-page')
}

const seedLegalPages = async (payload: Payload) => {
  for (const page of legalPagesSeed) {
    const data = {
      title: page.title,
      slug: page.slug,
      _status: 'published' as const,
      layout: [
        {
          blockType: 'content' as const,
          columns: [{ size: 'full' as const, richText: toLexical(page) }],
        },
      ],
    }
    const existingId = await findIdBySlug(payload, 'pages', page.slug)

    if (existingId) {
      await payload.update({ collection: 'pages', id: existingId, data: data as never, draft: false, context: SEED_CONTEXT })
    } else {
      await payload.create({ collection: 'pages', data: data as never, draft: false, context: SEED_CONTEXT })
    }

    payload.logger.info(`Halaman: ${page.slug}`)
  }
}

/**
 * Mengisi CMS dengan konten awal. Aman dijalankan berulang (memperbarui berdasarkan slug).
 * Akun admin tidak dibuat di sini; buat sendiri lewat /admin.
 */
const runSeed = async () => {
  const payload = await getPayload({ config })

  // Cache landing tidak perlu dibuang selama seed; dibuang sekali di akhir lewat revalidate manual.
  const featureIds = await seedFeatures(payload)
  await seedSolutions(payload, featureIds)
  await seedGlobals(payload)
  await seedLegalPages(payload)

  payload.logger.info('Seed selesai')
}

// `payload run` memanggil process.exit(0) begitu modul selesai dimuat, jadi seed harus ditunggu di sini.
try {
  await runSeed()
} catch (error) {
  console.error('Seed gagal', error)
  process.exit(1)
}
