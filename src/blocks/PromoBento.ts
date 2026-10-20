import type { Block } from 'payload'

import { tintField } from '@/fields/hris'
import { sectionHeaderField } from '@/fields/section'

export const PROMO_ICON_OPTIONS = [
  { label: 'Headset (dukungan)', value: 'headset' },
  { label: 'Unduh awan (pindah data)', value: 'cloudDownload' },
  { label: 'Kunci pas (setup)', value: 'wrench' },
  { label: 'Pengaturan', value: 'settings' },
  { label: 'Roket (go-live)', value: 'rocket' },
  { label: 'Orang', value: 'users' },
  { label: 'Percakapan', value: 'message' },
  { label: 'Kalender', value: 'calendar' },
  { label: 'Perisai', value: 'shield' },
  { label: 'Kilau', value: 'sparkles' },
]

export const PROMO_CARD_TONE_OPTIONS = [
  { label: 'Lavender', value: 'lavender' },
  { label: 'Kuning', value: 'yellow' },
  { label: 'Biru muda', value: 'sky' },
  { label: 'Peach', value: 'peach' },
  { label: 'Tosca', value: 'cyan' },
]

/** Promo / keunggulan dalam kartu bento: ukuran kartu berbeda, ikon, dan warna pastel. */
export const PromoBentoBlock: Block = {
  slug: 'promoBento',
  interfaceName: 'PromoBentoBlock',
  labels: { singular: 'Promo (kartu bento)', plural: 'Promo (kartu bento)' },
  fields: [
    {
      name: 'highlight',
      type: 'text',
      maxLength: 60,
      admin: { description: 'Kata di awal judul yang diberi warna aksen. Mis. "Book Demo Gratis".' },
    },
    sectionHeaderField({ eyebrow: false }),
    tintField('white'),
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      maxRows: 9,
      labels: { singular: 'Kartu', plural: 'Kartu' },
      fields: [
        { name: 'title', type: 'text', required: true, maxLength: 80 },
        { name: 'description', type: 'textarea', maxLength: 200 },
        {
          type: 'row',
          fields: [
            { name: 'icon', type: 'select', defaultValue: 'sparkles', options: PROMO_ICON_OPTIONS, admin: { width: '34%' } },
            { name: 'tone', type: 'select', defaultValue: 'lavender', options: PROMO_CARD_TONE_OPTIONS, admin: { width: '33%' } },
            {
              name: 'size',
              type: 'select',
              defaultValue: 'normal',
              options: [
                { label: 'Biasa (1 kolom)', value: 'normal' },
                { label: 'Lebar (2 kolom, ikon di kiri)', value: 'wide' },
                { label: 'Tinggi (2 baris)', value: 'tall' },
              ],
              admin: { width: '33%' },
            },
          ],
        },
      ],
    },
  ],
}
