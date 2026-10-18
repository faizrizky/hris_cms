/**
 * Menambahkan fitur dari seed yang belum ada di CMS (berdasarkan slug), tanpa menyentuh yang sudah ada.
 *
 *   npm run seed:fitur
 */
import config from '@payload-config'
import { getPayload, type RequestContext } from 'payload'

import featuresData from './data/features.json'

const context: RequestContext = { disableRevalidate: true, disableAudit: true }

async function main() {
  const payload = await getPayload({ config })
  const existing = await payload.find({ collection: 'features', limit: 500, depth: 0, pagination: false, overrideAccess: true })
  const idBySlug = new Map<string, number>(existing.docs.map((doc) => [doc.slug as string, doc.id]))
  const missing = featuresData.filter((feature) => !idBySlug.has(feature.slug))

  for (const { relatedSlugs: _related, ...feature } of missing) {
    const doc = await payload.create({ collection: 'features', overrideAccess: true, context, data: { ...feature, _status: 'published' } as never })
    idBySlug.set(feature.slug, doc.id)
  }
  for (const feature of missing) {
    const related = (feature.relatedSlugs ?? []).map((slug) => idBySlug.get(slug)).filter((id): id is number => Boolean(id))
    if (related.length === 0) continue
    await payload.update({ collection: 'features', id: idBySlug.get(feature.slug)!, overrideAccess: true, context, data: { related } as never })
  }
  payload.logger.info(`Fitur ditambahkan: ${missing.length}`)
}

try {
  await main()
  process.exit(0)
} catch (error) {
  console.error(error)
  process.exit(1)
}
