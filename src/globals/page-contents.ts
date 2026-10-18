import type { GlobalConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { faqItemsField, stringListField } from '../fields/content-fields'
import { createGlobalRevalidateHook } from '../hooks/revalidate-content'

export const PRICING_PAGE_SLUG = 'pricing-page'
export const ABOUT_PAGE_SLUG = 'about-page'

export const PricingPage: GlobalConfig = {
  slug: PRICING_PAGE_SLUG,
  label: 'Halaman Harga',
  admin: { group: 'Konten Situs', description: 'Isi halaman /harga.' },
  access: { read: anyone, update: authenticated },
  hooks: {
    afterChange: [createGlobalRevalidateHook({ tags: [`global_${PRICING_PAGE_SLUG}`], paths: ['/harga'] })],
  },
  fields: [
    { name: 'heading', type: 'text', label: 'Judul (maksimal dua baris)', required: true, maxLength: 60 },
    { name: 'intro', type: 'textarea', label: 'Pengantar', required: true },
    { name: 'action', type: 'text', label: 'Teks tombol', required: true },
    {
      name: 'steps',
      type: 'array',
      label: 'Cara kami menyusun penawaran',
      minRows: 2,
      maxRows: 5,
      labels: { singular: 'Langkah', plural: 'Langkah' },
      fields: [
        { name: 'title', type: 'text', label: 'Judul', required: true },
        { name: 'description', type: 'textarea', label: 'Deskripsi', required: true },
      ],
    },
    stringListField('included', 'Yang termasuk dalam penawaran'),
    faqItemsField({ maxRows: 8 }),
  ],
}

export const AboutPage: GlobalConfig = {
  slug: ABOUT_PAGE_SLUG,
  label: 'Halaman Tentang',
  admin: { group: 'Konten Situs', description: 'Isi halaman /tentang.' },
  access: { read: anyone, update: authenticated },
  hooks: {
    afterChange: [createGlobalRevalidateHook({ tags: [`global_${ABOUT_PAGE_SLUG}`], paths: ['/tentang'] })],
  },
  fields: [
    { name: 'heading', type: 'text', label: 'Judul (maksimal dua baris)', required: true, maxLength: 60 },
    { name: 'statement', type: 'textarea', label: 'Pernyataan utama', required: true, maxLength: 200 },
    {
      name: 'paragraphs',
      type: 'array',
      label: 'Cerita',
      labels: { singular: 'Paragraf', plural: 'Paragraf' },
      fields: [{ name: 'text', type: 'textarea', label: 'Paragraf', required: true }],
    },
    {
      name: 'principles',
      type: 'array',
      label: 'Prinsip',
      maxRows: 5,
      labels: { singular: 'Prinsip', plural: 'Prinsip' },
      fields: [
        { name: 'title', type: 'text', label: 'Judul', required: true },
        { name: 'description', type: 'textarea', label: 'Deskripsi', required: true },
      ],
    },
  ],
}
