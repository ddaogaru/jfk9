import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.jointforcesk9.com'
  const lastMod = new Date('2025-10-21')

  return [
    {
      url: baseUrl,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/boarding`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/training/obedience`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/training/aggressive`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/training/protection`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/training/service`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/detection`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/memberships`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/media`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/financing`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
