"use client";

import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CallToAction = () => {
  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const handleConfetti = () => {
    const duration = 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: 60,
        origin: { x: randomInRange(0.3, 0.7), y: 0.6 },
          colors: ["hsl(336, 90%, 35%)"],
        gravity: 0.8,
        scalar: 0.9,
        drift: 0,
      });
      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: 60,
        origin: { x: randomInRange(0.3, 0.7), y: 0.6 },
        colors: ["#FFFFFF"],
        gravity: 0.8,
        scalar: 0.9,
        drift: 0,
      });
      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: 60,
        origin: { x: randomInRange(0.3, 0.7), y: 0.6 },
          colors: ["hsl(212, 88%, 13%)"],
        gravity: 0.8,
        scalar: 0.9,
        drift: 0,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <section className="w-full bg-brand-navy">
      <div className="container mx-auto px-15 py-15 text-center relative z-10">
        <div className="flex flex-col">
          <p className="text-white font-semibold text-sm uppercase tracking-wide pt-[15px]">
            Professional K9 Training Excellence
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-15 leading-tight">
            Schedule Your Dog&apos;s Assessment Today
          </h2>

          <div className="mt-[15px]">
            <Button
              size="lg"
              asChild
              className="px-15 py-15 text-sm sm:text-base lg:text-lg font-semibold bg-brand-red text-white hover:bg-white hover:text-brand-red transition-colors w-full sm:w-auto"
            >
              <Link
                href="https://book.squareup.com/appointments/c630ef62-7e6e-4179-a651-2e11ce546994/location/E0PRMNT5CJEZD/services/JBIZH4OF3F73LGYJE6P35JM5?savt=a9890cba-34fb-4bce-84bb-7b45527d4906"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center"
                onMouseEnter={handleConfetti}
              >
                Get A Free Training Evaluation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
