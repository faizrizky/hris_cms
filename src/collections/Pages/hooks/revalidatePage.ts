import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidateLanding } from '../../../utilities/revalidate-landing'

import type { Page } from '../../../payload-types'

const HOME_SLUG = 'home'
const PAGE_CACHE_TAGS = ['pages', 'pages-sitemap']

const getPagePath = (slug?: string | null) => (slug === HOME_SLUG ? '/' : `/${slug}`)

export const revalidatePage: CollectionAfterChangeHook<Page> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = getPagePath(doc.slug)

      payload.logger.info(`Revalidating page at path: ${path}`)

      void revalidateLanding(payload.logger, { paths: [path], tags: PAGE_CACHE_TAGS })
    }

    // If the page was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = getPagePath(previousDoc.slug)

      payload.logger.info(`Revalidating old page at path: ${oldPath}`)

      void revalidateLanding(payload.logger, { paths: [oldPath], tags: PAGE_CACHE_TAGS })
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Page> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    void revalidateLanding(payload.logger, {
      paths: [getPagePath(doc?.slug)],
      tags: PAGE_CACHE_TAGS,
    })
  }

  return doc
}
