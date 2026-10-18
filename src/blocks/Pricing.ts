import type { Block } from 'payload'

import { buttonsField, hrefField } from '@/fields/link'
import { tagField, textListField, tintField } from '@/fields/hris'
import { sectionHeaderField } from '@/fields/section'

/** Paket harga (Basic, Essential, Suite, dll.). Harga di sini bisa diubah kapan saja. */
export const PricingBlock: Block = {
  slug: 'pricing',
  interfaceName: 'PricingBlock',
  labels: { singular: 'Paket Harga', plural: 'Paket Harga' },
  fields: [
    { name: 'anchor', type: 'text', maxLength: 40 },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'full',
      options: [
        { label: 'Lengkap — semua fitur per paket', value: 'full' },
        { label: 'Ringkas — beberapa fitur + tautan ke halaman harga', value: 'compact' },
      ],
    },
    tagField(),
    sectionHeaderField({ eyebrow: false }),
    tintField('white'),
    {
      name: 'plans',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      labels: { singular: 'Paket', plural: 'Paket' },
      admin: { description: 'Harga masih contoh. Ubah sesuai harga resmi sebelum rilis.' },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'name', type: 'text', required: true, maxLength: 40, admin: { width: '50%' } },
            { name: 'badge', type: 'text', maxLength: 30, admin: { width: '50%', description: 'Mis. Paling populer.' } },
          ],
        },
        { name: 'isFeatured', type: 'checkbox', label: 'Sorot paket ini', defaultValue: false },
        {
          type: 'row',
          fields: [
            { name: 'pricePrefix', type: 'text', defaultValue: 'Mulai dari', maxLength: 30, admin: { width: '25%' } },
            { name: 'price', type: 'text', required: true, maxLength: 30, admin: { width: '35%', description: 'Contoh: Rp11.900' } },
            { name: 'priceUnit', type: 'text', defaultValue: '/bulan/karyawan', maxLength: 40, admin: { width: '40%' } },
          ],
        },
        { name: 'description', type: 'text', maxLength: 140 },
        { name: 'inheritsFrom', type: 'text', maxLength: 80, admin: { description: 'Mis. Semua fitur paket Basic.' } },
        {
          name: 'features',
          type: 'array',
          labels: { singular: 'Fitur', plural: 'Fitur' },
          fields: [
            { name: 'text', type: 'text', required: true, maxLength: 140 },
            { name: 'isSoon', type: 'checkbox', defaultValue: false, label: 'Segera hadir (belum rilis)' },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'actionLabel', type: 'text', required: true, defaultValue: 'Hubungi sales', maxLength: 40, admin: { width: '50%' } },
            hrefField({ name: 'actionHref', defaultValue: '/demo', admin: { width: '50%' } }),
          ],
        },
      ],
    },
    { name: 'addonNote', type: 'text', maxLength: 160, admin: { description: 'Catatan di bawah paket, mis. harga tambah fitur.' } },
    textListField('points', 'Poin penawaran (ringkas)', 5),
    buttonsField(1),
  ],
}
