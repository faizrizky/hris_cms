'use client'

import type { ReactNode } from 'react'

import { useDomScan } from './useDomScan'

/** The page trail from Payload's top-bar breadcrumb (without the home icon). */
function pageTrail(): string[] {
  const nav = document.querySelector('.app-header .step-nav')
  if (!nav) return []
  return [...nav.querySelectorAll(':scope > a:not(.step-nav__home), :scope > .step-nav__last')]
    .map((el) => el.textContent?.trim() ?? '')
    .filter(Boolean)
}

function decorate(header: HTMLElement) {
  header.setAttribute('data-crumbs', '')
  const trail = pageTrail()
  if (trail.length === 0) return

  const crumbs = document.createElement('nav')
  crumbs.className = 'hris-drawer-crumbs'
  crumbs.setAttribute('aria-label', 'Breadcrumb')
  trail.forEach((label, index) => {
    if (index > 0) {
      const separator = document.createElement('span')
      separator.className = 'hris-drawer-crumbs__sep'
      separator.setAttribute('aria-hidden', 'true')
      separator.textContent = '›'
      crumbs.appendChild(separator)
    }
    const item = document.createElement('span')
    item.className = 'hris-drawer-crumbs__item'
    item.textContent = label
    item.title = label
    crumbs.appendChild(item)
  })
  header.prepend(crumbs)
}

const scanDrawers = () => {
  document
    .querySelectorAll<HTMLElement>('.drawer .drawer__header:not([data-crumbs])')
    .forEach(decorate)
}
/**
 * Admin-wide provider: every drawer (image sizes, related documents, pickers)
 * gets a breadcrumb of the page it was opened from above its title, so it's
 * clear where you are.
 */
export function DrawerBreadcrumbsProvider({ children }: { children: ReactNode }) {
  useDomScan(scanDrawers)

  return children
}
