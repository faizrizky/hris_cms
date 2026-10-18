import type { Block } from 'payload'

import { buttonsField } from '@/fields/link'
import { tagField, textListField } from '@/fields/hris'
import { sectionHeaderField } from '@/fields/section'

/** Teks di kiri, papan kartu pengajuan di kanan (dengan lonceng melayang), lalu baris ringkasan. */
export const RequestsBoardBlock: Block = {
  slug: 'requestsBoard',
  interfaceName: 'RequestsBoardBlock',
  labels: { singular: 'Papan Pengajuan', plural: 'Papan Pengajuan' },
  fields: [
    { name: 'anchor', type: 'text', maxLength: 40 },
    tagField(),
    sectionHeaderField({ eyebrow: false }),
    buttonsField(1),
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      labels: { singular: 'Kartu', plural: 'Kartu' },
      fields: [
        { name: 'title', type: 'text', required: true, maxLength: 40 },
        { name: 'subtitle', type: 'text', maxLength: 80 },
        { name: 'status', type: 'text', maxLength: 30 },
      ],
    },
    { name: 'doneLabel', type: 'text', maxLength: 30, admin: { description: 'Status yang dianggap selesai, mis. Disetujui.' } },
    { name: 'stripTitle', type: 'text', maxLength: 100 },
    textListField('stripItems', 'Baris ringkasan', 6),
  ],
}
