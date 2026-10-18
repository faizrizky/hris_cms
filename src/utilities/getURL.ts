import canUseDOM from './canUseDOM'

const DEFAULT_CMS_URL = 'http://localhost:3001'
const DEFAULT_LANDING_URL = 'http://localhost:3000'

/** Alamat hris-cms (aplikasi ini). */
export const getServerSideURL = () => process.env.NEXT_PUBLIC_SERVER_URL || DEFAULT_CMS_URL

export const getClientSideURL = () => {
  if (canUseDOM) {
    const protocol = window.location.protocol
    const domain = window.location.hostname
    const port = window.location.port

    return `${protocol}//${domain}${port ? `:${port}` : ''}`
  }

  return process.env.NEXT_PUBLIC_SERVER_URL || ''
}

/** Alamat situs hris-landing, tujuan preview dan revalidate. */
export const getLandingURL = () => process.env.LANDING_URL || DEFAULT_LANDING_URL
