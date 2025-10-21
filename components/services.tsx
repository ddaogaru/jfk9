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
		<section id="services" className="bg-brand-red">
			<div className="content-shell flow">
				<div className="flex flex-col items-center justify-center text-center flow">
					<CustomBadge
						variant="red"
						inline
						className="border-brand-navy text-white"
					>
						Our Services
					</CustomBadge>
					<CustomTitle className="text-white">
						Comprehensive Dog Training &amp; Care
					</CustomTitle>
					<CustomSubtitle className="mx-auto max-w-3xl text-white">
						Expert services tailored to your dog&apos;s needs
					</CustomSubtitle>
				</div>

				<div className="grid gap-15">
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
	<Card compact className="flex h-[600px] w-full flex-col">
		<CardHeader className="text-center">
			<CardTitle className="text-2xl font-bold text-brand-navy md:text-3xl">
				{TRAINING_SECTION_TITLES[sectionId]}
			</CardTitle>
		</CardHeader>
		<CardContent className="flow flex-grow overflow-y-auto custom-scrollbar">
			<div className="flow max-w-none">
				{renderTrainingSection(sectionId)}
			</div>
			<div className="flex justify-center">
				<Button
					asChild
					variant="default"
					size="lg"
					className="transition-all hover:bg-brand-red hover:text-white"
				>
					<a href="/contact">Contact Us</a>
				</Button>
			</div>
		</CardContent>
	</Card>
);

const BoardingCard = () => (
	<Card compact className="flex h-[570px] w-full flex-col">
		<CardHeader className="text-center">
			<CardTitle className="text-2xl font-bold text-brand-navy md:text-3xl">
				Dog Boarding in Northwest Arkansas
			</CardTitle>
		</CardHeader>
		<CardContent className="flow flex-grow overflow-y-auto custom-scrollbar">
			<div className="flow max-w-none">
				<p>
					Joint Forces K9 provides camp-style boarding for dogs of all sizes and
					temperaments&mdash;no breed restrictions. Your pet stays in our
					climate-controlled kennels, enjoys daily socialization and exercise,
					and receives attentive, personalized care from our experienced team.
				</p>

				<h2 className="text-center text-xl font-bold text-brand-red">
					What to Expect
				</h2>
				<ul className="flow list-disc pl-15">
					<li>
						<span>
							<strong className="font-bold text-brand-red">Individual spaces</strong>
							{" "}
							for privacy and rest
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Outdoor areas</strong>
							{" "}
							for safe play, enrichment, and exercise
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Daily interaction</strong>
							{" "}
							with friendly kennel staff
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Medication administration</strong>
							{" "}
							available as needed
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Feeding schedules</strong>
							{" "}
							and routines matched to your home setup
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Unaltered dogs</strong>
							{" "}
							are accepted
						</span>
					</li>
				</ul>
				<p>Our goal is a safe, low-stress, and enjoyable stay every time.</p>

				<h2 className="text-center text-xl font-bold text-brand-red">
					Boarding Requirements
				</h2>
				<p>
					To protect the health of all pets in our care, proof of current
					vaccinations is required before boarding. Vaccines must be appropriate
					for your dog&apos;s age and current as of the check-in date.
				</p>
				<ul className="flow list-disc pl-15">
					<li>
						<span>
							<strong className="font-bold text-brand-red">Rabies</strong>
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Distemper/Parvo (DHLPP)</strong>
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Bordetella</strong>
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Canine Influenza (H3N2)</strong>
							{" "}
							&mdash; Optional
						</span>
					</li>
				</ul>
				<p>
					Pets who show signs of illness should not be boarded. We monitor every
					guest for health and well-being during their stay.
				</p>

				<h2 className="text-center text-xl font-bold text-brand-red">Pricing</h2>
				<p>
					Dog boarding&mdash;starting at $45 per night, regardless of size, age,
					or breed.
				</p>

				<h2 className="text-center text-xl font-bold text-brand-red">
					Reservations, Deposits, and Payments
				</h2>
				<ul className="flow list-disc pl-15">
					<li>
						<span>
							<strong className="font-bold text-brand-red">Full payment</strong>
							{" "}
							is required in advance for boarding and is non-refundable.
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Closed on Sundays</strong>
							{" "}
							however, there is a pickup window from 12:00&ndash;2:00 PM for
							boarding dogs only.
						</span>
					</li>
				</ul>

				<h2 className="text-center text-xl font-bold text-brand-red">
					Service Area
				</h2>
				<p>
					Boarding is offered at our primary facility in Siloam Springs, proudly
					serving families across Northwest Arkansas, including Fayetteville,
					Springdale, Rogers, Bentonville, Tontitown, Centerton, Bella Vista, Pea
					Ridge, Gentry, Cave Springs, Gravette, Decatur, Greenland, Lincoln,
					Farmington, Prairie Grove, Johnson, West Fork, Eureka Springs, Goshen,
					Elkins, Little Flock, Bethel Heights, and Highfill.
				</p>
				<p className="text-center">
					<strong>
						If you have questions about suitability, vaccination records,
						medications, or special accommodations, contact us&mdash;we&apos;re happy to
						help.
					</strong>
				</p>
			</div>
			<div className="flex justify-center">
				<Button
					asChild
					variant="default"
					size="lg"
					className="transition-all hover:bg-brand-red hover:text-white"
				>
					<a href="/contact">Contact Us</a>
				</Button>
			</div>
		</CardContent>
	</Card>
);

const DetectionCard = () => (
	<Card compact className="flex h-[600px] w-full flex-col">
		<CardHeader className="text-center">
			<CardTitle className="text-2xl font-bold text-brand-navy md:text-3xl">
				Professional K9 Narcotics Detection Services
			</CardTitle>
		</CardHeader>
		<CardContent className="flow flex-grow overflow-y-auto custom-scrollbar">
			<div className="flow max-w-none">
				<h2 className="text-center text-xl font-bold text-brand-red">
					Enhancing Safety &amp; Security with Elite Scent Detection Teams
				</h2>

				<p>
					Joint Forces K9 Group provides confidential and effective narcotics
					detection services for businesses, schools, venues, and homeowners.
					Our proactive K9 sweeps are a powerful deterrent, helping you maintain
					a safe, drug-free environment. Our highly trained scent detection dogs
					and expert handlers offer peace of mind by delivering fast, accurate,
					and discreet security solutions across commercial, municipal, and
					residential markets.
				</p>

				<h2 className="text-center text-xl font-bold text-brand-red">
					Our Specialized K9 Detection Advantage
				</h2>

				<ul className="flow list-disc pl-15">
					<li>
						<span>
							<strong className="font-bold text-brand-red">Precision Training:</strong>
							{" "}
							Our K9s are trained to isolate the pure scent of a wide variety of
							narcotics, ignoring common environmental distractions to prevent
							false alerts.
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Experienced Handlers:</strong>
							{" "}
							Every handler is a professional, trained to manage the K9 and
							conduct searches with minimal disruption to your operations.
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Versatile Application:</strong>
							{" "}
							From large-scale event venues to private homes, our teams are
							equipped to handle any environment.
						</span>
					</li>
				</ul>

				<h2 className="text-center text-xl font-bold text-brand-red">
					Our Confidential &amp; Professional Search Process
				</h2>

				<p>
					To protect all parties and ensure maximum effectiveness, our process is
					built on a foundation of safety and legality.
				</p>

				<ol className="flow list-decimal pl-15">
					<li>
						<span>
							<strong className="font-bold text-brand-red">Authorization:</strong>
							{" "}
							We begin with express written consent from the property owner or
							legal representative.
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Site Preparation:</strong>
							{" "}
							For the safety of all involved and the accuracy of the search, the
							premises are temporarily cleared of all occupants and pets.
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">On-Site Supervision:</strong>
							{" "}
							The owner or their representative must be present throughout the
							entire sweep to witness the process and receive immediate updates.
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Systematic Sweep:</strong>
							{" "}
							Our handler and K9 partner will meticulously search the property
							one room at a time.
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Clear Indication:</strong>
							{" "}
							If a narcotic&apos;s odor is detected, our K9 will give a passive
							alert. The handler will then discreetly mark the area and inform
							the representative on-site.
						</span>
					</li>
				</ol>

				<h2 className="text-center text-xl font-bold text-brand-red">
					Our Commitment: Detection, Not Confiscation
				</h2>

				<p>
					Please note that our service is strictly for the detection of a
					narcotic&apos;s odor. Joint Forces K9 Group is not authorized to search for,
					handle, or dispose of illegal substances. The responsibility for
					locating and removing any contraband from a marked area rests entirely
					with the client.
				</p>

				<h2 className="text-center text-xl font-bold text-brand-red">
					Who We Serve: Industries &amp; Clients
				</h2>

				<ul className="flow list-disc pl-15">
					<li>
						<span>
							<strong className="font-bold text-brand-red">Schools &amp; Educational Institutions:</strong>
							{" "}
							Helping to enforce drug-free campus policies and ensure student
							safety.
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Corporate Offices &amp; Businesses:</strong>
							{" "}
							Protecting your employees, assets, and reputation from workplace
							drug issues.
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Event Venues &amp; Public Arenas:</strong>
							{" "}
							Providing proactive security screenings for concerts, festivals,
							and sporting events.
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Government &amp; Municipal Facilities:</strong>
							{" "}
							Aiding agencies in maintaining secure and compliant environments.
						</span>
					</li>
					<li>
						<span>
							<strong className="font-bold text-brand-red">Private Residences:</strong>
							{" "}
							Offering discreet, confidential searches for homeowners concerned
							about drug activity.
						</span>
					</li>
				</ul>

				<p>
					We provide Narcotics Detection across all of Northwest Arkansas (NWA).
					While our primary facility is based in Siloam Springs, we are proud to
					serve families throughout the region, including Fayetteville,
					Springdale, Rogers, Bentonville, Tontitown, Centerton, Bella Vista, Pea
					Ridge, Gentry, Cave Springs, Gravette, Decatur, Greenland, Lincoln,
					Farmington, Prairie Grove, Johnson, West Fork, Eureka Springs, Goshen,
					Elkins, Little Flock, Bethel Heights, and Highfill.
				</p>
				<p className="text-center">
					<strong>Secure your peace of mind. Contact us today for a confidential consultation.</strong>
				</p>
			</div>
			<div className="flex justify-center">
				<Button
					asChild
					variant="default"
					size="lg"
					className="transition-all hover:bg-brand-red hover:text-white"
				>
					<a href="/contact">Contact Us</a>
				</Button>
			</div>
		</CardContent>
	</Card>
);

function renderTrainingSection(sectionId: TrainingSectionId) {
	switch (sectionId) {
		case "obedience":
			return (
				<div className="flow">
					<h2 className="text-center text-xl font-bold text-brand-navy">
						Obedience Training Packages
					</h2>
					<p>
						We offer several obedience programs based on how hands-on you want to
						be. All options include clear homework, progress check-ins, and
						practical skills for real-life settings. Payment plans are available.
					</p>
					<h2 className="text-center text-xl font-bold text-brand-red">
						Board and Train &mdash; starting at $950/week
					</h2>
					<p>
						Your dog boards at our Northwest Arkansas facility and trains daily
						with our team. We teach new behaviors and address unwanted ones, with
						an average stay of 2&ndash;4 weeks depending on goals and temperament.
					</p>
					<p>
						<strong>Core skills covered:</strong> Sit, Down, Heel, Climb/Place,
						Come, and Free (release).
					</p>
					<p>
						<strong>Teaching method:</strong> Verbal commands by default, with
						any alternate cues discussed with you before training begins.
					</p>
					<p>
						<strong>Owner support:</strong> One owner lesson for every two weeks
						of training plus a follow-up after your dog goes home.
					</p>

					<h2 className="text-center text-xl font-bold text-brand-red">
						Drop Off Day Training &mdash; starting at $750/week
					</h2>
					<p>
						Get the same curriculum as our Board and Train while your dog sleeps
						at home. You&apos;ll drop off in the morning and pick up in the
						evening&mdash;like school for your dog.
					</p>
					<p>
						<strong>Core skills covered:</strong> Sit, Down, Heel, Climb/Place,
						Come, and Free.
					</p>
					<p>
						<strong>Owner support:</strong> One owner lesson for every two weeks
						of training plus a post-program follow-up.
					</p>

					<h2 className="text-center text-xl font-bold text-brand-red">
						Private Lessons &mdash; starting at $500 for four one-hour sessions
					</h2>
					<p>
						Ideal if you want to be hands-on at the end of the leash. We coach
						you to teach your dog effectively and tailor the plan to your
						priorities.
					</p>
					<p>
						<strong>Format:</strong> Four one-hour sessions.
					</p>
					<p>
						<strong>Focus areas:</strong> Customized to your goals (manners,
						leash work, recall, household rules, and more).
					</p>

					<h2 className="text-center text-xl font-bold text-brand-red">
						Off-Site (In-Home) Private Training &mdash; starting at $900 for four
						one-hour sessions
					</h2>
					<p>
						Enjoy private lessons at your home or another agreed-upon location
						for maximum real-world carryover.
					</p>
					<p>
						<strong>Format:</strong> Four one-hour sessions at your location.
					</p>
					<p>
						<strong>Evaluation:</strong> $50 initial in-home evaluation,
						credited to your first lesson if you enroll during that visit.
					</p>

					<h2 className="text-center text-xl font-bold text-brand-red">
						Service Area
					</h2>
					<p>
						We serve every community across Northwest Arkansas, including major
						hubs like Fayetteville, Springdale, Rogers, and Bentonville. Our
						service also extends to surrounding towns such as Siloam Springs,
						Centerton, Bella Vista, Pea Ridge, Tontitown, Gentry, Cave Springs,
						Gravette, Decatur, Greenland, Lincoln, Farmington, Prairie Grove,
						Johnson, West Fork, Eureka Springs, Goshen, Elkins, Little Flock,
						Bethel Heights, and Highfill.
					</p>

					<p className="text-center">
						<strong>
							Final recommendations and timelines vary by dog, goals, and
							environment. We&apos;ll help you choose the program that fits your needs
							and lifestyle.
						</strong>
					</p>
				</div>
			);
		case "aggressive":
			return (
				<div className="flow">
					<h2 className="text-center text-xl font-bold text-brand-navy">
						Aggressive Dog Training in Northwest Arkansas
					</h2>
					<p>
						At Joint Forces K9 Group, we specialize in rehabilitating dogs with
						aggressive or reactive behaviors across Northwest Arkansas. Our
						trainers help restore calm, safety, and trust at home while giving
						owners clear, practical tools that work in everyday life.
					</p>
					<h2 className="text-center text-xl font-bold text-brand-red">
						What We Address
					</h2>
					<ul className="flow list-disc pl-15">
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Human-directed aggression
								</strong>
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">Leash reactivity</strong>
								{" "}
								(lunging, barking, pulling)
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Dog-to-dog aggression
								</strong>
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Food and resource guarding
								</strong>
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">Fear-based aggression</strong>
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Anxiety-driven behaviors
								</strong>
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">Separation anxiety</strong>
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Severe fear or shutdown responses
								</strong>
							</span>
						</li>
					</ul>
					<h2 className="text-center text-xl font-bold text-brand-red">
						Our Approach
					</h2>
					<p>
						Aggression is often rooted in stress, fear, or confusion. We focus on
						changing emotions and behaviors&mdash;not your dog&apos;s personality&mdash;through a
						structured, humane program.
					</p>
					<ol className="flow list-decimal pl-15">
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Root-Cause Assessment
								</strong>
								<br />
								We evaluate history, triggers, routines, environment, and
								handling to understand why behaviors occur and when they&apos;re
								likely to surface.
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Individualized Training Plan
								</strong>
								<br />
								We tailor a step-by-step plan that may include desensitization,
								counter-conditioning, confidence building, foundation obedience,
								and household structure&mdash;plus clear homework and benchmarks.
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Safety &amp; Owner Coaching
								</strong>
								<br />
								We prioritize management and safe handling (distance,
								thresholds, appropriate tools). You&apos;ll learn exactly what to do
								during walks, door greetings, guest interactions, and multi-dog
								situations.
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Consistency &amp; Progress Checks
								</strong>
								<br />
								Regular sessions and simple daily reps build reliable habits. We
								adjust the plan as your dog improves to keep momentum and prevent
								setbacks.
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Veterinary Collaboration When Needed
								</strong>
								<br />
								If appropriate, we coordinate with your veterinarian to rule out
								pain or medical contributors and discuss whether medication may
								support training.
							</span>
						</li>
					</ol>
					<h2 className="text-center text-xl font-bold text-brand-red">
						Early Warning Signs to Watch
					</h2>
					<p>
						<strong>Stiff posture</strong>, <strong>hard stare</strong>,
						<strong>lip lift</strong>, <strong>growling</strong>,
						<strong>freezing</strong>, and <strong>sudden lunging</strong> are
						common precursors to escalation. Addressing these signals early
						improves outcomes and keeps everyone safer.
					</p>
					<h2 className="text-center text-xl font-bold text-brand-red">
						Service Area
					</h2>
					<p>
						We serve every community across Northwest Arkansas, including major
						hubs like Fayetteville, Springdale, Rogers, and Bentonville. Our
						service also extends to surrounding towns such as Siloam Springs,
						Centerton, Bella Vista, Pea Ridge, Tontitown, Gentry, Cave Springs,
						Gravette, Decatur, Greenland, Lincoln, Farmington, Prairie Grove,
						Johnson, West Fork, Eureka Springs, Goshen, Elkins, Little Flock,
						Bethel Heights, and Highfill.
					</p>
					<h2 className="text-center text-xl font-bold text-brand-red">
						Why Joint Forces K9 Group
					</h2>
					<ul className="flow list-disc pl-15">
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Experienced trainers
								</strong>
								{" "}
								who regularly work complex reactivity and aggression cases
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Balanced, evidence-informed methods
								</strong>
								{" "}
								tailored to the individual dog
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Clear safety protocols
								</strong>
								{" "}
								and owner education for real-world results
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Measurable milestones
								</strong>
								{" "}
								and plan updates as your dog progresses
							</span>
						</li>
					</ul>
					<h2 className="text-center text-xl font-bold text-brand-red">
						Get Started
					</h2>
					<p className="text-center">
						<strong>
							If your dog is showing aggression or severe reactivity, earlier is
							better. Request a consultation to begin a customized
							behavior-modification plan that brings calm back to your home.
						</strong>
					</p>
				</div>
			);
		case "protection":
			return (
				<div className="flow">
					<h2 className="text-center text-xl font-bold text-brand-navy">
						Protection Dog Training in Northwest Arkansas
					</h2>
					<p>
						Protection dog training is more than teaching a dog to guard or
						bark&mdash;it&apos;s about building a reliable partnership. Our goal is a dog
						that can protect you, your family, or your business while staying
						obedient, stable, and well-mannered around children, guests, and
						everyday distractions.
					</p>
					<p>
						We tailor programs to your lifestyle&mdash;family protection, personal
						security, or business support&mdash;so your dog learns to follow commands,
						work through distractions, and respond appropriately to potential
						threats without becoming indiscriminately aggressive. Every plan is
						honest, effective, and matched to your dog&apos;s temperament.
					</p>
					<h2 className="text-center text-xl font-bold text-brand-red">
						The Importance of Imprinting and Socialization
					</h2>
					<p>
						Imprinting and socialization form the foundation of effective
						protection work.
					</p>
					<ul className="flow list-disc pl-15">
						<li>
							<span>
								<strong className="font-bold text-brand-red">Early imprinting</strong>
								{" "}
								creates clear, reliable responses to commands, environmental
								changes, and equipment cues.
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Structured socialization
								</strong>
								{" "}
								ensures your dog can read situations correctly and respond
								without unnecessary aggression.
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">Confidence building</strong>
								{" "}
								balances the dog&apos;s natural drive with environmental resilience.
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">The result</strong>
								{" "}
								is a dog that can calmly navigate daily life&mdash;at home, around
								children and guests, and in public&mdash;while possessing the clarity
								and control needed for real protection scenarios.
							</span>
						</li>
					</ul>
					<h2 className="text-center text-xl font-bold text-brand-red">
						Protection Sports Pathways
					</h2>
					<p>
						We offer guidance and training along recognized protection-sport
						tracks. These sports test obedience, control under pressure, and
						sound temperament&mdash;qualities central to real-world protection.
					</p>
					<h3 className="text-center text-lg font-bold text-brand-red">
						PSA (Protection Sports Association)
					</h3>
					<p>
						Often called the &quot;MMA of protection sports&quot; for its dynamic,
						scenario-based challenges, PSA continually tests the dog&ndash;handler team
						in changing environments.
					</p>
					<ul className="flow list-disc pl-15">
						<li>
							<span>
								<strong className="font-bold text-brand-red">Progression:</strong>
								{" "}
								PDC (Protection Dog Certificate), PSA1, PSA2, PSA3
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">Dog selection:</strong>
								{" "}
								Temperament, nerve strength, environmental stability, and clear
								recoveries are key.
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">Obedience first:</strong>
								{" "}
								Solid obedience is a prerequisite for advanced protection work.
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Control under pressure:
								</strong>
								{" "}
								Dogs learn to engage and release on command, maintain obedience
								in complex scenarios, and remain responsive to the handler
								despite distractions and stressors.
							</span>
						</li>
					</ul>
					<h3 className="text-center text-lg font-bold text-brand-red">
						IPO/Schutzhund (Protection, Obedience, Tracking)
					</h3>
					<p>
						Formerly known as Schutzhund (SchH), IPO is a structured sport
						emphasizing precision and control across three phases: Tracking,
						Obedience, and Protection.
					</p>
					<ul className="flow list-disc pl-15">
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Equipment &amp; exercises:
								</strong>
								{" "}
								Helpers typically use a sleeve; exercises may include courage
								tests, escape bites, transport, search &amp; guard, and controlled
								engagements.
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">Handler control:</strong>
								{" "}
								Dogs must engage on cue, out/return promptly, and demonstrate
								neutrality when not working.
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">State changes:</strong>
								{" "}
								Training builds the ability to move cleanly between passive and
								active states, maintaining clarity, safety, and compliance under
								pressure.
							</span>
						</li>
					</ul>
					<h2 className="text-center text-xl font-bold text-brand-red">
						What You Can Expect
					</h2>
					<ul className="flow list-disc pl-15">
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Temperament-first approach:
								</strong>
								{" "}
								Suitability and safety are evaluated before advanced work begins.
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">Clarity and control:</strong>
								{" "}
								We prioritize clean outs, steady grips, neutrality, and reliable
								recalls.
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">Distraction training:</strong>
								{" "}
								Real-world proofing for noise, surfaces, crowds, and
								environmental stressors.
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">Handler coaching:</strong>
								{" "}
								You&apos;ll learn timing, leash mechanics, cue delivery, and safety
								protocols.
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">Ethical standards:</strong>
								{" "}
								We focus on measured, purpose-driven training&mdash;never
								indiscriminate aggression.
							</span>
						</li>
					</ul>
					<h2 className="text-center text-xl font-bold text-brand-red">
						Service Area
					</h2>
					<p>
						We serve every community across Northwest Arkansas, including major
						hubs like Fayetteville, Springdale, Rogers, and Bentonville. Our
						service also extends to surrounding towns such as Siloam Springs,
						Centerton, Bella Vista, Pea Ridge, Tontitown, Gentry, Cave Springs,
						Gravette, Decatur, Greenland, Lincoln, Farmington, Prairie Grove,
						Johnson, West Fork, Eureka Springs, Goshen, Elkins, Little Flock,
						Bethel Heights, and Highfill.
					</p>
					<h2 className="text-center text-xl font-bold text-brand-red">
						Get Started
					</h2>
					<p className="text-center">
						<strong>
							If you&apos;re considering a protection dog or want to develop your
							current dog&apos;s potential, schedule a consultation. We&apos;ll assess
							temperament, outline a clear plan, and recommend the path&mdash;family
							protection, PSA, or IPO&mdash;that best fits your goals.
						</strong>
					</p>
				</div>
			);
		case "service":
			return (
				<div className="flow">
					<h2 className="text-center text-xl font-bold text-brand-navy">
						Service Dog Training Programs
					</h2>
					<p>
						We provide comprehensive service dog training tailored to individual
						needs, from mobility support to medical alert tasks. Each program
						emphasizes reliability, public access readiness, and handler
						confidence.
					</p>
					<h2 className="text-center text-xl font-bold text-brand-red">
						Specialty Areas
					</h2>
					<ul className="flow list-disc pl-15">
						<li>
							<span>
								<strong className="font-bold text-brand-red">Medical alert</strong>
								{" "}
								(seizure, diabetic, cardiac)
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">Mobility support</strong>
								{" "}
								including retrieval, counter-balance, and brace work
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">
									Psychiatric service tasks
								</strong>
								{" "}
								for veterans and civilians managing PTSD, anxiety, or autism
							</span>
						</li>
					</ul>
					<p>
						We collaborate with your care team when needed to ensure tasks meet
						medical requirements, and we coach handlers extensively for long-term
						success.
					</p>
					<h2 className="text-center text-xl font-bold text-brand-red">
						Service Area
					</h2>
					<p>
						We serve every community across Northwest Arkansas, including major
						hubs like Fayetteville, Springdale, Rogers, and Bentonville. Our
						service also extends to surrounding towns such as Siloam Springs,
						Centerton, Bella Vista, Pea Ridge, Tontitown, Gentry, Cave Springs,
						Gravette, Decatur, Greenland, Lincoln, Farmington, Prairie Grove,
						Johnson, West Fork, Eureka Springs, Goshen, Elkins, Little Flock,
						Bethel Heights, and Highfill.
					</p>
					<p className="text-center">
						<strong>
							Every service team receives custom homework, public access
							practice, and transition support to integrate tasks into daily
							life.
						</strong>
					</p>
				</div>
			);
		case "financing":
			return (
				<div className="flow">
					<h2 className="text-center text-xl font-bold text-brand-navy">
						Training Financing Options
					</h2>
					<p>
						We believe life-changing training should be accessible. Flexible
						financing and membership plans help families stay on budget while
						continuing their dog&apos;s progress.
					</p>
					<h2 className="text-center text-xl font-bold text-brand-red">
						How Financing Helps
					</h2>
					<ul className="flow list-disc pl-15">
						<li>
							<span>
								<strong className="font-bold text-brand-red">Monthly membership tiers</strong>
								{" "}
								for ongoing lessons, boarding nights, and enrichment
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">Payment plans</strong>
								{" "}
								for board and train or private lesson packages
							</span>
						</li>
						<li>
							<span>
								<strong className="font-bold text-brand-red">Bundle discounts</strong>
								{" "}
								when combining boarding, training, and specialty services
							</span>
						</li>
					</ul>
					<p>
						Talk with our team about the program you want and your budget&mdash;we&apos;ll
						map out a plan that keeps your dog on track without surprises.
					</p>
					<div className="flex flex-wrap items-center justify-center gap-15">
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
					<p className="text-center">
						<strong>
							Need help comparing options? Our team is happy to explain the terms
							so you can choose with confidence.
						</strong>
					</p>
				</div>
			);
		default:
			return null;
	}
}

