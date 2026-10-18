import React from 'react'

/** Logo HRIS untuk layar login dan navigasi admin. Sama dengan ikon aplikasi mobile dan landing. */
export const BrandLogo: React.FC = () => (
  <span className="hris-logo" aria-label="HRIS CMS">
    <svg aria-hidden width="36" height="36" viewBox="0 0 1024 1024">
      <defs>
        <linearGradient id="admin-logo-latar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2490EF" />
          <stop offset="1" stopColor="#1B6FC9" />
        </linearGradient>
      </defs>
      <rect width="1024" height="1024" rx="230" fill="url(#admin-logo-latar)" />
      <rect x="300" y="292" width="86" height="440" rx="43" fill="#fff" />
      <rect x="638" y="292" width="86" height="440" rx="43" fill="#fff" />
      <rect x="386" y="498" width="252" height="84" fill="#fff" />
      <circle cx="512" cy="372" r="54" fill="#fff" />
    </svg>
    <span>HRIS</span>
  </span>
)
