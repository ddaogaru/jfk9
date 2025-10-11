"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const HEADLINE_TEXT =
  "Dog Training and Boarding for Pets and Working Dogs of All Levels";
const SUBTEXT = "NORTHWEST ARKANSAS' LEADING DOG BOARDING & TRAINING SERVICES";

const Hero = () => {
  // Responsive, no-inline-styles approach using CSS clamp for fluid typography

  return (
    <section
      className="hero-section relative lg:min-h-screen overflow-hidden section-inner w-full bg-brand-navy"
      id="top"
    >
      <div className="container mx-auto px-15 py-15 relative z-10">
        <div className="text-center w-full flex flex-col items-center gap-15">
          <h1
            className="hero-heading font-bold leading-tight text-white text-center px-15 sm:px-0 w-full"
          >
            {HEADLINE_TEXT}
          </h1>

          <div className="relative w-full mx-auto px-15 sm:px-0 mb-15">
            <div className="relative w-full aspect-video">
              <video
                src="/logo_video_site.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          <p
            className="hero-subtext font-semibold text-white tracking-wide text-center px-15 sm:px-0 leading-none w-full"
          >
            {SUBTEXT}
          </p>

          <div className="hero-actions flex flex-col sm:flex-row items-center justify-center px-15 sm:px-0">
            <Button size="lg" variant="default" asChild className="w-full sm:flex-1">
              <Link
                href="https://us.revelationpets.com/bookerv2/0do9oki66s"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center"
              >
                Book Boarding
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:flex-1"
            >
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
