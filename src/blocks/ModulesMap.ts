import type { Block } from 'payload'

import { tagField, tintField } from '@/fields/hris'
import { sectionHeaderField } from '@/fields/section'

/** Peta fitur per kategori. Isinya otomatis dari koleksi Fitur (atau pilihan tertentu). */
export const ModulesMapBlock: Block = {
  slug: 'modulesMap',
  interfaceName: 'ModulesMapBlock',
  labels: { singular: 'Peta Fitur', plural: 'Peta Fitur' },
  fields: [
    { name: 'anchor', type: 'text', maxLength: 40 },
    tagField(),
    sectionHeaderField({ eyebrow: false }),
    tintField('sky'),
    {
      name: 'features',
      type: 'relationship',
      relationTo: 'features',
      hasMany: true,
      admin: { description: 'Kosongkan untuk menampilkan semua fitur sesuai urutannya.' },
    },
  ],
}
