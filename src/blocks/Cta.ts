import type { Block } from 'payload'

import { buttonsField } from '@/fields/link'
import { textListField } from '@/fields/hris'
import { sectionHeaderField } from '@/fields/section'

/** Ajakan penutup gelap dengan bentuk geometris dan daftar jaminan. */
export const CtaBlock: Block = {
  slug: 'cta',
  interfaceName: 'CtaBlock',
  labels: { singular: 'Ajakan Penutup', plural: 'Ajakan Penutup' },
  fields: [sectionHeaderField({ eyebrow: false }), buttonsField(1), textListField('guarantees', 'Jaminan demo', 4)],
}
