import type { GlobalAfterChangeHook } from 'payload'

import { revalidateLanding } from '../../utilities/revalidate-landing'

export const revalidateHeader: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating header`)

    void revalidateLanding(payload.logger, { tags: ['global_header'] })
  }

  return doc
}
