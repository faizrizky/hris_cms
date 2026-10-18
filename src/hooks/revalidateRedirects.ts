import type { CollectionAfterChangeHook } from 'payload'

import { revalidateLanding } from '../utilities/revalidate-landing'

export const revalidateRedirects: CollectionAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating redirects`)

  void revalidateLanding(payload.logger, { tags: ['redirects'] })

  return doc
}
