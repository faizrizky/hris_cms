import type { Block } from 'payload'

import { tagField } from '@/fields/hris'
import { sectionHeaderField } from '@/fields/section'

export const FaqBlock: Block = {
  slug: 'faq',
  interfaceName: 'FaqBlock',
  labels: { singular: 'FAQ', plural: 'FAQ' },
  fields: [
    { name: 'anchor', type: 'text', maxLength: 40 },
    tagField(),
    sectionHeaderField({ eyebrow: false }),
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      maxRows: 20,
      fields: [
        { name: 'question', type: 'text', required: true, maxLength: 200 },
        { name: 'answer', type: 'textarea', required: true, maxLength: 1000 },
      ],
    },
  ],
}
