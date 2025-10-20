import { CustomBadge } from "@/components/custom/badge";
import { CustomTitle } from "@/components/custom/title";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-brand-navy">
      {/* Custom blue divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-48px)] h-px bg-gradient-to-r from-transparent via-brand-navy to-transparent"></div>
      <div className="container mx-auto px-6">
        <div className="text-center flex flex-col items-center justify-center gap-6 content-block">
          <Card className="w-full max-w-[560px] bg-white shadow-xl">
            <CardContent className="p-6 md:p-8 space-y-6 max-h-[600px] overflow-y-auto custom-scrollbar text-left">
              <div className="flex flex-col items-center gap-3 text-center">
                <CustomBadge variant="red-line-blue-text" inline={true}>
                  About Us
                </CustomBadge>

                <CustomTitle className="w-full font-bold about-title text-brand-navy">
                  Premier Dog Training in Siloam Springs &amp; Northwest Arkansas
                </CustomTitle>
              </div>

              <div className="text-muted-foreground w-full space-y-4">
                <p>
                  At Joint Forces K9 Group, we build stronger bonds between owners and their dogs through proven, professional training methods. We are the trusted choice for dog owners in Siloam Springs and across Northwest Arkansas seeking real results. Our customized programs address everything from puppy essentials to complex behavioral issues, ensuring your dog becomes a confident, well-behaved companion.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center text-brand-red">
                    Our Customized Dog Training Programs in NWA
                  </h3>
                  <p>
                    We understand that every dog is different. That&apos;s why we don&apos;t offer one-size-fits-all solutions. Our core services include:
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-foreground">
                    <li>
                      <span className="font-semibold">Obedience &amp; Behavior Modification:</span> Correcting unwanted behaviors like leash pulling, jumping, barking, and reactivity through clear, consistent training.
                    </li>
                    <li>
                      <span className="font-semibold">Puppy Training:</span> Start your new best friend off on the right paw with essential socialization, crate training, and foundational obedience skills.
                    </li>
                    <li>
                      <span className="font-semibold">Board and Train:</span> Our immersive board-and-train programs provide a structured environment for accelerated learning and significant behavioral improvement.
                    </li>
                    <li>
                      <span className="font-semibold">Service &amp; Protection Dog Training:</span> We offer specialized, task-oriented training for service dogs and reliable, controlled training for personal protection dogs.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center text-brand-red">
                    Why Choose Joint Forces K9 Group?
                  </h3>
                  <ul className="list-disc pl-6 space-y-4 text-foreground">
                    <li>
                      <span className="font-semibold">Expert NWA Trainers, Proven Results:</span> Our experienced trainers are local experts in canine behavior.
                    </li>
                    <li>
                      <span className="font-semibold">Solutions for Every Need:</span> We offer private lessons, in-home sessions, and our popular board-and-train camps.
                    </li>
                    <li>
                      <span className="font-semibold">Safe &amp; Modern Boarding:</span> When your dog stays with us, they&apos;ll enjoy a secure, clean, and climate-controlled kennel.
                    </li>
                    <li>
                      <span className="font-semibold">All Dogs Are Welcome:</span> We proudly train all breeds, sizes, and temperaments, including unaltered dogs.
                    </li>
                    <li>
                      <span className="font-semibold">Flexible Payment Plans:</span> Achieving your training goals is more accessible than ever with our flexible payment options.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center text-brand-red">
                    Proudly Serving Siloam Springs and All of Northwest Arkansas
                  </h3>
                  <p>
                    Our facility is based in Siloam Springs, but we proudly serve dog owners and their families throughout the Northwest Arkansas (NWA) region. We serve every community, including major hubs like <span className="text-foreground">Fayetteville, Springdale, Rogers, and Bentonville</span>. Our service also extends to surrounding towns, such as <span className="text-foreground">Siloam Springs, Centerton, Bella Vista, Pea Ridge, Tontitown, Gentry, Cave Springs, Gravette, Decatur, Greenland, Lincoln, Farmington, Prairie Grove, Johnson, West Fork, Eureka Springs, Goshen, Elkins, Little Flock, Bethel Heights, and Highfill</span>.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center text-brand-red">
                    Ready to Transform Your Dog&apos;s Behavior?
                  </h3>
                  <p className="mb-[20px] text-center text-foreground">
                    Stop wishing for a better-behaved dog and start training for one.{" "}
                    <a
                      href="/contact"
                      className="text-brand-navy underline underline-offset-4 decoration-current font-semibold transition-colors hover:text-brand-red"
                    >
                      Contact us
                    </a>{" "}
                    today for a consultation and let&apos;s unlock your dog&apos;s true potential.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Divider ends here; next section (Team) is independent and white */}
    </section>
  );
};

export default AboutSection;
