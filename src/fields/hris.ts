import type { Field, GroupField } from 'payload'

/** Label kecil di atas judul bagian (pil berwarna di landing). */
export const tagField = (): Field => ({
  name: 'tag',
  type: 'text',
  maxLength: 40,
  admin: { description: 'Label kecil di atas judul, mis. FITUR. Kosongkan untuk menyembunyikan.' },
})

export const TINT_OPTIONS = [
  { label: 'Putih', value: 'white' },
  { label: 'Biru muda (sky)', value: 'sky' },
  { label: 'Lavender', value: 'lavender' },
  { label: 'Peach', value: 'peach' },
]

export const tintField = (defaultValue = 'white'): Field => ({
  name: 'tint',
  type: 'select',
  defaultValue,
  options: TINT_OPTIONS,
  admin: { description: 'Warna pita latar bagian ini.' },
})

export const ACCESSORY_OPTIONS = [
  { label: 'Lonceng', value: 'bell' },
  { label: 'Perisai bercentang', value: 'shield' },
  { label: 'Lingkaran centang', value: 'checkCircle' },
  { label: 'Orang', value: 'users' },
  { label: 'Kalkulator', value: 'calculator' },
  { label: 'Dompet', value: 'wallet' },
  { label: 'Chat', value: 'chat' },
  { label: 'Grafik', value: 'chart' },
  { label: 'Kalender', value: 'calendar' },
  { label: 'Jam', value: 'clock' },
  { label: 'Dokumen', value: 'document' },
  { label: 'Gembok', value: 'lock' },
  { label: 'Bintang', value: 'star' },
]

export const VISUAL_KIND_OPTIONS = [
  { label: 'Mockup isometrik (panel + HP + kartu)', value: 'isometric' },
  { label: 'Papan kartu pastel', value: 'board' },
  { label: 'HP berisi daftar', value: 'phone' },
  { label: 'Kartu harga bercentang', value: 'offer' },
  { label: 'Kartu pastel miring', value: 'tilted' },
  { label: 'Panel kalkulator', value: 'calculator' },
  { label: 'Panel lencana dan label melayang', value: 'panel' },
  { label: 'Perisai besar', value: 'shield' },
  { label: 'Tanpa gambar', value: 'none' },
]

export const ROWS_SOURCE_OPTIONS = [
  { label: 'Isi manual (di bawah)', value: 'manual' },
  { label: 'Otomatis dari Fitur', value: 'features' },
  { label: 'Otomatis dari Solusi', value: 'solutions' },
  { label: 'Otomatis dari daftar kalkulator', value: 'calculators' },
]

/** Gambar beranimasi di samping teks: jenis, warna, lencana, dan isinya. */
export const visualField = (defaultKind = 'none'): GroupField => ({
  name: 'visual',
  type: 'group',
  admin: { description: 'Gambar beranimasi di samping teks. Isinya mengikuti data halaman.' },
  fields: [
    {
      name: 'kind',
      type: 'select',
      defaultValue: defaultKind,
      options: VISUAL_KIND_OPTIONS,
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'tone',
          type: 'select',
          defaultValue: 'peach',
          options: TINT_OPTIONS.filter((o) => o.value !== 'white'),
          admin: { width: '50%', condition: (_, s) => ['board', 'panel'].includes(s?.kind) },
        },
        {
          name: 'accessory',
          type: 'select',
          defaultValue: 'shield',
          options: ACCESSORY_OPTIONS,
          admin: { width: '50%', condition: (_, s) => s?.kind && s.kind !== 'none' },
        },
      ],
    },
    {
      name: 'title',
      type: 'text',
      maxLength: 80,
      admin: { condition: (_, s) => ['isometric', 'phone', 'offer', 'calculator'].includes(s?.kind) },
    },
    {
      name: 'rowsSource',
      type: 'select',
      defaultValue: 'manual',
      options: ROWS_SOURCE_OPTIONS,
      admin: { condition: (_, s) => s?.kind && s.kind !== 'none' && s.kind !== 'shield' },
    },
    {
      name: 'rows',
      type: 'array',
      maxRows: 6,
      labels: { singular: 'Baris', plural: 'Baris' },
      admin: {
        condition: (_, s) => s?.kind && s.kind !== 'none' && s.kind !== 'shield' && s?.rowsSource === 'manual',
      },
      fields: [
        { name: 'title', type: 'text', required: true, maxLength: 80 },
        { name: 'detail', type: 'text', maxLength: 120 },
        { name: 'badge', type: 'text', maxLength: 40 },
      ],
    },
  ],
})

/** Daftar teks sederhana (chip, poin, jaminan). */
export const textListField = (name: string, label: string, maxRows = 8): Field => ({
  name,
  type: 'array',
  label,
  maxRows,
  labels: { singular: 'Teks', plural: 'Teks' },
  fields: [{ name: 'text', type: 'text', required: true, maxLength: 160 }],
})
