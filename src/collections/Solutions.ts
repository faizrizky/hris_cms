import type { CollectionConfig } from 'payload'

import { publishedOrAuthenticated } from '@/access'
import { contentAccess, contentHooks } from '@/collections/content'
import { fieldCard } from '@/fields/card'
import { seoField } from '@/fields/seo'
import { slugField } from '@/fields/slug'
import { visualEditorViews } from '@/lib/visualViews'

export const Solutions: CollectionConfig = {
  slug: 'solutions',
  labels: { singular: 'Solusi', plural: 'Solusi' },
  orderable: true,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'showOnHome', '_status', 'updatedAt'],
    group: 'Solutions',
    description: 'Setiap solusi punya halaman detail di /solusi/<slug> dan muncul di mega menu. Geser untuk mengatur urutan.',
    components: { views: visualEditorViews() },
  },
  access: contentAccess(publishedOrAuthenticated),
  versions: {
    drafts: { autosave: { interval: 2000, showSaveDraftButton: true }, schedulePublish: true },
    maxPerDoc: 50,
  },
  hooks: contentHooks('solutions'),
  fields: [
    fieldCard({ en: 'General', id: 'Umum' }, [
      { name: 'name', type: 'text', required: true, maxLength: 60 },
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'select',
            required: true,
            defaultValue: 'industry',
            options: [
              { label: 'Berdasarkan industri', value: 'industry' },
              { label: 'Berdasarkan skala bisnis', value: 'scale' },
            ],
            admin: { width: '50%' },
          },
          { name: 'showOnHome', type: 'checkbox', label: 'Tampilkan di beranda', defaultValue: false, admin: { width: '50%' } },
        ],
      },
      { name: 'tagline', type: 'text', required: true, maxLength: 120, admin: { description: 'Satu kalimat untuk kartu dan mega menu.' } },
    ]),
    slugField('name'),
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Halaman',
          fields: [
            { name: 'heroTitle', type: 'text', required: true, maxLength: 60 },
            { name: 'heroDescription', type: 'textarea', required: true, maxLength: 400 },
            {
              name: 'pains',
              type: 'array',
              maxRows: 6,
              labels: { singular: 'Masalah', plural: 'Masalah' },
              fields: [
                { name: 'title', type: 'text', required: true, maxLength: 80 },
                { name: 'description', type: 'textarea', required: true, maxLength: 300 },
              ],
            },
            {
              name: 'points',
              type: 'array',
              maxRows: 6,
              labels: { singular: 'Cara membantu', plural: 'Cara membantu' },
              fields: [
                { name: 'title', type: 'text', required: true, maxLength: 80 },
                { name: 'description', type: 'textarea', required: true, maxLength: 300 },
                { name: 'feature', type: 'relationship', relationTo: 'features', label: 'Fitur terkait' },
              ],
            },
          ],
        },
        {
          label: 'FAQ',
          fields: [
            {
              name: 'faqs',
              type: 'array',
              maxRows: 8,
              labels: { singular: 'Pertanyaan', plural: 'Pertanyaan' },
              fields: [
                { name: 'question', type: 'text', required: true, maxLength: 200 },
                { name: 'answer', type: 'textarea', required: true, maxLength: 800 },
              ],
            },
          ],
        },
        { label: 'SEO', fields: [seoField] },
      ],
    },
  ],
}
