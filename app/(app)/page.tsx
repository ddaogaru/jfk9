import type { Metadata } from 'next';
import HomeRoot from '@/components/home-root';
import ScrollToSection from '@/components/scroll-to-section';
import { siteConfig } from '@/config/site';

const BUSINESS_SCHEMA_ID = 'https://www.jointforcesk9.com/#localbusiness';

// Homepage-specific SEO metadata (merges with app/layout.tsx)
export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    type: 'website',
    siteName: siteConfig.name,
    images: [
      {
        url: '/autumn.webp',
        alt: 'Dog training and boarding at Joint Forces K9 in Northwest Arkansas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/autumn.webp'],
  },
};

const SERVICES_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.jointforcesk9.com/#service-dog-boarding',
      name: 'Dog Boarding',
      serviceType: 'Dog Boarding',
      description:
        'Camp-style dog boarding with climate-controlled kennels, daily enrichment, and attentive care for all breeds in Northwest Arkansas.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': BUSINESS_SCHEMA_ID,
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Northwest Arkansas',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '45',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'USD',
          price: '45',
          unitCode: 'DAY',
        },
        availability: 'https://schema.org/InStock',
        url: 'https://www.jointforcesk9.com/#services',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.jointforcesk9.com/#service-dog-training',
      name: 'Dog Training',
      serviceType: 'Dog Training',
      description:
        'Balanced dog training programs covering obedience, aggression rehabilitation, protection sport foundations, and service dog task work.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': BUSINESS_SCHEMA_ID,
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Northwest Arkansas',
      },
      offers: [
        {
          '@type': 'Offer',
          name: 'Board and Train',
          priceCurrency: 'USD',
          price: '950',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'USD',
            price: '950',
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              unitCode: 'WK',
              value: 1,
            },
          },
          availability: 'https://schema.org/InStock',
          url: 'https://www.jointforcesk9.com/#services',
        },
        {
          '@type': 'Offer',
          name: 'Private Lessons',
          priceCurrency: 'USD',
          price: '500',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'USD',
            price: '500',
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              unitCode: 'HUR',
              value: 4,
            },
          },
          availability: 'https://schema.org/LimitedAvailability',
          url: 'https://www.jointforcesk9.com/#services',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.jointforcesk9.com/#service-narcotics-detection',
      name: 'Narcotics Detection',
      serviceType: 'Narcotics Detection Training',
      description:
        'Professional K9 narcotics detection and handler certification programs for agencies, schools, and private organizations.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': BUSINESS_SCHEMA_ID,
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Northwest Arkansas',
      },
      hasCourse: [
        {
          '@type': 'Course',
          name: 'Basic Detection Training',
          description: 'Foundation scent discrimination, alert behavior, and handler communication skills for detection teams.',
        },
        {
          '@type': 'Course',
          name: 'Advanced Detection',
          description: 'Advanced target recognition, complex search areas, and environmental proofing for operational readiness.',
        },
        {
          '@type': 'Course',
          name: 'Certification Preparation',
          description: 'Scenario-based practice and documentation support for K9 handler certification exams.',
        },
      ],
    },
  ],
} as const;

export default function Page() {
  // Avoid touching window during SSR
  const hash = '';
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_STRUCTURED_DATA) }}
      />
      {hash && <ScrollToSection targetId={hash} />}
      <HomeRoot />
    </>
  );
}
