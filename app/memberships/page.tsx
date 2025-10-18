import type { Metadata } from 'next';
import HomeRoot from '@/components/home-root';
import ScrollToSection from '@/components/scroll-to-section';

export const metadata: Metadata = {
  title: 'Memberships | Joint Forces K9',
  alternates: { canonical: 'https://www.jointforcesk9.com/memberships' },
};

export default function MembershipsPage() {
  return (
    <>
      <ScrollToSection targetId="memberships" />
      <HomeRoot />
    </>
  );
}
