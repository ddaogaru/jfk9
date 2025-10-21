import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import InstagramGallery from '@/components/instagram-gallery';

const pageUrl = 'https://www.jointforcesk9.com/media';

export const metadata: Metadata = {
  title: 'Media | Joint Forces K9',
  description:
    'Explore the Joint Forces K9 Group media featuring training sessions, boarding life, and our dedicated team in action.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Media | Joint Forces K9',
    description:
      'Explore the Joint Forces K9 Group media featuring training sessions, boarding life, and our dedicated team in action.',
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

export default function MediaPage() {
  return (
    <PageShell>
      <InstagramGallery />
    </PageShell>
  );
}
