import type { Metadata } from 'next';
import HomeRoot from '@/components/home-root';
import ScrollToSection from '@/components/scroll-to-section';

export const metadata: Metadata = {
  title: 'FAQ | Joint Forces K9',
  alternates: { canonical: 'https://www.jointforcesk9.com/faq' },
};

export default function FaqPage() {
  return (
    <>
      <ScrollToSection targetId="faq" />
      <HomeRoot />
    </>
  );
}
