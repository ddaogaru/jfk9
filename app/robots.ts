import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'anthropic-ai', 'ClaudeBot', 'Claude-Web'],
        allow: '/',
      },
    ],
    sitemap: 'https://www.jointforcesk9.com/sitemap.xml',
  }
}
