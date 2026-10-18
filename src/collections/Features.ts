import type { CollectionConfig } from 'payload'

import { publishedOrAuthenticated } from '@/access'
import { contentAccess, contentHooks } from '@/collections/content'
import { fieldCard } from '@/fields/card'
import { textListField } from '@/fields/hris'
import { seoField } from '@/fields/seo'
import { slugField } from '@/fields/slug'
import { visualEditorViews } from '@/lib/visualViews'

export const FEATURE_CATEGORIES = [
  { label: 'Absensi', value: 'attendance' },
  { label: 'Pengajuan dan approval', value: 'requests' },
  { label: 'Slip gaji dan pajak', value: 'payroll' },
  { label: 'Tim dan karyawan', value: 'team' },
  { label: 'Pengelolaan HR', value: 'hradmin' },
  { label: 'Dokumen dan komunikasi', value: 'documents' },
  { label: 'Keamanan', value: 'security' },
  { label: 'Kinerja', value: 'performance' },
  { label: 'Dalam rencana', value: 'planned' },
]

export const Features: CollectionConfig = {
  slug: 'features',
  labels: { singular: 'Fitur', plural: 'Fitur' },
  orderable: true,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'availability', '_status', 'updatedAt'],
    group: 'Solutions',
    description: 'Setiap fitur punya halaman detail di /fitur/<slug> dan muncul di mega menu. Geser untuk mengatur urutan.',
    // Terbuka di editor visual (halaman detail fitur); formulir ada satu tab di sebelahnya.
    components: { views: visualEditorViews() },
  },
  access: contentAccess(publishedOrAuthenticated),
  versions: {
    drafts: { autosave: { interval: 2000, showSaveDraftButton: true }, schedulePublish: true },
    maxPerDoc: 50,
  },
  hooks: contentHooks('features'),
  fields: [
    fieldCard({ en: 'General', id: 'Umum' }, [
      { name: 'name', type: 'text', required: true, maxLength: 80 },
      {
        type: 'row',
        fields: [
          { name: 'category', type: 'select', required: true, options: FEATURE_CATEGORIES, admin: { width: '50%' } },
          {
            name: 'availability',
            type: 'select',
            label: 'Status ketersediaan',
            required: true,
            defaultValue: 'available',
            options: [
              { label: 'Tersedia', value: 'available' },
              { label: 'Sebagian', value: 'partial' },
              { label: 'Dalam rencana', value: 'planned' },
            ],
            admin: { width: '50%', description: 'Jangan tandai Tersedia untuk fitur yang belum rilis.' },
          },
        ],
      },
      {
        name: 'shortDescription',
        type: 'text',
        required: true,
        maxLength: 160,
        admin: { description: 'Deskripsi singkat untuk mega menu dan kartu.' },
      },
    ]),
    slugField('name'),
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Halaman',
          fields: [
            { name: 'heroTitle', type: 'text', required: true, maxLength: 60, admin: { description: 'H1 halaman. Maksimal 60 karakter agar tetap dua baris di HP.' } },
            { name: 'heroDescription', type: 'textarea', required: true, maxLength: 400 },
            {
              name: 'benefits',
              type: 'array',
              minRows: 1,
              maxRows: 6,
              labels: { singular: 'Manfaat', plural: 'Manfaat' },
              fields: [
                { name: 'title', type: 'text', required: true, maxLength: 80 },
                { name: 'description', type: 'textarea', required: true, maxLength: 300 },
              ],
            },
            {
              name: 'blocks',
              type: 'array',
              maxRows: 6,
              labels: { singular: 'Blok', plural: 'Blok' },
              fields: [
                { name: 'title', type: 'text', required: true, maxLength: 100 },
                { name: 'description', type: 'textarea', required: true, maxLength: 400 },
                textListField('points', 'Poin-poin', 8),
              ],
            },
          ],
        },
        {
          label: 'Contoh tampilan',
          fields: [
            {
              name: 'mock',
              type: 'group',
              fields: [
                { name: 'title', type: 'text', required: true, maxLength: 80 },
                {
                  name: 'rows',
                  type: 'array',
                  maxRows: 6,
                  labels: { singular: 'Baris', plural: 'Baris' },
                  fields: [
                    { name: 'label', type: 'text', required: true, maxLength: 60 },
                    { name: 'detail', type: 'text', required: true, maxLength: 80 },
                    { name: 'status', type: 'text', required: true, maxLength: 30 },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'FAQ dan terkait',
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
            { name: 'related', type: 'relationship', relationTo: 'features', hasMany: true, maxRows: 4, label: 'Fitur terkait' },
          ],
        },
        { label: 'SEO', fields: [seoField] },
      ],
    },
  ],
}
