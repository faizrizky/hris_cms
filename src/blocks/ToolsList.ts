import type { Block } from 'payload'

import { tagField } from '@/fields/hris'
import { sectionHeaderField } from '@/fields/section'

/** Daftar kalkulator HR. Kalkulatornya sendiri ada di kode; judul dan teks pembuka diatur di sini. */
export const ToolsListBlock: Block = {
  slug: 'toolsList',
  interfaceName: 'ToolsListBlock',
  labels: { singular: 'Daftar Kalkulator', plural: 'Daftar Kalkulator' },
  fields: [{ name: 'anchor', type: 'text', maxLength: 40 }, tagField(), sectionHeaderField({ eyebrow: false })],
}
