import type { Payload } from 'payload'

import { getLandingURL } from './getURL'

const REVALIDATE_TIMEOUT_MS = 5000

export interface RevalidateTargets {
  paths?: string[]
  tags?: string[]
}

/**
 * Meminta hris-landing membuang cache halaman/tag yang berubah.
 * Gagal tidak boleh menggagalkan penyimpanan di CMS, jadi hanya dicatat di log.
 */
export const revalidateLanding = async (
  logger: Payload['logger'],
  targets: RevalidateTargets,
): Promise<void> => {
  const secret = process.env.REVALIDATE_SECRET

  if (!secret) {
    logger.warn('REVALIDATE_SECRET belum diisi, revalidate landing dilewati')
    return
  }

  try {
    const response = await fetch(`${getLandingURL()}/api/revalidate`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-revalidate-secret': secret },
      body: JSON.stringify(targets),
      signal: AbortSignal.timeout(REVALIDATE_TIMEOUT_MS),
    })

    if (!response.ok) {
      logger.error(`Revalidate landing gagal dengan status ${response.status}`)
    }
  } catch (error) {
    logger.error({ err: error }, 'Revalidate landing gagal')
  }
}
