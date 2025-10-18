import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Services from '@/components/services';
import CallToAction from '@/components/call-to-action';

const pageUrl = 'https://www.jointforcesk9.com/services/training/service';

export const metadata: Metadata = {
  title: 'Service Dog Training | Joint Forces K9',
  description:
    'Learn about service dog training from Joint Forces K9 Group, including task work and public access preparation for working dogs.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Service Dog Training | Joint Forces K9',
    description:
      'Learn about service dog training from Joint Forces K9 Group, including task work and public access preparation for working dogs.',
    url: pageUrl,
  },
};

export default function ServiceDogTrainingPage() {
  return (
    <PageShell>
      <Suspense fallback={null}>
        <Services
          initialService="training"
          visibleServices={['training']}
          focusTrainingId="service"
        />
      </Suspense>
      <CallToAction />
    </PageShell>
  );
}
