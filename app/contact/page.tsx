import type { Metadata } from 'next';
import HomeRoot from '@/components/home-root';
import ScrollToSection from '@/components/scroll-to-section';

export const metadata: Metadata = {
  title: 'Contact Us | Joint Forces K9',
  alternates: { canonical: 'https://www.jointforcesk9.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      <ScrollToSection targetId="contact" />
      <HomeRoot />
    </>
  );
}
