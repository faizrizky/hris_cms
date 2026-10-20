/**
 * Mengisi CMS dengan konten awal HRIS.
 *
 *   SEED_ADMIN_EMAIL=anda@contoh.com SEED_ADMIN_PASSWORD='…' npm run seed
 *
 * - Menolak berjalan dua kali (berhenti bila sudah ada halaman).
 * - Logo diunggah lewat koleksi Media, jadi melewati validasi yang sama dengan unggahan editor.
 * - Akun admin dibuat dari SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD bila belum ada pengguna.
 */
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import config from '@payload-config'
import { getPayload, type RequestContext } from 'payload'

import { checkPasswordStrength } from '@/hooks/passwordPolicy'

import featuresData from './data/features.json'
import solutionsData from './data/solutions.json'
import {
  demoLayout,
  fiturLayout,
  footerData,
  hargaLayout,
  homeLayout,
  legalLayout,
  legalPages,
  navigationData,
  siteSettingsData,
  solusiLayout,
  tentangLayout,
  toolsLayout,
} from './content'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const LOGO_PATH = path.resolve(dirname, '../../public/hris-icon-512.png')

// Seed adalah pengisian data massal: lewati baris audit dan ping cache landing.
const context: RequestContext = { disableRevalidate: true, disableAudit: true }

async function main() {
  const payload = await getPayload({ config })
  const log = payload.logger

  const existing = await payload.count({ collection: 'pages', overrideAccess: true })
  if (existing.totalDocs > 0) {
    log.warn('Halaman sudah ada, seed dilewati. Ubah konten lewat panel admin.')
    return
  }

  // ── Akun admin ───────────────────────────────────────────────────────
  const users = await payload.count({ collection: 'users', overrideAccess: true })
  if (users.totalDocs === 0) {
    const email = process.env.SEED_ADMIN_EMAIL
    const password = process.env.SEED_ADMIN_PASSWORD
    if (!email || !password) throw new Error('Isi SEED_ADMIN_EMAIL dan SEED_ADMIN_PASSWORD untuk membuat admin pertama.')
    const weak = checkPasswordStrength(password, email)
    if (weak) throw new Error(`SEED_ADMIN_PASSWORD ditolak: ${weak}`)
    await payload.create({
      collection: 'users',
      overrideAccess: true,
      context,
      data: { email, password, name: 'Administrator', roles: ['admin'] },
    })
    log.info(`Admin dibuat: ${email}`)
  }

  // ── Media ────────────────────────────────────────────────────────────
  const logo = await payload.create({
    collection: 'media',
    overrideAccess: true,
    context,
    data: { alt: 'Logo HRIS' },
    filePath: LOGO_PATH,
  })

  // ── Fitur (dua putaran: dulu dibuat, lalu fitur terkait disambungkan) ──
  const featureIds = new Map<string, number>()
  for (const { relatedSlugs: _related, screenFile: _screenFile, ...feature } of featuresData as (typeof featuresData[number] & { screenFile?: string })[]) {
    const doc = await payload.create({
      collection: 'features',
      overrideAccess: true,
      context,
      data: { ...feature, _status: 'published' } as never,
    })
    featureIds.set(feature.slug, doc.id)
  }
  for (const feature of featuresData) {
    const related = (feature.relatedSlugs ?? []).map((slug) => featureIds.get(slug)).filter((id): id is number => Boolean(id))
    if (related.length === 0) continue
    await payload.update({
      collection: 'features',
      id: featureIds.get(feature.slug)!,
      overrideAccess: true,
      context,
      data: { related } as never,
    })
  }
  log.info(`Fitur: ${featureIds.size}`)

  // ── Solusi ───────────────────────────────────────────────────────────
  for (const solution of solutionsData) {
    const points = solution.points.map(({ featureSlug, ...point }) => ({ ...point, feature: featureIds.get(featureSlug) }))
    await payload.create({
      collection: 'solutions',
      overrideAccess: true,
      context,
      data: { ...solution, points, _status: 'published' } as never,
    })
  }
  log.info(`Solusi: ${solutionsData.length}`)

  // ── Halaman ──────────────────────────────────────────────────────────
  const pages = [
    { slug: 'home', title: 'Beranda', layout: homeLayout() },
    { slug: 'fitur', title: 'Fitur', layout: fiturLayout() },
    { slug: 'solusi', title: 'Solusi', layout: solusiLayout() },
    { slug: 'harga', title: 'Harga', layout: hargaLayout() },
    { slug: 'tools', title: 'Tools', layout: toolsLayout() },
    { slug: 'demo', title: 'Demo', layout: demoLayout() },
    { slug: 'tentang', title: 'Tentang', layout: tentangLayout() },
    ...legalPages.map((page) => ({ slug: page.slug, title: page.title, layout: legalLayout(page) })),
  ]
  for (const page of pages) {
    await payload.create({
      collection: 'pages',
      overrideAccess: true,
      context,
      draft: false,
      data: { ...page, _status: 'published' } as never,
    })
  }
  log.info(`Halaman: ${pages.map((p) => p.slug).join(', ')}`)

  // ── Pengaturan ───────────────────────────────────────────────────────
  await payload.updateGlobal({
    slug: 'site-settings',
    overrideAccess: true,
    context,
    data: { ...siteSettingsData, logo: logo.id, _status: 'published' } as never,
  })
  await payload.updateGlobal({
    slug: 'navigation',
    overrideAccess: true,
    context,
    data: { ...navigationData, _status: 'published' } as never,
  })
  await payload.updateGlobal({
    slug: 'footer',
    overrideAccess: true,
    context,
    data: { ...footerData, _status: 'published' } as never,
  })

  log.info('Seed selesai')
}

try {
  await main()
  process.exit(0)
} catch (error) {
  console.error(error)
  process.exit(1)
}
