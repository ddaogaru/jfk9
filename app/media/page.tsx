import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import InstagramGallery from '@/components/instagram-gallery';

export const metadata: Metadata = {
  title: 'Media | Joint Forces K9',
  description:
    'Explore the Joint Forces K9 Group media featuring training sessions, boarding life, and our dedicated team in action.',
  alternates: { canonical: 'https://www.jointforcesk9.com/media' },
};

export default function MediaPage() {
  return (
    <PageShell>
      <InstagramGallery />
    </PageShell>
  );
}
