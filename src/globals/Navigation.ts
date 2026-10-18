import type { GlobalConfig } from 'payload'

import { isAuthenticated, publishedOrAuthenticated } from '@/access'
import { hrefField, linkFields } from '@/fields/link'
import { auditGlobal } from '@/hooks/auditLog'
import { revalidateGlobal } from '@/hooks/revalidateFrontend'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  admin: { group: 'Settings' },
  // The website reads the published version; drafts (and `?draft=true`)
  // stay behind sign-in.
  access: { read: publishedOrAuthenticated, readVersions: isAuthenticated, update: isAuthenticated },
  // Like pages: changes are drafts (saved automatically) until published.
  versions: {
    drafts: { autosave: { interval: 2000, showSaveDraftButton: true }, schedulePublish: true },
    max: 50,
  },
  hooks: { afterChange: [auditGlobal('navigation'), revalidateGlobal('navigation')] },
  fields: [
    {
      name: 'featuresLabel',
      type: 'text',
      defaultValue: 'Fitur',
      maxLength: 40,
      admin: {
        description: {
          en: 'The Features mega menu is filled automatically from the Features collection.',
          id: 'Isi mega menu Fitur diambil otomatis dari koleksi Fitur.',
        },
      },
    },
    {
      name: 'solutionsLabel',
      type: 'text',
      defaultValue: 'Solusi',
      maxLength: 40,
      admin: {
        description: {
          en: 'The Solutions mega menu is filled automatically from the Solutions collection.',
          id: 'Isi mega menu Solusi diambil otomatis dari koleksi Solusi.',
        },
      },
    },
    {
      name: 'links',
      type: 'array',
      label: 'Menu lainnya',
      maxRows: 6,
      fields: [
        ...linkFields(),
        {
          name: 'visible',
          type: 'checkbox',
          defaultValue: true,
          label: 'Tampilkan di menu',
          admin: {
            description: 'Hilangkan centang untuk menyembunyikan menu ini tanpa menghapusnya.',
          },
        },
      ],
    },
    {
      name: 'linkLibrary',
      type: 'array',
      label: { en: 'Links per page', id: 'Link per halaman' },
      labels: { singular: { en: 'Page', id: 'Halaman' }, plural: { en: 'Pages', id: 'Halaman' } },
      admin: {
        description: {
          en: 'Extra link choices for the page editor (e.g. a section #faq, an external site), grouped by page. Pages and solution pages are listed automatically.',
          id: 'Pilihan link tambahan untuk editor halaman (mis. bagian #faq, situs luar), dikelompokkan per halaman. Halaman dan halaman solusi sudah muncul otomatis.',
        },
      },
      fields: [
        {
          name: 'group',
          type: 'text',
          required: true,
          maxLength: 60,
          label: { en: 'Page', id: 'Halaman' },
        },
        {
          name: 'links',
          type: 'array',
          maxRows: 30,
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  maxLength: 80,
                  admin: { width: '50%' },
                },
                // Free text here: this is where the choices are defined.
                hrefField({
                  name: 'target',
                  label: { en: 'Link', id: 'Link' },
                  admin: { width: '50%' },
                }),
              ],
            },
          ],
        },
      ],
    },
    { name: 'cta', type: 'group', label: 'Tombol kanan', fields: linkFields() },
  ],
}
