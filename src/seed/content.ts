/**
 * Isi awal CMS HRIS. Dijalankan lewat `npm run seed`; setelah itu semua bisa diubah di admin.
 * Hanya memuat klaim yang benar untuk aplikasi HRIS. Bagian bertanda KONFIRMASI perlu dicek pemilik produk.
 */

type Layout = Record<string, unknown>[]

const buttons = (...items: [label: string, href: string, style?: 'fill' | 'stroke'][]) =>
  items.map(([label, href, style = 'fill']) => ({ label, href, style }))

const texts = (...items: string[]) => items.map((text) => ({ text }))

const DEMO_LINK = '/demo'

// ── Beranda ──────────────────────────────────────────────────────────────
export const homeLayout = (): Layout => [
  {
    blockType: 'hero',
    variant: 'home',
    titleLineOne: 'Your All-in-One',
    titleLineTwo: 'HRIS Solutions',
    description:
      'HRIS adalah aplikasi HR mobile untuk mengelola keseharian karyawan, mulai dari absensi wajah, cuti, lembur, approval, slip gaji, dokumen, sampai keamanan akun, semua dalam satu aplikasi yang praktis untuk karyawan, atasan, dan HR.',
    buttons: buttons(['Minta demo', DEMO_LINK], ['Pelajari selengkapnya', '#absensi', 'stroke']),
    mockup: {
      approvalsTitle: 'Antrean persetujuan',
      approvals: [
        { person: 'Andi Rahman', detail: 'Cuti tahunan · 3 hari', status: 'Menunggu' },
        { person: 'Sari Dewi', detail: 'Lembur · 2 jam', status: 'Disetujui' },
        { person: 'Budi Pratama', detail: 'Dinas luar · Bandung', status: 'Menunggu' },
      ],
      doneLabel: 'Disetujui',
      attendanceTitle: 'Absen masuk berhasil',
      attendanceFigure: '08:02',
      attendanceDetail: 'Kantor Pusat · wajah terverifikasi',
      payslipTitle: 'Slip gaji tersedia',
      payslipDetail: 'Periode Oktober',
      phoneChips: texts('Lokasi valid', 'Jam terverifikasi'),
    },
    trustPoints: [
      { title: 'Absen wajah dan lokasi', description: 'Verifikasi wajah, area kerja, dan jam yang tepercaya.' },
      { title: 'Tetap jalan tanpa sinyal', description: 'Absen tersimpan di HP dan terkirim saat tersambung.' },
      { title: 'Data satu sumber', description: 'Karyawan, cuti, dan payroll terkelola terpusat.' },
      { title: 'Approval berjenjang', description: 'Atasan dan HR menyetujui langsung dari HP.' },
    ],
  },
  {
    blockType: 'featureBand',
    anchor: 'absensi',
    screen: 'faceScan',
    tag: 'ABSENSI',
    header: {
      title: 'Absen dengan wajah, di mana pun',
      description:
        'Verifikasi wajah, validasi lokasi kerja, dan jam yang tidak bisa dimanipulasi. Tetap bisa absen saat sinyal hilang, datanya terkirim begitu tersambung lagi.',
    },
    buttons: buttons(['Minta demo', DEMO_LINK]),
    tint: 'sky',
    accessory: 'shield',
    screenTitle: 'Absen Masuk',
    screenSubtitle: 'Senin, 15 Oktober',
    chips: texts('Lokasi valid', 'Jam terverifikasi', 'Mode offline siap'),
    screenButton: 'Absen sekarang',
  },
  {
    blockType: 'requestsBoard',
    anchor: 'pengajuan',
    tag: 'PENGAJUAN',
    header: {
      title: 'Semua pengajuan, satu tempat',
      description:
        'Cuti, lembur, dinas luar, WFH, koreksi absen, sampai dokumen. Karyawan mengajukan dari HP; atasan dan HR memantau dari satu daftar, tanpa kertas dan tanpa chat berantai.',
    },
    buttons: buttons(['Minta demo', DEMO_LINK]),
    cards: [
      { title: 'Cuti', subtitle: 'Cuti tahunan · 3 hari', status: 'Menunggu' },
      { title: 'Lembur', subtitle: 'Jumat malam · 2 jam', status: 'Disetujui' },
      { title: 'Dinas luar', subtitle: 'Bandung · 2 hari', status: 'Menunggu' },
      { title: 'WFH', subtitle: 'Rabu · 1 hari', status: 'Disetujui' },
      { title: 'Koreksi absen', subtitle: 'Lupa absen pulang', status: 'Menunggu' },
      { title: 'Dokumen', subtitle: 'Surat keterangan', status: 'Diproses' },
    ],
    doneLabel: 'Disetujui',
    stripTitle: 'Semua kebutuhan HR harian dalam satu aplikasi',
    stripItems: texts('Absensi', 'Cuti', 'Lembur', 'Dinas luar', 'Slip gaji'),
  },
  {
    blockType: 'featureBand',
    anchor: 'approval',
    screen: 'approval',
    tag: 'APPROVAL',
    header: {
      title: 'Approval dalam satu ketukan',
      description:
        'Atasan menyetujui cuti, lembur, dan koreksi absen dari HP. Karyawan langsung tahu statusnya, HR tidak perlu lagi mengejar tanda tangan.',
    },
    buttons: buttons(['Minta demo', DEMO_LINK]),
    tint: 'lavender',
    accessory: 'checkCircle',
    screenTitle: 'Approval',
    screenSubtitle: '4 pengajuan',
    pendingLabel: 'Menunggu',
    doneLabel: 'Disetujui',
    items: [
      { name: 'Andi Rahman', detail: 'Cuti tahunan · 3 hari' },
      { name: 'Sari Dewi', detail: 'Lembur · 2 jam' },
      { name: 'Budi Pratama', detail: 'Dinas luar · Bandung' },
      { name: 'Lina Nur', detail: 'Koreksi absen' },
    ],
  },
  {
    blockType: 'modulesMap',
    anchor: 'fitur',
    tag: 'FITUR',
    header: {
      title: 'Satu aplikasi untuk keseharian karyawan',
      description:
        'Dari absen pagi sampai slip gaji akhir bulan. Yang sudah berjalan ditandai Tersedia, sisanya jujur kami tandai sebagai rencana.',
    },
    tint: 'sky',
  },
  {
    blockType: 'industries',
    anchor: 'solusi',
    tag: 'SOLUSI',
    header: {
      title: 'Cocok untuk berbagai jenis usaha',
      description:
        'Alur kerja tiap industri berbeda. HRIS fleksibel agar absensi, lembur, dan approval mengikuti cara kerja timmu.',
    },
  },
  pricingBlock('compact'),
  {
    blockType: 'faq',
    anchor: 'faq',
    tag: 'FAQ',
    header: { title: 'Pertanyaan umum' },
    items: [
      {
        question: 'Apa itu HRIS?',
        answer:
          'HRIS adalah aplikasi HR mobile untuk absensi, pengajuan cuti, lembur, dan dinas luar, approval atasan, serta slip gaji. Datanya tersimpan terpusat sehingga HR dan atasan melihat informasi yang sama.',
      },
      {
        question: 'Apakah karyawan bisa absen tanpa internet?',
        answer:
          'Bisa. Absen disimpan di HP dan dikirim otomatis begitu perangkat tersambung lagi, dengan jam yang tetap diverifikasi.',
      },
      {
        question: 'Bagaimana mencegah titip absen?',
        answer:
          'Absen memakai verifikasi wajah dan validasi lokasi sesuai area kerja, jadi absen tidak bisa dilakukan oleh orang lain atau dari luar lokasi.',
      },
      {
        question: 'Bagaimana keamanan data karyawan?',
        answer:
          'Aplikasi bisa dikunci dengan biometrik, kata sandi dapat diganti kapan saja, dan sesi perangkat yang sedang masuk bisa dikelola dari dalam aplikasi.',
      },
      {
        question: 'Fitur apa yang belum tersedia?',
        answer:
          'Reimbursement, cash advance, pembelajaran, dan rekrutmen masih dalam rencana, begitu juga penilaian 360 derajat. Semuanya ditandai jelas di daftar fitur.',
      },
    ],
  },
  ctaBlock(),
]

function ctaBlock(): Record<string, unknown> {
  return {
    blockType: 'cta',
    header: { title: 'Siap lihat langsung cara kerjanya?', description: 'Jadwalkan demo 30 menit bersama tim kami.' },
    buttons: buttons(['Minta demo', DEMO_LINK]),
    guarantees: texts(
      'Demo 30 menit bersama tim kami',
      'Disesuaikan dengan alur kerja perusahaanmu',
      'Pendampingan saat mulai dipakai',
      'Bantuan memindahkan data karyawan',
    ),
  }
}

// Tabel perbandingan fitur: urutan sel mengikuti paket (Basic, Essential, Suite).
type MatrixMode = 'included' | 'excluded' | 'addon'
const cell = (mode: MatrixMode, label?: string) => ({ mode, label })
const matrixGroup = (title: string, points: string[], cells: ReturnType<typeof cell>[], isSoon = false) => ({
  title,
  isSoon,
  points: points.map((text) => ({ text })),
  cells,
})
const ALL_PLANS = [cell('included'), cell('included'), cell('included')]
const FROM_ESSENTIAL = [cell('excluded'), cell('included'), cell('included')]
const FROM_SUITE = [cell('excluded'), cell('excluded'), cell('included')]

const PRICING_MATRIX = [
  {
    title: 'Kehadiran',
    groups: [
      matrixGroup('Absensi online', ['Wajah dan lokasi', 'Mode offline saat sinyal buruk', 'Anti titip absen'], ALL_PLANS),
      matrixGroup('Koreksi absensi', ['Pengajuan dari aplikasi', 'Jejak persetujuan yang jelas'], ALL_PLANS),
    ],
  },
  {
    title: 'Pengajuan & persetujuan',
    groups: [
      matrixGroup('Cuti online', ['Sisa kuota selalu jelas', 'Persetujuan dari aplikasi'], ALL_PLANS),
      matrixGroup('Lembur online', ['Pengajuan dan persetujuan', 'Siap dipakai untuk payroll'], FROM_ESSENTIAL),
      matrixGroup('Dinas luar & WFH', ['Pengajuan dengan jejak yang jelas', 'Cocok untuk tim lapangan'], FROM_ESSENTIAL),
      matrixGroup('Approval berjenjang', ['Satu antrean untuk semua pengajuan', 'Atasan bertingkat'], FROM_ESSENTIAL),
    ],
  },
  {
    title: 'Gaji & pajak',
    groups: [
      matrixGroup('Slip gaji online', ['Rincian lengkap', 'Tersedia kapan saja'], ALL_PLANS),
      matrixGroup('Ringkasan pajak & BPJS', ['Potongan transparan', 'Berdampingan dengan slip gaji'], FROM_ESSENTIAL),
    ],
  },
  {
    title: 'Dokumen & komunikasi',
    groups: [
      matrixGroup('Dokumen digital', ['Unggah oleh karyawan', 'Verifikasi oleh HR'], FROM_ESSENTIAL),
      matrixGroup('Pengumuman perusahaan', ['Satu saluran resmi', 'Langsung di aplikasi kerja'], FROM_ESSENTIAL),
    ],
  },
  {
    title: 'Keamanan & kinerja',
    groups: [
      matrixGroup('Keamanan akun', ['Kunci biometrik', 'Kendali atas perangkat', 'Akses sesuai peran'], ALL_PLANS),
      matrixGroup('Penilaian kinerja', ['Tersedia sebagian, ditambah bertahap'], FROM_SUITE),
    ],
  },
  {
    title: 'Segera hadir',
    groups: [
      matrixGroup('Reimbursement & cash advance', ['Klaim dengan bukti', 'Kasbon terkontrol'], FROM_SUITE, true),
      matrixGroup('Pembelajaran', ['Materi terpusat', 'Pengingat pelatihan'], FROM_SUITE, true),
      matrixGroup('Rekrutmen', ['Alur rekrutmen satu pintu', 'Onboarding terhubung'], [cell('excluded'), cell('addon', 'Opsional'), cell('addon', 'Opsional')], true),
    ],
  },
]

// ── Harga ────────────────────────────────────────────────────────────────
function pricingBlock(variant: 'full' | 'compact'): Record<string, unknown> {
  return {
    blockType: 'pricing',
    anchor: 'harga',
    variant,
    tag: 'HARGA',
    header:
      variant === 'compact'
        ? {
            title: 'Paket sesuai kebutuhan',
            description:
              'Pilih paket per karyawan per bulan, mulai dari Basic sampai Suite. Harga final dikonfirmasi tim kami setelah demo.',
          }
        : {
            title: 'Pilih paket sesuai kebutuhan',
            description: 'Semua paket memakai aplikasi mobile yang sama. Fitur yang belum rilis ditandai Segera hadir.',
          },
    tint: 'lavender',
    // KONFIRMASI: harga di bawah masih contoh dan harus diganti sesuai harga resmi.
    plans: [
      {
        name: 'Basic',
        isFeatured: false,
        pricePrefix: 'Mulai dari',
        price: 'Rp11.900',
        priceUnit: '/bulan/karyawan',
        description: 'Absensi dan pengajuan dasar untuk tim yang baru mulai.',
        features: [
          { text: 'Absensi online: wajah, lokasi, dan mode offline', isSoon: false },
          { text: 'Koreksi absensi', isSoon: false },
          { text: 'Cuti online', isSoon: false },
          { text: 'Slip gaji online', isSoon: false },
          { text: 'Keamanan akun', isSoon: false },
        ],
        actionLabel: 'Hubungi sales',
        actionHref: DEMO_LINK,
      },
      {
        name: 'Essential',
        badge: 'Paling populer',
        isFeatured: true,
        pricePrefix: 'Mulai dari',
        price: 'Rp19.900',
        priceUnit: '/bulan/karyawan',
        description: 'Pengajuan lengkap dengan approval berjenjang dan dokumen.',
        inheritsFrom: 'Semua fitur paket Basic',
        features: [
          { text: 'Lembur online', isSoon: false },
          { text: 'Dinas luar dan WFH', isSoon: false },
          { text: 'Approval berjenjang', isSoon: false },
          { text: 'Ringkasan pajak dan BPJS', isSoon: false },
          { text: 'Dokumen digital dan pengumuman perusahaan', isSoon: false },
        ],
        actionLabel: 'Hubungi sales',
        actionHref: DEMO_LINK,
      },
      {
        name: 'Suite',
        isFeatured: false,
        pricePrefix: 'Mulai dari',
        price: 'Rp25.000',
        priceUnit: '/bulan/karyawan',
        description: 'Seluruh fitur, termasuk yang masih disiapkan.',
        inheritsFrom: 'Semua fitur paket Essential',
        features: [
          { text: 'Penilaian kinerja (sebagian)', isSoon: false },
          { text: 'Reimbursement dan cash advance', isSoon: true },
          { text: 'Pembelajaran', isSoon: true },
          { text: 'Rekrutmen', isSoon: true },
        ],
        actionLabel: 'Hubungi sales',
        actionHref: DEMO_LINK,
      },
    ],
    showEstimator: variant === 'full',
    estimatorTitle: variant === 'full' ? 'Pilih paket yang tepat' : undefined,
    estimatorDescription: variant === 'full' ? 'Isi jumlah karyawan untuk melihat perkiraan biaya per bulan. Harga final dikonfirmasi tim kami.' : undefined,
    matrix: variant === 'full' ? PRICING_MATRIX : undefined,
    addonNote: variant === 'full' ? 'Tambah fitur baru mulai dari Rp2.000/bulan/karyawan.' : undefined,
    points: variant === 'compact' ? texts('Demo gratis 30 menit', 'Penawaran sesuai jumlah karyawan', 'Modul bisa ditambah bertahap') : undefined,
    buttons: variant === 'compact' ? buttons(['Lihat semua paket', '/harga']) : undefined,
  }
}

export const hargaLayout = (): Layout => [
  {
    blockType: 'hero',
    variant: 'page',
    tag: 'HARGA',
    title: 'Paket yang pas untuk timmu',
    description:
      'Harga per karyawan per bulan. Mulai dari paket Basic, lalu naik ke paket yang lebih lengkap saat timmu butuh. Harga di bawah masih contoh dan dapat disesuaikan.',
    buttons: buttons(['Minta penawaran', DEMO_LINK]),
    visual: {
      kind: 'offer',
      accessory: 'wallet',
      title: 'Paket yang pas untuk timmu',
      rowsSource: 'manual',
      rows: [{ title: 'Ceritakan kebutuhanmu' }, { title: 'Lihat demo 30 menit' }, { title: 'Terima penawaran' }],
    },
  },
  pricingBlock('full'),
  {
    blockType: 'section',
    tag: '',
    header: { title: 'Cara kami menyusun penawaran' },
    tint: 'sky',
    visualSide: 'right',
    visual: {
      kind: 'panel',
      tone: 'sky',
      accessory: 'calendar',
      rowsSource: 'manual',
      rows: [{ title: 'Ceritakan kebutuhanmu' }, { title: 'Lihat demo 30 menit' }, { title: 'Terima penawaran' }],
    },
    columns: '3',
    items: [
      { title: '1. Ceritakan kebutuhanmu', description: 'Jumlah karyawan, jenis usaha, dan proses HR yang paling menyita waktu.' },
      { title: '2. Lihat demo 30 menit', description: 'Kami tunjukkan alur absen, pengajuan, approval, dan slip gaji langsung di aplikasi.' },
      { title: '3. Terima penawaran', description: 'Penawaran tertulis sesuai modul yang kamu pilih. Modul lain bisa ditambah bertahap.' },
    ],
  },
  {
    blockType: 'section',
    header: { title: 'Yang termasuk' },
    tint: 'lavender',
    visualSide: 'left',
    visual: {
      kind: 'phone',
      accessory: 'chart',
      title: 'Yang termasuk',
      rowsSource: 'manual',
      rows: [{ title: 'Pendampingan saat mulai dipakai' }, { title: 'Bantuan memindahkan data karyawan' }, { title: 'Modul ditambah sesuai kebutuhan' }],
    },
    columns: '3',
    items: [
      { title: 'Pendampingan saat mulai dipakai' },
      { title: 'Bantuan memindahkan data karyawan' },
      { title: 'Modul ditambah sesuai kebutuhan' },
    ],
  },
  {
    blockType: 'faq',
    tag: 'FAQ',
    header: { title: 'Pertanyaan umum' },
    items: [
      { question: 'Apakah harga di halaman ini sudah final?', answer: 'Harga di halaman ini masih contoh. Tim kami mengonfirmasi harga final dan diskon sesuai jumlah karyawan saat demo.' },
      { question: 'Apakah ada minimum jumlah karyawan?', answer: 'Hubungi kami untuk membahas kebutuhan tim kecil maupun besar.' },
      { question: 'Bisakah mulai dari satu modul?', answer: 'Bisa. Banyak tim mulai dari absensi, lalu menambah pengajuan dan slip gaji.' },
    ],
  },
]

// ── Fitur, solusi, tools, demo, tentang ─────────────────────────────────
export const fiturLayout = (): Layout => [
  {
    blockType: 'hero',
    variant: 'page',
    tag: 'FITUR',
    title: 'Semua yang dikerjakan aplikasi',
    description: 'Yang sudah berjalan ditandai jelas. Yang masih rencana kami sebut rencana.',
    buttons: buttons(['Minta demo', DEMO_LINK]),
    visual: { kind: 'board', tone: 'peach', accessory: 'bell', rowsSource: 'features' },
  },
  { blockType: 'featureCatalog' },
]

export const solusiLayout = (): Layout => [
  {
    blockType: 'hero',
    variant: 'page',
    tag: 'SOLUSI',
    title: 'Untuk berbagai jenis usaha',
    description: 'Alur kerja tiap industri berbeda. Pilih yang paling mirip dengan tempatmu.',
    buttons: buttons(['Minta demo', DEMO_LINK]),
    visual: { kind: 'board', tone: 'lavender', accessory: 'users', rowsSource: 'solutions' },
  },
  { blockType: 'solutionCatalog' },
]

export const toolsLayout = (): Layout => [
  {
    blockType: 'hero',
    variant: 'page',
    tag: 'FITUR',
    title: 'Kalkulator HR gratis',
    description: 'Hitungan cepat untuk urusan yang sering ditanyakan, lengkap dengan dasar aturannya.',
    buttons: buttons(['Minta demo', DEMO_LINK]),
    visual: { kind: 'board', tone: 'sky', accessory: 'calculator', rowsSource: 'calculators' },
  },
  { blockType: 'toolsList', header: { title: 'Daftar kalkulator' } },
]

export const demoLayout = (): Layout => [
  {
    blockType: 'hero',
    variant: 'page',
    tag: 'ABSENSI',
    title: 'Minta demo',
    description: 'Demo 30 menit gratis. Kami tunjukkan absen, pengajuan, approval, dan slip gaji langsung di aplikasi.',
    visual: {
      kind: 'phone',
      accessory: 'chat',
      title: 'Isi demo 30 menit',
      rowsSource: 'manual',
      rows: [
        { title: 'Absen wajah dan lokasi', detail: 'Langsung di aplikasi' },
        { title: 'Pengajuan dan approval', detail: 'Cuti, lembur, dinas luar' },
        { title: 'Slip gaji', detail: 'Dilihat karyawan sendiri' },
      ],
    },
  },
  {
    blockType: 'contactForm',
    header: { title: 'Isi formulir, kami hubungi', description: 'Tim kami menjadwalkan demo lewat WhatsApp atau email.' },
    visual: {
      kind: 'panel',
      tone: 'peach',
      accessory: 'chat',
      rowsSource: 'manual',
      rows: [{ title: 'Absen wajah dan lokasi' }, { title: 'Pengajuan dan approval' }, { title: 'Slip gaji' }],
    },
    submitLabel: 'Kirim pengajuan',
    successTitle: 'Terima kasih. Kami hubungi segera.',
    successMessage: 'Tim kami akan menghubungi lewat WhatsApp atau email untuk menjadwalkan demo 30 menit.',
    employeeCountOptions: ['1-25', '26-100', '101-500', '500+'],
    industryOptions: ['Logistik', 'Konstruksi', 'Healthcare', 'Retail', 'Manufaktur', 'F&B', 'Startup', 'Lainnya'],
  },
]

export const tentangLayout = (): Layout => [
  {
    blockType: 'hero',
    variant: 'page',
    title: 'Tentang HRIS.',
    description: 'HRIS dibuat supaya absen, cuti, lembur, dan slip gaji tidak lagi menyita waktu HR.',
    buttons: buttons(['Minta demo', DEMO_LINK]),
    visual: {
      kind: 'tilted',
      rowsSource: 'manual',
      rows: [
        { title: 'Jujur soal fitur', detail: 'Yang sudah ada ditandai tersedia. Yang belum, kami sebut rencana.' },
        { title: 'Ringan dipakai', detail: 'Karyawan bisa langsung memakainya dari HP tanpa pelatihan panjang.' },
        { title: 'Data dijaga', detail: 'Kunci biometrik, peran akses, dan pengelolaan sesi perangkat.' },
      ],
    },
  },
  {
    blockType: 'section',
    header: { title: 'Cerita kami' },
    visualSide: 'right',
    visual: {
      kind: 'panel',
      tone: 'peach',
      accessory: 'users',
      rowsSource: 'manual',
      rows: [{ title: 'Jujur soal fitur' }, { title: 'Ringan dipakai' }, { title: 'Data dijaga' }],
    },
    columns: '2',
    items: [
      {
        title: 'Mengapa HRIS',
        description:
          'Banyak pekerjaan HR habis untuk mengejar hal yang sama setiap bulan: rekap kehadiran, tanda tangan cuti, dan pertanyaan soal slip gaji. HRIS memindahkan semuanya ke HP karyawan dan atasan, lengkap dengan jejak yang rapi.',
      },
      {
        // KONFIRMASI: pernyataan tentang perusahaan pembuat.
        title: 'Siapa pembuatnya',
        description: 'HRIS dikembangkan oleh Falah Inovasi Teknologi dan terus ditambah modulnya secara bertahap.',
      },
    ],
  },
  {
    blockType: 'section',
    header: { title: 'Prinsip kami' },
    tint: 'lavender',
    visualSide: 'left',
    visual: {
      kind: 'phone',
      accessory: 'chat',
      title: 'Prinsip kami',
      rowsSource: 'manual',
      rows: [{ title: 'Jujur soal fitur' }, { title: 'Ringan dipakai' }, { title: 'Data dijaga' }],
    },
    columns: '3',
    items: [
      { title: 'Jujur soal fitur', description: 'Yang sudah ada ditandai tersedia. Yang belum, kami sebut rencana.' },
      { title: 'Ringan dipakai', description: 'Karyawan bisa langsung memakainya dari HP tanpa pelatihan panjang.' },
      { title: 'Data dijaga', description: 'Kunci biometrik, peran akses, dan pengelolaan sesi perangkat.' },
    ],
  },
]

// ── Halaman hukum ────────────────────────────────────────────────────────
const DRAFT_NOTICE = 'Draf: dokumen ini perlu ditinjau oleh bagian hukum sebelum situs dirilis.'

export const legalPages = [
  {
    slug: 'privasi',
    title: 'Pemberitahuan privasi',
    sections: [
      { heading: 'Catatan', body: DRAFT_NOTICE },
      {
        heading: 'Data yang kami kumpulkan',
        body: 'Melalui situs ini kami mengumpulkan data yang kamu isi di form demo: nama, perusahaan, email, nomor telepon, industri, jumlah karyawan, dan pesan.\n\nMelalui aplikasi HRIS, perusahaan pelanggan memproses data karyawan seperti kehadiran, lokasi saat absen, data wajah untuk verifikasi absen, pengajuan cuti dan lembur, serta slip gaji.',
      },
      {
        heading: 'Cara kami menggunakan data',
        body: 'Data form demo dipakai untuk menghubungi kamu dan menyiapkan demo atau penawaran. Data aplikasi dipakai untuk menjalankan fitur sesuai perintah perusahaan pelanggan.',
      },
      { heading: 'Data wajah', body: 'Data wajah hanya dipakai untuk memverifikasi bahwa absen dilakukan oleh karyawan yang bersangkutan.' },
      { heading: 'Keamanan', body: 'Aplikasi dapat dikunci dengan biometrik dan sesi perangkat dapat dikelola. Kami membatasi akses data sesuai peran.' },
      { heading: 'Hak kamu', body: 'Kamu dapat meminta akses, perbaikan, atau penghapusan data pribadi dengan menghubungi kami lewat kontak di situs ini.' },
      { heading: 'Perubahan', body: 'Pemberitahuan ini dapat diperbarui. Versi terbaru selalu tersedia di halaman ini.' },
    ],
  },
  {
    slug: 'syarat-ketentuan',
    title: 'Syarat dan ketentuan',
    sections: [
      { heading: 'Catatan', body: DRAFT_NOTICE },
      {
        heading: 'Penggunaan situs',
        body: 'Situs ini memberi informasi tentang aplikasi HRIS. Dengan memakainya, kamu setuju tidak menyalahgunakan situs atau mengganggu layanannya.',
      },
      {
        heading: 'Form demo',
        body: 'Data yang kamu kirim lewat form harus benar. Mengirim form tidak membuat kontrak berlangganan; penawaran resmi diberikan secara tertulis.',
      },
      {
        heading: 'Informasi fitur',
        body: 'Fitur yang ditandai dalam rencana belum tersedia dan dapat berubah. Tampilan antarmuka di situs adalah ilustrasi.',
      },
      {
        heading: 'Batasan tanggung jawab',
        body: 'Kalkulator di halaman Tools memberi perkiraan untuk membantu, bukan nasihat hukum atau pajak. Konsultasikan dengan ahli sebelum mengambil keputusan.',
      },
      { heading: 'Perubahan', body: 'Ketentuan ini dapat diperbarui. Versi terbaru selalu tersedia di halaman ini.' },
    ],
  },
]

export const legalLayout = (page: (typeof legalPages)[number]): Layout => [
  {
    blockType: 'hero',
    variant: 'page',
    title: page.title,
    visual: { kind: 'shield', accessory: 'shield' },
  },
  { blockType: 'textSections', sections: page.sections },
]

// ── Pengaturan situs, navigasi, footer ───────────────────────────────────
export const siteSettingsData = {
  siteName: 'HRIS',
  siteDescription: 'Aplikasi HR untuk absensi wajah dan lokasi, cuti, lembur, dinas luar, approval atasan, dan slip gaji.',
  // KONFIRMASI: kontak berikut masih contoh dan wajib diganti di Settings → Site Settings.
  contact: {
    address: 'Alamat kantor (isi di Pengaturan Situs)',
    shortAddress: 'Indonesia',
    email: 'halo@falahtech.co.id',
    phone: '000000000',
  },
}

export const navigationData = {
  featuresLabel: 'Fitur',
  solutionsLabel: 'Solusi',
  links: [
    { label: 'Harga', href: '/harga', visible: true },
    { label: 'Tools', href: '/tools', visible: true },
    { label: 'Tentang', href: '/tentang', visible: true },
  ],
  cta: { label: 'Minta demo', href: DEMO_LINK },
}

export const footerData = {
  description: 'Absensi, cuti, lembur, approval, dan slip gaji dalam satu aplikasi HR mobile.',
  columns: [
    {
      title: 'Produk',
      links: [
        { label: 'Fitur', href: '/fitur' },
        { label: 'Solusi', href: '/solusi' },
        { label: 'Harga', href: '/harga' },
        { label: 'Tools', href: '/tools' },
      ],
    },
    {
      title: 'Perusahaan',
      links: [
        { label: 'Tentang', href: '/tentang' },
        { label: 'Minta demo', href: DEMO_LINK },
        { label: 'Privasi', href: '/privasi' },
        { label: 'Syarat dan ketentuan', href: '/syarat-ketentuan' },
      ],
    },
  ],
  copyright: '© {year} HRIS. Dikembangkan oleh Falah Inovasi Teknologi.',
}
