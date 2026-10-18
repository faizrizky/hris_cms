import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
} from 'payload'

import { revalidateLanding } from '../utilities/revalidate-landing'

interface RevalidateTargets {
  tags: string[]
  paths?: string[]
}

/** Meminta landing membuang cache untuk dokumen koleksi yang berubah atau dihapus. */
export const createCollectionRevalidateHooks = ({ tags, paths = [] }: RevalidateTargets) => {
  const afterChange: CollectionAfterChangeHook = ({ doc, req: { payload, context } }) => {
    if (!context.disableRevalidate) {
      void revalidateLanding(payload.logger, { tags, paths })
    }

    return doc
  }

  const afterDelete: CollectionAfterDeleteHook = ({ doc, req: { payload, context } }) => {
    if (!context.disableRevalidate) {
      void revalidateLanding(payload.logger, { tags, paths })
    }

    return doc
  }

  return { afterChange: [afterChange], afterDelete: [afterDelete] }
}

/** Sama seperti di atas, untuk global (satu dokumen). */
export const createGlobalRevalidateHook = ({
  tags,
  paths = [],
}: RevalidateTargets): GlobalAfterChangeHook => {
  return ({ doc, req: { payload, context } }) => {
    if (!context.disableRevalidate) {
      void revalidateLanding(payload.logger, { tags, paths })
    }

    return doc
  }
}
