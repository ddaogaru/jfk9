import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import AboutSection from '@/components/about-section';
import CallToAction from '@/components/call-to-action';
import Testimonials from '@/components/testimonials';

const pageUrl = 'https://www.jointforcesk9.com/about';

export const metadata: Metadata = {
  title: 'About | Joint Forces K9',
  description:
    'Learn how Joint Forces K9 Group builds lasting partnerships between dogs and their owners through proven training programs in Northwest Arkansas.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'About | Joint Forces K9',
    description:
      'Learn how Joint Forces K9 Group builds lasting partnerships between dogs and their owners through proven training programs in Northwest Arkansas.',
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

export default function AboutPage() {
  return (
    <PageShell>
      <AboutSection />
      <CallToAction />
      <Testimonials />
    </PageShell>
  );
}
