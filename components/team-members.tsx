"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CustomBadge } from "@/components/custom/badge";
import { CustomTitle } from "@/components/custom/title";
import { CustomSubtitle } from "@/components/custom/subtitle";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import "@/styles/scrollbar.css";

const TeamMembers = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [membersPerView, setMembersPerView] = useState(2);

  // TypeScript type for the onOpenChange handler
  const handleOpenChange = (open: boolean, memberId: string) => {
    setSelectedMember(open ? memberId : null);
  };

  const truncateText = (text: string) => {
    const paragraphs = text
      .split("\n\n")
      .filter((para) => para.trim().length > 0);
    let combined = "";

    for (const paragraph of paragraphs) {
      combined = combined ? `${combined} ${paragraph}` : paragraph;
      if (combined.length >= 220) {
        break;
      }
    }

    if (!combined) {
      return "";
    }

    return combined.length > 220
      ? `${combined.substring(0, 220)}...`
      : combined;
  };

  const team = [
    {
      id: "member-1",
      name: "Rob",
      role: "Manager & K9 Handler",
      description: `Rob is a devoted dog lover whose passion for his four-legged companions knows no bounds. His bond with his dogs, particularly his beloved Ado, exemplifies the epitome of a well-trained, clear-headed, and obedient sport dog. With an inherent affinity for canines, Rob's journey into the K9 world was a natural progression fueled by his genuine love for these loyal animals.

As a handler, Rob demonstrates exceptional skill and dedication, continuously seeking to enhance his knowledge and expertise. He avidly immerses himself in the world of dog training, frequently traversing the country to partake in seminars and workshops, eager to glean insights into diverse techniques and cutting-edge training methods. His commitment to staying abreast of the latest advancements ensures that his dogs remain at the top of their game.

Driven by his fervor for competition, Rob finds immense fulfillment in participating in Protection Competitions alongside his canine companions. His unwavering determination and teamwork with his dogs propel them to excel in these challenging arenas, showcasing their remarkable abilities and forging unbreakable bonds.

Prior to his endeavors in the K9 world, Rob served his country with honor, dedicating four years to the Army as a Military Police officer. Building upon his military experience, he transitioned seamlessly into civilian law enforcement, where he continued to serve for an additional three years, demonstrating his unwavering commitment to upholding justice and protecting his community.

Rob's remarkable journey is a testament to his unwavering dedication, profound love for dogs, and steadfast devotion to service. His indomitable spirit and tireless pursuit of excellence continue to inspire all those fortunate enough to witness his remarkable bond with his beloved canine companions.`,
      image: "/avatars/rob.png",
    },
    {
      id: "member-2",
      name: "Bryan",
      role: "Operations Manager",
      description: `Bryan, a proud native of Oklahoma who has found his home in Northwest Arkansas, brings over 5 years of invaluable experience to Joint Forces K9, where he has diligently ascended to the role of Operations Manager. With a remarkable track record of over 500 trained dogs and a clientele that continues to expand at a rapid pace, Bryan's dedication to his craft is second to none.

Whether catering to the needs of high-profile clients and their esteemed companions or addressing the fundamental requirements of young puppies, Bryan consistently exceeds expectations in training. His commitment to innovation drives him to continuously seek out and implement cutting-edge techniques, ensuring that each dog he works with reaches its fullest potential.

Bryan's unwavering determination to succeed is evident in his tireless efforts to cultivate enduring, harmonious relationships between owners and their beloved pets. With a passion for excellence and a relentless pursuit of improvement, Bryan goes above and beyond to create happy, healthy, and long-lasting bonds between people and their furry companions.`,
      image: "/avatars/bryan.png",
    },
    {
      id: "member-3",
      name: "Dylan",
      role: "Lead Dog Trainer",
      description: `Growing up in a household filled with the joyful chaos of four dogs, Dylan's affinity for our furry companions was ingrained early on. As a young man, fueled by a sense of duty, I proudly served my country by joining the US Army Reserves. Alongside my military service, I discovered a passion for coaching high school lacrosse and found love in the embrace of my beautiful wife.

However, it wasn't until I welcomed Jefe, my Belgian Malinois, into my life around 2020, that my journey into the world of dog training truly began. From that moment, dog training became my consuming passion. I embarked on a path of continuous learning, obtaining my K9 instructor certification and attending numerous seminars to deepen my understanding of this intricate field.

As my expertise grew, I found fulfillment in sharing my knowledge with others, eagerly assisting in training my neighbors' dogs and witnessing the transformational impact it had on their lives. It became increasingly clear that my future lay in the realm of professional dog training.

That realization led me to take the next pivotal step in my career by applying at Joint Forces K9. Recognizing it as the perfect platform to channel my dedication and expertise, I eagerly embraced the opportunity to contribute to their esteemed team.`,
      image: "/avatars/dylan.png",
    },
    {
      id: "member-4",
      name: "Trey",
      role: "Dog Trainer",
      description: `My lifelong love for dogs became a professional calling thanks to my first canine companion, Pongo. His one-of-a-kind personality sparked a deep curiosity in me and opened the door to the world of dog training. What began as a passion soon turned into a purpose—I dedicated hundreds of hours volunteering at animal shelters and working hands-on with dogs from all walks of life. These experiences taught me to navigate a wide range of breeds, temperaments, and behavioral challenges with patience and insight.

To further hone my skills, I spent a year training under a professional PSA decoy, where I deepened my understanding of canine drive, protection work, and the subtle art of communication between human and dog. While I value all aspects of training, I'm especially drawn to the complexity and connection found in tracking. With the help of my younger dog, Pippin, I've discovered a deep appreciation for tapping into a dog's natural scenting instincts—and the incredible bond that forms when we learn to follow their lead.`,
      image: "/avatars/trey.png",
    },
    {
      id: "member-5",
      name: "Bella",
      role: "Kennel Technician",
      description: `Bella's passion for animals began early, sparked by the family dogs she adored. As a child, she loved training their miniature dachshund and turning furniture into obstacle courses just for fun. That love grew into a deeper interest in animal care and behavior.

In 2018, Bella began studying microbiology at Montana State University. During her time there, she worked as a veterinary assistant and volunteered on a ranch, where she fell in love with the quiet rhythm of ranch life and the companionship of horses.

Since moving to Arkansas in 2021, Bella has enjoyed working at stables and serving in the hospitality industry. Now, she's thrilled to be part of the JFK9 team-caring for dogs and expanding her knowledge of the human-canine bond. Outside of work, Bella enjoys tending to her plants, playing the cello, and hiking with her husband.`,
      image: "/avatars/bella.png",
    },
    {
      id: "member-6",
      name: "Cody",
      role: "Marketing Rep",
      description: `With a lifelong passion for dogs and a deep commitment to the field of dog training, Cody brings a unique blend of marketing expertise and canine enthusiasm to Joint Forces K9. Leveraging a rich background in marketing and an unwavering dedication to promoting the benefits of professional dog training, Cody is instrumental in crafting compelling campaigns that resonate with dog owners and enthusiasts.

At Joint Forces K9, Cody is responsible for developing innovative marketing strategies highlighting exceptional training services. Through targeted content creation, strategic outreach, and engaging storytelling, Cody effectively communicates the facility's mission of enhancing the bond between dogs and their owners.

An aspiring dog trainer and proud owner of Roscoe, Cody infuses personal experience and a deep understanding of canine behavior into their marketing efforts, creating authentic and impactful messages that drive engagement and support.`,
      image: "/avatars/cody.png",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setMembersPerView(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setStartIndex(0);
  }, [membersPerView]);

  const nextMembers = () => {
    setStartIndex((prevIndex) =>
      prevIndex + membersPerView >= team.length
        ? 0
        : prevIndex + membersPerView,
    );
  };

  const prevMembers = () => {
    setStartIndex((prevIndex) =>
      prevIndex - membersPerView < 0
        ? Math.max(0, team.length - membersPerView)
        : prevIndex - membersPerView,
    );
  };

  const visibleMembers = team.slice(startIndex, startIndex + membersPerView);

  return (
    <section id="team" className="bg-brand-navy w-full">
      <div className="container mx-auto px-15 py-15">
        <div className="flex flex-col items-center justify-center text-center content-block gap-15">
          <CustomBadge
            variant="red"
            inline={true}
            className="text-white border-brand-red !mb-0"
          >
            Meet The Team
          </CustomBadge>

          <CustomTitle className="text-white !mb-0">
            Our Expert Trainers
          </CustomTitle>

          <CustomSubtitle className="text-white !mb-0">
            Meet our dedicated team of professional trainers and specialists
          </CustomSubtitle>
        </div>

        <div className="relative mt-15">
          <div className="relative">
            <button
              onClick={prevMembers}
              className="absolute left-15 top-1/2 -translate-y-1/2 z-10 px-15 py-15 text-xs md:text-sm lg:text-base font-semibold rounded-full bg-background border border-border/50 hover:bg-brand-red hover:border-brand-red transition-colors group shadow-lg hover:shadow-xl disabled:opacity-40 disabled:hover:bg-background disabled:hover:border-border/50"
              aria-label="Previous members"
              disabled={team.length <= membersPerView}
            >
              <ChevronLeft className="w-6 h-6 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={nextMembers}
              className="absolute right-15 top-1/2 -translate-y-1/2 z-10 px-15 py-15 text-xs md:text-sm lg:text-base font-semibold rounded-full bg-background border border-border/50 hover:bg-brand-red hover:border-brand-red transition-colors group shadow-lg hover:shadow-xl disabled:opacity-40 disabled:hover:bg-background disabled:hover:border-border/50"
              aria-label="Next members"
              disabled={team.length <= membersPerView}
            >
              <ChevronRight className="w-6 h-6 group-hover:text-white transition-colors" />
            </button>

            <div className="flex overflow-hidden justify-center px-15 snap-x snap-mandatory gap-15">
              {visibleMembers.map((member, index) => (
                <Card
                  key={member.id}
                  className={`flex-none shrink-0 overflow-hidden border border-border/50 hover:border-brand-red/50 transition-all duration-300 h-auto w-full max-w-[520px] ${membersPerView > 1 ? "basis-[calc((100%_-_60px)_/_2)]" : ""}`}
                >
                  <CardContent className="px-15 py-15">
                    <div className="flex flex-col gap-15 md:flex-row md:items-stretch md:gap-15">
                      <div className="shrink-0 flex items-start">
                        <div className="relative aspect-square w-[200px] rounded-lg overflow-hidden">
                          <Image
                            src={member.image || "/avatars/blank.png"}
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index < 2}
                            loader={({ src }) => src}
                          />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col md:h-[200px] md:min-h-[200px] md:max-h-[200px] md:overflow-hidden">
                        <div className="flex flex-col gap-15 text-left flex-1 md:overflow-hidden">
                          <h3 className="text-lg font-semibold text-brand-navy leading-tight m-0">
                            {member.name}
                          </h3>
                          <p className="text-sm font-medium text-brand-red leading-tight m-0">
                            {member.role}
                          </p>
                          <p className="text-muted-foreground text-sm leading-tight line-clamp-6 md:flex-1">
                            {truncateText(member.description)}
                          </p>
                        </div>
                        <div className="flex justify-end items-end mt-0 md:mt-auto">
                          <Dialog
                            open={selectedMember === member.id}
                            onOpenChange={(isOpen: boolean) =>
                              handleOpenChange(isOpen, member.id)
                            }
                          >
                            <DialogTrigger asChild>
                              <button className="inline-flex items-center justify-center rounded-full border border-transparent px-15 py-15 text-xs md:text-sm font-semibold text-brand-red hover:text-brand-navy transition-colors">
                                More
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl p-15 space-y-15">
                              <DialogHeader className="space-y-15">
                                <DialogTitle className="text-2xl">
                                  {member.name}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="max-h-[60vh] overflow-y-auto custom-scrollbar space-y-15">
                                {member.description.split("\n\n").map(
                                  (paragraph) =>
                                    paragraph.trim() && (
                                      <p
                                        key={paragraph.substring(0, 50)}
                                        className="text-muted-foreground leading-relaxed"
                                      >
                                        {paragraph}
                                      </p>
                                    ),
                                )}
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
