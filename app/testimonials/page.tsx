import type { Metadata } from 'next';
import HomeRoot from '@/components/home-root';
import ScrollToSection from '@/components/scroll-to-section';

export const metadata: Metadata = {
  title: 'Client Testimonials | Joint Forces K9',
  alternates: { canonical: 'https://www.jointforcesk9.com/testimonials' },
};

export default function TestimonialsPage() {
  return (
    <>
      <ScrollToSection targetId="testimonials" />
      <HomeRoot />
    </>
  );
}
