import type { Block } from 'payload'

import { buttonsField } from '@/fields/link'
import { ACCESSORY_OPTIONS, tagField, textListField, tintField } from '@/fields/hris'
import { imageField, sectionHeaderField } from '@/fields/section'

/** Pita warna dengan HP di kiri (layar absen wajah atau layar approval) dan teks di kanan. */
export const FeatureBandBlock: Block = {
  slug: 'featureBand',
  interfaceName: 'FeatureBandBlock',
  labels: { singular: 'Pita HP', plural: 'Pita HP' },
  fields: [
    { name: 'anchor', type: 'text', maxLength: 40, admin: { description: 'ID untuk tautan #bagian, mis. absensi.' } },
    {
      name: 'screen',
      type: 'select',
      required: true,
      defaultValue: 'faceScan',
      options: [
        { label: 'Layar absen wajah (pemindaian beranimasi)', value: 'faceScan' },
        { label: 'Layar approval (centang berurutan)', value: 'approval' },
      ],
    },
    imageField('screenImage', {
      label: 'Layar aplikasi (gambar)',
      admin: { description: 'Tangkapan layar aplikasi. Jika diisi, menggantikan layar beranimasi di atas.' },
    }),
    tagField(),
    sectionHeaderField({ eyebrow: false }),
    buttonsField(1),
    tintField('sky'),
    {
      name: 'accessory',
      type: 'select',
      defaultValue: 'shield',
      options: ACCESSORY_OPTIONS,
      admin: { description: 'Lencana yang melayang di samping HP.' },
    },
    { name: 'screenTitle', type: 'text', maxLength: 60 },
    {
      name: 'screenSubtitle',
      type: 'text',
      maxLength: 60,
      admin: { description: 'Tanggal (layar absen) atau anak judul (layar approval).' },
    },
    textListField('chips', 'Chip hasil absen', 4),
    { name: 'screenButton', type: 'text', maxLength: 40, admin: { condition: (_, s) => s?.screen === 'faceScan' } },
    {
      type: 'row',
      fields: [
        { name: 'pendingLabel', type: 'text', maxLength: 30, admin: { condition: (_, s) => s?.screen === 'approval', width: '50%' } },
        { name: 'doneLabel', type: 'text', maxLength: 30, admin: { condition: (_, s) => s?.screen === 'approval', width: '50%' } },
      ],
    },
    {
      name: 'items',
      type: 'array',
      maxRows: 5,
      labels: { singular: 'Baris', plural: 'Baris' },
      admin: { condition: (_, s) => s?.screen === 'approval' },
      fields: [
        { name: 'name', type: 'text', required: true, maxLength: 60 },
        { name: 'detail', type: 'text', required: true, maxLength: 80 },
      ],
    },
  ],
}
