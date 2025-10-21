import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import CallToAction from '@/components/call-to-action';
import ContactForm from '@/components/contact-form';

const pageUrl = 'https://www.jointforcesk9.com/contact';

export const metadata: Metadata = {
  title: 'Contact Us | Joint Forces K9',
  description:
    'Reach out to Joint Forces K9 Group to schedule a consultation, ask about training programs, or book boarding for your dog.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Contact Us | Joint Forces K9',
    description:
      'Reach out to Joint Forces K9 Group to schedule a consultation, ask about training programs, or book boarding for your dog.',
    url: pageUrl,
    type: 'website',
    images: [
      {
        url: 'https://www.jointforcesk9.com/joint_forces_k9_logo.webp',
        width: 1200,
        height: 630,
        alt: 'Joint Forces K9 Group Logo',
      },
    ],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.jointforcesk9.com/#localbusiness',
  name: 'Joint Forces K9 Group',
  alternateName: 'Joint Forces K9',
  description: 'Professional dog training and boarding services in Northwest Arkansas. Specializing in obedience training, aggressive dog rehabilitation, protection training, service dog training, and narcotics detection.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.jointforcesk9.com/joint_forces_k9_logo.webp',
    width: 500,
    height: 500,
  },
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.jointforcesk9.com/joint_forces_k9_logo.webp',
    width: 500,
    height: 500,
  },
  url: 'https://www.jointforcesk9.com',
  telephone: '479-802-0775',
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
    latitude: 36.188806,
    longitude: -94.540361,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '12:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/JointForcesK9Group',
    'https://www.instagram.com/jointforcesk9group',
  ],
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  currenciesAccepted: 'USD',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 36.188806,
      longitude: -94.540361,
    },
    geoRadius: '50000',
    description: 'Northwest Arkansas including Fayetteville, Springdale, Rogers, Bentonville, Siloam Springs, and surrounding communities',
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
          description: 'Professional dog boarding with climate-controlled kennels',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Obedience Training',
          description: 'Comprehensive obedience training for all breeds',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Aggressive Dog Training',
          description: 'Specialized training for aggressive dog behavior',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Protection Dog Training',
          description: 'Professional protection sport training',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Service Dog Training',
          description: 'Service dog training and task work',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Narcotics Detection Training',
          description: 'Professional K9 narcotics detection training',
        },
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <CallToAction />
      <ContactForm />
    </PageShell>
  );
}
