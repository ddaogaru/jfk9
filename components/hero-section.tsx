'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import styles from './Hero.module.css';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.loop = true;

    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {
        // Ignore play errors
      });
    };

    const handleCanPlay = () => {
      setIsVideoReady(true);
      playVideo();
    };

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, but that's okay
        });
      }
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('canplay', handleCanPlay, { once: true });

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      setIsVideoReady(true);
      playVideo();
    }

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const bandNode = heroBandRef.current;
    if (!bandNode) {
      return;
    }

    const fitText = () => {
      const width = bandNode.clientWidth;
      if (!width) {
        return;
      }

      bandNode.style.setProperty('--hero-band-width', `${width}px`);

      const items = [
        {
          element: headingRef.current,
          baseline: 22,
          min: 28,
          max: 74,
          pad: 0.97,
        },
        {
          element: subheadingRef.current,
          baseline: 20,
          min: 24,
          max: 60,
          pad: 0.965,
        },
      ] as const;

      items.forEach(({ element, baseline, min, max, pad }) => {
        if (!element) {
          return;
        }

        element.style.fontSize = `${baseline}px`;
        element.style.maxWidth = `${width}px`;
        element.style.marginInline = 'auto';
        element.style.whiteSpace = 'nowrap';
        element.style.textAlign = 'center';

        const measurement = element.scrollWidth;
        if (!measurement) {
          return;
        }

        const desired = baseline * (width / measurement) * pad;
        const clamped = Math.max(min, Math.min(max, desired));
        element.style.fontSize = `${clamped}px`;

        if (element.scrollWidth > width) {
          const correction = width / element.scrollWidth;
          const adjusted = Math.max(min, Math.min(max, clamped * correction * pad));
          element.style.fontSize = `${adjusted}px`;
        }
      });
    };

    fitText();

    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(fitText) : null;
    if (observer) {
      observer.observe(bandNode);
    }

    window.addEventListener('resize', fitText);
    window.addEventListener('orientationchange', fitText);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', fitText);
      window.removeEventListener('orientationchange', fitText);
    };
  }, []);

  return (
    <section
      id="hero"
      className="hero hero-section section-fixedbox section-fixedbox--lock relative overflow-hidden bg-brand-red"
    >
      <div className="section-fixedbox__inner">
        <div className="content-shell relative z-10">
          <div className="mx-auto w-full max-w-4xl">
            <div
              ref={heroBandRef}
              className="hero-band flow flex flex-col items-center text-center"
            >
              <div className="hero__lede">
                <h1 ref={headingRef} className="hero-heading font-bold text-white">
                  Dog Training and Boarding for Pets and Working Dogs of All Levels
                </h1>
              </div>

              <div className="hero__media relative w-full">
                <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg bg-brand-navy">
                  <Image
                    src="/joint_forces_k9_logo.webp"
                    alt="Joint Forces K9 brand mark"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    className={cn(
                      'absolute inset-0 h-full w-full object-contain bg-white hero-media-padding transition-opacity duration-500',
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

              <div className="hero__actions">
                <p ref={subheadingRef} className="hero-subheading font-semibold text-white">
                  NORTHWEST ARKANSAS&#39; LEADING DOG BOARDING &amp; TRAINING SERVICES
                </p>

                <div className="flex w-full flex-col items-center justify-center gap-15 sm:flex-row">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
