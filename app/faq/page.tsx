import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import FAQ from '@/components/faq';
import CallToAction from '@/components/call-to-action';

const pageUrl = 'https://www.jointforcesk9.com/faq';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Joint Forces K9',
  description:
    'Get answers to common questions about Joint Forces K9 Group\'s training programs, boarding services, and client experience in Northwest Arkansas.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Frequently Asked Questions | Joint Forces K9',
    description:
      'Get answers to common questions about Joint Forces K9 Group\'s training programs, boarding services, and client experience in Northwest Arkansas.',
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

export default function FaqPage() {
  return (
    <PageShell>
      <FAQ />
      <CallToAction />
    </PageShell>
  );
}
