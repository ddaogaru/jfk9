import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import FAQ from '@/components/faq';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Joint Forces K9',
  description:
    'Get answers to common questions about Joint Forces K9 Group’s training programs, boarding services, and client experience in Northwest Arkansas.',
  alternates: { canonical: 'https://www.jointforcesk9.com/faq' },
};

export default function FaqPage() {
  return (
    <PageShell>
      <FAQ />
    </PageShell>
  );
}
