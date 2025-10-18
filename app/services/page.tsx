import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Services from '@/components/services';
import CallToAction from '@/components/call-to-action';

export const metadata: Metadata = {
  title: 'Dog Training & Boarding Services | Joint Forces K9',
  description:
    'Explore board and train, private lessons, boarding, and narcotics detection services from Joint Forces K9 Group in Northwest Arkansas.',
  alternates: { canonical: 'https://www.jointforcesk9.com/services' },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <Suspense fallback={null}>
        <Services />
      </Suspense>
      <CallToAction />
    </PageShell>
  );
}
