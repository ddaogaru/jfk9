import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Testimonials from '@/components/testimonials';

const pageUrl = 'https://www.jointforcesk9.com/testimonials';

export const metadata: Metadata = {
  title: 'Client Testimonials | Joint Forces K9',
  description:
    'Hear from Joint Forces K9 Group clients about their experience with our dog training, boarding, and detection services.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Client Testimonials | Joint Forces K9',
    description:
      'Hear from Joint Forces K9 Group clients about their experience with our dog training, boarding, and detection services.',
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

export default function TestimonialsPage() {
  return (
    <PageShell>
      <Testimonials />
    </PageShell>
  );
}
