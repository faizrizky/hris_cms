import type { Block } from 'payload'

import { tagField } from '@/fields/hris'

/** Daftar solusi dikelompokkan per jenis (industri dan skala bisnis). Isinya otomatis dari koleksi Solusi. */
export const SolutionCatalogBlock: Block = {
  slug: 'solutionCatalog',
  interfaceName: 'SolutionCatalogBlock',
  labels: { singular: 'Katalog Solusi', plural: 'Katalog Solusi' },
  fields: [
    tagField(),
    {
      name: 'note',
      type: 'ui',
      admin: { components: { Field: '/components/admin/Nothing#Nothing' } },
    },
  ],
}
