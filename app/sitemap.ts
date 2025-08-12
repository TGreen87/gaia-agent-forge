export const dynamic = 'force-static'

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://greenaiautomation.ai'
  const now = new Date()
  const pages = ['/', '/services', '/why-gaia', '/projects', '/learning-hub', '/about', '/contact']
  return pages.map((p) => ({ url: `${base}${p}`, lastModified: now, changeFrequency: 'weekly', priority: p === '/' ? 1 : 0.7 }))
}


