import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Services from '@/components/services';
import CallToAction from '@/components/call-to-action';

const pageUrl = 'https://www.jointforcesk9.com/services/training/protection';

export const metadata: Metadata = {
  title: 'Protection Dog Training | Joint Forces K9',
  description:
    'Explore protection dog training options from Joint Forces K9 Group, including foundational work and advanced sport preparation.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Protection Dog Training | Joint Forces K9',
    description:
      'Explore protection dog training options from Joint Forces K9 Group, including foundational work and advanced sport preparation.',
    url: pageUrl,
  },
};

export default function ProtectionTrainingPage() {
  return (
    <PageShell>
      <Suspense fallback={null}>
        <Services
          initialService="training"
          visibleServices={['training']}
          focusTrainingId="protection"
        />
      </Suspense>
      <CallToAction />
    </PageShell>
  );
}
