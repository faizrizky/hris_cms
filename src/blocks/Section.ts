import type { Block } from 'payload'

import { hrefField } from '@/fields/link'
import { tagField, tintField, visualField } from '@/fields/hris'
import { sectionHeaderField } from '@/fields/section'

/** Bagian halaman dalam: judul bertag, gambar beranimasi di samping, lalu kartu bergaris aksen. */
export const SectionBlock: Block = {
  slug: 'section',
  interfaceName: 'SectionBlock',
  labels: { singular: 'Bagian dengan Gambar', plural: 'Bagian dengan Gambar' },
  fields: [
    { name: 'anchor', type: 'text', maxLength: 40 },
    tagField(),
    sectionHeaderField({ eyebrow: false }),
    tintField('white'),
    {
      name: 'visualSide',
      type: 'select',
      defaultValue: 'right',
      options: [
        { label: 'Gambar di kanan', value: 'right' },
        { label: 'Gambar di kiri', value: 'left' },
      ],
    },
    visualField('panel'),
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      options: ['2', '3', '4'].map((v) => ({ label: `${v} kolom`, value: v })),
    },
    {
      name: 'items',
      type: 'array',
      maxRows: 12,
      labels: { singular: 'Kartu', plural: 'Kartu' },
      fields: [
        { name: 'title', type: 'text', required: true, maxLength: 80 },
        { name: 'description', type: 'textarea', maxLength: 300 },
        { name: 'badge', type: 'text', maxLength: 30 },
        hrefField({ required: false }),
      ],
    },
  ],
}
