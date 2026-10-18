import type { Block } from 'payload'

import { tagField, visualField } from '@/fields/hris'
import { sectionHeaderField } from '@/fields/section'

/** Formulir minta demo. Kiriman masuk ke Inbox (Pengajuan Demo). */
export const ContactFormBlock: Block = {
  slug: 'contactForm',
  interfaceName: 'ContactFormBlock',
  labels: { singular: 'Formulir Demo', plural: 'Formulir Demo' },
  fields: [
    { name: 'anchor', type: 'text', maxLength: 40 },
    tagField(),
    sectionHeaderField({ eyebrow: false }),
    visualField('panel'),
    { name: 'submitLabel', type: 'text', defaultValue: 'Kirim pengajuan', maxLength: 60 },
    { name: 'successTitle', type: 'text', defaultValue: 'Terima kasih. Kami hubungi segera.', maxLength: 120 },
    {
      name: 'successMessage',
      type: 'text',
      defaultValue: 'Tim kami akan menghubungi lewat WhatsApp atau email untuk menjadwalkan demo 30 menit.',
      maxLength: 240,
    },
    {
      name: 'employeeCountOptions',
      type: 'text',
      hasMany: true,
      maxRows: 10,
      admin: { description: 'Pilihan dropdown jumlah karyawan.' },
    },
    {
      name: 'industryOptions',
      type: 'text',
      hasMany: true,
      maxRows: 20,
      admin: { description: 'Pilihan dropdown jenis usaha.' },
    },
  ],
}
