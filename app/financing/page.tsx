import type { Metadata } from 'next';
import HomeRoot from '@/components/home-root';
import ScrollToSection from '@/components/scroll-to-section';

export const metadata: Metadata = {
  title: 'Training Financing Options | Joint Forces K9',
  alternates: { canonical: 'https://www.jointforcesk9.com/financing' },
};

export default function FinancingPage() {
  return (
    <>
      <ScrollToSection targetId="financing" />
      <HomeRoot />
    </>
  );
}
