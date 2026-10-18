import type { ArrayField, Field } from 'payload'

interface ArrayOverrides {
  name?: string
  label?: string
  minRows?: number
  maxRows?: number
}

export const faqItemsField = (overrides: ArrayOverrides = {}): ArrayField => ({
  name: overrides.name ?? 'faqs',
  type: 'array',
  label: overrides.label ?? 'FAQ',
  minRows: overrides.minRows,
  maxRows: overrides.maxRows,
  labels: { singular: 'Pertanyaan', plural: 'Pertanyaan' },
  fields: [
    { name: 'question', type: 'text', label: 'Pertanyaan', required: true },
    { name: 'answer', type: 'textarea', label: 'Jawaban', required: true },
  ],
})

export const stringListField = (name: string, label: string, itemLabel = 'Teks'): ArrayField => ({
  name,
  type: 'array',
  label,
  fields: [{ name: 'text', type: 'text', label: itemLabel, required: true }],
})

/** Judul, deskripsi, dan label tombol: pola umum di banyak section. */
export const sectionCopyFields = (): Field[] => [
  { name: 'title', type: 'text', label: 'Judul', required: true },
  { name: 'description', type: 'textarea', label: 'Deskripsi' },
]
