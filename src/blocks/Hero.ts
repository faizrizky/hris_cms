import type { Block } from 'payload'

import { buttonsField } from '@/fields/link'
import { textListField, visualField } from '@/fields/hris'

/**
 * Hero. Varian "home": judul dua baris + mockup isometrik + empat keunggulan.
 * Varian "page": pembuka halaman dalam (label, judul, kalimat, tombol, gambar).
 */
export const HeroBlock: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  labels: { singular: 'Hero', plural: 'Hero' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'page',
      options: [
        { label: 'Beranda — judul dua baris + mockup isometrik', value: 'home' },
        { label: 'Halaman dalam — teks + gambar beranimasi', value: 'page' },
      ],
    },
    {
      name: 'tag',
      type: 'text',
      maxLength: 40,
      admin: { condition: (_, s) => s?.variant === 'page', description: 'Label kecil di atas judul.' },
    },
    {
      name: 'titleLineOne',
      type: 'text',
      maxLength: 24,
      admin: { condition: (_, s) => s?.variant === 'home', description: 'Baris pertama judul. Maksimal 24 karakter.' },
    },
    {
      name: 'titleLineTwo',
      type: 'text',
      maxLength: 24,
      admin: { condition: (_, s) => s?.variant === 'home', description: 'Baris kedua (berwarna biru). Maksimal 24 karakter.' },
    },
    {
      name: 'title',
      type: 'textarea',
      maxLength: 120,
      admin: { rows: 2, condition: (_, s) => s?.variant !== 'home' },
    },
    { name: 'note', type: 'text', maxLength: 60, admin: { condition: (_, s) => s?.variant !== 'home', description: 'Catatan kecil oranye di bawah judul, mis. status fitur.' } },
    { name: 'description', type: 'textarea', maxLength: 400, admin: { rows: 3 } },
    buttonsField(2),
    // Varian beranda
    {
      name: 'mockup',
      type: 'group',
      admin: { condition: (_, s) => s?.variant === 'home', description: 'Isi mockup isometrik di kanan hero.' },
      fields: [
        { name: 'approvalsTitle', type: 'text', maxLength: 60 },
        {
          name: 'approvals',
          type: 'array',
          minRows: 2,
          maxRows: 4,
          labels: { singular: 'Baris', plural: 'Baris' },
          fields: [
            { name: 'person', type: 'text', required: true, maxLength: 60 },
            { name: 'detail', type: 'text', required: true, maxLength: 80 },
            { name: 'status', type: 'text', required: true, maxLength: 30 },
          ],
        },
        { name: 'doneLabel', type: 'text', maxLength: 30, admin: { description: 'Teks status yang dianggap selesai (hijau), mis. Disetujui.' } },
        { name: 'attendanceTitle', type: 'text', maxLength: 60 },
        { name: 'attendanceFigure', type: 'text', maxLength: 20 },
        { name: 'attendanceDetail', type: 'text', maxLength: 80 },
        { name: 'payslipTitle', type: 'text', maxLength: 60 },
        { name: 'payslipDetail', type: 'text', maxLength: 80 },
        textListField('phoneChips', 'Chip di HP', 3),
      ],
    },
    {
      name: 'trustPoints',
      type: 'array',
      minRows: 0,
      maxRows: 4,
      labels: { singular: 'Keunggulan', plural: 'Keunggulan' },
      admin: { condition: (_, s) => s?.variant === 'home', description: 'Empat keunggulan di bawah hero.' },
      fields: [
        { name: 'title', type: 'text', required: true, maxLength: 60 },
        { name: 'description', type: 'textarea', maxLength: 160 },
      ],
    },
    // Varian halaman dalam
    {
      ...visualField('board'),
      admin: { condition: (_, s) => s?.variant === 'page', description: 'Gambar beranimasi di kanan hero.' },
    },
  ],
}
