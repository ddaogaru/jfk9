import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Services from '@/components/services';
import CallToAction from '@/components/call-to-action';

export const metadata: Metadata = {
  title: 'Training Financing Options | Joint Forces K9',
  description:
    'Review financing partners and monthly payment options available for Joint Forces K9 Group training programs.',
  alternates: { canonical: 'https://www.jointforcesk9.com/financing' },
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
