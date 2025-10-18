import { ReactNode, Suspense } from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import Script from 'next/script';
import ScrollIndicator from '@/components/ui/scroll-indicator';
import PerformanceMonitor from '@/components/performance-monitor';
import ServiceWorkerRegister from '@/components/service-worker-register';
import { Toaster } from '@/components/ui/sonner';
import GaPageView from '@/components/ga-pageview';
import ConsentManager from '@/components/consent-manager';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

import '@/styles/globals.css';

// Google Analytics 4 (gtag) ID. Falls back to the provided site tag if env not set.
// To override per environment, set NEXT_PUBLIC_GA_MEASUREMENT_ID.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-1LRLX1793N';
const IS_PROD = process.env.NODE_ENV === 'production';
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const SITE_HOSTNAME = new URL(siteConfig.url).hostname;

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/joint_forces_k9_logo.webp`,
      },
      sameAs: [
        'https://www.facebook.com/jointforcesk9group',
        'https://www.instagram.com/jointforcesk9group',
        'https://www.tiktok.com/@jointforcesk9group',
        'https://www.youtube.com/@jointforcesk9group',
        'https://share.google/tNUdTFw6JukgP7Eq5',
        'https://www.bbb.org/us/ar/siloam-springs/profile/dog-training/joint-forces-k-9-group-llc-0935-90374725',
        'https://www.trustindex.io/reviews/www.jointforcesk9.com',
        'https://www.yelp.com/biz/joint-forces-k9-group-siloam-springs',
        'https://www.linkedin.com/company/jointforcesk9group/',
        'https://www.bing.com/maps?&ty=18&q=joint%20forces%20k9&ss=ypid.YN873x12836788812944662957&mb=36.120986~-94.437071~36.109666~-94.416322&description=17606%20Highway%2016%2C%20Siloam%20Springs%2C%20AR%2072761%C2%B7Dog%20trainer&cardbg=%23DC5E62&dt=1760756400000&tt=Joint%20Forces%20K9%20Group&tsts0=%2526ty%253D18%2526q%253Djoint%252520forces%252520k9%2526ss%253Dypid.YN873x12836788812944662957%2526mb%253D36.120986~-94.437071~36.109666~-94.416322%2526description%253D17606%252520Highway%25252016%25252C%252520Siloam%252520Springs%25252C%252520AR%25252072761%2525C2%2525B7Dog%252520trainer%2526cardbg%253D%252523DC5E62%2526dt%253D1760756400000&tstt0=Joint%20Forces%20K9%20Group&cp=36.115326~-94.432018&lvl=16&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          telephone: '+1-479-802-0775',
          email: 'info@jointforcesk9.com',
          areaServed: 'US',
          availableLanguage: ['English'],
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      description:
        "Northwest Arkansas' leading dog training experts. We offer obedience, aggression rehab, protection, and service dog training, plus premium boarding.",
      url: siteConfig.url,
      logo: `${siteConfig.url}/joint_forces_k9_logo.webp`,
      image: [
        `${siteConfig.url}/joint_forces_k9_logo.webp`,
        `${siteConfig.url}/autumn.webp`,
      ],
      sameAs: [
        'https://www.facebook.com/jointforcesk9group',
        'https://www.instagram.com/jointforcesk9group',
        'https://www.tiktok.com/@jointforcesk9group',
        'https://www.youtube.com/@jointforcesk9group',
        'https://share.google/tNUdTFw6JukgP7Eq5',
        'https://www.bbb.org/us/ar/siloam-springs/profile/dog-training/joint-forces-k-9-group-llc-0935-90374725',
        'https://www.trustindex.io/reviews/www.jointforcesk9.com',
        'https://www.yelp.com/biz/joint-forces-k9-group-siloam-springs',
        'https://www.linkedin.com/company/jointforcesk9group/',
        'https://www.bing.com/maps?&ty=18&q=joint%20forces%20k9&ss=ypid.YN873x12836788812944662957&mb=36.120986~-94.437071~36.109666~-94.416322&description=17606%20Highway%2016%2C%20Siloam%20Springs%2C%20AR%2072761%C2%B7Dog%20trainer&cardbg=%23DC5E62&dt=1760756400000&tt=Joint%20Forces%20K9%20Group&tsts0=%2526ty%253D18%2526q%253Djoint%252520forces%252520k9%2526ss%253Dypid.YN873x12836788812944662957%2526mb%253D36.120986~-94.437071~36.109666~-94.416322%2526description%253D17606%252520Highway%25252016%25252C%252520Siloam%252520Springs%25252C%252520AR%25252072761%2525C2%2525B7Dog%252520trainer%2526cardbg%253D%252523DC5E62%2526dt%253D1760756400000&tstt0=Joint%20Forces%20K9%20Group&cp=36.115326~-94.432018&lvl=16&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027',
      ],
      hasMap: 'https://share.google/tNUdTFw6JukgP7Eq5',
      parentOrganization: { '@id': `${siteConfig.url}/#organization` },
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
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
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
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { '@id': `${siteConfig.url}/#organization` },
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: `https://www.google.com/search?q={search_term_string}+site%3A${SITE_HOSTNAME}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

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
  <link rel="dns-prefetch" href="//www.googletagmanager.com" />
  <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
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
      </head>
      <body
        className={cn(
          'antialiased text-base text-foreground bg-background',
          inter.className,
        )}
      >
        {IS_PROD && GA_MEASUREMENT_ID && (
          <>
            {/* Consent Mode v2 defaults (deny until user grants) */}
            <Script id="google-consent-default" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('consent', 'default', {
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  ad_storage: 'denied',
                  analytics_storage: 'denied',
                  functionality_storage: 'granted',
                  security_storage: 'granted'
                });
              `}
            </Script>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                if (typeof window.gtag !== 'function') {
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);} 
                }
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true, send_page_view: false });
              `}
            </Script>
            {/* Track client-side navigations in App Router (wrap for useSearchParams) */}
            <Suspense fallback={null}>
              <GaPageView measurementId={GA_MEASUREMENT_ID} />
            </Suspense>
            {/* Expose a global helper to update consent later (no UI) */}
            <ConsentManager />
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
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
