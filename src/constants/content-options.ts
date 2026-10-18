/**
 * Opsi bersama untuk koleksi konten. Nilai di sini HARUS sama dengan yang dipakai hris-landing
 * (lihat konstanta di hris-landing).
 */

export const FEATURE_STATUS = {
  AVAILABLE: 'available',
  PARTIAL: 'partial',
  PLANNED: 'planned',
} as const

export const FEATURE_CATEGORY = {
  ATTENDANCE: 'attendance',
  REQUESTS: 'requests',
  PAYROLL: 'payroll',
  DOCUMENTS: 'documents',
  SECURITY: 'security',
  PERFORMANCE: 'performance',
  PLANNED: 'planned',
} as const

export const SOLUTION_TYPE = {
  INDUSTRY: 'industry',
  SCALE: 'scale',
} as const

export const LEAD_STATUS = {
  NEW: 'new',
  CONTACTED: 'contacted',
  DEMO: 'demo',
  CLOSED: 'closed',
} as const

export const TESTIMONIAL_TONE = {
  YELLOW: 'yellow',
  CYAN: 'cyan',
  PINK: 'pink',
} as const

type ValueOf<T> = T[keyof T]

export type FeatureStatus = ValueOf<typeof FEATURE_STATUS>
export type FeatureCategory = ValueOf<typeof FEATURE_CATEGORY>
export type SolutionType = ValueOf<typeof SOLUTION_TYPE>
export type LeadStatus = ValueOf<typeof LEAD_STATUS>

interface Option {
  label: string
  value: string
}

export const FEATURE_STATUS_OPTIONS: Option[] = [
  { label: 'Tersedia', value: FEATURE_STATUS.AVAILABLE },
  { label: 'Sebagian', value: FEATURE_STATUS.PARTIAL },
  { label: 'Dalam rencana', value: FEATURE_STATUS.PLANNED },
]

export const FEATURE_CATEGORY_OPTIONS: Option[] = [
  { label: 'Absensi', value: FEATURE_CATEGORY.ATTENDANCE },
  { label: 'Pengajuan & Approval', value: FEATURE_CATEGORY.REQUESTS },
  { label: 'Slip Gaji & Pajak', value: FEATURE_CATEGORY.PAYROLL },
  { label: 'Dokumen & Pengumuman', value: FEATURE_CATEGORY.DOCUMENTS },
  { label: 'Keamanan', value: FEATURE_CATEGORY.SECURITY },
  { label: 'Kinerja', value: FEATURE_CATEGORY.PERFORMANCE },
  { label: 'Dalam Rencana', value: FEATURE_CATEGORY.PLANNED },
]

export const SOLUTION_TYPE_OPTIONS: Option[] = [
  { label: 'Berdasarkan industri', value: SOLUTION_TYPE.INDUSTRY },
  { label: 'Berdasarkan skala bisnis', value: SOLUTION_TYPE.SCALE },
]

export const LEAD_STATUS_OPTIONS: Option[] = [
  { label: 'Baru', value: LEAD_STATUS.NEW },
  { label: 'Sudah dihubungi', value: LEAD_STATUS.CONTACTED },
  { label: 'Demo dijadwalkan', value: LEAD_STATUS.DEMO },
  { label: 'Selesai', value: LEAD_STATUS.CLOSED },
]

export const TESTIMONIAL_TONE_OPTIONS: Option[] = [
  { label: 'Kuning', value: TESTIMONIAL_TONE.YELLOW },
  { label: 'Cyan', value: TESTIMONIAL_TONE.CYAN },
  { label: 'Pink', value: TESTIMONIAL_TONE.PINK },
]
