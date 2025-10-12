'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import '@/styles/scrollbar.css';

const TeamMembers = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [membersPerView, setMembersPerView] = useState(2);
  
  // TypeScript type for the onOpenChange handler
  const handleOpenChange = (open: boolean, memberId: string) => {
    setSelectedMember(open ? memberId : null);
  };
  
  const truncateText = (text: string) => {
    const firstParagraph = text.split('\n\n')[0];
    return firstParagraph.length > 150 ? `${firstParagraph.substring(0, 150)}...` : firstParagraph;
  };

  const team = [
    {
      id: 'member-1',
      name: 'Rob',
      role: 'Manager & K9 Handler',
      description: `Rob is a devoted dog lover whose passion for his four-legged companions knows no bounds. His bond with his dogs, particularly his beloved Ado, exemplifies the epitome of a well-trained, clear-headed, and obedient sport dog. With an inherent affinity for canines, Rob's journey into the K9 world was a natural progression fueled by his genuine love for these loyal animals.

As a handler, Rob demonstrates exceptional skill and dedication, continuously seeking to enhance his knowledge and expertise. He avidly immerses himself in the world of dog training, frequently traversing the country to partake in seminars and workshops, eager to glean insights into diverse techniques and cutting-edge training methods. His commitment to staying abreast of the latest advancements ensures that his dogs remain at the top of their game.

Driven by his fervor for competition, Rob finds immense fulfillment in participating in Protection Competitions alongside his canine companions. His unwavering determination and teamwork with his dogs propel them to excel in these challenging arenas, showcasing their remarkable abilities and forging unbreakable bonds.

Prior to his endeavors in the K9 world, Rob served his country with honor, dedicating four years to the Army as a Military Police officer. Building upon his military experience, he transitioned seamlessly into civilian law enforcement, where he continued to serve for an additional three years, demonstrating his unwavering commitment to upholding justice and protecting his community.

Rob's remarkable journey is a testament to his unwavering dedication, profound love for dogs, and steadfast devotion to service. His indomitable spirit and tireless pursuit of excellence continue to inspire all those fortunate enough to witness his remarkable bond with his beloved canine companions.`,
      image: '/rob.png'
    },
    {
      id: 'member-2',
      name: 'Bryan',
      role: 'Operations Manager',
      description: `Bryan, a proud native of Oklahoma who has found his home in Northwest Arkansas, brings over 5 years of invaluable experience to Joint Forces K9, where he has diligently ascended to the role of Operations Manager. With a remarkable track record of over 500 trained dogs and a clientele that continues to expand at a rapid pace, Bryan's dedication to his craft is second to none.

Whether catering to the needs of high-profile clients and their esteemed companions or addressing the fundamental requirements of young puppies, Bryan consistently exceeds expectations in training. His commitment to innovation drives him to continuously seek out and implement cutting-edge techniques, ensuring that each dog he works with reaches its fullest potential.

Bryan's unwavering determination to succeed is evident in his tireless efforts to cultivate enduring, harmonious relationships between owners and their beloved pets. With a passion for excellence and a relentless pursuit of improvement, Bryan goes above and beyond to create happy, healthy, and long-lasting bonds between people and their furry companions.`,
      image: '/byran.png'
    },
    {
      id: 'member-3',
      name: 'Dylan',
      role: 'Lead Dog Trainer',
      description: `Growing up in a household filled with the joyful chaos of four dogs, Dylan's affinity for our furry companions was ingrained early on. As a young man, fueled by a sense of duty, I proudly served my country by joining the US Army Reserves. Alongside my military service, I discovered a passion for coaching high school lacrosse and found love in the embrace of my beautiful wife.

However, it wasn't until I welcomed Jefe, my Belgian Malinois, into my life around 2020, that my journey into the world of dog training truly began. From that moment, dog training became my consuming passion. I embarked on a path of continuous learning, obtaining my K9 instructor certification and attending numerous seminars to deepen my understanding of this intricate field.

As my expertise grew, I found fulfillment in sharing my knowledge with others, eagerly assisting in training my neighbors' dogs and witnessing the transformational impact it had on their lives. It became increasingly clear that my future lay in the realm of professional dog training.

That realization led me to take the next pivotal step in my career by applying at Joint Forces K9. Recognizing it as the perfect platform to channel my dedication and expertise, I eagerly embraced the opportunity to contribute to their esteemed team.`,
      image: '/avatars/blank.png'
    },
    {
      id: 'member-4',
      name: 'Trey',
      role: 'Dog Trainer',
      description: `My lifelong love for dogs became a professional calling thanks to my first canine companion, Pongo. His one-of-a-kind personality sparked a deep curiosity in me and opened the door to the world of dog training. What began as a passion soon turned into a purpose—I dedicated hundreds of hours volunteering at animal shelters and working hands-on with dogs from all walks of life. These experiences taught me to navigate a wide range of breeds, temperaments, and behavioral challenges with patience and insight.

To further hone my skills, I spent a year training under a professional PSA decoy, where I deepened my understanding of canine drive, protection work, and the subtle art of communication between human and dog. While I value all aspects of training, I'm especially drawn to the complexity and connection found in tracking. With the help of my younger dog, Pippin, I've discovered a deep appreciation for tapping into a dog's natural scenting instincts—and the incredible bond that forms when we learn to follow their lead.`,
      image: '/avatars/blank.png'
    },
    {
      id: 'member-5',
      name: 'Eduardo',
      role: 'Dog Trainer',
      description: `Eduardo's journey into dog training began during his college years while studying to become a teacher. His passion for working with animals led him to train under a national champion, where he developed a deep understanding of canine behavior and advanced training techniques.

With over 12 years of experience, Eduardo specializes in protection dogs, therapy and service dogs, and the rehabilitation of aggressive behavior. His unique approach blends a strong educational background with proven dog training methods, allowing him to effectively guide both dogs and their owners toward lasting success.

Fluent in Spanish, Eduardo is proud to serve a diverse range of clients. Whether working with families, individuals with special needs, or professionals seeking highly trained working dogs, Eduardo is dedicated to bringing out the best in every dog—and strengthening the bond between dog and human.`,
      image: '/avatars/blank.png'
    },
    {
      id: 'member-6',
      name: 'Bella',
      role: 'Kennel Technician',
      description: `Bella's passion for animals began early, sparked by the family dogs she adored. As a child, she loved training their miniature dachshund and turning furniture into obstacle courses just for fun. That love grew into a deeper interest in animal care and behavior.

In 2018, Bella began studying microbiology at Montana State University. During her time there, she worked as a veterinary assistant and volunteered on a ranch, where she fell in love with the quiet rhythm of ranch life and the companionship of horses.

Since moving to Arkansas in 2021, Bella has enjoyed working at stables and serving in the hospitality industry. Now, she's thrilled to be part of the JFK9 team—caring for dogs and expanding her knowledge of the human-canine bond. Outside of work, Bella enjoys tending to her plants, playing the cello, and hiking with her husband.`,
      image: '/avatars/blank.png'
    },
    {
      id: 'member-7',
      name: 'Cody',
      role: 'Marketing Rep',
      description: `With a lifelong passion for dogs and a deep commitment to the field of dog training, Cody brings a unique blend of marketing expertise and canine enthusiasm to Joint Forces K9. Leveraging a rich background in marketing and an unwavering dedication to promoting the benefits of professional dog training, Cody is instrumental in crafting compelling campaigns that resonate with dog owners and enthusiasts.

At Joint Forces K9, Cody is responsible for developing innovative marketing strategies highlighting exceptional training services. Through targeted content creation, strategic outreach, and engaging storytelling, Cody effectively communicates the facility's mission of enhancing the bond between dogs and their owners.

An aspiring dog trainer and proud owner of Roscoe, Cody infuses personal experience and a deep understanding of canine behavior into their marketing efforts, creating authentic and impactful messages that drive engagement and support.`,
      image: '/avatars/blank.png'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setMembersPerView(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setStartIndex(0);
  }, [membersPerView]);

  const nextMembers = () => {
    setStartIndex((prevIndex) => 
      prevIndex + membersPerView >= team.length ? 0 : prevIndex + membersPerView
    );
  };

  const prevMembers = () => {
    setStartIndex((prevIndex) => 
      prevIndex - membersPerView < 0 ? Math.max(0, team.length - membersPerView) : prevIndex - membersPerView
    );
  };

  const visibleMembers = team.slice(startIndex, startIndex + membersPerView);

  return (
    <section id="team" className="bg-[#0A3161]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center gap-5 content-block">
          <CustomBadge variant="red" inline={true} className="text-white border-[#B31942]">
            Meet The Team
          </CustomBadge>

          <CustomTitle className="text-white">
            Our Expert Trainers
          </CustomTitle>

          <CustomSubtitle className="text-white">
            Meet our dedicated team of professional trainers and specialists
          </CustomSubtitle>
        </div>

        <div className="relative mt-[20px]">
        <div className="relative -mx-6">
            <button
              onClick={prevMembers}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background border border-border/50 hover:bg-[#B31942] hover:border-[#B31942] transition-colors group shadow-lg hover:shadow-xl disabled:opacity-40 disabled:hover:bg-background disabled:hover:border-border/50"
              aria-label="Previous members"
              disabled={team.length <= membersPerView}
            >
              <ChevronLeft className="w-6 h-6 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={nextMembers}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background border border-border/50 hover:bg-[#B31942] hover:border-[#B31942] transition-colors group shadow-lg hover:shadow-xl disabled:opacity-40 disabled:hover:bg-background disabled:hover:border-border/50"
              aria-label="Next members"
              disabled={team.length <= membersPerView}
            >
              <ChevronRight className="w-6 h-6 group-hover:text-white transition-colors" />
            </button>

            <div className="flex overflow-hidden gap-6 px-6 snap-x snap-mandatory pb-[20px]">
              {visibleMembers.map((member, index) => (
                <Card 
                  key={member.id} 
                  className={cn(
                    'flex-none shrink-0 overflow-hidden border border-border/50 hover:border-[#B31942]/50 transition-all duration-300 h-auto',
                    membersPerView > 1 ? 'w-[calc((100%-2rem)/2)]' : 'w-full'
                  )}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-[30%] aspect-square relative rounded-lg overflow-hidden shrink-0">
                        <Image 
                          src={member.image || '/avatars/blank.png'}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 2}
                          unoptimized
                        />
                      </div>
                      <div className="flex-1 min-h-[120px] relative flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1 text-[#0A3161]">{member.name}</h3>
                          <p className="text-[#B31942] font-medium mb-2">{member.role}</p>
                          <div className="text-muted-foreground pb-10">
                            <p className="text-muted-foreground">
                              {truncateText(member.description)}
                            </p>
                          </div>
                        </div>
                        <Dialog 
                          open={selectedMember === member.id} 
                          onOpenChange={(isOpen: boolean) => handleOpenChange(isOpen, member.id)}
                        >
                          <DialogTrigger asChild>
                            <button
                              className="absolute bottom-4 left-0 text-[#B31942] hover:text-[#0A3161] font-medium transition-colors"
                            >
                              More
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="text-2xl mb-4">{member.name}</DialogTitle>
                            </DialogHeader>
                            <div className="max-h-[60vh] overflow-y-auto pr-4 space-y-4 custom-scrollbar">
                              {member.description.split('\n\n').map((paragraph, index) => (
                                paragraph.trim() && (
                                  <p key={index} className="text-muted-foreground">
                                    {paragraph}
                                  </p>
                                )
                              ))}
                            </div>
                          </DialogContent>
                        </Dialog>
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
