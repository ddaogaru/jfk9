
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CallToAction = () => {
  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

  const handleConfetti = () => {
    const duration = 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: 60,
        origin: { x: randomInRange(0.3, 0.7), y: 0.6 },
        colors: ['#B31942'],
        gravity: 0.8,
        scalar: 0.9,
        drift: 0
      });
      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: 60,
        origin: { x: randomInRange(0.3, 0.7), y: 0.6 },
        colors: ['#FFFFFF'],
        gravity: 0.8,
        scalar: 0.9,
        drift: 0
      });
      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: 60,
        origin: { x: randomInRange(0.3, 0.7), y: 0.6 },
        colors: ['#0A3161'],
        gravity: 0.8,
        scalar: 0.9,
        drift: 0
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <section className="h-96 w-full bg-[#0A3161] flex flex-col items-center justify-center">
       
      <div className="container mx-auto px-6 text-center relative z-10">
        <div>
          <p className="text-white font-semibold text-sm uppercase tracking-wide mb-6">
            Professional K9 Training Excellence
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            Schedule Your Dog&apos;s Assessment Today
          </h2>
          
          <div>
            <Button 
              size="lg" 
              className="font-semibold bg-[#B31942] text-white hover:bg-white hover:text-[#B31942] transition-colors" 
              onMouseEnter={handleConfetti}
            >
              <Link href="https://book.squareup.com/appointments/c630ef62-7e6e-4179-a651-2e11ce546994/location/E0PRMNT5CJEZD/services/JBIZH4OF3F73LGYJE6P35JM5?savt=a9890cba-34fb-4bce-84bb-7b45527d4906" target="_blank" rel="noopener noreferrer">
                Get a At Home Training Evaluation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
