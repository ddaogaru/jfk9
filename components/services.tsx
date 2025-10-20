"use client";

import { Fragment, useMemo } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { CustomBadge } from "@/components/custom/badge";
import { CustomTitle } from "@/components/custom/title";
import { CustomSubtitle } from "@/components/custom/subtitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type ServiceKey = "boarding" | "training" | "detection";

type ServicesProps = {
  initialService?: ServiceKey;
  visibleServices?: ServiceKey[];
  focusTrainingId?: string;
};

type TrainingSectionId =
  | "obedience"
  | "aggressive"
  | "protection"
  | "service"
  | "financing";

const SERVICE_ORDER: ServiceKey[] = ["boarding", "training", "detection"];
const TRAINING_SECTION_ORDER: TrainingSectionId[] = [
  "obedience",
  "aggressive",
  "protection",
  "service",
  "financing",
];

const TRAINING_SECTION_TITLES: Record<TrainingSectionId, string> = {
  obedience: "Obedience Training",
  aggressive: "Aggressive Dog Training",
  protection: "Protection Dog Training",
  service: "Service Dog Training",
  financing: "Training Financing Options",
};

const isServiceKey = (value: string | null): value is ServiceKey =>
  Boolean(value && SERVICE_ORDER.includes(value as ServiceKey));

export default function Services({
  initialService = "boarding",
  visibleServices,
  focusTrainingId,
}: ServicesProps = {}) {
  const searchParams = useSearchParams();
  const enableQuerySync = !visibleServices;

  const allowedServices = useMemo<ServiceKey[]>(() => {
    if (!visibleServices || visibleServices.length === 0) {
      return SERVICE_ORDER;
    }

    return visibleServices.filter((service): service is ServiceKey =>
      SERVICE_ORDER.includes(service),
    );
  }, [visibleServices]);

  const tabParam = enableQuerySync ? searchParams.get("tab") : null;
  const activeService: ServiceKey =
    tabParam && isServiceKey(tabParam) && allowedServices.includes(tabParam)
      ? tabParam
      : allowedServices.includes(initialService)
        ? initialService
        : allowedServices[0] ?? "boarding";

  const focusParam =
    focusTrainingId ?? (enableQuerySync ? searchParams.get("focus") : null);
  const normalizedFocus = focusParam?.toLowerCase() ?? null;

  const trainingSectionIds = useMemo<TrainingSectionId[]>(() => {
    if (normalizedFocus) {
      const match = TRAINING_SECTION_ORDER.find(
        (section) => section.toLowerCase() === normalizedFocus,
      );
      if (match) {
        return [match];
      }
    }

    if (visibleServices && visibleServices.length > 0) {
      return TRAINING_SECTION_ORDER;
    }

    return [TRAINING_SECTION_ORDER[0]];
  }, [normalizedFocus, visibleServices]);

  const servicesToRender =
    visibleServices && visibleServices.length > 0
      ? allowedServices
      : [activeService];

  return (
    <section id="services" className="bg-[#B31942]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center gap-3 mb-4">
          <CustomBadge
            variant="red"
            inline
            className="text-white border-[#0A3161]"
          >
            Our Services
          </CustomBadge>
          <CustomTitle className="text-white">
            Comprehensive Dog Training &amp; Care
          </CustomTitle>
          <CustomSubtitle className="max-w-3xl mx-auto text-white">
            Expert services tailored to your dog&apos;s needs
          </CustomSubtitle>
        </div>

        <div className="grid gap-6">
          {servicesToRender.map((serviceKey) => {
            if (serviceKey === "boarding") {
              return <BoardingCard key="boarding" />;
            }

            if (serviceKey === "training") {
              return (
                <Fragment key="training">
                  {trainingSectionIds.map((sectionId) => (
                    <TrainingCard key={sectionId} sectionId={sectionId} />
                  ))}
                </Fragment>
              );
            }

            if (serviceKey === "detection") {
              return <DetectionCard key="detection" />;
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}

interface TrainingCardProps {
  sectionId: TrainingSectionId;
}

const TrainingCard = ({ sectionId }: TrainingCardProps) => (
  <Card className="flex flex-col h-[600px] w-full">
    <CardHeader className="pb-0">
      <CardTitle className="text-2xl md:text-3xl font-bold text-[#002868] text-center">
        {TRAINING_SECTION_TITLES[sectionId]}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 flex-grow overflow-y-auto custom-scrollbar">
      <div className="max-w-none space-y-[15px]">
        {renderTrainingSection(sectionId)}
      </div>
      <div className="flex justify-center mt-6">
        <Button asChild variant="default" size="lg" className="transition-all hover:bg-[#B31942] hover:text-white">
          <a href="/contact">Contact Us</a>
        </Button>
      </div>
    </CardContent>
  </Card>
);

const BoardingCard = () => (
                      <Card className="flex flex-col h-[570px] w-full mb-6">
                        <CardHeader className="pb-0">
                          <CardTitle className="text-2xl md:text-3xl font-bold text-[#002868] text-center">Dog Boarding in Northwest Arkansas</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 flex-grow overflow-y-auto custom-scrollbar">
                          <div>
                            <div className="max-w-none space-y-[15px]">
                              <p>
                                Joint Forces K9 provides camp-style boarding for dogs of all sizes and temperaments&mdash;no breed restrictions. Your pet stays in our climate-controlled kennels, enjoys daily socialization and exercise, and receives attentive, personalized care from our experienced team.
                              </p>

                              <h2 className="text-xl font-bold text-[#B31942] text-center">What to Expect</h2>
                              <ul className="list-disc space-y-2 pl-5">
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Individual spaces</strong> for privacy and rest</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Outdoor areas</strong> for safe play, enrichment, and exercise</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Daily interaction</strong> with friendly kennel staff</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Medication administration</strong> available as needed</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Feeding schedules</strong> and routines matched to your home setup</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Unaltered dogs</strong> are accepted</span></li>
                              </ul>
                              <p>Our goal is a safe, low-stress, and enjoyable stay every time.</p>

                              <h2 className="text-xl font-bold text-[#B31942] text-center">Boarding Requirements</h2>
                              <p>
                                To protect the health of all pets in our care, proof of current vaccinations is required before boarding. Vaccines must be appropriate for your dog&apos;s age and current as of the check-in date.
                              </p>
                              <ul className="list-disc space-y-2 pl-5">
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Rabies</strong></span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Distemper/Parvo (DHLPP)</strong></span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Bordetella</strong></span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Canine Influenza (H3N2)</strong> &mdash; Optional</span></li>
                              </ul>
                              <p>Pets who show signs of illness should not be boarded. We monitor every guest for health and well-being during their stay.</p>

                              <h2 className="text-xl font-bold text-[#B31942] text-center">Pricing</h2>
                              <p>Dog boarding&mdash;starting at $45 per night, regardless of size, age, or breed.</p>

                              <h2 className="text-xl font-bold text-[#B31942] text-center">Reservations, Deposits, and Payments</h2>
                              <ul className="list-disc space-y-2 pl-5">
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">New clients</strong> and all holiday reservations require a deposit to hold your spot.</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Full payment</strong> is required in advance for boarding and is non-refundable.</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Closed on Sundays</strong>; however, there is a pickup window from 12:00&ndash;2:00 PM for boarding dogs only.</span></li>
                              </ul>

                              <h2 className="text-xl font-bold text-[#B31942] text-center">Service Area</h2>
                              <p>
                                Boarding is offered at our primary facility in Siloam Springs, proudly serving families across Northwest Arkansas, including Fayetteville, Springdale, Rogers, Bentonville, Tontitown, Centerton, Bella Vista, Pea Ridge, Gentry, Cave Springs, Gravette, Decatur, Greenland, Lincoln, Farmington, Prairie Grove, Johnson, West Fork, Eureka Springs, Goshen, Elkins, Little Flock, Bethel Heights, and Highfill.
                              </p>
                              <p className="text-center"><strong>If you have questions about suitability, vaccination records, medications, or special accommodations, contact us&mdash;we&apos;re happy to help.</strong></p>
                            </div>
                          </div>
                          <div className="flex justify-center mt-6">
                            <Button asChild variant="default" size="lg" className="transition-all hover:bg-[#B31942] hover:text-white">
                              <a href="/contact">Contact Us</a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
);

const DetectionCard = () => (
                      <Card className="flex flex-col h-[600px] w-full mb-6">
                        <CardHeader className="pb-0">
                          <CardTitle className="text-2xl md:text-3xl font-bold text-[#002868] text-center">Professional K9 Narcotics Detection Services</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 flex-grow overflow-y-auto custom-scrollbar">
                          <div>
                            <div className="max-w-none space-y-[15px]">
                              <h2 className="text-xl font-bold text-[#B31942] text-center">Enhancing Safety & Security with Elite Scent Detection Teams</h2>

                              <p>
                                Joint Forces K9 Group provides confidential and effective narcotics detection services for businesses, schools, venues, and homeowners. Our proactive K9 sweeps are a powerful deterrent, helping you maintain a safe, drug-free environment. Our highly trained scent detection dogs and expert handlers offer peace of mind by delivering fast, accurate, and discreet security solutions across commercial, municipal, and residential markets.
                              </p>

                              <h2 className="text-xl font-bold text-[#B31942] text-center">Our Specialized K9 Detection Advantage</h2>

                              <ul className="list-disc space-y-2 pl-5">
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Precision Training:</strong> Our K9s are trained to isolate the pure scent of a wide variety of narcotics, ignoring common environmental distractions to prevent false alerts.</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Experienced Handlers:</strong> Every handler is a professional, trained to manage the K9 and conduct searches with minimal disruption to your operations.</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Versatile Application:</strong> From large-scale event venues to private homes, our teams are equipped to handle any environment.</span></li>
                              </ul>

                              <h2 className="text-xl font-bold text-[#B31942] text-center">Our Confidential & Professional Search Process</h2>

                              <p>To protect all parties and ensure maximum effectiveness, our process is built on a foundation of safety and legality.</p>

                              <ol className="list-decimal space-y-2 pl-5">
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Authorization:</strong> We begin with express written consent from the property owner or legal representative.</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Site Preparation:</strong> For the safety of all involved and the accuracy of the search, the premises are temporarily cleared of all occupants and pets.</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">On-Site Supervision:</strong> The owner or their representative must be present throughout the entire sweep to witness the process and receive immediate updates.</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Systematic Sweep:</strong> Our handler and K9 partner will meticulously search the property one room at a time.</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Clear Indication:</strong> If a narcotic&#39;s odor is detected, our K9 will give a passive alert. The handler will then discreetly mark the area and inform the representative on-site.</span></li>
                              </ol>

                              <h2 className="text-xl font-bold text-[#B31942] text-center">Our Commitment: Detection, Not Confiscation</h2>

                              <p>
                                Please note that our service is strictly for the detection of a narcotic&#39;s odor. Joint Forces K9 Group is not authorized to search for, handle, or dispose of illegal substances. The responsibility for locating and removing any contraband from a marked area rests entirely with the client.
                              </p>

                              <h2 className="text-xl font-bold text-[#B31942] text-center">Who We Serve: Industries & Clients</h2>

                              <ul className="list-disc space-y-2 pl-5">
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Schools & Educational Institutions:</strong> Helping to enforce drug-free campus policies and ensure student safety.</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Corporate Offices & Businesses:</strong> Protecting your employees, assets, and reputation from workplace drug issues.</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Event Venues & Public Arenas:</strong> Providing proactive security screenings for concerts, festivals, and sporting events.</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Government & Municipal Facilities:</strong> Aiding agencies in maintaining secure and compliant environments.</span></li>
                                <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Private Residences:</strong> Offering discreet, confidential searches for homeowners concerned about drug activity.</span></li>
                              </ul>

                              <p>
                                We provide Narcotics Detection across all of Northwest Arkansas (NWA). While our primary facility is based in Siloam Springs, we are proud to serve families throughout the region, including Fayetteville, Springdale, Rogers, Bentonville, Tontitown, Centerton, Bella Vista, Pea Ridge, Gentry, Cave Springs, Gravette, Decatur, Greenland, Lincoln, Farmington, Prairie Grove, Johnson, West Fork, Eureka Springs, Goshen, Elkins, Little Flock, Bethel Heights, and Highfill.
                              </p>
                              <p className="text-center"><strong>Secure your peace of mind. Contact us today for a confidential consultation.</strong></p>
                              <div className="flex justify-center mt-6">
                                <Button asChild variant="default" size="lg" className="transition-all hover:bg-[#B31942] hover:text-white">
                                  <a href="/contact">Contact Us</a>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
);

function renderTrainingSection(sectionId: TrainingSectionId) {
  switch (sectionId) {
    case "obedience":
      return (
                                    <>
                                      <h2 className="text-xl font-bold text-[#0A3161] text-center">Obedience Training Packages</h2>
                                      <p>
                                        We offer several obedience programs based on how hands-on you want to be. All options include clear homework, progress check-ins, and practical skills for real-life settings. Payment plans are available.
                                      </p>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Board and Train &mdash; starting at $950/week</h2>
                                      <p>
                                        Your dog boards at our Northwest Arkansas facility and trains daily with our team. We teach new behaviors and address unwanted ones, with an average stay of 2&ndash;4 weeks depending on goals and temperament.
                                      </p>
                                      <p><strong>Core skills covered:</strong> Sit, Down, Heel, Climb/Place, Come, and Free (release).</p>
                                      <p><strong>Teaching method:</strong> Verbal commands by default, with any alternate cues discussed with you before training begins.</p>
                                      <p><strong>Owner support:</strong> One owner lesson for every two weeks of training plus a follow-up after your dog goes home.</p>
                                
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Drop-Off Dog Training &mdash; starting at $750/week</h2>
                                      <p>
                                        Get the same curriculum as our Board and Train while your dog sleeps at home. You&apos;ll drop off in the morning and pick up in the evening&mdash;like school for your dog.
                                      </p>
                                      <p><strong>Core skills covered:</strong> Sit, Down, Heel, Climb/Place, Come, and Free.</p>
                                      <p><strong>Owner support:</strong> One owner lesson for every two weeks of training plus a post-program follow-up.</p>
                                
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Private Lessons &mdash; starting at $500 for four one-hour sessions</h2>
                                      <p>
                                        Ideal if you want to be hands-on at the end of the leash. We coach you to teach your dog effectively and tailor the plan to your priorities.
                                      </p>
                                      <p><strong>Format:</strong> Four one-hour sessions.</p>
                                      <p><strong>Focus areas:</strong> Customized to your goals (manners, leash work, recall, household rules, and more).</p>
                                
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Off-Site (In-Home) Private Training &mdash; starting at $900 for four one-hour sessions</h2>
                                      <p>
                                        Enjoy private lessons at your home or another agreed-upon location for maximum real-world carryover.
                                      </p>
                                      <p><strong>Format:</strong> Four one-hour sessions at your location.</p>
                                      <p><strong>Evaluation:</strong> $50 initial in-home evaluation, credited to your first lesson if you enroll during that visit.</p>
                                
                                      <p className="text-center"><strong>Final recommendations and timelines vary by dog, goals, and environment. We&apos;ll help you choose the program that fits your needs and lifestyle.</strong></p>
                                    </>
      );
    case "aggressive":
      return (
                                    <>
                                      <h2 className="text-xl font-bold text-[#0A3161] text-center">Aggressive Dog Training in Northwest Arkansas</h2>
                                      <p>
                                        At Joint Forces K9 Group, we specialize in rehabilitating dogs with aggressive or reactive behaviors across Northwest Arkansas. Our trainers help restore calm, safety, and trust at home while giving owners clear, practical tools that work in everyday life.
                                      </p>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">What We Address</h2>
                                      <ul className="list-disc space-y-2 pl-5">
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Human-directed aggression</strong></span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Leash reactivity</strong> (lunging, barking, pulling)</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Dog-to-dog aggression</strong></span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Food and resource guarding</strong></span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Fear-based aggression</strong></span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Anxiety-driven behaviors</strong></span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Separation anxiety</strong></span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Severe fear or shutdown responses</strong></span></li>
                                      </ul>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Our Approach</h2>
                                      <p>
                                        Aggression is often rooted in stress, fear, or confusion. We focus on changing emotions and behaviors&mdash;not your dog&apos;s personality&mdash;through a structured, humane program.
                                      </p>
                                      <ol className="list-decimal space-y-2 pl-5">
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Root-Cause Assessment</strong><br/>We evaluate history, triggers, routines, environment, and handling to understand why behaviors occur and when they&apos;re likely to surface.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Individualized Training Plan</strong><br/>We tailor a step-by-step plan that may include desensitization, counter-conditioning, confidence building, foundation obedience, and household structure&mdash;plus clear homework and benchmarks.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Safety & Owner Coaching</strong><br/>We prioritize management and safe handling (distance, thresholds, appropriate tools). You&apos;ll learn exactly what to do during walks, door greetings, guest interactions, and multi-dog situations.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Consistency & Progress Checks</strong><br/>Regular sessions and simple daily reps build reliable habits. We adjust the plan as your dog improves to keep momentum and prevent setbacks.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Veterinary Collaboration When Needed</strong><br/>If appropriate, we coordinate with your veterinarian to rule out pain or medical contributors and discuss whether medication may support training.</span></li>
                                      </ol>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Early Warning Signs to Watch</h2>
                                      <p>
                                        <strong>Stiff posture</strong>, <strong>hard stare</strong>, <strong>lip lift</strong>, <strong>growling</strong>, <strong>freezing</strong>, and <strong>sudden lunging</strong> are common precursors to escalation. Addressing these signals early improves outcomes and keeps everyone safer.
                                      </p>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Service Area</h2>
                                      <p>
                                        We serve every community across Northwest Arkansas, including major hubs like Fayetteville, Springdale, Rogers, and Bentonville. Our service also extends to surrounding towns such as Siloam Springs, Centerton, Bella Vista, Pea Ridge, Tontitown, Gentry, Cave Springs, Gravette, Decatur, Greenland, Lincoln, Farmington, Prairie Grove, Johnson, West Fork, Eureka Springs, Goshen, Elkins, Little Flock, Bethel Heights, and Highfill.
                                      </p>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Why Joint Forces K9 Group</h2>
                                      <ul className="list-disc space-y-2 pl-5">
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Experienced trainers</strong> who regularly work complex reactivity and aggression cases</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Balanced, evidence-informed methods</strong> tailored to the individual dog</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Clear safety protocols</strong> and owner education for real-world results</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Measurable milestones</strong> and plan updates as your dog progresses</span></li>
                                      </ul>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Get Started</h2>
                                      <p className="text-center"><strong>If your dog is showing aggression or severe reactivity, earlier is better. Request a consultation to begin a customized behavior-modification plan that brings calm back to your home.</strong></p>
                                    </>
      );
    case "protection":
      return (
                                    <>
                                      <h2 className="text-xl font-bold text-[#0A3161] text-center">Protection Dog Training in Northwest Arkansas</h2>
                                      <p>
                                        Protection dog training is more than teaching a dog to guard or bark&mdash;it&apos;s about building a reliable partnership. Our goal is a dog that can protect you, your family, or your business while staying obedient, stable, and well-mannered around children, guests, and everyday distractions.
                                      </p>
                                      <p>
                                        We tailor programs to your lifestyle&mdash;family protection, personal security, or business support&mdash;so your dog learns to follow commands, work through distractions, and respond appropriately to potential threats without becoming indiscriminately aggressive. Every plan is honest, effective, and matched to your dog&apos;s temperament.
                                      </p>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">The Importance of Imprinting and Socialization</h2>
                                      <p>
                                        Imprinting and socialization form the foundation of effective protection work.
                                      </p>
                                      <ul className="list-disc space-y-2 pl-5">
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Early, positive experiences</strong> with people, places, sounds, surfaces, and environments build confidence and resilience.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Structured socialization</strong> teaches neutrality and focus under distraction, reducing unnecessary aggression.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Imprinting clarifies expectations</strong>&mdash;what to do, when to do it, and how to recover (on and off switches).</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">The result</strong> is a dog that can calmly navigate daily life&mdash;at home, around children and guests, and in public&mdash;while possessing the clarity and control needed for real protection scenarios.</span></li>
                                      </ul>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Protection Sports Pathways</h2>
                                      <p>
                                        We offer guidance and training along recognized protection-sport tracks. These sports test obedience, control under pressure, and sound temperament&mdash;qualities central to real-world protection.
                                      </p>
                                      <h3 className="text-lg font-bold text-[#B31942] text-center">PSA (Protection Sports Association)</h3>
                                      <p>
                                        Often called the &quot;MMA of protection sports&quot; for its dynamic, scenario-based challenges, PSA continually tests the dog&ndash;handler team in changing environments.
                                      </p>
                                      <ul className="list-disc space-y-2 pl-5">
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Progression:</strong> PDC (Protection Dog Certificate), PSA1, PSA2, PSA3</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Dog selection:</strong> Temperament, nerve strength, environmental stability, and clear recoveries are key.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Obedience first:</strong> Solid obedience is a prerequisite for advanced protection work.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Control under pressure:</strong> Dogs learn to engage and release on command, maintain obedience in complex scenarios, and remain responsive to the handler despite distractions and stressors.</span></li>
                                      </ul>
                                      <h3 className="text-lg font-bold text-[#B31942] text-center">IPO/Schutzhund (Protection, Obedience, Tracking)</h3>
                                      <p>
                                        Formerly known as Schutzhund (SchH), IPO is a structured sport emphasizing precision and control across three phases: Tracking, Obedience, and Protection.
                                      </p>
                                      <ul className="list-disc space-y-2 pl-5">
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Equipment & exercises:</strong> Helpers typically use a sleeve; exercises may include courage tests, escape bites, transport, search & guard, and controlled engagements.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Handler control:</strong> Dogs must engage on cue, out/return promptly, and demonstrate neutrality when not working.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">State changes:</strong> Training builds the ability to move cleanly between passive and active states, maintaining clarity, safety, and compliance under pressure.</span></li>
                                      </ul>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">What You Can Expect</h2>
                                      <ul className="list-disc space-y-2 pl-5">
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Temperament-first approach:</strong> Suitability and safety are evaluated before advanced work begins.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Clarity and control:</strong> We prioritize clean outs, steady grips, neutrality, and reliable recalls.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Distraction training:</strong> Real-world proofing for noise, surfaces, crowds, and environmental stressors.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Handler coaching:</strong> You&apos;ll learn timing, leash mechanics, cue delivery, and safety protocols.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Ethical standards:</strong> We focus on measured, purpose-driven training&mdash;never indiscriminate aggression.</span></li>
                                      </ul>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Get Started</h2>
                                      <p className="text-center"><strong>If you&apos;re considering a protection dog or want to develop your current dog&apos;s potential, schedule a consultation. We&apos;ll assess temperament, outline a clear plan, and recommend the path&mdash;family protection, PSA, or IPO&mdash;that best fits your goals.</strong></p>
                                    </>
      );
    case "service":
      return (
                                    <>
                                      <h2 className="text-xl font-bold text-[#0A3161] text-center">Service Dog Training in Northwest Arkansas</h2>
                                      <p>
                                        At Joint Forces K9 Group, we help people with disabilities train reliable, task-capable service dogs. Our programs are individualized to your needs, schedule, and home life, with training available in your home or at our facility.
                                      </p>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">What Is a Service Dog?</h2>
                                      <p>
                                        Under the ADA, a service dog is a dog that is individually trained to do work or perform tasks for a person with a disability (including physical, sensory, psychiatric, intellectual, or other mental disabilities). The work or tasks must directly mitigate the person&apos;s disability.
                                      </p>
                                      <ul className="list-disc space-y-2 pl-5">
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Service dogs</strong> perform specific tasks (e.g., alerting, guiding, retrieving, bracing) and have public-access rights under the ADA.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Psychiatric Service Dogs (PSD)</strong> are service dogs; they perform trained tasks related to psychiatric disabilities.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Emotional Support Animals (ESA)</strong> and therapy dogs provide comfort or therapeutic visitation but do not have ADA public-access rights.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">This information</strong> is for general guidance only; if you have legal questions about access rights, consult ADA resources or an attorney.</span></li>
                                      </ul>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">How Do I Get a Service Dog?</h2>
                                      <p>
                                        There are several paths. We do not breed or sell service dogs; instead, we help you select an appropriate dog (or evaluate your current dog) and train it for task work and public access.
                                      </p>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Our Process</h2>
                                      <ol className="list-decimal space-y-2 pl-5">
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Consultation & Goal Setting</strong><br/>We clarify your disability-related needs, daily routines, and environments to determine appropriate tasks and training milestones.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Dog Selection or Evaluation</strong><br/>We help you choose a candidate (or evaluate your current dog) for health, temperament, stability, and trainability.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Foundations & Public Manners</strong><br/>Neutrality around people, dogs, and distractions; leash skills; impulse control; settling in public; and safe household routines.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Task Training</strong><br/>We teach and proof disability-mitigating tasks tailored to your goals (see examples below), with step-by-step handler coaching.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Public-Access Readiness</strong><br/>We proof behaviors in real-world settings and prepare you for handling, advocacy, and ongoing maintenance.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Handler Education & Support</strong><br/>You receive clear homework, progress benchmarks, and ongoing support to keep skills reliable.</span></li>
                                      </ol>
                                      <p>
                                        Training is available in-home or at our facility to match your schedule and optimize real-life carryover.
                                      </p>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Types of Working Dogs We Train</h2>
                                      <ul className="list-disc space-y-2 pl-5">
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Autism Service Dogs (ASD)</strong></span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Mobility Dogs</strong></span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Hearing Dogs</strong></span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Psychiatric Service Dogs (PSD)</strong></span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Emotional Support Animals (ESA)</strong> (note: ESAs are not service dogs under the ADA)</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Therapy Dogs</strong> (facility/visitation work; not service dogs under the ADA)</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Animal-Assisted Therapy</strong> (supports clinical/therapeutic settings; not ADA service dogs)</span></li>
                                      </ul>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Example Tasks (Customized to Your Needs)</h2>
                                      <ul className="list-disc space-y-2 pl-5">
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Interrupting or responding</strong> to anxiety episodes or dissociation cues (PSD)</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Guiding to exits</strong> or safe locations during overwhelm (PSD/ASD)</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Sound alerts</strong> (phone, doorbell, smoke alarm) for hearing assistance</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Item retrieval</strong>, light switches, and door operation (mobility)</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Counterbalance/brace assistance</strong> as approved by your medical team (mobility)</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Behavior interruption and redirection</strong>, deep-pressure therapy (ASD/PSD)</span></li>
                                      </ul>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">What to Expect</h2>
                                      <ul className="list-disc space-y-2 pl-5">
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Individualized plans</strong> based on your disability, home life, and environments</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Clear milestones</strong> for foundations, task work, and public-access readiness</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Ethical, evidence-informed methods</strong> focused on reliability, neutrality, and safety</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Ongoing coaching</strong> so you and your dog succeed together long-term</span></li>
                                          </ul>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Get Started</h2>
                                      <p className="text-center"><strong>Ready to explore service dog training? Request a consultation to discuss your goals, dog suitability, and a step-by-step plan tailored to you.</strong></p>
                                    </>
      );
    case "financing":
      return (
                                    <>
                                      <h2 className="text-xl font-bold text-[#0A3161] text-center">Flexible Financing for Dog Training</h2>
                                      <p>
                                        Training should begin when your dog needs it, not when finances line up perfectly. Our financing partners help you start the right program now and spread payments out with predictable monthly installments.
                                      </p>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">How It Works</h2>
                                      <ul className="list-disc space-y-2 pl-5">
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Fast application:</strong> Submit online or in person and receive most decisions within minutes.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Flexible term lengths:</strong> Choose monthly payments that match your household budget.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Transparent pricing:</strong> Fixed rates, no hidden fees, and no prepayment penalties.</span></li>
                                        <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Auto-pay support:</strong> Optional automatic drafts so you never miss a due date.</span></li>
                                      </ul>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Programs You Can Finance</h2>
                                      <p>
                                        Most training services qualify for financing. We&apos;ll outline eligible options during your consultation and tailor a plan to the goals you have for your dog.
                                      </p>
                                      <h2 className="text-xl font-bold text-[#B31942] text-center">Next Steps</h2>
                                      <p>
                                        Mention financing when you request a consultation. We will walk you through the application, review approved terms together, and finalize your dog&apos;s schedule once the plan feels right.
                                      </p>
                                      <div className="mt-6 flex flex-wrap items-center justify-center gap-[34px]">
                                        <a
                                          href="https://acquire1.comenity.net/unified/offer-intro?channel=J&clientName=allpetcard&inStore=true&storeNumber=99992&subChannel=S&workflow=unifiedPrequal"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block"
                                          aria-label="All Pet Card financing"
                                        >
                                          <Image
                                            src="/allpetcard.jpg"
                                            alt="All Pet Card financing logo"
                                            width={200}
                                            height={110}
                                            className="h-auto w-[200px] max-w-full"
                                          />
                                        </a>
                                        <a
                                          href="https://flexxbuy.com/joint-forces-k9-llc/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block"
                                          aria-label="FlexxBuy financing"
                                        >
                                          <Image
                                            src="/flexxbuy.webp"
                                            alt="FlexxBuy financing logo"
                                            width={200}
                                            height={110}
                                            className="h-auto w-[200px] max-w-full"
                                          />
                                        </a>
                                        <a
                                          href="https://portal.lendingusa.com/applications/dtm/application?pid=47614"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block"
                                          aria-label="LendingUSA financing application"
                                        >
                                          <Image
                                            src="/lendingusa.webp"
                                            alt="LendingUSA financing logo"
                                            width={200}
                                            height={110}
                                            className="h-auto w-[200px] max-w-full"
                                          />
                                        </a>
                                        <div className="h-[110px] w-[200px] max-w-full overflow-hidden rounded-md border border-slate-200">
                                          <a
                                            href="https://www.paypal.com/us/webapps/mpp/paypal-credit"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-full w-full items-center justify-center bg-white"
                                            aria-label="PayPal Credit financing"
                                          >
                                            <Image
                                              src="/paypal-logo.svg"
                                              alt="PayPal Credit"
                                              width={160}
                                              height={80}
                                              className="h-auto w-[160px] max-w-full"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                      <p className="text-center"><strong>Need help comparing options? Our team is happy to explain the terms so you can choose with confidence.</strong></p>
                                    </>
      );
    default:
      return null;
  }
}


