'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type LiteYouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
  params?: string;
  posterQuality?: 'default' | 'mqdefault' | 'hqdefault' | 'sddefault' | 'maxresdefault';
};

const PRECONNECT_URLS = [
  'https://www.youtube.com',
  'https://www.youtube.com/s/player',
  'https://s.ytimg.com',
  'https://www.google.com',
];

export function LiteYouTubeEmbed({
  videoId,
  title,
  className,
  params = 'autoplay=1&rel=0&modestbranding=1',
  posterQuality = 'hqdefault',
}: LiteYouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPreconnected, setHasPreconnected] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const warmConnections = useCallback(() => {
    if (hasPreconnected) {
      return;
    }

    setHasPreconnected(true);

    PRECONNECT_URLS.forEach((href) => {
      if (typeof document === 'undefined') return;
      if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return;

      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      link.crossOrigin = '';
      document.head.appendChild(link);
    });
  }, [hasPreconnected]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      warmConnections();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            warmConnections();
            observer.disconnect();
          }
        });
      },
      { rootMargin: '120px' }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [warmConnections]);

  const handlePlay = useCallback(() => {
    warmConnections();
    setIsPlaying(true);
  }, [warmConnections]);

  const iframeSrc = `https://www.youtube.com/embed/${videoId}?${params}`;
  const posterSrc = `https://i.ytimg.com/vi/${videoId}/${posterQuality}.jpg`;

  return (
    <div
      ref={containerRef}
      className={cn('relative h-full w-full overflow-hidden rounded-lg bg-black', className)}
    >
      {!isPlaying && (
        <Image
          src={posterSrc}
          alt={title}
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="absolute inset-0 object-cover"
        />
      )}

      {isPlaying ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={iframeSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          onClick={handlePlay}
          onPointerEnter={warmConnections}
          onFocus={warmConnections}
          className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-black/20 px-4 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label={`Play video: ${title}`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-200 hover:scale-105">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <path className="text-brand-navy" fill="currentColor" d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="text-center text-sm font-medium leading-snug">
            Tap to play “{title}”
          </span>
          <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 text-left text-xs uppercase tracking-wide text-white/90">
            Joint Forces K9 Group
          </span>
        </button>
      )}
    </div>
  );
}
