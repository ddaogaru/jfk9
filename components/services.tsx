"use client"

import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Dog, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useEffect, useCallback } from 'react';

interface SubSection {
  id: string;
  title: string;
  content: string;
}

interface Service {
  id: string;
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  subSections: SubSection[];
}

const servicesData: Record<string, Service> = {
  boarding: {
    id: 'boarding',
    icon: Dog,
    title: "Dog Boarding",
    description: "Camp-style boarding for dogs of all sizes and temperaments",
    subSections: [
      {
        id: "intro",
        title: "Dog Boarding in Northwest Arkansas",
        content: `## **Dog Boarding in Northwest Arkansas**

Joint Forces K9 provides camp-style boarding for dogs of all sizes and temperaments—no breed restrictions. Your pet stays in our climate-controlled kennels, enjoys daily socialization and exercise, and receives attentive, personalized care from our experienced team.

### **What to Expect**

* **Individual spaces** for privacy and rest

* **Outdoor areas** for safe play, enrichment, and exercise

* **Daily interaction** with friendly kennel staff

* **Medication administration** available as needed

* **Feeding schedules** and routines matched to your home setup

* **Unaltered dogs** are accepted

Our goal is a safe, low-stress, and enjoyable stay every time.

### **Boarding Requirements**

To protect the health of all pets in our care, proof of current vaccinations is required before boarding. Vaccines must be appropriate for your dog's age and current as of the check-in date.

* **Rabies**

* **Distemper/Parvo (DHLPP)**

* **Bordetella**

* **Canine Influenza (H3N2)** — Optional

Pets who show signs of illness should not be boarded. We monitor every guest for health and well-being during their stay.

### **Pricing**

Dog boarding—starting at $45 per night, regardless of size, age, or breed.

### **Reservations, Deposits, and Payments**

* **New clients** and all holiday reservations require a deposit to hold your spot.

* **Full payment** is required in advance for boarding and is non-refundable.

* **Closed on Sundays**; however, there is a pickup window from 12:00–2:00 PM for boarding dogs only.

### **Service Area**

Boarding is offered at our primary facility in Siloam Springs, proudly serving families across Northwest Arkansas, including Fayetteville, Springdale, Rogers, Bentonville, Tontitown, Centerton, Bella Vista, Pea Ridge, Gentry, Cave Springs, Gravette, Decatur, Greenland, Lincoln, Farmington, Prairie Grove, Johnson, West Fork, Eureka Springs, Goshen, Elkins, Little Flock, Bethel Heights, and Highfill.

If you have questions about suitability, vaccination records, medications, or special accommodations, contact us—we're happy to help.`
      }
    ]
  },
  training: {
    id: 'training',
    icon: Shield,
    title: "Dog Training",
    description: "Professional training programs for all purposes",
    subSections: [
      {
        id: "obedience",
        title: "Obedience Training",
        content: `## **Obedience Training Packages**

We offer several obedience programs based on how hands-on you want to be. All options include clear homework, progress check-ins, and practical skills for real-life settings. Payment plans are available.

### **Board and Train — starting at $950/week**

Your dog boards at our **Northwest Arkansas** facility and trains daily with our team. We teach new behaviors and address unwanted ones, with an average stay of 2–4 weeks depending on goals and temperament.

**Core skills covered:** Sit, Down, Heel, Climb/Place, Come, and Free (release).

**Teaching method:** Verbal commands by default, with any alternate cues discussed with you before training begins.

**Owner support:** One owner lesson for every two weeks of training plus a follow-up after your dog goes home.

### **Drop-Off Dog Training — starting at $750/week**

Get the same curriculum as our Board and Train while your dog sleeps at home. You'll drop off in the morning and pick up in the evening—like school for your dog.

**Core skills covered:** Sit, Down, Heel, Climb/Place, Come, and Free.

**Owner support:** One owner lesson for every two weeks of training plus a post-program follow-up.

### **Private Lessons — starting at $500 for four one-hour sessions**

Ideal if you want to be hands-on at the end of the leash. We coach you to teach your dog effectively and tailor the plan to your priorities.

**Format:** Four one-hour sessions.

**Focus areas:** Customized to your goals (manners, leash work, recall, household rules, and more).

### **Off-Site (In-Home) Private Training — starting at $900 for four one-hour sessions**

Enjoy private lessons at your home or another agreed-upon location for maximum real-world carryover.

**Format:** Four one-hour sessions at your location.

**Evaluation:** $50 initial in-home evaluation, credited to your first lesson if you enroll during that visit.

Final recommendations and timelines vary by dog, goals, and environment. We'll help you choose the program that fits your needs and lifestyle.`
      },
      {
        id: "aggressive",
        title: "Aggressive Dog Training",
        content: `## **Aggressive Dog Training in Northwest Arkansas**

At **Joint Forces K9 Group**, we specialize in rehabilitating dogs with aggressive or reactive behaviors across **Northwest Arkansas**. Our trainers help restore calm, safety, and trust at home while giving owners clear, practical tools that work in everyday life.

### **What We Address**

* **Human-directed aggression**

* **Leash reactivity** (lunging, barking, pulling)

* **Dog-to-dog aggression**

* **Food and resource guarding**

* **Fear-based aggression**

* **Anxiety-driven behaviors**

* **Separation anxiety**

* **Severe fear or shutdown responses**

### **Our Approach**

Aggression is often rooted in stress, fear, or confusion. We focus on changing emotions and behaviors—not your dog's personality—through a structured, humane program.

1. **Root-Cause Assessment**
   We evaluate history, triggers, routines, environment, and handling to understand why behaviors occur and when they're likely to surface.

2. **Individualized Training Plan**
   We tailor a step-by-step plan that may include desensitization, counter-conditioning, confidence building, foundation obedience, and household structure—plus clear homework and benchmarks.

3. **Safety & Owner Coaching**
   We prioritize management and safe handling (distance, thresholds, appropriate tools). You'll learn exactly what to do during walks, door greetings, guest interactions, and multi-dog situations.

4. **Consistency & Progress Checks**
   Regular sessions and simple daily reps build reliable habits. We adjust the plan as your dog improves to keep momentum and prevent setbacks.

5. **Veterinary Collaboration When Needed**
   If appropriate, we coordinate with your veterinarian to rule out pain or medical contributors and discuss whether medication may support training.

### **Early Warning Signs to Watch**

**Stiff posture**, **hard stare**, **lip lift**, **growling**, **freezing**, and **sudden lunging** are common precursors to escalation. Addressing these signals early improves outcomes and keeps everyone safer.

### **Service Area**

We serve every community across **Northwest Arkansas**, including major hubs like **Fayetteville**, **Springdale**, **Rogers**, and **Bentonville**. Our service also extends to surrounding towns such as **Siloam Springs**, **Centerton**, **Bella Vista**, **Pea Ridge**, **Tontitown**, **Gentry**, **Cave Springs**, **Gravette**, **Decatur**, **Greenland**, **Lincoln**, **Farmington**, **Prairie Grove**, **Johnson**, **West Fork**, **Eureka Springs**, **Goshen**, **Elkins**, **Little Flock**, **Bethel Heights**, and **Highfill**.

### **Why Joint Forces K9 Group**

* **Experienced trainers** who regularly work complex reactivity and aggression cases

* **Balanced, evidence-informed methods** tailored to the individual dog

* **Clear safety protocols** and owner education for real-world results

* **Measurable milestones** and plan updates as your dog progresses

### **Get Started**

If your dog is showing aggression or severe reactivity, earlier is better. Request a consultation to begin a customized behavior-modification plan that brings calm back to your home.`
      },
      {
        id: "protection",
        title: "Protection Dog Training",
        content: `## **Protection Dog Training in Northwest Arkansas**

Protection dog training is more than teaching a dog to guard or bark—it's about building a reliable partnership. Our goal is a dog that can protect you, your family, or your business while staying obedient, stable, and well-mannered around children, guests, and everyday distractions.

We tailor programs to your lifestyle—family protection, personal security, or business support—so your dog learns to follow commands, work through distractions, and respond appropriately to potential threats without becoming indiscriminately aggressive. Every plan is honest, effective, and matched to your dog's temperament.

### **The Importance of Imprinting and Socialization**

Imprinting and socialization form the foundation of effective protection work.

* **Early, positive experiences** with people, places, sounds, surfaces, and environments build confidence and resilience.

* **Structured socialization** teaches neutrality and focus under distraction, reducing unnecessary aggression.

* **Imprinting clarifies expectations**—what to do, when to do it, and how to recover (on and off switches).

* **The result** is a dog that can calmly navigate daily life—at home, around children and guests, and in public—while possessing the clarity and control needed for real protection scenarios.

### **Protection Sports Pathways**

We offer guidance and training along recognized protection-sport tracks. These sports test obedience, control under pressure, and sound temperament—qualities central to real-world protection.

**PSA (Protection Sports Association)**

Often called the "MMA of protection sports" for its dynamic, scenario-based challenges, PSA continually tests the dog–handler team in changing environments.

* **Progression:** PDC (Protection Dog Certificate), PSA1, PSA2, PSA3

* **Dog selection:** Temperament, nerve strength, environmental stability, and clear recoveries are key.

* **Obedience first:** Solid obedience is a prerequisite for advanced protection work.

* **Control under pressure:** Dogs learn to engage and release on command, maintain obedience in complex scenarios, and remain responsive to the handler despite distractions and stressors.

**IPO/Schutzhund (Protection, Obedience, Tracking)**

Formerly known as Schutzhund (SchH), IPO is a structured sport emphasizing precision and control across three phases: Tracking, Obedience, and Protection.

* **Equipment & exercises:** Helpers typically use a sleeve; exercises may include courage tests, escape bites, transport, search & guard, and controlled engagements.

* **Handler control:** Dogs must engage on cue, out/return promptly, and demonstrate neutrality when not working.

* **State changes:** Training builds the ability to move cleanly between passive and active states, maintaining clarity, safety, and compliance under pressure.

### **What You Can Expect**

* **Temperament-first approach:** Suitability and safety are evaluated before advanced work begins.

* **Clarity and control:** We prioritize clean outs, steady grips, neutrality, and reliable recalls.

* **Distraction training:** Real-world proofing for noise, surfaces, crowds, and environmental stressors.

* **Handler coaching:** You'll learn timing, leash mechanics, cue delivery, and safety protocols.

* **Ethical standards:** We focus on measured, purpose-driven training—never indiscriminate aggression.

### **Get Started**

If you're considering a protection dog or want to develop your current dog's potential, schedule a consultation. We'll assess temperament, outline a clear plan, and recommend the path—family protection, PSA, or IPO—that best fits your goals.`
      },
      {
        id: "service",
        title: "Service Dog Training",
        content: `## **Service Dog Training in Northwest Arkansas**

At **Joint Forces K9 Group**, we help people with disabilities train reliable, task-capable service dogs. Our programs are individualized to your needs, schedule, and home life, with training available in your home or at our facility.

### **What Is a Service Dog?**

Under the ADA, a service dog is a dog that is individually trained to do work or perform tasks for a person with a disability (including physical, sensory, psychiatric, intellectual, or other mental disabilities). The work or tasks must directly mitigate the person's disability.

* **Service dogs** perform specific tasks (e.g., alerting, guiding, retrieving, bracing) and have public-access rights under the ADA.

* **Psychiatric Service Dogs (PSD)** are service dogs; they perform trained tasks related to psychiatric disabilities.

* **Emotional Support Animals (ESA)** and therapy dogs provide comfort or therapeutic visitation but do not have ADA public-access rights.

* **This information** is for general guidance only; if you have legal questions about access rights, consult ADA resources or an attorney.

### **How Do I Get a Service Dog?**

There are several paths. We do not breed or sell service dogs; instead, we help you select an appropriate dog (or evaluate your current dog) and train it for task work and public access.

### **Our Process**

1. **Consultation & Goal Setting**
   We clarify your disability-related needs, daily routines, and environments to determine appropriate tasks and training milestones.

2. **Dog Selection or Evaluation**
   We help you choose a candidate (or evaluate your current dog) for health, temperament, stability, and trainability.

3. **Foundations & Public Manners**
   Neutrality around people, dogs, and distractions; leash skills; impulse control; settling in public; and safe household routines.

4. **Task Training**
   We teach and proof disability-mitigating tasks tailored to your goals (see examples below), with step-by-step handler coaching.

5. **Public-Access Readiness**
   We proof behaviors in real-world settings and prepare you for handling, advocacy, and ongoing maintenance.

6. **Handler Education & Support**
   You receive clear homework, progress benchmarks, and ongoing support to keep skills reliable.

Training is available in-home or at our facility to match your schedule and optimize real-life carryover.

### **Types of Working Dogs We Train**

* **Autism Service Dogs (ASD)**

* **Mobility Dogs**

* **Hearing Dogs**

* **Psychiatric Service Dogs (PSD)**

* **Emotional Support Animals (ESA)** (note: ESAs are not service dogs under the ADA)

* **Therapy Dogs** (facility/visitation work; not service dogs under the ADA)

* **Animal-Assisted Therapy** (supports clinical/therapeutic settings; not ADA service dogs)

### **Example Tasks (Customized to Your Needs)**

* **Interrupting or responding** to anxiety episodes or dissociation cues (PSD)

* **Guiding to exits** or safe locations during overwhelm (PSD/ASD)

* **Sound alerts** (phone, doorbell, smoke alarm) for hearing assistance

* **Item retrieval**, light switches, and door operation (mobility)

* **Counterbalance/brace assistance** as approved by your medical team (mobility)

* **Behavior interruption and redirection**, deep-pressure therapy (ASD/PSD)

### **What to Expect**

* **Individualized plans** based on your disability, home life, and environments

* **Clear milestones** for foundations, task work, and public-access readiness

* **Ethical, evidence-informed methods** focused on reliability, neutrality, and safety

* **Ongoing coaching** so you and your dog succeed together long-term

### **Get Started**

Ready to explore service dog training? Request a consultation to discuss your goals, dog suitability, and a step-by-step plan tailored to you.`
      }
    ]
  },
  detection: {
    id: 'detection',
    icon: Search,
    title: "Narcotics Detection",
    description: "Professional narcotics detection training",
    subSections: [
      {
        id: "basic",
        title: "Basic Detection Training",
        content: `## Basic Detection Training

Foundation training includes:
* **Scent discrimination** basics
* **Search patterns** development
* **Alert behavior** training
* **Handler communication** skills
* **Environmental acclimation**`
      },
      {
        id: "advanced",
        title: "Advanced Detection",
        content: `## Advanced Detection Training

Advanced skills development:
* **Multiple target** detection
* **Complex search areas**
* **Environmental challenges**
* **Speed and accuracy** training
* **False alert** prevention`
      },
      {
        id: "certification",
        title: "Certification Training",
        content: `## Certification Preparation

Preparing for certification:
* **Standard certifications** training
* **Testing scenarios** practice
* **Documentation** preparation
* **Handler certification** support
* **Maintenance training** plans`
      },
      {
        id: "deployment",
        title: "Deployment Training",
        content: `## Deployment Training

Real-world application training:
* **Vehicle searches**
* **Building searches**
* **Luggage/package inspection**
* **Open area searches**
* **Special event security**`
      }
    ]
  }
};

const Services = ({ activeService, setActiveService }: { activeService: string, setActiveService: (service: string) => void }) => {
  const [currentTrainingIndex, setCurrentTrainingIndex] = useState(0);
  
  const trainingServices = servicesData.training.subSections;
  
  const nextTraining = useCallback(() => {
    setCurrentTrainingIndex((prev) => (prev + 1) % trainingServices.length);
  }, [trainingServices.length]);
  
  const prevTraining = useCallback(() => {
    setCurrentTrainingIndex((prev) => (prev - 1 + trainingServices.length) % trainingServices.length);
  }, [trainingServices.length]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeService === 'training') {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          prevTraining();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          nextTraining();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeService, nextTraining, prevTraining]);

  return (
        <section id="services" className="bg-[#B31942] pb-[20px]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center gap-3 mb-4">
          <CustomBadge variant="red" inline={true} className="text-white border-[#0A3161]">Our Services</CustomBadge>
          <CustomTitle className="text-white whitespace-nowrap">Comprehensive Dog Training & Care</CustomTitle>
          <CustomSubtitle className="max-w-3xl mx-auto text-white">
            Expert services tailored to your dog&#39;s needs
          </CustomSubtitle>
        </div>

        <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
          <TabsList className="grid w-full grid-cols-3 gap-2 sm:gap-4 bg-transparent mb-8">
            <TabsTrigger
              value="boarding"
              className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-base font-medium bg-[#0A3161] text-white data-[state=active]:bg-white data-[state=active]:text-[#0A3161] hover:bg-white/90 hover:text-[#0A3161] border border-[#0A3161]/20 shadow-lg hover:shadow-xl transition-all text-center"
            >
              <Dog className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="whitespace-normal leading-tight">Dog Boarding</span>
            </TabsTrigger>
            <TabsTrigger
              value="training"
              className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-base font-medium bg-[#0A3161] text-white data-[state=active]:bg-white data-[state=active]:text-[#0A3161] hover:bg-white/90 hover:text-[#0A3161] border border-[#0A3161]/20 shadow-lg hover:shadow-xl transition-all text-center"
            >
              <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="whitespace-normal leading-tight">Dog Training</span>
            </TabsTrigger>
            <TabsTrigger
              value="detection"
              className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-base font-medium bg-[#0A3161] text-white data-[state=active]:bg-white data-[state=active]:text-[#0A3161] hover:bg-white/90 hover:text-[#0A3161] border border-[#0A3161]/20 shadow-lg hover:shadow-xl transition-all text-center"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="whitespace-normal leading-tight">Narcotics Detection</span>
            </TabsTrigger>
          </TabsList>

          {Object.values(servicesData).map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <div className={cn(
                "grid gap-6",
                service.id === "training" ? "md:grid-cols-1" : "md:grid-cols-1"
              )}>
                {service.id === "training" ? (
                  <div className="mt-[20px]">
                    {/* Training Type Navigation Tabs */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {trainingServices.map((training, index) => (
                          <button
                            key={training.id}
                            onClick={() => setCurrentTrainingIndex(index)}
                            className={cn(
                              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border-2",
                              index === currentTrainingIndex
                                ? "bg-[#0A3161] text-white border-[#0A3161] shadow-lg"
                                : "bg-white text-[#0A3161] border-[#0A3161]/30 hover:bg-white/90 hover:text-[#0A3161]"
                            )}
                          >
                            {training.title}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between mb-6">
                      <button
                        onClick={prevTraining}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A3161] text-white hover:bg-white hover:text-[#0A3161] border-2 border-[#0A3161] transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                        aria-label="Previous training service"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Previous</span>
                      </button>
                      
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-sm text-white">
                          {currentTrainingIndex + 1} of {trainingServices.length}
                        </span>
                        <div className="flex gap-1">
                          {trainingServices.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentTrainingIndex(index)}
                              className={cn(
                                "w-2 h-2 rounded-full transition-colors",
                                index === currentTrainingIndex 
                                  ? "bg-[#0A3161]" 
                                  : "bg-white hover:bg-white/80"
                              )}
                            />
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={nextTraining}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A3161] text-white hover:bg-white hover:text-[#0A3161] border-2 border-[#0A3161] transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                        aria-label="Next training service"
                      >
                        <span>Next</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Training Card Container */}
                    <div className="relative">
                        <Card className="flex-none shrink-0 overflow-hidden border border-border/50 hover:border-[#B31942]/50 transition-all duration-300 h-[600px] w-full max-w-none mb-6">
                          <CardContent className="space-y-4 flex-grow overflow-y-auto custom-scrollbar">
                            <div>
                              <div className="max-w-none space-y-[15px]">
                            {trainingServices[currentTrainingIndex].id === "obedience" && (
                              <>
                                <h2 className="text-xl font-bold text-[#0A3161] text-center">Obedience Training Packages</h2>
                                <p>
                                  We offer several obedience programs based on how hands-on you want to be. All options include clear homework, progress check-ins, and practical skills for real-life settings. Payment plans are available.
                                </p>
                                <h2 className="text-xl font-bold text-[#B31942] text-center">Board and Train — starting at $950/week</h2>
                                <p>
                                  Your dog boards at our Northwest Arkansas facility and trains daily with our team. We teach new behaviors and address unwanted ones, with an average stay of 2–4 weeks depending on goals and temperament.
                                </p>
                                <p><strong>Core skills covered:</strong> Sit, Down, Heel, Climb/Place, Come, and Free (release).</p>
                                <p><strong>Teaching method:</strong> Verbal commands by default, with any alternate cues discussed with you before training begins.</p>
                                <p><strong>Owner support:</strong> One owner lesson for every two weeks of training plus a follow-up after your dog goes home.</p>
                                
                                <h2 className="text-xl font-bold text-[#B31942] text-center">Drop-Off Dog Training — starting at $750/week</h2>
                                <p>
                                  Get the same curriculum as our Board and Train while your dog sleeps at home. You&apos;ll drop off in the morning and pick up in the evening—like school for your dog.
                                </p>
                                <p><strong>Core skills covered:</strong> Sit, Down, Heel, Climb/Place, Come, and Free.</p>
                                <p><strong>Owner support:</strong> One owner lesson for every two weeks of training plus a post-program follow-up.</p>
                                
                                <h2 className="text-xl font-bold text-[#B31942] text-center">Private Lessons — starting at $500 for four one-hour sessions</h2>
                                <p>
                                  Ideal if you want to be hands-on at the end of the leash. We coach you to teach your dog effectively and tailor the plan to your priorities.
                                </p>
                                <p><strong>Format:</strong> Four one-hour sessions.</p>
                                <p><strong>Focus areas:</strong> Customized to your goals (manners, leash work, recall, household rules, and more).</p>
                                
                                <h2 className="text-xl font-bold text-[#B31942] text-center">Off-Site (In-Home) Private Training — starting at $900 for four one-hour sessions</h2>
                                <p>
                                  Enjoy private lessons at your home or another agreed-upon location for maximum real-world carryover.
                                </p>
                                <p><strong>Format:</strong> Four one-hour sessions at your location.</p>
                                <p><strong>Evaluation:</strong> $50 initial in-home evaluation, credited to your first lesson if you enroll during that visit.</p>
                                
                                <p className="text-center"><strong>Final recommendations and timelines vary by dog, goals, and environment. We&apos;ll help you choose the program that fits your needs and lifestyle.</strong></p>
                              </>
                            )}
                            {trainingServices[currentTrainingIndex].id === "aggressive" && (
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
                                  Aggression is often rooted in stress, fear, or confusion. We focus on changing emotions and behaviors—not your dog&apos;s personality—through a structured, humane program.
                                </p>
                                <ol className="list-decimal space-y-2 pl-5">
                                  <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Root-Cause Assessment</strong><br/>We evaluate history, triggers, routines, environment, and handling to understand why behaviors occur and when they&apos;re likely to surface.</span></li>
                                  <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Individualized Training Plan</strong><br/>We tailor a step-by-step plan that may include desensitization, counter-conditioning, confidence building, foundation obedience, and household structure—plus clear homework and benchmarks.</span></li>
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
                            )}
                            {trainingServices[currentTrainingIndex].id === "protection" && (
                              <>
                                <h2 className="text-xl font-bold text-[#0A3161] text-center">Protection Dog Training in Northwest Arkansas</h2>
                                <p>
                                  Protection dog training is more than teaching a dog to guard or bark—it&apos;s about building a reliable partnership. Our goal is a dog that can protect you, your family, or your business while staying obedient, stable, and well-mannered around children, guests, and everyday distractions.
                                </p>
                                <p>
                                  We tailor programs to your lifestyle—family protection, personal security, or business support—so your dog learns to follow commands, work through distractions, and respond appropriately to potential threats without becoming indiscriminately aggressive. Every plan is honest, effective, and matched to your dog&apos;s temperament.
                                </p>
                                <h2 className="text-xl font-bold text-[#B31942] text-center">The Importance of Imprinting and Socialization</h2>
                                <p>
                                  Imprinting and socialization form the foundation of effective protection work.
                                </p>
                                <ul className="list-disc space-y-2 pl-5">
                                  <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Early, positive experiences</strong> with people, places, sounds, surfaces, and environments build confidence and resilience.</span></li>
                                  <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Structured socialization</strong> teaches neutrality and focus under distraction, reducing unnecessary aggression.</span></li>
                                  <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Imprinting clarifies expectations</strong>—what to do, when to do it, and how to recover (on and off switches).</span></li>
                                  <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">The result</strong> is a dog that can calmly navigate daily life—at home, around children and guests, and in public—while possessing the clarity and control needed for real protection scenarios.</span></li>
                                </ul>
                                <h2 className="text-xl font-bold text-[#B31942] text-center">Protection Sports Pathways</h2>
                                <p>
                                  We offer guidance and training along recognized protection-sport tracks. These sports test obedience, control under pressure, and sound temperament—qualities central to real-world protection.
                                </p>
                                <h3 className="text-lg font-bold text-[#B31942] text-center">PSA (Protection Sports Association)</h3>
                                <p>
                                  Often called the &quot;MMA of protection sports&quot; for its dynamic, scenario-based challenges, PSA continually tests the dog–handler team in changing environments.
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
                                  <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Ethical standards:</strong> We focus on measured, purpose-driven training—never indiscriminate aggression.</span></li>
                                </ul>
                                <h2 className="text-xl font-bold text-[#B31942] text-center">Get Started</h2>
                                <p className="text-center"><strong>If you&apos;re considering a protection dog or want to develop your current dog&apos;s potential, schedule a consultation. We&apos;ll assess temperament, outline a clear plan, and recommend the path—family protection, PSA, or IPO—that best fits your goals.</strong></p>
                              </>
                            )}
                            {trainingServices[currentTrainingIndex].id === "service" && (
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
                            )}
                              </div>
                              
                              {/* Button inside the card */}
                              <div className="flex justify-center mt-6">
                                <Button 
                                  variant="outline" 
                                  className="bg-[#0A3161] text-white hover:bg-[#B31942] hover:text-white border-[#0A3161] hover:border-[#B31942]"
                                  onClick={() => {
                                    const element = document.getElementById('contact');
                                    if (element) {
                                      element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                  }}
                                >
                                  Contact Us
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                    </div>
                  </div>
                ) : service.id === "boarding" ? (
                  <Card className="flex flex-col h-[570px] w-full mb-6">
                    <CardHeader className="pb-0">
                      <CardTitle className="text-2xl md:text-3xl font-bold text-[#002868] text-center">Dog Boarding in Northwest Arkansas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-grow overflow-y-auto custom-scrollbar">
                      <div>
                        <div className="max-w-none space-y-[15px]">
                          <p>
                            Joint Forces K9 provides camp-style boarding for dogs of all sizes and temperaments—no breed restrictions. Your pet stays in our climate-controlled kennels, enjoys daily socialization and exercise, and receives attentive, personalized care from our experienced team.
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
                            <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Canine Influenza (H3N2)</strong> — Optional</span></li>
                          </ul>
                          <p>Pets who show signs of illness should not be boarded. We monitor every guest for health and well-being during their stay.</p>

                          <h2 className="text-xl font-bold text-[#B31942] text-center">Pricing</h2>
                          <p>Dog boarding—starting at $45 per night, regardless of size, age, or breed.</p>

                          <h2 className="text-xl font-bold text-[#B31942] text-center">Reservations, Deposits, and Payments</h2>
                          <ul className="list-disc space-y-2 pl-5">
                            <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">New clients</strong> and all holiday reservations require a deposit to hold your spot.</span></li>
                            <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Full payment</strong> is required in advance for boarding and is non-refundable.</span></li>
                            <li className="flex items-start"><span><strong className="font-bold text-[#B31942]">Closed on Sundays</strong>; however, there is a pickup window from 12:00–2:00 PM for boarding dogs only.</span></li>
                          </ul>

                          <h2 className="text-xl font-bold text-[#B31942] text-center">Service Area</h2>
                          <p>
                            Boarding is offered at our primary facility in Siloam Springs, proudly serving families across Northwest Arkansas, including Fayetteville, Springdale, Rogers, Bentonville, Tontitown, Centerton, Bella Vista, Pea Ridge, Gentry, Cave Springs, Gravette, Decatur, Greenland, Lincoln, Farmington, Prairie Grove, Johnson, West Fork, Eureka Springs, Goshen, Elkins, Little Flock, Bethel Heights, and Highfill.
                          </p>
                          <p className="text-center"><strong>If you have questions about suitability, vaccination records, medications, or special accommodations, contact us—we&apos;re happy to help.</strong></p>
                          
                          {/* Button inside the card */}
                          <div className="flex justify-center">
                            <Button 
                              variant="outline" 
                              className="bg-[#0A3161] text-white hover:bg-[#B31942] hover:text-white border-[#0A3161] hover:border-[#B31942]"
                              onClick={() => {
                                const element = document.getElementById('contact');
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }}
                            >
                              Contact Us
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : service.id === "detection" ? (
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
                          
                          {/* Button inside the card */}
                          <div className="flex justify-center mt-6">
                            <Button 
                              variant="outline" 
                              className="bg-[#0A3161] text-white hover:bg-[#B31942] hover:text-white border-[#0A3161] hover:border-[#B31942]"
                              onClick={() => {
                                const element = document.getElementById('contact');
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }}
                            >
                              Contact Us
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : null}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
