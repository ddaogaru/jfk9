import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Services from '@/components/services';
import CallToAction from '@/components/call-to-action';

const pageUrl = 'https://www.jointforcesk9.com/services/training/obedience';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.jointforcesk9.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://www.jointforcesk9.com/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Training',
      item: 'https://www.jointforcesk9.com/services',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Obedience Training',
      item: pageUrl,
    },
  ],
};

export const metadata: Metadata = {
  title: 'Obedience Dog Training | Joint Forces K9',
  description:
    'Learn about obedience dog training packages from Joint Forces K9 Group, delivering real-world results for dogs across Northwest Arkansas.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Obedience Dog Training | Joint Forces K9',
    description:
      'Learn about obedience dog training packages from Joint Forces K9 Group, delivering real-world results for dogs across Northwest Arkansas.',
    url: pageUrl,
  },
};

export default function ObedienceTrainingPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Suspense fallback={null}>
        <Services
          initialService="training"
          visibleServices={['training']}
          focusTrainingId="obedience"
        />
      </Suspense>
      <CallToAction />
    </PageShell>
  );
}
