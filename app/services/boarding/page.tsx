import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Services from '@/components/services';
import CallToAction from '@/components/call-to-action';

const pageUrl = 'https://www.jointforcesk9.com/services/boarding';

export const metadata: Metadata = {
  title: 'Dog Boarding in Northwest Arkansas | Joint Forces K9',
  description:
    'Discover camp-style dog boarding with climate-controlled kennels, daily enrichment, and attentive care at Joint Forces K9 Group in Northwest Arkansas.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Dog Boarding in Northwest Arkansas | Joint Forces K9',
    description:
      'Discover camp-style dog boarding with climate-controlled kennels, daily enrichment, and attentive care at Joint Forces K9 Group in Northwest Arkansas.',
    url: pageUrl,
  },
};

export default function BoardingPage() {
  return (
    <PageShell>
      <Suspense fallback={null}>
        <Services initialService="boarding" visibleServices={['boarding']} />
      </Suspense>
      <CallToAction />
    </PageShell>
  );
}
