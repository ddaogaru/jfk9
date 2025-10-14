import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import Script from 'next/script';
import ScrollIndicator from '@/components/ui/scroll-indicator';
import PerformanceMonitor from '@/components/performance-monitor';
import ServiceWorkerRegister from '@/components/service-worker-register';

const inter = Inter({ subsets: ['latin'] });

import '@/styles/globals.css';
import '@/styles/spacing.css';
import '@/styles/sections.css';
import '@/styles/dividers.css';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.jointforcesk9.com/#localbusiness',
  name: 'Joint Forces K9 Group',
  description:
    "Northwest Arkansas' leading dog training experts. We offer obedience, aggression rehab, protection, and service dog training, plus premium boarding.",
  url: 'https://www.jointforcesk9.com',
  logo: 'https://www.jointforcesk9.com/Joint_Forces_K9_Group_Logo.svg',
  image: 'https://www.jointforcesk9.com/Joint_Forces_K9_Group_Logo.svg',
  telephone: '+1-479-802-0775',
  email: 'info@jointforcesk9.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17606 Highway 16',
    addressLocality: 'Siloam Springs',
    addressRegion: 'AR',
    postalCode: '72761',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '36.1881',
    longitude: '-94.5406',
  },
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-17:00'],
  priceRange: '$$',
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '36.1881',
      longitude: '-94.5406',
    },
    geoRadius: '50000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dog Training Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dog Training',
          description:
            'Professional dog training services including obedience, aggression rehab, and protection training',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dog Boarding',
          description:
            'Premium boarding services with climate-controlled kennels and 24/7 supervision',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Narcotics Detection',
          description:
            'Professional K9 narcotics detection services for businesses, schools, and venues',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '50',
  },
} as const;

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jointforcesk9.com'),
  title: {
    template: '%s | Joint Forces K9',
    default: 'Expert Dog Training & Boarding in NWA | Joint Forces K9',
  },
  description: "Northwest Arkansas' leading dog training experts. We offer obedience, aggression rehab, protection, and service dog training, plus premium boarding. Contact us today!",
  keywords: [
    'dog training',
    'dog boarding',
    'Northwest Arkansas',
    'Siloam Springs',
    'K9 training',
    'narcotics detection',
    'protection dogs',
    'service dogs',
    'aggressive dog training',
    'dog behavior modification'
  ],
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
        url: '/Joint_Forces_K9_Group_Logo.svg',
        width: 336,
        height: 101,
        alt: 'Joint Forces K9 Group Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Dog Training & Boarding in NWA | Joint Forces K9',
    description: "Northwest Arkansas' leading dog training experts. We offer obedience, aggression rehab, protection, and service dog training, plus premium boarding. Contact us today!",
    images: ['/Joint_Forces_K9_Group_Logo.svg'],
  },
  verification: GOOGLE_SITE_VERIFICATION
    ? {
        google: GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html className="h-full" lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        
        {/* Critical resource preloading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
  <link rel="dns-prefetch" href="//fonts.googleapis.com" />
  <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
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
      </head>
      <body
        className={cn(
          'antialiased text-base text-foreground bg-background',
          inter.className,
        )}
      >
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        
        {/* Skip Navigation for Accessibility */}
        <a 
          href="#main" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#0A3161] text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        <TooltipProvider>
          {children}
          <ScrollIndicator />
          <PerformanceMonitor />
          <ServiceWorkerRegister />
        </TooltipProvider>
      </body>
    </html>
  );
}
