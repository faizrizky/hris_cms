import type { Block } from 'payload'

import {
  DEFAULT_BACKGROUND_COLOR,
  HEX_COLOR_PATTERN,
  MAX_STEP_COUNT,
  MIN_STEP_COUNT,
  PINNED_STORY_BLOCK_TYPE,
} from './constants'

const validateHexColor = (value?: string | null) =>
  HEX_COLOR_PATTERN.test(value ?? '') || 'Gunakan format hex 6 digit, contoh #EAF4FF'

export const PinnedStory: Block = {
  slug: PINNED_STORY_BLOCK_TYPE,
  interfaceName: 'PinnedStoryBlock',
  labels: {
    singular: 'Pinned Story',
    plural: 'Pinned Stories',
  },
  fields: [
    {
      name: 'steps',
      type: 'array',
      required: true,
      minRows: MIN_STEP_COUNT,
      maxRows: MAX_STEP_COUNT,
      admin: {
        description: 'Setiap langkah tampil bergantian saat halaman di-scroll.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          required: true,
          defaultValue: DEFAULT_BACKGROUND_COLOR,
          validate: validateHexColor,
        },
        {
          name: 'screenshot',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'chips',
          type: 'array',
          admin: {
            description: 'Label kecil yang muncul berurutan, mis. "Lokasi valid".',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
