import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Services from '@/components/services';
import CallToAction from '@/components/call-to-action';

const pageUrl = 'https://www.jointforcesk9.com/financing';

export const metadata: Metadata = {
  title: 'Training Financing Options | Joint Forces K9',
  description:
    'Review financing partners and monthly payment options available for Joint Forces K9 Group training programs.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Training Financing Options | Joint Forces K9',
    description:
      'Review financing partners and monthly payment options available for Joint Forces K9 Group training programs.',
    url: pageUrl,
    type: 'website',
    images: [
      {
        url: 'https://www.jointforcesk9.com/joint_forces_k9_logo.webp',
        width: 1200,
        height: 630,
        alt: 'Joint Forces K9 Group Logo',
      },
    ],
  },
};

export default function FinancingPage() {
  return (
    <PageShell>
      <Suspense fallback={null}>
        <Services initialService="training" visibleServices={['training']} focusTrainingId="financing" />
      </Suspense>
      <CallToAction />
    </PageShell>
  );
}
