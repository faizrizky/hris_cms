import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import {
  FEATURE_CATEGORY_OPTIONS,
  FEATURE_STATUS,
  FEATURE_STATUS_OPTIONS,
} from '../constants/content-options'
import { faqItemsField, stringListField } from '../fields/content-fields'
import { createCollectionRevalidateHooks } from '../hooks/revalidate-content'

export const FEATURES_SLUG = 'features'
const FEATURES_CACHE_TAGS = [FEATURES_SLUG, 'solutions']

export const Features: CollectionConfig<'features'> = {
  slug: FEATURES_SLUG,
  labels: { singular: 'Fitur', plural: 'Fitur' },
  admin: {
    group: 'Konten Situs',
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'status', 'order'],
    description: 'Setiap fitur punya halaman sendiri di /fitur/[slug] dan muncul di mega menu.',
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  defaultSort: 'order',
  hooks: createCollectionRevalidateHooks({ tags: FEATURES_CACHE_TAGS, paths: ['/', '/fitur'] }),
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Nama fitur',
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'slug',
          type: 'text',
          label: 'Slug (URL)',
          required: true,
          unique: true,
          index: true,
          admin: { width: '50%', description: 'Huruf kecil dan tanda hubung, contoh: absensi-online' },
          validate: (value?: string | null) =>
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value ?? '') || 'Gunakan huruf kecil, angka, dan tanda hubung',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'category',
          type: 'select',
          label: 'Kategori',
          required: true,
          options: FEATURE_CATEGORY_OPTIONS,
          admin: { width: '50%' },
        },
        {
          name: 'status',
          type: 'select',
          label: 'Status',
          required: true,
          defaultValue: FEATURE_STATUS.AVAILABLE,
          options: FEATURE_STATUS_OPTIONS,
          admin: { width: '50%', description: 'Jangan tandai Tersedia untuk fitur yang belum rilis.' },
        },
      ],
    },
    { name: 'order', type: 'number', label: 'Urutan', defaultValue: 100, admin: { position: 'sidebar' } },
    {
      name: 'shortDescription',
      type: 'text',
      label: 'Deskripsi singkat (mega menu dan kartu)',
      required: true,
    },
    { name: 'heroTitle', type: 'text', label: 'Judul halaman (H1)', required: true, maxLength: 44, admin: { description: 'Maksimal 44 karakter agar tetap dua baris di layar HP.' } },
    { name: 'heroDescription', type: 'textarea', label: 'Deskripsi halaman', required: true },
    {
      name: 'benefits',
      type: 'array',
      label: 'Manfaat utama',
      minRows: 1,
      maxRows: 6,
      labels: { singular: 'Manfaat', plural: 'Manfaat' },
      fields: [
        { name: 'title', type: 'text', label: 'Judul', required: true },
        { name: 'description', type: 'textarea', label: 'Deskripsi', required: true },
      ],
    },
    {
      name: 'blocks',
      type: 'array',
      label: 'Blok penjelasan',
      labels: { singular: 'Blok', plural: 'Blok' },
      fields: [
        { name: 'title', type: 'text', label: 'Judul', required: true },
        { name: 'description', type: 'textarea', label: 'Deskripsi', required: true },
        stringListField('points', 'Poin-poin'),
      ],
    },
    {
      name: 'mock',
      type: 'group',
      label: 'Contoh tampilan di aplikasi',
      fields: [
        { name: 'title', type: 'text', label: 'Judul panel', required: true },
        {
          name: 'rows',
          type: 'array',
          label: 'Baris contoh',
          labels: { singular: 'Baris', plural: 'Baris' },
          fields: [
            { name: 'label', type: 'text', label: 'Judul', required: true },
            { name: 'detail', type: 'text', label: 'Keterangan', required: true },
            { name: 'status', type: 'text', label: 'Status', required: true },
          ],
        },
      ],
    },
    faqItemsField({ maxRows: 8 }),
    {
      name: 'related',
      type: 'relationship',
      relationTo: FEATURES_SLUG,
      hasMany: true,
      label: 'Fitur terkait',
      maxRows: 4,
    },
  ],
}
