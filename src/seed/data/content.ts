/**
 * Isi awal untuk global dan halaman. Dijalankan lewat `pnpm seed`; setelah itu semua bisa diubah di admin.
 * Hanya memuat klaim yang benar untuk aplikasi HRIS. Bagian bertanda KONFIRMASI perlu dicek pemilik produk.
 */

export const siteSettingsSeed = {
  brandName: 'HRIS',
  // KONFIRMASI: nama perusahaan pembuat produk.
  companyName: 'Falah Inovasi Teknologi',
  whatsappNumber: '',
  contactEmail: '',
  seoTitle: 'HRIS: absen, cuti, lembur, dan slip gaji dalam satu aplikasi',
  seoDescription:
    'Aplikasi HR untuk absensi wajah dan lokasi, pengajuan cuti, lembur, dinas luar, approval atasan, dan slip gaji.',
  actionLabel: 'Minta demo',
  navLinks: [
    { label: 'Harga', href: '/harga' },
    { label: 'Tools', href: '/tools' },
    { label: 'Tentang', href: '/tentang' },
  ],
  invitation: 'Lihat langsung cara kerjanya.',
  invitationButton: 'Minta demo',
  footerLinks: [
    { label: 'Fitur', href: '/fitur' },
    { label: 'Solusi', href: '/solusi' },
    { label: 'Harga', href: '/harga' },
    { label: 'Tools', href: '/tools' },
  ],
  legalLinks: [
    { label: 'Privasi', href: '/privasi' },
    { label: 'Syarat dan ketentuan', href: '/syarat-ketentuan' },
  ],
}

export const homeSeed = {
  heroLineOne: 'Your All-in-One',
  heroLineTwo: 'HRIS Solutions',
  heroDescription:
    'HRIS adalah aplikasi HR mobile untuk mengelola keseharian karyawan, mulai dari absensi wajah, cuti, lembur, approval, slip gaji, dokumen, sampai keamanan akun, semua dalam satu aplikasi yang praktis untuk karyawan, atasan, dan HR.',
  heroPrimaryAction: 'Minta demo',
  heroSecondaryAction: 'Pelajari selengkapnya',
  heroSecondaryHref: '#absensi',

  showcaseApprovalsTitle: 'Antrean persetujuan',
  showcaseApprovals: [
    { person: 'Andi Rahman', detail: 'Cuti tahunan · 3 hari', status: 'Menunggu' },
    { person: 'Sari Dewi', detail: 'Lembur · 2 jam', status: 'Disetujui' },
    { person: 'Budi Pratama', detail: 'Dinas luar · Bandung', status: 'Menunggu' },
  ],
  showcaseAttendanceTitle: 'Absen masuk berhasil',
  showcaseAttendanceFigure: '08:02',
  showcaseAttendanceDetail: 'Kantor Pusat · wajah terverifikasi',
  showcasePayslipTitle: 'Slip gaji tersedia',
  showcasePayslipDetail: 'Periode Oktober',

  trustPoints: [
    { title: 'Absen wajah dan lokasi', description: 'Verifikasi wajah, area kerja, dan jam yang tepercaya.' },
    { title: 'Tetap jalan tanpa sinyal', description: 'Absen tersimpan di HP dan terkirim saat tersambung.' },
    { title: 'Data satu sumber', description: 'Karyawan, cuti, dan payroll terkelola terpusat.' },
    { title: 'Approval berjenjang', description: 'Atasan dan HR menyetujui langsung dari HP.' },
  ],

  attendanceTitle: 'Absen dengan wajah, di mana pun',
  attendanceDescription:
    'Verifikasi wajah, validasi lokasi kerja, dan jam yang tidak bisa dimanipulasi. Tetap bisa absen saat sinyal hilang, datanya terkirim begitu tersambung lagi.',
  attendanceAction: 'Minta demo',
  faceTitle: 'Absen Masuk',
  faceDate: 'Senin, 15 Oktober',
  faceChips: [{ text: 'Lokasi valid' }, { text: 'Jam terverifikasi' }, { text: 'Mode offline siap' }],
  faceButton: 'Absen sekarang',

  requestsTitle: 'Semua pengajuan, satu tempat',
  requestsDescription:
    'Cuti, lembur, dinas luar, WFH, koreksi absen, sampai dokumen. Karyawan mengajukan dari HP; atasan dan HR memantau dari satu daftar, tanpa kertas dan tanpa chat berantai.',
  requestsAction: 'Minta demo',
  requestCards: [
    { title: 'Cuti', subtitle: 'Cuti tahunan · 3 hari', status: 'Menunggu' },
    { title: 'Lembur', subtitle: 'Jumat malam · 2 jam', status: 'Disetujui' },
    { title: 'Dinas luar', subtitle: 'Bandung · 2 hari', status: 'Menunggu' },
    { title: 'WFH', subtitle: 'Rabu · 1 hari', status: 'Disetujui' },
    { title: 'Koreksi absen', subtitle: 'Lupa absen pulang', status: 'Menunggu' },
    { title: 'Dokumen', subtitle: 'Surat keterangan', status: 'Diproses' },
  ],
  requestsStripTitle: 'Semua kebutuhan HR harian dalam satu aplikasi',
  requestsStripItems: [
    { text: 'Absensi' },
    { text: 'Cuti' },
    { text: 'Lembur' },
    { text: 'Dinas luar' },
    { text: 'Slip gaji' },
  ],

  approvalTitle: 'Approval dalam satu ketukan',
  approvalDescription:
    'Atasan menyetujui cuti, lembur, dan koreksi absen dari HP. Karyawan langsung tahu statusnya, HR tidak perlu lagi mengejar tanda tangan.',
  approvalAction: 'Minta demo',
  approvalScreenTitle: 'Approval',
  approvalScreenSubtitle: '4 pengajuan',
  approvalPendingLabel: 'Menunggu',
  approvalDoneLabel: 'Disetujui',
  approvalItems: [
    { name: 'Andi Rahman', detail: 'Cuti tahunan · 3 hari' },
    { name: 'Sari Dewi', detail: 'Lembur · 2 jam' },
    { name: 'Budi Pratama', detail: 'Dinas luar · Bandung' },
    { name: 'Lina Nur', detail: 'Koreksi absen' },
  ],

  modulesTitle: 'Satu aplikasi untuk keseharian karyawan',
  modulesDescription:
    'Dari absen pagi sampai slip gaji akhir bulan. Yang sudah berjalan ditandai Tersedia, sisanya jujur kami tandai sebagai rencana.',
  industriesTitle: 'Cocok untuk berbagai jenis usaha',
  industriesDescription:
    'Alur kerja tiap industri berbeda. HRIS fleksibel agar absensi, lembur, dan approval mengikuti cara kerja timmu.',

  // KONFIRMASI: janji layanan di bawah ini harus bisa dipenuhi.
  offerTitle: 'Harga sesuai jumlah karyawan',
  offerDescription:
    'Belum ada daftar harga tetap. Biaya mengikuti jumlah karyawan dan modul yang dipakai, jadi kami menyusun penawaran setelah mendengar kebutuhanmu.',
  offerPoints: [
    { text: 'Demo gratis 30 menit' },
    { text: 'Penawaran sesuai jumlah karyawan' },
    { text: 'Modul bisa ditambah bertahap' },
  ],
  offerAction: 'Minta penawaran',

  faqTitle: 'Pertanyaan umum',
  faqItems: [
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

  ctaTitle: 'Siap lihat langsung cara kerjanya?',
  ctaDescription: 'Jadwalkan demo 30 menit bersama tim kami.',
  ctaAction: 'Minta demo',
  ctaGuarantees: [
    { text: 'Demo 30 menit bersama tim kami' },
    { text: 'Disesuaikan dengan alur kerja perusahaanmu' },
    { text: 'Pendampingan saat mulai dipakai' },
    { text: 'Bantuan memindahkan data karyawan' },
  ],
}

export const pricingPageSeed = {
  heading: 'Harga mengikuti jumlah karyawan.',
  intro:
    'Belum ada daftar harga tetap. Biaya bergantung pada jumlah karyawan dan modul yang dipakai, jadi kami menyusun penawaran setelah mendengar kebutuhanmu.',
  action: 'Minta penawaran',
  steps: [
    { title: 'Ceritakan kebutuhanmu', description: 'Jumlah karyawan, jenis usaha, dan proses HR yang paling menyita waktu.' },
    { title: 'Lihat demo 30 menit', description: 'Kami tunjukkan alur absen, pengajuan, approval, dan slip gaji langsung di aplikasi.' },
    { title: 'Terima penawaran', description: 'Penawaran tertulis sesuai modul yang kamu pilih. Modul lain bisa ditambah bertahap.' },
  ],
  included: [
    { text: 'Pendampingan saat mulai dipakai' },
    { text: 'Bantuan memindahkan data karyawan' },
    { text: 'Modul ditambah sesuai kebutuhan' },
  ],
  faqs: [
    { question: 'Apakah ada paket harga tetap?', answer: 'Belum. Penawaran disusun sesuai jumlah karyawan dan modul yang dipakai.' },
    { question: 'Apakah ada minimum jumlah karyawan?', answer: 'Hubungi kami untuk membahas kebutuhan tim kecil maupun besar.' },
    { question: 'Bisakah mulai dari satu modul?', answer: 'Bisa. Banyak tim mulai dari absensi, lalu menambah pengajuan dan slip gaji.' },
  ],
}

export const aboutPageSeed = {
  heading: 'Tentang HRIS.',
  statement: 'HRIS dibuat supaya absen, cuti, lembur, dan slip gaji tidak lagi menyita waktu HR.',
  paragraphs: [
    {
      text: 'Banyak pekerjaan HR habis untuk mengejar hal yang sama setiap bulan: rekap kehadiran, tanda tangan cuti, dan pertanyaan soal slip gaji. HRIS memindahkan semuanya ke HP karyawan dan atasan, lengkap dengan jejak yang rapi.',
    },
    {
      // KONFIRMASI: pernyataan tentang perusahaan pembuat.
      text: 'HRIS dikembangkan oleh Falah Inovasi Teknologi dan terus ditambah modulnya secara bertahap.',
    },
  ],
  principles: [
    { title: 'Jujur soal fitur', description: 'Yang sudah ada ditandai tersedia. Yang belum, kami sebut rencana.' },
    { title: 'Ringan dipakai', description: 'Karyawan bisa langsung memakainya dari HP tanpa pelatihan panjang.' },
    { title: 'Data dijaga', description: 'Kunci biometrik, peran akses, dan pengelolaan sesi perangkat.' },
  ],
}

interface LegalSection {
  heading: string
  paragraphs: string[]
}

export interface LegalPageSeed {
  slug: string
  title: string
  sections: LegalSection[]
}

const DRAFT_NOTICE =
  'Draf: dokumen ini perlu ditinjau oleh bagian hukum sebelum situs dirilis.'

export const legalPagesSeed: LegalPageSeed[] = [
  {
    slug: 'privasi',
    title: 'Pemberitahuan privasi',
    sections: [
      { heading: 'Catatan', paragraphs: [DRAFT_NOTICE] },
      {
        heading: 'Data yang kami kumpulkan',
        paragraphs: [
          'Melalui situs ini kami mengumpulkan data yang kamu isi di form demo: nama, perusahaan, email, nomor telepon, industri, jumlah karyawan, dan pesan.',
          'Melalui aplikasi HRIS, perusahaan pelanggan memproses data karyawan seperti kehadiran, lokasi saat absen, data wajah untuk verifikasi absen, pengajuan cuti dan lembur, serta slip gaji.',
        ],
      },
      {
        heading: 'Cara kami menggunakan data',
        paragraphs: [
          'Data form demo dipakai untuk menghubungi kamu dan menyiapkan demo atau penawaran. Data aplikasi dipakai untuk menjalankan fitur sesuai perintah perusahaan pelanggan.',
        ],
      },
      {
        heading: 'Data wajah',
        paragraphs: [
          'Data wajah hanya dipakai untuk memverifikasi bahwa absen dilakukan oleh karyawan yang bersangkutan.',
        ],
      },
      {
        heading: 'Keamanan',
        paragraphs: [
          'Aplikasi dapat dikunci dengan biometrik dan sesi perangkat dapat dikelola. Kami membatasi akses data sesuai peran.',
        ],
      },
      {
        heading: 'Hak kamu',
        paragraphs: [
          'Kamu dapat meminta akses, perbaikan, atau penghapusan data pribadi dengan menghubungi kami lewat kontak di situs ini.',
        ],
      },
      {
        heading: 'Perubahan',
        paragraphs: ['Pemberitahuan ini dapat diperbarui. Versi terbaru selalu tersedia di halaman ini.'],
      },
    ],
  },
  {
    slug: 'syarat-ketentuan',
    title: 'Syarat dan ketentuan',
    sections: [
      { heading: 'Catatan', paragraphs: [DRAFT_NOTICE] },
      {
        heading: 'Penggunaan situs',
        paragraphs: [
          'Situs ini memberi informasi tentang aplikasi HRIS. Dengan memakainya, kamu setuju tidak menyalahgunakan situs atau mengganggu layanannya.',
        ],
      },
      {
        heading: 'Form demo',
        paragraphs: [
          'Data yang kamu kirim lewat form harus benar. Mengirim form tidak membuat kontrak berlangganan; penawaran resmi diberikan secara tertulis.',
        ],
      },
      {
        heading: 'Informasi fitur',
        paragraphs: [
          'Fitur yang ditandai dalam rencana belum tersedia dan dapat berubah. Tampilan antarmuka di situs adalah ilustrasi.',
        ],
      },
      {
        heading: 'Batasan tanggung jawab',
        paragraphs: [
          'Kalkulator di halaman Tools memberi perkiraan untuk membantu, bukan nasihat hukum atau pajak. Konsultasikan dengan ahli sebelum mengambil keputusan.',
        ],
      },
      {
        heading: 'Perubahan',
        paragraphs: ['Ketentuan ini dapat diperbarui. Versi terbaru selalu tersedia di halaman ini.'],
      },
    ],
  },
]
