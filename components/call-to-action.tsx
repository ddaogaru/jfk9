'use client';

import { useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  const confettiRef = useRef<typeof import('canvas-confetti') | null>(null);

  const loadConfetti = useCallback(async () => {
    if (!confettiRef.current) {
      const confettiModule = await import('canvas-confetti');
      confettiRef.current = (confettiModule.default ?? confettiModule) as typeof import('canvas-confetti');
    }

    return confettiRef.current;
  }, []);

  const triggerConfetti = useCallback(async () => {
    const confetti = await loadConfetti();
    if (!confetti) {
      return;
    }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
    const duration = 1000;
    const end = Date.now() + duration;

    const fire = () => {
      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: 60,
        origin: { x: randomInRange(0.3, 0.7), y: 0.6 },
        colors: ['#B31942'],
        gravity: 0.8,
        scalar: 0.9,
        drift: 0,
      });
      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: 60,
        origin: { x: randomInRange(0.3, 0.7), y: 0.6 },
        colors: ['#FFFFFF'],
        gravity: 0.8,
        scalar: 0.9,
        drift: 0,
      });
      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: 60,
        origin: { x: randomInRange(0.3, 0.7), y: 0.6 },
        colors: ['#0A3161'],
        gravity: 0.8,
        scalar: 0.9,
        drift: 0,
      });

      if (Date.now() < end) {
        requestAnimationFrame(fire);
      }
    };

    fire();
  }, [loadConfetti]);

  return (
    <section className="flex w-full items-center justify-center bg-brand-navy">
      <div className="content-shell relative z-10 text-center">
        <div className="flow">
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Professional K9 Training Excellence
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Schedule Your Dog&apos;s Assessment Today
          </h2>

          <div className="flow">
            <Button
              asChild
              size="lg"
              variant="accent"
              className="font-semibold"
              onMouseEnter={triggerConfetti}
              onFocus={triggerConfetti}
            >
              <a
                href="https://book.squareup.com/appointments/c630ef62-7e6e-4179-a651-2e11ce546994/location/E0PRMNT5CJEZD/services/JWKYZZRHWBTHLUNGM6FSTQQ5?savt=0caaaa24-838e-4a28-b595-b8efc06b32ed"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get A Free Training Evaluation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
