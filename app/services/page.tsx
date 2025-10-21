import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Services | Joint Forces K9',
  description:
    'Explore dog boarding, training, and detection services offered by Joint Forces K9 Group in Northwest Arkansas.',
};

export default function ServicesPage() {
  redirect('/services/boarding');
}
