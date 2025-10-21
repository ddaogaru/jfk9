import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Hero from '@/components/hero-section';
import Testimonials from '@/components/testimonials';
import CallToAction from '@/components/call-to-action';
import { siteConfig } from '@/config/site';

const BUSINESS_SCHEMA_ID = 'https://www.jointforcesk9.com/#localbusiness';
const SERVICES_PAGE_URL = 'https://www.jointforcesk9.com/services';

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

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.jointforcesk9.com/#organization',
  name: 'Joint Forces K9 Group',
  legalName: 'Joint Forces K9 Group LLC',
  url: 'https://www.jointforcesk9.com',
  logo: {
    '@type': 'ImageObject',
    '@id': 'https://www.jointforcesk9.com/#logo',
    url: 'https://www.jointforcesk9.com/joint_forces_k9_logo.webp',
    width: 500,
    height: 500,
    caption: 'Joint Forces K9 Group Logo',
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://www.jointforcesk9.com/autumn.webp',
    width: 1200,
    height: 630,
  },
  description: siteConfig.description,
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
    latitude: 36.188806,
    longitude: -94.540361,
  },
  telephone: '479-802-0775',
  email: 'info@jointforcesk9.com',
  sameAs: [
    'https://www.facebook.com/JointForcesK9Group',
    'https://www.instagram.com/jointforcesk9',
  ],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 36.188806,
      longitude: -94.540361,
    },
    geoRadius: '50000',
    description: 'Northwest Arkansas including Fayetteville, Springdale, Rogers, Bentonville, and surrounding communities',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dog Training and Boarding Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dog Boarding',
          description: 'Professional dog boarding services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dog Training',
          description: 'Comprehensive dog training programs',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Narcotics Detection Training',
          description: 'Professional K9 detection training',
        },
      },
    ],
  },
  priceRange: '$$',
};

const SERVICES_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SERVICES_PAGE_URL}#dog-boarding`,
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
        url: SERVICES_PAGE_URL,
      },
    },
    {
      '@type': 'Service',
      '@id': `${SERVICES_PAGE_URL}#dog-training`,
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
          url: SERVICES_PAGE_URL,
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
          url: SERVICES_PAGE_URL,
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SERVICES_PAGE_URL}#narcotics-detection`,
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

export default function HomePage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_STRUCTURED_DATA) }}
      />
      <Hero />
      <Testimonials />
      <CallToAction />
    </PageShell>
  );
}
