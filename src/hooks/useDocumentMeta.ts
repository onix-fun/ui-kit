import { useEffect } from 'react'

const SITE_NAME = 'ONIX'
const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '')

export interface DocumentMeta {
  title: string
  description: string
  /** Route path without the GitHub Pages base (for example `/about`). */
  path: string
  noindex?: boolean
}

function absoluteUrl(path: string): string {
  return new URL(path || '/', window.location.origin).href
}

function routeUrl(path: string): string {
  const normalized = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`
  return `${BASE_PATH}${normalized}`
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

export function useDocumentMeta({ title, description, path, noindex = false }: DocumentMeta): void {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`
    const url = absoluteUrl(routeUrl(path))
    const image = absoluteUrl(`${BASE_PATH}/og-image.svg`)

    document.title = fullTitle
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image)
    upsertMeta('name', 'twitter:card', 'summary_large_image')

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [description, noindex, path, title])
}
