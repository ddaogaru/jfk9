import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import CallToAction from '@/components/call-to-action';
import ContactForm from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us | Joint Forces K9',
  description:
    'Reach out to Joint Forces K9 Group to schedule a consultation, ask about training programs, or book boarding for your dog.',
  alternates: { canonical: 'https://www.jointforcesk9.com/contact' },
};

export default function ContactPage() {
  return (
    <PageShell>
      <CallToAction />
      <ContactForm />
    </PageShell>
  );
}
