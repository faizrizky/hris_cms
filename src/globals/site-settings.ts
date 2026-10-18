import type { GlobalConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { createGlobalRevalidateHook } from '../hooks/revalidate-content'

export const SITE_SETTINGS_SLUG = 'site-settings'

const linkItemFields = [
  { name: 'label', type: 'text' as const, label: 'Teks', required: true },
  { name: 'href', type: 'text' as const, label: 'Tujuan (URL atau #bagian)', required: true },
]

export const SiteSettings: GlobalConfig = {
  slug: SITE_SETTINGS_SLUG,
  label: 'Pengaturan Situs',
  admin: { group: 'Konten Situs', description: 'Nama merek, kontak, navigasi, dan footer.' },
  access: { read: anyone, update: authenticated },
  hooks: {
    afterChange: [createGlobalRevalidateHook({ tags: [`global_${SITE_SETTINGS_SLUG}`], paths: ['/'] })],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Merek',
          fields: [
            { name: 'brandName', type: 'text', label: 'Nama merek', required: true, defaultValue: 'HRIS' },
            { name: 'companyName', type: 'text', label: 'Nama perusahaan' },
            {
              name: 'whatsappNumber',
              type: 'text',
              label: 'Nomor WhatsApp',
              admin: { description: 'Format internasional tanpa tanda plus, contoh 6281234567890. Kosongkan untuk menyembunyikan tombol WhatsApp.' },
              validate: (value?: string | null) =>
                !value || /^\d{8,15}$/.test(value) || 'Hanya angka, 8 sampai 15 digit',
            },
            { name: 'contactEmail', type: 'email', label: 'Email kontak' },
            { name: 'seoTitle', type: 'text', label: 'Judul SEO bawaan' },
            { name: 'seoDescription', type: 'textarea', label: 'Deskripsi SEO bawaan' },
          ],
        },
        {
          label: 'Navigasi',
          fields: [
            { name: 'actionLabel', type: 'text', label: 'Teks tombol aksi di header', required: true, defaultValue: 'Minta demo' },
            {
              name: 'navLinks',
              type: 'array',
              label: 'Tautan header (di luar menu Fitur dan Solusi)',
              maxRows: 5,
              labels: { singular: 'Tautan', plural: 'Tautan' },
              fields: linkItemFields,
            },
          ],
        },
        {
          label: 'Footer',
          fields: [
            { name: 'invitation', type: 'text', label: 'Kalimat ajakan', required: true },
            { name: 'invitationButton', type: 'text', label: 'Teks tombol ajakan', required: true },
            {
              name: 'footerLinks',
              type: 'array',
              label: 'Tautan footer',
              maxRows: 6,
              labels: { singular: 'Tautan', plural: 'Tautan' },
              fields: linkItemFields,
            },
            {
              name: 'legalLinks',
              type: 'array',
              label: 'Tautan legal',
              maxRows: 4,
              labels: { singular: 'Tautan', plural: 'Tautan' },
              fields: linkItemFields,
            },
          ],
        },
      ],
    },
  ],
}
