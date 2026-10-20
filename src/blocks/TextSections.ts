import type { Block } from 'payload'

/** Teks panjang berjudul untuk halaman hukum. Pisahkan paragraf dengan baris kosong; awali baris dengan "- " untuk daftar. */
export const TextSectionsBlock: Block = {
  slug: 'textSections',
  interfaceName: 'TextSectionsBlock',
  labels: { singular: 'Teks Bagian', plural: 'Teks Bagian' },
  fields: [
    {
      name: 'sections',
      type: 'array',
      minRows: 1,
      maxRows: 40,
      labels: { singular: 'Bagian', plural: 'Bagian' },
      fields: [
        { name: 'heading', type: 'text', maxLength: 120 },
        {
          name: 'body',
          type: 'textarea',
          required: true,
          maxLength: 4000,
          admin: { rows: 6, description: 'Baris kosong = paragraf baru. Baris berawalan "- " = daftar.' },
        },
      ],
    },
  ],
}
