import type { Block } from 'payload'

import { hrefField } from '@/fields/link'
import { tagField, tintField } from '@/fields/hris'
import { sectionHeaderField } from '@/fields/section'

export const FeatureGridBlock: Block = {
  slug: 'featureGrid',
  interfaceName: 'FeatureGridBlock',
  labels: { singular: 'Kartu Fitur', plural: 'Kartu Fitur' },
  fields: [
    tagField(),
    sectionHeaderField({ eyebrow: false }),
    tintField('white'),
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      options: ['2', '3', '4'].map((v) => ({ label: `${v} kolom`, value: v })),
    },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      maxRows: 8,
      fields: [
        { name: 'title', type: 'text', required: true, maxLength: 120 },
        { name: 'description', type: 'textarea', maxLength: 400 },
        { name: 'badge', type: 'text', maxLength: 30 },
        hrefField({ required: false }),
      ],
    },
  ],
}
