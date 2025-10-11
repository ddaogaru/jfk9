'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero-section relative lg:min-h-screen overflow-hidden section-inner bg-[#B31942]" id="top">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-[1200px] mx-auto flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-5 leading-tight text-white">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span>Dog Training</span>
              <span>and</span>
              <span>Boarding</span>
              <span>for Pets and Working Dogs of All Levels</span>
            </div>
          </h1>

          <div className="relative w-full max-w-[800px] mx-auto mb-5">
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

          <p className="text-base sm:text-lg md:text-2xl font-semibold text-white mb-5 max-w-[600px] mx-auto leading-relaxed tracking-wide">
            NORTHWEST ARKANSAS&#39; LEADING DOG BOARDING &amp; TRAINING SERVICES
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="min-w-[200px]" asChild>
              <Link 
                href="https://us.revelationpets.com/bookerv2/0do9oki66s"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Boarding <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px]" asChild>
              <Link href="#services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
