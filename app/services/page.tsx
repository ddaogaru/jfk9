import type { Metadata } from 'next';
import HomeRoot from '@/components/home-root';
import ScrollToSection from '@/components/scroll-to-section';

export const metadata: Metadata = {
  title: 'Services | Joint Forces K9',
  alternates: { canonical: 'https://www.jointforcesk9.com/services' },
};

export default function ServicesAnchorPage() {
  return (
    <>
      <ScrollToSection targetId="services" />
      <HomeRoot />
    </>
  );
}
