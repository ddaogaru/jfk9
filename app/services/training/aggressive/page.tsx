import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Services from '@/components/services';
import CallToAction from '@/components/call-to-action';

const pageUrl = 'https://www.jointforcesk9.com/services/training/aggressive';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.jointforcesk9.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.jointforcesk9.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Training', item: 'https://www.jointforcesk9.com/services' },
    { '@type': 'ListItem', position: 4, name: 'Aggressive Dog Training', item: pageUrl },
  ],
};

export const metadata: Metadata = {
  title: 'Aggressive Dog Training | Joint Forces K9',
  description:
    'See how Joint Forces K9 Group rehabilitates aggressive and reactive dogs through balanced, results-driven training programs.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Aggressive Dog Training | Joint Forces K9',
    description:
      'See how Joint Forces K9 Group rehabilitates aggressive and reactive dogs through balanced, results-driven training programs.',
    url: pageUrl,
  },
};

export default function AggressiveTrainingPage() {
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
          focusTrainingId="aggressive"
        />
      </Suspense>
      <CallToAction />
    </PageShell>
  );
}
