import type { Metadata } from 'next';
import HomeRoot from '@/components/home-root';
import ScrollToSection from '@/components/scroll-to-section';

export const metadata: Metadata = {
  title: 'About | Joint Forces K9',
  alternates: { canonical: 'https://www.jointforcesk9.com/about' },
};

export default function AboutPage() {
  return (
    <>
      <ScrollToSection targetId="about" />
      <HomeRoot />
    </>
  );
}
