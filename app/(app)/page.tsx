"use client";

import { useState, lazy, Suspense } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import Services from "@/components/services";
import TeamMembers from "@/components/team-members";
import Testimonials from "@/components/testimonials";
import Memberships from "@/components/memberships";
import FAQ from "@/components/faq";
import CallToAction from "@/components/call-to-action";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

// Lazy load heavy components
const InstagramGallery = lazy(() => import("@/components/instagram-gallery"));

export default function Page() {
  const [activeService, setActiveService] = useState("boarding");

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <TeamMembers />
        <Services
          activeService={activeService}
          setActiveService={setActiveService}
        />
        <Testimonials />
        <Memberships />
        <FAQ />
        <Suspense
          fallback={
            <div className="h-96 bg-section-blue flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#B22234] mx-auto mb-0"></div>
                <p className="text-muted-foreground">Loading Gallery...</p>
              </div>
            </div>
          }
        >
          <InstagramGallery />
        </Suspense>
        <CallToAction />
        <ContactForm />
      </main>
      <Footer setActiveService={setActiveService} />
    </div>
  );
}
