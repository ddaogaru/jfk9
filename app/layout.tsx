import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import ScrollIndicator from '@/components/ui/scroll-indicator';
import PerformanceMonitor from '@/components/performance-monitor';
import ServiceWorkerRegister from '@/components/service-worker-register';
import { Toaster } from '@/components/ui/sonner';
import { siteConfig } from '@/config/site';
import { LOCAL_BUSINESS_SCHEMA, ORGANIZATION_SCHEMA } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

import '@/styles/globals.css';
import '@/styles/custom.css';
import 'sonner/dist/styles.css';

// Google Tag Manager Container ID. To enable tracking, set NEXT_PUBLIC_GTM_CONTAINER_ID.
const GTM_CONTAINER_ID = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID ?? 'GTM-KPM94DCS';
const IS_PROD = process.env.NODE_ENV === 'production';
const SHOULD_LOAD_GTM = IS_PROD && GTM_CONTAINER_ID.length > 0;

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  '@id': `${siteConfig.url}/#logo`,
  url: `${siteConfig.url}/joint_forces_k9_logo.webp`,
  width: 500,
  height: 500,
  caption: 'Joint Forces K9 Group Logo',
  inLanguage: 'en-US',
} as const;

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: 'Joint Forces K9 Group' }],
  creator: 'Joint Forces K9 Group',
  publisher: 'Joint Forces K9 Group',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.jointforcesk9.com',
  },
  openGraph: {
    title: 'Expert Dog Training & Boarding in NWA | Joint Forces K9',
    description: "Northwest Arkansas' leading dog training experts. We offer obedience, aggression rehab, protection, and service dog training, plus premium boarding. Contact us today!",
    url: 'https://www.jointforcesk9.com',
    siteName: 'Joint Forces K9 Group',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/autumn.webp',
        alt: 'Dog training and boarding at Joint Forces K9 in Northwest Arkansas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Dog Training & Boarding in NWA | Joint Forces K9',
    description: "Northwest Arkansas' leading dog training experts. We offer obedience, aggression rehab, protection, and service dog training, plus premium boarding. Contact us today!",
    images: ['/autumn.webp'],
  }
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
  <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        
        {/* Critical resource preloading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
  <link rel="dns-prefetch" href="//fonts.googleapis.com" />
  <link rel="dns-prefetch" href="//fonts.gstatic.com" />
  <link rel="dns-prefetch" href="//www.googletagmanager.com" />
  <link rel="dns-prefetch" href="//www.google-analytics.com" />
  <link rel="dns-prefetch" href="//www.instagram.com" />
  <link rel="dns-prefetch" href="//www.facebook.com" />
        
    {/* Preconnect to GA endpoints for faster tag load */}
  <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
  <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        
        {/* Manifest for PWA capabilities */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0A3161" />
        <meta name="msapplication-TileColor" content="#0A3161" />
        
        {/* Apple touch icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        
        {/* Advanced SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Joint Forces K9" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="language" content="en-US" />
        <meta name="geo.region" content="US-AR" />
    <meta name="geo.placename" content="Siloam Springs" />
    <meta name="geo.position" content="36.1881;-94.5406" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />

        {/* Google Tag Manager - Consent Mode v2 (All permissions granted) */}
        {SHOULD_LOAD_GTM && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('consent', 'default', {
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted',
                    'ad_storage': 'granted',
                    'analytics_storage': 'granted',
                    'functionality_storage': 'granted',
                    'personalization_storage': 'granted',
                    'security_storage': 'granted'
                  });
                `
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
                `
              }}
            />
          </>
        )}
      </head>
      <body
        className={cn(
          'flex flex-col antialiased text-base text-foreground bg-background',
          inter.className,
        )}
      >
        {/* Google Tag Manager (noscript) */}
        {SHOULD_LOAD_GTM && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        {/* Skip Navigation for Accessibility */}
        <a
          href="#site-main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-navy text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {children}
        <ScrollIndicator />
        <PerformanceMonitor />
        <ServiceWorkerRegister />
        <Toaster />
      </body>
    </html>
  );
}
