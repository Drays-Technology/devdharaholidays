import { useEffect } from 'react'
import { BUSINESS_NAME, SITE_URL } from '../data/env'

interface SeoOptions {
  title: string
  description: string
  path?: string
  image?: string
  structuredData?: Record<string, unknown>
}

const DEFAULT_IMAGE = '/images/places/detail/lahaul-spiti.jpg'

function normalizeBaseUrl() {
  const envUrl = SITE_URL?.trim()
  if (envUrl) return envUrl.replace(/\/+$/, '')
  if (typeof window !== 'undefined') return window.location.origin
  return ''
}

function toAbsoluteUrl(url: string) {
  if (!url) return url
  if (/^https?:\/\//i.test(url)) return url
  const baseUrl = normalizeBaseUrl()
  return baseUrl ? `${baseUrl}${url.startsWith('/') ? url : `/${url}`}` : url
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attributes).forEach(([key, value]) => el!.setAttribute(key, value))
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    document.head.appendChild(el)
  }
  Object.entries(attributes).forEach(([key, value]) => el!.setAttribute(key, value))
}

export function useSeo({ title, description, path = '/', image = DEFAULT_IMAGE, structuredData }: SeoOptions) {
  useEffect(() => {
    const pageTitle = title.includes(BUSINESS_NAME) ? title : `${title} | ${BUSINESS_NAME}`
    const canonicalUrl = toAbsoluteUrl(path)
    const imageUrl = toAbsoluteUrl(image)

    document.title = pageTitle

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl })

    const existingJsonLd = document.getElementById('route-jsonld')
    if (structuredData) {
      const script = existingJsonLd ?? document.createElement('script')
      script.id = 'route-jsonld'
      script.setAttribute('type', 'application/ld+json')
      script.textContent = JSON.stringify(structuredData)
      if (!existingJsonLd) document.head.appendChild(script)
    } else if (existingJsonLd) {
      existingJsonLd.remove()
    }
  }, [description, image, path, structuredData, title])
}
