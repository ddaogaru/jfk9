import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Memberships from '@/components/memberships';

export const metadata: Metadata = {
  title: 'Memberships | Joint Forces K9',
  description:
    'Discover Joint Forces K9 membership plans that deliver ongoing support, exclusive perks, and training savings for your dog.',
  alternates: { canonical: 'https://www.jointforcesk9.com/memberships' },
};

export default function MembershipsPage() {
  return (
    <PageShell>
      <Memberships />
    </PageShell>
  );
}
