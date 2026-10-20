// Menyalin semua file di folder ./media (media lokal, termasuk ukuran turunan) ke Vercel Blob.
// Nama file dipertahankan, karena database menyimpan nama file dan adapter Blob membentuk URL dari nama itu.
// Dipakai oleh copy-to-cloud.sh bila BLOB_READ_WRITE_TOKEN diisi (di .env.cloud atau environment).
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { extname, join } from 'node:path'

import { put } from '@vercel/blob'

const MEDIA_DIR = 'media'
const CONTENT_TYPES = {
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.avif': 'image/avif',
  '.pdf': 'application/pdf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
}

const token = process.env.BLOB_READ_WRITE_TOKEN
if (!token) {
  console.error('BLOB_READ_WRITE_TOKEN is required')
  process.exit(1)
}

const files = readdirSync(MEDIA_DIR).filter((name) => statSync(join(MEDIA_DIR, name)).isFile())
let done = 0

for (const name of files) {
  await put(name, readFileSync(join(MEDIA_DIR, name)), {
    access: 'public',
    token,
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: CONTENT_TYPES[extname(name).toLowerCase()],
  })
  done += 1
  if (done % 20 === 0 || done === files.length) console.log(`  ${done}/${files.length}`)
}
