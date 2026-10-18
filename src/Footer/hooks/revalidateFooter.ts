import type { GlobalAfterChangeHook } from 'payload'

import { revalidateLanding } from '../../utilities/revalidate-landing'

export const revalidateFooter: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating footer`)

    void revalidateLanding(payload.logger, { tags: ['global_footer'] })
  }

  return doc
}
