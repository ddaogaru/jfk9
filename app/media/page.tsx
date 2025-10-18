import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Media | Joint Forces K9',
  alternates: { canonical: 'https://www.jointforcesk9.com/gallery' },
};

export default function MediaPage() {
  redirect('/gallery');
}
