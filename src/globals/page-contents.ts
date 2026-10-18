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
    { name: 'plansTitle', type: 'text', label: 'Judul bagian paket' },
    { name: 'plansDescription', type: 'textarea', label: 'Keterangan di bawah judul paket' },
    {
      name: 'plans',
      type: 'array',
      label: 'Paket harga',
      admin: { description: 'Harga di sini masih contoh. Ubah sesuai harga resmi sebelum rilis. Tampil di /harga dan beranda.' },
      minRows: 1,
      maxRows: 4,
      labels: { singular: 'Paket', plural: 'Paket' },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'name', type: 'text', label: 'Nama paket', required: true, admin: { width: '50%' } },
            { name: 'badge', type: 'text', label: 'Label (mis. Paling populer)', admin: { width: '50%' } },
          ],
        },
        { name: 'isFeatured', type: 'checkbox', label: 'Sorot paket ini', defaultValue: false },
        {
          type: 'row',
          fields: [
            { name: 'pricePrefix', type: 'text', label: 'Awalan harga', defaultValue: 'Mulai dari', admin: { width: '25%' } },
            { name: 'price', type: 'text', label: 'Harga', required: true, admin: { width: '35%', description: 'Contoh: Rp11.900' } },
            { name: 'priceUnit', type: 'text', label: 'Satuan', defaultValue: '/bulan/karyawan', admin: { width: '40%' } },
          ],
        },
        { name: 'description', type: 'text', label: 'Keterangan singkat' },
        { name: 'inheritsFrom', type: 'text', label: 'Baris pewarisan (mis. Semua fitur paket Basic)' },
        {
          name: 'features',
          type: 'array',
          label: 'Fitur dalam paket',
          labels: { singular: 'Fitur', plural: 'Fitur' },
          fields: [
            { name: 'text', type: 'text', label: 'Fitur', required: true },
            { name: 'isSoon', type: 'checkbox', label: 'Segera hadir (belum rilis)', defaultValue: false },
          ],
        },
        { name: 'actionLabel', type: 'text', label: 'Teks tombol', required: true, defaultValue: 'Hubungi sales' },
      ],
    },
    { name: 'addonNote', type: 'text', label: 'Catatan tambahan fitur (di bawah paket)' },
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
