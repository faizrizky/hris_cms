import type { Field, GlobalConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { createGlobalRevalidateHook } from '../hooks/revalidate-content'

export const PAGE_COPY_SLUG = 'page-copy'

const textField = (name: string, label: string, description?: string): Field => ({
  name,
  type: 'text',
  label,
  required: true,
  ...(description ? { admin: { description } } : {}),
})

const textareaField = (name: string, label: string): Field => ({ name, type: 'textarea', label, required: true })

const REVALIDATED_PATHS = ['/', '/fitur', '/solusi', '/tools', '/demo', '/harga', '/tentang']

export const PageCopy: GlobalConfig = {
  slug: PAGE_COPY_SLUG,
  label: 'Teks Halaman',
  admin: {
    group: 'Konten Situs',
    description:
      'Judul, kalimat pembuka, dan judul bagian di halaman fitur, solusi, tools, demo, harga, dan tentang. Isi beranda ada di Beranda.',
  },
  access: { read: anyone, update: authenticated },
  hooks: {
    afterChange: [createGlobalRevalidateHook({ tags: [`global_${PAGE_COPY_SLUG}`], paths: REVALIDATED_PATHS })],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Fitur',
          fields: [
            textField('featuresHeading', 'Judul halaman Fitur'),
            textareaField('featuresSentence', 'Kalimat pembuka halaman Fitur'),
            textField('benefitsTitle', 'Judul bagian manfaat (detail fitur)'),
            textField('relatedFeaturesTitle', 'Judul bagian fitur terkait'),
          ],
        },
        {
          label: 'Solusi',
          fields: [
            textField('solutionsHeading', 'Judul halaman Solusi'),
            textareaField('solutionsSentence', 'Kalimat pembuka halaman Solusi'),
            textField('painsTitle', 'Judul bagian masalah (detail solusi)'),
            textField('helpTitle', 'Judul bagian cara HRIS membantu (detail solusi)'),
          ],
        },
        {
          label: 'Tools',
          fields: [
            textField('toolsHeading', 'Judul halaman Tools'),
            textareaField('toolsSentence', 'Kalimat pembuka halaman Tools'),
            textField('toolsListTitle', 'Judul daftar kalkulator'),
          ],
        },
        {
          label: 'Demo',
          fields: [
            textField('demoHeading', 'Judul halaman Demo'),
            textareaField('demoSentence', 'Kalimat pembuka halaman Demo'),
            textField('demoVisualTitle', 'Judul HP di gambar'),
            textField('demoFormTitle', 'Judul bagian formulir'),
            textField('demoFormDescription', 'Keterangan di atas formulir'),
            {
              name: 'demoAgenda',
              type: 'array',
              label: 'Agenda demo (tampil di gambar)',
              minRows: 2,
              maxRows: 4,
              labels: { singular: 'Agenda', plural: 'Agenda' },
              fields: [
                { name: 'title', type: 'text', label: 'Judul', required: true },
                { name: 'detail', type: 'text', label: 'Keterangan', required: true },
              ],
            },
          ],
        },
        {
          label: 'Harga dan Tentang',
          fields: [
            textField('pricingStepsTitle', 'Judul bagian langkah penawaran'),
            textField('pricingIncludedTitle', 'Judul bagian yang termasuk'),
            textField('aboutStoryTitle', 'Judul bagian cerita'),
            textField('aboutPrinciplesTitle', 'Judul bagian prinsip'),
            textField('faqTitle', 'Judul FAQ di halaman dalam'),
          ],
        },
        {
          label: 'Beranda dan label',
          fields: [
            textField('homeTestimonialsTitle', 'Judul bagian testimoni di beranda'),
            textField('tagAttendance', 'Label bagian absensi'),
            textField('tagRequests', 'Label bagian pengajuan'),
            textField('tagApproval', 'Label bagian approval'),
            textField('tagModules', 'Label bagian fitur'),
            textField('tagIndustries', 'Label bagian solusi'),
            textField('tagTestimonials', 'Label bagian testimoni'),
            textField('tagPricing', 'Label bagian harga'),
            textField('tagFaq', 'Label bagian FAQ'),
          ],
        },
      ],
    },
  ],
}
