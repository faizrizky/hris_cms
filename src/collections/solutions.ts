import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import {
  SOLUTION_TYPE,
  SOLUTION_TYPE_OPTIONS,
} from '../constants/content-options'
import { faqItemsField } from '../fields/content-fields'
import { createCollectionRevalidateHooks } from '../hooks/revalidate-content'
import { FEATURES_SLUG } from './features'

export const SOLUTIONS_SLUG = 'solutions'

export const Solutions: CollectionConfig<'solutions'> = {
  slug: SOLUTIONS_SLUG,
  labels: { singular: 'Solusi', plural: 'Solusi' },
  admin: {
    group: 'Konten Situs',
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'order'],
    description: 'Halaman solusi per industri atau skala bisnis di /solusi/[slug].',
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  defaultSort: 'order',
  hooks: createCollectionRevalidateHooks({ tags: [SOLUTIONS_SLUG], paths: ['/', '/solusi'] }),
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', label: 'Nama', required: true, admin: { width: '50%' } },
        {
          name: 'slug',
          type: 'text',
          label: 'Slug (URL)',
          required: true,
          unique: true,
          index: true,
          admin: { width: '50%' },
          validate: (value?: string | null) =>
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value ?? '') || 'Gunakan huruf kecil, angka, dan tanda hubung',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'type',
          type: 'select',
          label: 'Jenis',
          required: true,
          defaultValue: SOLUTION_TYPE.INDUSTRY,
          options: SOLUTION_TYPE_OPTIONS,
          admin: { width: '50%' },
        },
      ],
    },
    { name: 'order', type: 'number', label: 'Urutan', defaultValue: 100, admin: { position: 'sidebar' } },
    {
      name: 'showOnHome',
      type: 'checkbox',
      label: 'Tampilkan di daftar beranda',
      defaultValue: false,
      admin: { position: 'sidebar', description: 'Daftar poster di beranda memuat 4 sampai 7 solusi.' },
    },
    { name: 'tagline', type: 'text', label: 'Deskripsi singkat (mega menu dan kartu)', required: true },
    { name: 'heroTitle', type: 'text', label: 'Judul halaman (H1)', required: true, maxLength: 44, admin: { description: 'Maksimal 44 karakter agar tetap dua baris di layar HP.' } },
    { name: 'heroDescription', type: 'textarea', label: 'Deskripsi halaman', required: true },
    {
      name: 'pains',
      type: 'array',
      label: 'Masalah yang sering dihadapi',
      minRows: 1,
      maxRows: 4,
      labels: { singular: 'Masalah', plural: 'Masalah' },
      fields: [
        { name: 'title', type: 'text', label: 'Judul', required: true },
        { name: 'description', type: 'textarea', label: 'Deskripsi', required: true },
      ],
    },
    {
      name: 'points',
      type: 'array',
      label: 'Solusi yang kami tawarkan',
      minRows: 1,
      maxRows: 6,
      labels: { singular: 'Solusi', plural: 'Solusi' },
      fields: [
        { name: 'title', type: 'text', label: 'Judul', required: true },
        { name: 'description', type: 'textarea', label: 'Deskripsi', required: true },
        {
          name: 'feature',
          type: 'relationship',
          relationTo: FEATURES_SLUG,
          label: 'Fitur terkait',
          required: true,
        },
      ],
    },
    faqItemsField({ maxRows: 6 }),
  ],
}
