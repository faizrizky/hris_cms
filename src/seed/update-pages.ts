/**
 * Menimpa isi halaman tertentu dengan layout dari seed (mis. setelah teks seed berubah), tanpa menyentuh halaman lain.
 *
 *   npm run seed:halaman -- harga home
 */
import config from '@payload-config'
import { getPayload, type RequestContext } from 'payload'

import { fiturLayout, hargaLayout, homeLayout, legalLayout, legalPages, tentangLayout } from './content'

const context: RequestContext = { disableRevalidate: true, disableAudit: true }

const LAYOUT_BY_SLUG: Record<string, () => unknown[]> = {
  home: homeLayout,
  fitur: fiturLayout,
  harga: hargaLayout,
  tentang: tentangLayout,
  ...Object.fromEntries(legalPages.map((page) => [page.slug, () => legalLayout(page)])),
}

async function main() {
  const slugs = process.argv.slice(2).filter((arg) => arg in LAYOUT_BY_SLUG)
  if (slugs.length === 0) throw new Error(`Sebutkan slug halaman: ${Object.keys(LAYOUT_BY_SLUG).join(', ')}`)

  const payload = await getPayload({ config })
  for (const slug of slugs) {
    const found = await payload.find({ collection: 'pages', where: { slug: { equals: slug } }, limit: 1, overrideAccess: true })
    const page = found.docs[0]
    if (!page) throw new Error(`Halaman ${slug} tidak ditemukan.`)
    // Layout dari seed berbentuk longgar; Payload memvalidasinya saat disimpan.
    await payload.update({ collection: 'pages', id: page.id, data: { layout: LAYOUT_BY_SLUG[slug]() as never }, overrideAccess: true, context })
    payload.logger.info(`Halaman ${slug} diperbarui.`)
  }

  const planned = await payload.delete({ collection: 'features', where: { availability: { equals: 'planned' } }, overrideAccess: true, context })
  payload.logger.info(`Fitur dalam rencana dihapus: ${planned.docs.length}`)
}

try {
  await main()
  process.exit(0)
} catch (error) {
  console.error(error)
  process.exit(1)
}
