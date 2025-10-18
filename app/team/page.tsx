import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import TeamMembers from '@/components/team-members';

export const metadata: Metadata = {
  title: 'Meet the Team | Joint Forces K9',
  description:
    'Get to know the experienced trainers and handlers behind Joint Forces K9 Group and their passion for helping dogs thrive.',
  alternates: { canonical: 'https://www.jointforcesk9.com/team' },
};

export default function TeamPage() {
  return (
    <PageShell>
      <TeamMembers />
    </PageShell>
  );
}
