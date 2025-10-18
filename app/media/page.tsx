import type { Metadata } from 'next';
import HomeRoot from '@/components/home-root';
import ScrollToSection from '@/components/scroll-to-section';

export const metadata: Metadata = {
  title: 'Media | Joint Forces K9',
  alternates: { canonical: 'https://www.jointforcesk9.com/media' },
};

export default function MediaPage() {
  return (
    <>
      <ScrollToSection targetId="gallery" />
      <HomeRoot />
    </>
  );
}
