import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import TeamMembers from '@/components/team-members';
import CallToAction from '@/components/call-to-action';

const pageUrl = 'https://www.jointforcesk9.com/team';

const TEAM_PERSON_SCHEMAS = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.jointforcesk9.com/team#rob',
      name: 'Rob',
      jobTitle: 'Manager & K9 Handler',
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://www.jointforcesk9.com/#organization',
        name: 'Joint Forces K9 Group',
      },
      image: 'https://www.jointforcesk9.com/rob.webp',
      description: 'Manager & K9 Handler with military police background and expertise in protection sport training.',
      alumniOf: 'US Army',
      knowsAbout: ['Dog Training', 'Protection Sport', 'K9 Handling', 'Law Enforcement'],
    },
    {
      '@type': 'Person',
      '@id': 'https://www.jointforcesk9.com/team#bryan',
      name: 'Bryan',
      jobTitle: 'Operations Manager',
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://www.jointforcesk9.com/#organization',
        name: 'Joint Forces K9 Group',
      },
      image: 'https://www.jointforcesk9.com/bryan.webp',
      description: 'Operations Manager with over 5 years of experience and 500+ trained dogs.',
      knowsAbout: ['Dog Training', 'Operations Management', 'Behavioral Training'],
    },
    {
      '@type': 'Person',
      '@id': 'https://www.jointforcesk9.com/team#dylan',
      name: 'Dylan',
      jobTitle: 'Lead Dog Trainer',
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://www.jointforcesk9.com/#organization',
        name: 'Joint Forces K9 Group',
      },
      image: 'https://www.jointforcesk9.com/dylan.webp',
      description: 'Lead Dog Trainer and certified K9 instructor with expertise in Belgian Malinois training.',
      alumniOf: 'US Army Reserves',
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'K9 Instructor Certification',
      },
      knowsAbout: ['Dog Training', 'K9 Instruction', 'Behavioral Modification'],
    },
    {
      '@type': 'Person',
      '@id': 'https://www.jointforcesk9.com/team#trey',
      name: 'Trey',
      jobTitle: 'Dog Trainer',
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://www.jointforcesk9.com/#organization',
        name: 'Joint Forces K9 Group',
      },
      image: 'https://www.jointforcesk9.com/trey.webp',
      description: 'Dog Trainer specializing in tracking and protection sport, with shelter volunteer experience.',
      knowsAbout: ['Dog Training', 'Tracking', 'Protection Sport', 'PSA', 'Animal Behavior'],
    },
    {
      '@type': 'Person',
      '@id': 'https://www.jointforcesk9.com/team#autumn',
      name: 'Autumn',
      jobTitle: 'Kennel Technician',
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://www.jointforcesk9.com/#organization',
        name: 'Joint Forces K9 Group',
      },
      image: 'https://www.jointforcesk9.com/autumn.webp',
      description: 'Kennel Technician with veterinary assistant experience and microbiology background.',
      alumniOf: 'Montana State University',
      knowsAbout: ['Animal Care', 'Veterinary Assistance', 'Kennel Management', 'Microbiology'],
    },
    {
      '@type': 'Person',
      '@id': 'https://www.jointforcesk9.com/team#cody',
      name: 'Cody',
      jobTitle: 'Marketing Representative',
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://www.jointforcesk9.com/#organization',
        name: 'Joint Forces K9 Group',
      },
      image: 'https://www.jointforcesk9.com/cody.webp',
      description: 'Marketing Representative with passion for dog training and content creation.',
      knowsAbout: ['Marketing', 'Content Creation', 'Dog Training', 'Social Media'],
    },
  ],
};

export const metadata: Metadata = {
  title: 'Meet the Team | Joint Forces K9',
  description:
    'Get to know the experienced trainers and handlers behind Joint Forces K9 Group and their passion for helping dogs thrive.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Meet the Team | Joint Forces K9',
    description:
      'Get to know the experienced trainers and handlers behind Joint Forces K9 Group and their passion for helping dogs thrive.',
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

export default function TeamPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TEAM_PERSON_SCHEMAS) }}
      />
      <TeamMembers />
      <CallToAction />
    </PageShell>
  );
}
