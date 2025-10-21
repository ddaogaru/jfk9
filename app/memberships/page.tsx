import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import Memberships from '@/components/memberships';
import CallToAction from '@/components/call-to-action';

const pageUrl = 'https://www.jointforcesk9.com/memberships';

export const metadata: Metadata = {
  title: 'Memberships | Joint Forces K9',
  description:
    'Discover Joint Forces K9 membership plans that deliver ongoing support, exclusive perks, and training savings for your dog.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Memberships | Joint Forces K9',
    description:
      'Discover Joint Forces K9 membership plans that deliver ongoing support, exclusive perks, and training savings for your dog.',
    url: pageUrl,
    type: 'website',
    images: [
      {
        url: 'https://www.jointforcesk9.com/joint_forces_k9_logo.webp',
        width: 1200,
        height: 630,
        alt: 'Joint Forces K9 Group Logo',
      },
    ],
  },
};

export default function MembershipsPage() {
  return (
    <PageShell>
      <Memberships />
      <CallToAction />
    </PageShell>
  );
}
