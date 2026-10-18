import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { LEAD_STATUS, LEAD_STATUS_OPTIONS } from '../constants/content-options'

export const LEADS_SLUG = 'leads'

export const EMPLOYEE_COUNT_OPTIONS = [
  { label: '1 sampai 50', value: '1-50' },
  { label: '51 sampai 200', value: '51-200' },
  { label: '201 sampai 1.000', value: '201-1000' },
  { label: 'Lebih dari 1.000', value: '1000+' },
]

/**
 * Pengajuan demo dari form di landing. Siapa pun boleh membuat (form publik),
 * tetapi hanya pengguna CMS yang boleh membaca dan mengubahnya.
 */
export const Leads: CollectionConfig<'leads'> = {
  slug: LEADS_SLUG,
  labels: { singular: 'Pengajuan Demo', plural: 'Pengajuan Demo' },
  admin: {
    group: 'Prospek',
    useAsTitle: 'company',
    defaultColumns: ['company', 'name', 'email', 'employeeCount', 'status', 'createdAt'],
  },
  access: {
    create: anyone,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  defaultSort: '-createdAt',
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', label: 'Nama lengkap', required: true, maxLength: 120, admin: { width: '50%' } },
        { name: 'company', type: 'text', label: 'Perusahaan', required: true, maxLength: 160, admin: { width: '50%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'email', type: 'email', label: 'Email', required: true, admin: { width: '50%' } },
        { name: 'phone', type: 'text', label: 'WhatsApp / telepon', required: true, maxLength: 30, admin: { width: '50%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'industry', type: 'text', label: 'Industri', maxLength: 120, admin: { width: '50%' } },
        {
          name: 'employeeCount',
          type: 'select',
          label: 'Jumlah karyawan',
          options: EMPLOYEE_COUNT_OPTIONS,
          admin: { width: '50%' },
        },
      ],
    },
    { name: 'message', type: 'textarea', label: 'Kebutuhan', maxLength: 2000 },
    { name: 'source', type: 'text', label: 'Asal halaman', maxLength: 200, admin: { position: 'sidebar' } },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: LEAD_STATUS.NEW,
      options: LEAD_STATUS_OPTIONS,
      admin: { position: 'sidebar' },
      // Pengunjung publik tidak boleh menentukan status saat membuat pengajuan.
      access: { create: ({ req: { user } }) => Boolean(user), update: ({ req: { user } }) => Boolean(user) },
    },
  ],
}
