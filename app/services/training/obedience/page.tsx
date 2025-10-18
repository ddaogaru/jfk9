import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Services from '@/components/services';
import CallToAction from '@/components/call-to-action';

const pageUrl = 'https://www.jointforcesk9.com/services/training/obedience';

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
