import type { Block } from 'payload'

import { tagField } from '@/fields/hris'
import { sectionHeaderField } from '@/fields/section'

/** Kartu testimoni pastel yang sedikit miring. Hanya isi testimoni asli. */
export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  interfaceName: 'TestimonialsBlock',
  labels: { singular: 'Testimoni', plural: 'Testimoni' },
  fields: [
    { name: 'anchor', type: 'text', maxLength: 40 },
    tagField(),
    sectionHeaderField({ eyebrow: false }),
    {
      name: 'items',
      type: 'array',
      maxRows: 3,
      labels: { singular: 'Testimoni', plural: 'Testimoni' },
      fields: [
        { name: 'quote', type: 'textarea', required: true, maxLength: 300 },
        {
          type: 'row',
          fields: [
            { name: 'name', type: 'text', required: true, maxLength: 60, admin: { width: '50%' } },
            { name: 'role', type: 'text', required: true, maxLength: 80, admin: { width: '50%' } },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'tone',
              type: 'select',
              defaultValue: 'yellow',
              options: [
                { label: 'Kuning', value: 'yellow' },
                { label: 'Tosca', value: 'cyan' },
                { label: 'Pink', value: 'pink' },
              ],
              admin: { width: '50%' },
            },
            { name: 'rotationDeg', type: 'number', min: -8, max: 8, defaultValue: 0, admin: { width: '50%', description: 'Kemiringan kartu (derajat).' } },
          ],
        },
      ],
    },
  ],
}
