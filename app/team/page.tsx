import type { Metadata } from 'next';
import HomeRoot from '@/components/home-root';
import ScrollToSection from '@/components/scroll-to-section';

export const metadata: Metadata = {
  title: 'Meet the Team | Joint Forces K9',
  alternates: { canonical: 'https://www.jointforcesk9.com/team' },
};

export default function TeamPage() {
  return (
    <>
      <ScrollToSection targetId="team" />
      <HomeRoot />
    </>
  );
}
