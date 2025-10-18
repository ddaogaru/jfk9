import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Services from '@/components/services';
import CallToAction from '@/components/call-to-action';

const pageUrl = 'https://www.jointforcesk9.com/services/training';

export const metadata: Metadata = {
  title: 'Professional Dog Training Programs | Joint Forces K9',
  description:
    'Explore Joint Forces K9 Group dog training programs, including obedience, aggression rehabilitation, protection, and service dog training in Northwest Arkansas.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Professional Dog Training Programs | Joint Forces K9',
    description:
      'Explore Joint Forces K9 Group dog training programs, including obedience, aggression rehabilitation, protection, and service dog training in Northwest Arkansas.',
    url: pageUrl,
  },
};

export default function TrainingPage() {
  return (
    <PageShell>
      <Suspense fallback={null}>
        <Services initialService="training" visibleServices={['training']} />
      </Suspense>
      <CallToAction />
    </PageShell>
  );
}
