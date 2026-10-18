import { PayloadRequest, CollectionSlug } from 'payload'

import { getLandingURL } from './getURL'

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  pages: '',
  features: '/fitur',
  solutions: '/solusi',
}

type Props = {
  collection: keyof typeof collectionPrefixMap
  slug: string
  req: PayloadRequest
}

export const generatePreviewPath = ({ collection, slug }: Props) => {
  if (slug === undefined || slug === null) {
    return null
  }

  // Encode to support slugs with special characters
  const encodedSlug = encodeURIComponent(slug)

  const encodedParams = new URLSearchParams({
    path: `${collectionPrefixMap[collection]}/${encodedSlug}`,
    previewSecret: process.env.PREVIEW_SECRET || '',
  })

  return `${getLandingURL()}/next/preview?${encodedParams.toString()}`
}
