import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import type { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import type { Plugin } from 'payload'

import type { Page } from '@/payload-types'
import { revalidateRedirects } from '@/hooks/revalidateRedirects'
import { getLandingURL } from '@/utilities/getURL'

const generateTitle: GenerateTitle<Page> = ({ doc }) => (doc?.title ? `${doc.title} | HRIS` : 'HRIS')

const generateURL: GenerateURL<Page> = ({ doc }) => {
  const url = getLandingURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  redirectsPlugin({
    collections: ['pages'],
    overrides: {
      // @ts-expect-error - override valid, tipe field hasil mapping tidak identik
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'Perubahan baru terlihat di landing setelah cache dibuang (otomatis saat disimpan).',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  seoPlugin({
    generateTitle,
    generateURL,
  }),
]
