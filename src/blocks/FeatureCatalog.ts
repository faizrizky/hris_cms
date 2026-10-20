import type { Block } from 'payload'

import { tagField } from '@/fields/hris'

/** Daftar fitur dikelompokkan per kategori, tiap kelompok punya gambar sendiri. Isinya otomatis dari koleksi Fitur. */
export const FeatureCatalogBlock: Block = {
  slug: 'featureCatalog',
  interfaceName: 'FeatureCatalogBlock',
  labels: { singular: 'Katalog Fitur', plural: 'Katalog Fitur' },
  fields: [
    tagField(),
    {
      name: 'note',
      type: 'ui',
      admin: { components: { Field: '/components/admin/Nothing#Nothing' } },
    },
  ],
}
