import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { TESTIMONIAL_TONE, TESTIMONIAL_TONE_OPTIONS } from '../constants/content-options'
import { createCollectionRevalidateHooks } from '../hooks/revalidate-content'

export const TESTIMONIALS_SLUG = 'testimonials'

export const Testimonials: CollectionConfig<'testimonials'> = {
  slug: TESTIMONIALS_SLUG,
  labels: { singular: 'Testimoni', plural: 'Testimoni' },
  admin: {
    group: 'Konten Situs',
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'isPlaceholder', 'order'],
    description: 'Tandai "Contoh" untuk testimoni sementara. Ganti dengan testimoni asli sebelum rilis.',
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  defaultSort: 'order',
  hooks: createCollectionRevalidateHooks({ tags: [TESTIMONIALS_SLUG], paths: ['/'] }),
  fields: [
    { name: 'quote', type: 'textarea', label: 'Kutipan', required: true },
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', label: 'Nama', required: true, admin: { width: '50%' } },
        { name: 'role', type: 'text', label: 'Jabatan dan perusahaan', required: true, admin: { width: '50%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'tone',
          type: 'select',
          label: 'Warna kartu',
          required: true,
          defaultValue: TESTIMONIAL_TONE.YELLOW,
          options: TESTIMONIAL_TONE_OPTIONS,
          admin: { width: '34%' },
        },
        {
          name: 'rotationDeg',
          type: 'number',
          label: 'Kemiringan (derajat)',
          defaultValue: 0,
          min: -8,
          max: 8,
          admin: { width: '33%' },
        },
        { name: 'order', type: 'number', label: 'Urutan', defaultValue: 100, admin: { width: '33%' } },
      ],
    },
    {
      name: 'isPlaceholder',
      type: 'checkbox',
      label: 'Ini contoh (bukan testimoni asli)',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
  ],
}
