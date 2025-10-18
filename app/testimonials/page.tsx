import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Testimonials from '@/components/testimonials';

export const metadata: Metadata = {
  title: 'Client Testimonials | Joint Forces K9',
  description:
    'Hear from Joint Forces K9 Group clients about their experience with our dog training, boarding, and detection services.',
  alternates: { canonical: 'https://www.jointforcesk9.com/testimonials' },
};

export default function TestimonialsPage() {
  return (
    <PageShell>
      <Testimonials />
    </PageShell>
  );
}
