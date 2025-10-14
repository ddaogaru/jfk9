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
    <section className="w-full bg-[#0A3161] flex flex-col items-center justify-center py-16">
       
      <div className="container mx-auto px-6 text-center relative z-10">
        <div>
          <p className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
            Professional K9 Training Excellence
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Schedule Your Dog&apos;s Assessment Today
          </h2>
          
          <div>
            <Button 
              size="lg" 
              className="font-semibold bg-[#B31942] text-white hover:bg-white hover:text-[#B31942] transition-colors" 
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
