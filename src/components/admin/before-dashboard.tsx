import Link from 'next/link'
import React from 'react'

import { getLandingURL } from '../../utilities/getURL'

interface QuickLink {
  label: string
  description: string
  href: string
  isExternal?: boolean
}

const getQuickLinks = (): QuickLink[] => [
  { label: 'Beranda', description: 'Slogan hero, mockup, bagian fitur, penawaran, FAQ, dan penutup di halaman depan', href: '/admin/globals/home' },
  { label: 'Teks Halaman', description: 'Judul dan kalimat di halaman fitur, solusi, tools, demo, harga, dan tentang', href: '/admin/globals/page-copy' },
  { label: 'Fitur', description: 'Halaman fitur dan mega menu', href: '/admin/collections/features' },
  { label: 'Solusi', description: 'Halaman per industri dan skala bisnis', href: '/admin/collections/solutions' },
  { label: 'Pengajuan demo', description: 'Prospek yang mengisi form demo', href: '/admin/collections/leads' },
  { label: 'Lihat situs', description: 'Buka situs publik di tab baru', href: getLandingURL(), isExternal: true },
]

/** Ringkasan awal dasbor: tautan cepat ke bagian yang paling sering diubah, tanpa kartu. */
export const BeforeDashboard: React.FC = () => (
  <section className="hris-dashboard">
    <h2 className="hris-dashboard__title">Selamat datang</h2>
    <p className="hris-dashboard__lead">
      Perubahan yang disimpan di sini muncul di situs dalam hitungan detik.
    </p>
    <ul className="hris-dashboard__links">
      {getQuickLinks().map((link) => (
        <li key={link.label}>
          {link.isExternal ? (
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ) : (
            <Link href={link.href}>{link.label}</Link>
          )}
          <span>{link.description}</span>
        </li>
      ))}
    </ul>
  </section>
)
