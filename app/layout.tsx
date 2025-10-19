import { ReactNode, Suspense } from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
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
import 'sonner/dist/styles.css';

// Google Analytics 4 (gtag) ID. Falls back to the provided site tag if env not set.
// To override per environment, set NEXT_PUBLIC_GA_MEASUREMENT_ID.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-1LRLX1793N';
const IS_PROD = process.env.NODE_ENV === 'production';

const STRUCTURED_DATA = {
  '@type': 'ImageObject',
  url: `${siteConfig.url}/joint_forces_k9_logo.webp`
};

export const metadata = {
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
          'flex flex-col antialiased text-base text-foreground bg-background',
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
                  ad_user_data: 'granted',
                  ad_personalization: 'granted',
                  ad_storage: 'granted',
                  analytics_storage: 'granted',
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
