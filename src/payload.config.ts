import { postgresAdapter } from '@payloadcms/db-postgres'
import sharp from 'sharp'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { id as indonesian } from '@payloadcms/translations/languages/id'

import { Features } from './collections/features'
import { Leads } from './collections/leads'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Solutions } from './collections/solutions'
import { Testimonials } from './collections/testimonials'
import { Users } from './collections/Users'
import { Home } from './globals/home'
import { PageCopy } from './globals/page-copy'
import { AboutPage, PricingPage } from './globals/page-contents'
import { SiteSettings } from './globals/site-settings'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getLandingURL, getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    theme: 'light',
    components: {
      graphics: {
        Logo: '@/components/admin/brand-logo#BrandLogo',
        Icon: '@/components/admin/brand-icon#BrandIcon',
      },
      beforeLogin: ['@/components/admin/before-login#BeforeLogin'],
      beforeDashboard: ['@/components/admin/before-dashboard#BeforeDashboard'],
    },
    meta: {
      titleSuffix: ' · HRIS CMS',
      description: 'Kelola konten situs HRIS.',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  collections: [Pages, Features, Solutions, Testimonials, Leads, Media, Users],
  serverURL: getServerSideURL(),
  cors: [getLandingURL()],
  csrf: [getLandingURL()],
  globals: [SiteSettings, Home, PageCopy, PricingPage, AboutPage],
  i18n: { supportedLanguages: { id: indonesian }, fallbackLanguage: 'id' },
  plugins,
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        const secret = process.env.CRON_SECRET
        if (!secret) return false

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${secret}`
      },
    },
    tasks: [],
  },
})
