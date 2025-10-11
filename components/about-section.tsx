"use client";

import { useEffect, useRef } from "react";
import { CustomBadge } from "@/components/custom/badge";
import { CustomTitle } from "@/components/custom/title";
import Link from "next/link";

const MIN_TITLE_FONT = 24;
const MAX_TITLE_FONT = 64;

const AboutSection = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const container = heading.parentElement;

    const adjust = () => {
      if (!heading) return;
      const targetWidth = container?.clientWidth ?? heading.scrollWidth;
      let low = MIN_TITLE_FONT;
      let high = MAX_TITLE_FONT;
      let best = MIN_TITLE_FONT;

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        heading.style.fontSize = `${mid}px`;
        if (heading.scrollWidth <= targetWidth) {
          best = mid;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      heading.style.fontSize = `${best}px`;
      heading.style.whiteSpace = "nowrap";
    };

    adjust();

    window.addEventListener("resize", adjust);
    const observer =
      container && typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(adjust)
        : null;

    if (container && observer) {
      observer.observe(container);
    }

    return () => {
      window.removeEventListener("resize", adjust);
      observer?.disconnect();
    };
  }, []);

  return (
    <section id="about" className="bg-white">
      {/* Custom transparent divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-48px)] h-px bg-transparent"></div>
      <div className="container mx-auto px-15 py-15">
        <div className="text-center flex flex-col items-center justify-center content-block gap-15">
          <CustomBadge variant="red-line-blue-text" inline={true}>
            About Us
          </CustomBadge>

          <CustomTitle
            ref={headingRef}
            className="w-full font-bold text-center"
          >
            Premier Dog Training in Siloam Springs &amp; Northwest Arkansas
          </CustomTitle>

          <div className="text-black w-full text-left space-y-15">
            <p>
              At Joint Forces K9 Group, we build stronger bonds between owners
              and their dogs through proven, professional training methods. We
              are the trusted choice for dog owners in Siloam Springs and across
              Northwest Arkansas seeking real results. Our customized programs
              address everything from puppy essentials to complex behavioral
              issues, ensuring your dog becomes a confident, well-behaved
              companion.
            </p>

            <div className="flex flex-col space-y-15">
              <h3 className="text-xl font-semibold text-brand-red text-center">
                Our Customized Dog Training Programs in NWA
              </h3>
              <p>
                We understand that every dog is different. That&apos;s why we
                don&apos;t offer one-size-fits-all solutions. Our core services
                include:
              </p>
              <ul className="list-disc pl-15 space-y-15">
                <li>
                  <span className="font-semibold text-brand-red">
                    Obedience &amp; Behavior Modification:
                  </span>{" "}
                  Correcting unwanted behaviors like leash pulling, jumping,
                  barking, and reactivity through clear, consistent training.
                </li>
                <li>
                  <span className="font-semibold text-brand-red">
                    Puppy Training:
                  </span>{" "}
                  Start your new best friend off on the right paw with essential
                  socialization, crate training, and foundational obedience
                  skills.
                </li>
                <li>
                  <span className="font-semibold text-brand-red">
                    Board and Train:
                  </span>{" "}
                  Our immersive board-and-train programs provide a structured
                  environment for accelerated learning and significant
                  behavioral improvement.
                </li>
                <li>
                  <span className="font-semibold text-brand-red">
                    Service &amp; Protection Dog Training:
                  </span>{" "}
                  We offer specialized, task-oriented training for service dogs
                  and reliable, controlled training for personal protection
                  dogs.
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-15">
              <h3 className="text-xl font-semibold text-brand-red text-center">
                Why Choose Joint Forces K9 Group?
              </h3>
              <ul className="list-disc pl-15 space-y-15">
                <li>
                  <span className="font-semibold text-brand-red">
                    Expert NWA Trainers, Proven Results:
                  </span>{" "}
                  Our experienced trainers are local experts in canine behavior.
                </li>
                <li>
                  <span className="font-semibold text-brand-red">
                    Solutions for Every Need:
                  </span>{" "}
                  We offer private lessons, in-home sessions, and our popular
                  board-and-train camps.
                </li>
                <li>
                  <span className="font-semibold text-brand-red">
                    Safe &amp; Modern Boarding:
                  </span>{" "}
                  When your dog stays with us, they&apos;ll enjoy a secure,
                  clean, and climate-controlled kennel.
                </li>
                <li>
                  <span className="font-semibold text-brand-red">
                    All Dogs Are Welcome:
                  </span>{" "}
                  We proudly train all breeds, sizes, and temperaments,
                  including unaltered dogs.
                </li>
                <li>
                  <span className="font-semibold text-brand-red">
                    Flexible Payment Plans:
                  </span>{" "}
                  Achieving your training goals is more accessible than ever
                  with our flexible payment options.
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-15">
              <h3 className="text-xl font-semibold text-brand-red text-center">
                Proudly Serving Siloam Springs and All of Northwest Arkansas
              </h3>
              <p>
                Our facility is based in Siloam Springs, but we proudly serve
                dog owners and their families throughout the Northwest Arkansas
                (NWA) region. We serve every community, including major hubs
                like Fayetteville, Springdale, Rogers, and Bentonville. Our
                service also extends to surrounding towns, such as Siloam
                Springs, Centerton, Bella Vista, Pea Ridge, Tontitown, Gentry,
                Cave Springs, Gravette, Decatur, Greenland, Lincoln, Farmington,
                Prairie Grove, Johnson, West Fork, Eureka Springs, Goshen,
                Elkins, Little Flock, Bethel Heights, and Highfill.
              </p>
            </div>

            <div className="flex flex-col space-y-15">
              <h3 className="text-xl font-semibold text-brand-red text-center">
                Ready to Transform Your Dog&apos;s Behavior?
              </h3>
              <p>
                Stop wishing for a better-behaved dog and start training for
                one.{" "}
                <Link
                  href="#contact"
                  className="text-brand-navy hover:text-brand-red transition-colors hover:underline"
                >
                  Contact us
                </Link>{" "}
                today for a consultation and let&apos;s unlock your dog&apos;s
                true potential.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider ends here; next section (Team) is independent and white */}
    </section>
  );
};

export default AboutSection;
