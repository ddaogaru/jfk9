import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Services from '@/components/services';
import CallToAction from '@/components/call-to-action';

const pageUrl = 'https://www.jointforcesk9.com/services/training/aggressive';

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
