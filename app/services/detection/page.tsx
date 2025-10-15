
import ServicesWrapper from '@/components/services-wrapper';
import { Metadata } from 'next';

const pageUrl = 'https://www.jointforcesk9.com/services/detection';

export const metadata: Metadata = {
  title: 'Professional K9 Narcotics Detection Services | Joint Forces K9 Group',
  description:
    'Joint Forces K9 Group offers confidential narcotics detection with highly trained scent dogs and handlers. We serve schools, businesses, event venues, and homes. Contact us for proactive security.',
  openGraph: {
    title: 'Professional K9 Narcotics Detection Services | Joint Forces K9 Group',
    description:
      'Joint Forces K9 Group offers confidential narcotics detection with highly trained scent dogs and handlers. We serve schools, businesses, event venues, and homes. Contact us for proactive security.',
    url: pageUrl,
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function DetectionPage() {
  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Professional K9 Narcotics Detection Services',
    'description': 'Confidential narcotics detection services using highly trained scent detection dogs and experienced handlers. Services for schools, businesses, event venues, government facilities, and private residences.',
    'provider': {
      '@type': 'Organization',
      'name': 'Joint Forces K9 Group',
      'url': 'https://www.jointforcesk9.com',
      'logo': 'https://www.jointforcesk9.com/joint_forces_k9_logo.webp'
    },
    'serviceType': 'K9 Narcotics Detection',
    'url': pageUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD must be serialized as a string in the DOM
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <ServicesWrapper activeService="detection" />
    </>
  );
}
