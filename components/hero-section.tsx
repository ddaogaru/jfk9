'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(() => {
          // Ignore autoplay rejections (some browsers block autoplay until user interaction).
        });
      }
    };

    const handleReady = () => {
      setIsVideoReady(true);
      tryPlay();
    };

    const handleEnded = () => {
      video.currentTime = 0;
      tryPlay();
    };

    const onLoadedData = () => handleReady();
    const onCanPlayThrough = () => handleReady();

    video.addEventListener('ended', handleEnded);

    if (video.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
      handleReady();
    } else {
      video.addEventListener('loadeddata', onLoadedData, { once: true });
      video.addEventListener('canplaythrough', onCanPlayThrough, { once: true });
      video.load();
      tryPlay();
    }

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadeddata', onLoadedData);
      video.removeEventListener('canplaythrough', onCanPlayThrough);
    };
  }, []);

  return (
    <section className="hero-section relative lg:min-h-screen overflow-hidden bg-[#B31942] pb-[var(--section-spacing)]" id="top">
      <div className="container mx-auto px-4 relative z-10 pb-[var(--section-spacing)]">
        <div className="text-center mx-auto flex flex-col items-center">
          <h1 className="text-center text-base sm:text-xl md:text-3xl font-bold mb-5 leading-tight text-white max-w-3xl px-4">
            <span className="block lg:inline">Dog Training and Boarding</span>{' '}
            <span className="block lg:inline">for Pets and Working Dogs of All Levels</span>
          </h1>

          <div className="relative mx-auto mb-5 w-full md:w-1/2">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg bg-[#0A3161]">
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
                src="/logo_video_site.mp4"
                autoPlay
                muted
                playsInline
                preload="auto"
                poster="/joint_forces_k9_logo.webp"
                onLoadedData={() => setIsVideoReady(true)}
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

          <p className="text-base sm:text-xl md:text-3xl font-semibold text-white mb-5 mx-auto leading-relaxed tracking-wide sm:whitespace-nowrap">
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
              className="min-w-[200px] bg-white text-[#0A3161] border-[#0A3161] hover:bg-[#0A3161] hover:text-white"
              asChild
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
