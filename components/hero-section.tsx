'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly set loop property
    video.loop = true;

    // Handle video ending - ensure it loops
    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {
        // Ignore play errors
      });
    };

    // Handle when video is ready to play
    const handleCanPlay = () => {
      setIsVideoReady(true);
      playVideo();
    };

    // Ensure video plays
    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, but that's okay
        });
      }
    };

    // Add event listeners
    video.addEventListener('ended', handleEnded);
    video.addEventListener('canplay', handleCanPlay, { once: true });
    
    // If video is already ready, play it immediately
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      setIsVideoReady(true);
      playVideo();
    }

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <section className="section-spacing hero-section relative lg:min-h-screen overflow-hidden bg-brand-red" id="top">
      <div className="container mx-auto px-4 relative z-10 pb-16">
        <div className="text-center mx-auto flex flex-col items-center">
          <h1 className="mx-auto text-center text-base sm:text-xl md:text-3xl font-bold mb-5 leading-tight text-white max-w-[1200px] px-4">
            Dog Training and Boarding for Pets and Working Dogs of All Levels
          </h1>

          <div className="relative mx-auto mb-5 w-full md:w-1/2">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg bg-brand-navy">
              <Image
                src="/joint_forces_k9_logo.webp"
                alt="Joint Forces K9 brand mark"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className={cn(
                  'absolute inset-0 h-full w-full object-contain bg-white p-10 transition-opacity duration-500',
                  isVideoReady ? 'opacity-0' : 'opacity-100'
                )}
              />
                <video
                  ref={videoRef}
                  src="/logo_video_site.webm"
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  poster="/joint_forces_k9_logo.webp"
                  loop
                  onLoadedData={handleVideoReady}
                  onCanPlay={handleVideoReady}
                  onPlay={handleVideoReady}
                  className={cn(
                    'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
                    isVideoReady ? 'opacity-100' : 'opacity-0'
                  )}
                  title="Joint Forces K9 brand animation"
                >
                <track
                  kind="captions"
                  src="/logo_video_site.vtt"
                  srcLang="en"
                  label="English captions"
                />
              </video>
            </div>
          </div>

          <p className="text-base sm:text-xl md:text-3xl font-semibold text-white mb-5 mx-auto leading-relaxed tracking-wide">
            NORTHWEST ARKANSAS&#39; LEADING DOG BOARDING &amp; TRAINING SERVICES
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="min-w-[200px]" asChild>
              <a
                href="https://us.revelationpets.com/bookerv2/0do9oki66s"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Boarding
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] bg-white text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white"
              asChild
            >
              <a href="/services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
