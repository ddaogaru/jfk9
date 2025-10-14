import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="hero-section relative lg:min-h-screen overflow-hidden section-inner bg-[#B31942]" id="top">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mx-auto flex flex-col items-center">
          <h1 className="text-base sm:text-xl md:text-3xl font-bold mb-5 leading-tight text-white">
            <span className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap sm:flex-nowrap">
              <span>Dog Training</span>
              <span>and</span>
              <span>Boarding</span>
              <span>for Pets and Working Dogs of All Levels</span>
            </span>
          </h1>

          <div className="relative w-full mx-auto mb-5">
            <div className="relative w-full aspect-video">
              <video
                src="/logo_video_site.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg object-cover"
                title="Joint Forces K9 brand animation"
              />
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
              className="min-w-[200px] bg-white text-[#0A3161] hover:bg-[#0A3161] hover:text-white"
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
