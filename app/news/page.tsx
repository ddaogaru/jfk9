import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import NewsSection from '@/components/news-section';

const pageUrl = 'https://www.jointforcesk9.com/news';

export const metadata: Metadata = {
  title: 'News & Updates | Joint Forces K9',
  description:
    'Stay current with Joint Forces K9 Group announcements, training updates, and media features from Northwest Arkansas.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'News & Updates | Joint Forces K9',
    description:
      'Stay current with Joint Forces K9 Group announcements, training updates, and media features from Northwest Arkansas.',
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

export default function NewsPage() {
  return (
    <PageShell>
      <NewsSection />
    </PageShell>
  );
}
