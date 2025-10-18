import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import AboutSection from '@/components/about-section';
import Testimonials from '@/components/testimonials';

export const metadata: Metadata = {
  title: 'About | Joint Forces K9',
  description:
    'Learn how Joint Forces K9 Group builds lasting partnerships between dogs and their owners through proven training programs in Northwest Arkansas.',
  alternates: { canonical: 'https://www.jointforcesk9.com/about' },
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutSection />
      <Testimonials />
    </PageShell>
  );
}
