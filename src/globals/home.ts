import type { Field, GlobalConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { faqItemsField, stringListField } from '../fields/content-fields'
import { createGlobalRevalidateHook } from '../hooks/revalidate-content'

export const HOME_SLUG = 'home'

const MAX_HERO_LINE_LENGTH = 16

const heroLineValidator = (value?: string | null) =>
  (value?.length ?? 0) <= MAX_HERO_LINE_LENGTH ||
  `Maksimal ${MAX_HERO_LINE_LENGTH} karakter agar tetap dua baris di layar HP`

const heroLine = (name: string, label: string): Field => ({
  name,
  type: 'text',
  label,
  required: true,
  validate: heroLineValidator,
  admin: { description: `Maksimal ${MAX_HERO_LINE_LENGTH} karakter.` },
})

const textField = (name: string, label: string, required = true): Field => ({
  name,
  type: 'text',
  label,
  required,
})

const textareaField = (name: string, label: string): Field => ({
  name,
  type: 'textarea',
  label,
  required: true,
})

/** Judul, deskripsi, dan tombol sebuah pita fitur (teks di sisi kanan HP). */
const bandFields = (prefix: string): Field[] => [
  textField(`${prefix}Title`, 'Judul (maksimal dua baris)'),
  textareaField(`${prefix}Description`, 'Deskripsi'),
  textField(`${prefix}Action`, 'Teks tombol'),
]

export const Home: GlobalConfig = {
  slug: HOME_SLUG,
  label: 'Beranda',
  admin: {
    group: 'Konten Situs',
    description: 'Isi setiap bagian di halaman beranda, berurutan dari atas ke bawah.',
  },
  access: { read: anyone, update: authenticated },
  hooks: { afterChange: [createGlobalRevalidateHook({ tags: [`global_${HOME_SLUG}`], paths: ['/'] })] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            heroLine('heroLineOne', 'Judul baris 1'),
            heroLine('heroLineTwo', 'Judul baris 2'),
            textareaField('heroDescription', 'Deskripsi'),
            textField('heroPrimaryAction', 'Teks tombol utama'),
            textField('heroSecondaryAction', 'Teks tautan kedua'),
            textField('heroSecondaryHref', 'Tujuan tautan kedua (#bagian atau URL)'),
          ],
        },
        {
          label: 'Mockup hero',
          fields: [
            textField('showcaseApprovalsTitle', 'Judul panel antrean persetujuan'),
            {
              name: 'showcaseApprovals',
              type: 'array',
              label: 'Baris antrean persetujuan',
              minRows: 2,
              maxRows: 4,
              labels: { singular: 'Baris', plural: 'Baris' },
              fields: [
                textField('person', 'Nama karyawan'),
                textField('detail', 'Pengajuan'),
                textField('status', 'Status'),
              ],
            },
            textField('showcaseAttendanceTitle', 'Judul panel absen'),
            textField('showcaseAttendanceFigure', 'Angka besar (jam absen)'),
            textField('showcaseAttendanceDetail', 'Keterangan absen'),
            textField('showcasePayslipTitle', 'Judul panel slip gaji'),
            textField('showcasePayslipDetail', 'Keterangan slip gaji'),
          ],
        },
        {
          label: 'Keunggulan',
          fields: [
            {
              name: 'trustPoints',
              type: 'array',
              label: 'Empat keunggulan di bawah hero',
              minRows: 3,
              maxRows: 4,
              labels: { singular: 'Keunggulan', plural: 'Keunggulan' },
              fields: [textField('title', 'Judul'), textareaField('description', 'Deskripsi')],
            },
          ],
        },
        {
          label: 'Pita absen',
          fields: [
            ...bandFields('attendance'),
            textField('faceTitle', 'Judul layar HP'),
            textField('faceDate', 'Tanggal di layar HP'),
            stringListField('faceChips', 'Chip hasil absen'),
            textField('faceButton', 'Teks tombol di layar HP'),
          ],
        },
        {
          label: 'Pengajuan',
          fields: [
            textField('requestsTitle', 'Judul (maksimal dua baris)'),
            textareaField('requestsDescription', 'Deskripsi'),
            textField('requestsAction', 'Teks tombol'),
            {
              name: 'requestCards',
              type: 'array',
              label: 'Kartu pengajuan contoh',
              minRows: 3,
              maxRows: 6,
              labels: { singular: 'Kartu', plural: 'Kartu' },
              fields: [
                textField('title', 'Jenis'),
                textField('subtitle', 'Rincian'),
                textField('status', 'Status'),
              ],
            },
            textField('requestsStripTitle', 'Judul baris pendek di bawah'),
            stringListField('requestsStripItems', 'Item baris pendek'),
          ],
        },
        {
          label: 'Pita approval',
          fields: [
            ...bandFields('approval'),
            textField('approvalScreenTitle', 'Judul layar HP'),
            textField('approvalScreenSubtitle', 'Anak judul layar HP'),
            textField('approvalPendingLabel', 'Label menunggu'),
            textField('approvalDoneLabel', 'Label disetujui'),
            {
              name: 'approvalItems',
              type: 'array',
              label: 'Baris persetujuan di layar HP',
              minRows: 3,
              maxRows: 5,
              labels: { singular: 'Baris', plural: 'Baris' },
              fields: [textField('name', 'Nama'), textField('detail', 'Pengajuan')],
            },
          ],
        },
        {
          label: 'Fitur dan solusi',
          fields: [
            textField('modulesTitle', 'Judul bagian fitur (maksimal dua baris)'),
            textareaField('modulesDescription', 'Deskripsi bagian fitur'),
            textField('industriesTitle', 'Judul bagian solusi (maksimal dua baris)'),
            textareaField('industriesDescription', 'Deskripsi bagian solusi'),
          ],
        },
        {
          label: 'Penawaran',
          fields: [
            textField('offerTitle', 'Judul (maksimal dua baris)'),
            textareaField('offerDescription', 'Deskripsi'),
            stringListField('offerPoints', 'Poin penawaran'),
            textField('offerAction', 'Teks tombol'),
          ],
        },
        {
          label: 'FAQ',
          fields: [
            textField('faqTitle', 'Judul'),
            faqItemsField({ name: 'faqItems', label: 'Pertanyaan', minRows: 3, maxRows: 8 }),
          ],
        },
        {
          label: 'Ajakan penutup',
          fields: [
            textField('ctaTitle', 'Judul (maksimal dua baris)'),
            textareaField('ctaDescription', 'Deskripsi'),
            textField('ctaAction', 'Teks tombol'),
            stringListField('ctaGuarantees', 'Jaminan demo'),
          ],
        },
      ],
    },
  ],
}
