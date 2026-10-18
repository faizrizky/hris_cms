import React from 'react'

/** Logotype HRIS untuk layar login dan navigasi admin. Sama dengan di landing: kata tebal dan satu titik biru. */
export const BrandLogo: React.FC = () => (
  <span className="hris-logo" aria-label="HRIS CMS">
    HRIS<span aria-hidden className="hris-logo__dot" />
  </span>
)
