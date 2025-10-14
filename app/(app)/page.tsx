import dynamic from 'next/dynamic';
import Header from '@/components/header';
import Hero from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import Testimonials from '@/components/testimonials';
import Memberships from '@/components/memberships';
import FAQ from '@/components/faq';
import NewsSection from '@/components/news-section';
import { ServiceSelectionProvider } from '@/components/service-selection-provider';
import ConnectedServices from '@/components/connected-services';
import ConnectedFooter from '@/components/connected-footer';

const TeamMembers = dynamic(() => import('@/components/team-members'), {
  loading: () => <SectionSkeleton />, 
});

const InstagramGallery = dynamic(() => import('@/components/instagram-gallery'), {
  loading: () => <MediaSkeleton />,
});

const CallToAction = dynamic(() => import('@/components/call-to-action'), {
  loading: () => null,
});

const ContactForm = dynamic(() => import('@/components/contact-form'), {
  loading: () => <SectionSkeleton className="h-64" />, 
});

function SectionSkeleton({ className = 'h-32' }: { className?: string }) {
  return <div className={`w-full ${className} bg-gray-100 animate-pulse`} aria-hidden />;
}

function MediaSkeleton() {
  return (
    <div className="h-96 bg-section-blue flex items-center justify-center" aria-hidden>
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#B31942] mx-auto mb-4" />
        <p className="text-muted-foreground">Loading Media...</p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <ServiceSelectionProvider>
      <div className="min-h-screen">
        <Header />
        <main id="main" role="main">
          <Hero />
          <AboutSection />
          <TeamMembers />
          <ConnectedServices />
          <Testimonials />
          <Memberships />
          <FAQ />
          <InstagramGallery />
          <NewsSection />
          <CallToAction />
          <ContactForm />
        </main>
        <ConnectedFooter />
      </div>
    </ServiceSelectionProvider>
  );
}
