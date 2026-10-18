import type { Block } from 'payload'

import { tagField } from '@/fields/hris'
import { sectionHeaderField } from '@/fields/section'

/** Kartu solusi per industri. Isinya otomatis dari Solusi yang dicentang "Tampilkan di beranda". */
export const IndustriesBlock: Block = {
  slug: 'industries',
  interfaceName: 'IndustriesBlock',
  labels: { singular: 'Solusi Industri', plural: 'Solusi Industri' },
  fields: [
    { name: 'anchor', type: 'text', maxLength: 40 },
    tagField(),
    sectionHeaderField({ eyebrow: false }),
    {
      name: 'solutions',
      type: 'relationship',
      relationTo: 'solutions',
      hasMany: true,
      admin: { description: 'Kosongkan untuk memakai semua solusi yang dicentang "Tampilkan di beranda".' },
    },
  ],
}
