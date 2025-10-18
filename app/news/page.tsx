import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import NewsSection from '@/components/news-section';

export const metadata: Metadata = {
  title: 'News & Updates | Joint Forces K9',
  description:
    'Stay current with Joint Forces K9 Group announcements, training updates, and media features from Northwest Arkansas.',
  alternates: { canonical: 'https://www.jointforcesk9.com/news' },
};

export default function NewsPage() {
  return (
    <PageShell>
      <NewsSection />
    </PageShell>
  );
}
