import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidateLanding } from '../../../utilities/revalidate-landing'

import type { Post } from '../../../payload-types'

const POST_CACHE_TAGS = ['posts', 'posts-sitemap']

const getPostPath = (slug?: string | null) => `/posts/${slug}`

export const revalidatePost: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = getPostPath(doc.slug)

      payload.logger.info(`Revalidating post at path: ${path}`)

      void revalidateLanding(payload.logger, { paths: [path], tags: POST_CACHE_TAGS })
    }

    // If the post was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = getPostPath(previousDoc.slug)

      payload.logger.info(`Revalidating old post at path: ${oldPath}`)

      void revalidateLanding(payload.logger, { paths: [oldPath], tags: POST_CACHE_TAGS })
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Post> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    void revalidateLanding(payload.logger, {
      paths: [getPostPath(doc?.slug)],
      tags: POST_CACHE_TAGS,
    })
  }

  return doc
}
