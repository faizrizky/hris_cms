/**
 * Menimpa isi halaman Harga dengan layout dari seed (mis. setelah blok harga mendapat field baru).
 *
 *   npm run seed:harga
 */
import config from '@payload-config'
import { getPayload, type RequestContext } from 'payload'

import { hargaLayout } from './content'

const context: RequestContext = { disableRevalidate: true, disableAudit: true }

async function main() {
  const payload = await getPayload({ config })
  const found = await payload.find({ collection: 'pages', where: { slug: { equals: 'harga' } }, limit: 1, overrideAccess: true })
  const page = found.docs[0]
  if (!page) throw new Error('Halaman harga tidak ditemukan.')

  await payload.update({
    collection: 'pages',
    id: page.id,
    // Layout dari seed berbentuk longgar; Payload memvalidasinya saat disimpan.
    data: { layout: hargaLayout() as never },
    overrideAccess: true,
    context,
  })
  payload.logger.info('Halaman harga diperbarui.')
}

try {
  await main()
  process.exit(0)
} catch (error) {
  console.error(error)
  process.exit(1)
}
