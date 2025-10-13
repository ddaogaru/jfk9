'use client';

import { useState, lazy, Suspense } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import Services from '@/components/services';

// Lazy load heavy components below the fold
const TeamMembers = lazy(() => import('@/components/team-members'));
const Testimonials = lazy(() => import('@/components/testimonials'));
const Memberships = lazy(() => import('@/components/memberships'));
const FAQ = lazy(() => import('@/components/faq'));
const InstagramGallery = lazy(() => import('@/components/instagram-gallery'));
const NewsSection = lazy(() => import('@/components/news-section'));
const CallToAction = lazy(() => import('@/components/call-to-action'));
const ContactForm = lazy(() => import('@/components/contact-form'));
const Footer = lazy(() => import('@/components/footer'));

export default function Page() {
  const [activeService, setActiveService] = useState('boarding');

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <Suspense fallback={<div className="h-32 bg-gray-50 animate-pulse" />}>
          <TeamMembers />
        </Suspense>
        <Services activeService={activeService} setActiveService={setActiveService} />
        <Suspense fallback={<div className="h-32 bg-gray-50 animate-pulse" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div className="h-32 bg-gray-50 animate-pulse" />}>
          <Memberships />
        </Suspense>
        <Suspense fallback={<div className="h-32 bg-gray-50 animate-pulse" />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={
          <div className="h-96 bg-section-blue flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#B31942] mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading Media...</p>
            </div>
          </div>
        }>
          <InstagramGallery />
        </Suspense>
        <Suspense fallback={<div className="h-32 bg-gray-50 animate-pulse" />}>
          <NewsSection />
        </Suspense>
        <Suspense fallback={<div className="h-32 bg-gray-50 animate-pulse" />}>
          <CallToAction />
        </Suspense>
        <Suspense fallback={<div className="h-32 bg-gray-50 animate-pulse" />}>
          <ContactForm />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-32 bg-gray-50 animate-pulse" />}>
        <Footer setActiveService={setActiveService} />
      </Suspense>
    </div>    
  );
}
