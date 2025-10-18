import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import InstagramGallery from '@/components/instagram-gallery';

export const metadata: Metadata = {
  title: 'Gallery | Joint Forces K9',
  description:
    'Browse the Joint Forces K9 Group gallery showcasing training sessions, boarding life, and our dedicated team in action.',
  alternates: { canonical: 'https://www.jointforcesk9.com/gallery' },
};

export default function GalleryPage() {
  return (
    <PageShell>
      <InstagramGallery />
    </PageShell>
  );
}
