import Marquee from "@/components/ui/marquee";
import { CustomBadge } from "@/components/custom/badge";
import { CustomTitle } from "@/components/custom/title";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nate Schoemer",
      role: "Google Review 10/01/2025",
      content:
        "I had the privilege of attending the Larry Krohn workshop at Joint Forces K9 this past March, and the experience was absolutely incredible. Not only is Larry an exceptional trainer, but the event itself was hosted flawlessly by Rob and his team...",
      fullContent:
        "I had the privilege of attending the Larry Krohn workshop at Joint Forces K9 this past March, and the experience was absolutely incredible. Not only is Larry an exceptional trainer, but the event itself was hosted flawlessly by Rob and his team at Joint Forces K9. From start to finish, everything was handled in a truly professional way; refreshments and pastries were provided for attendees in the morning, the atmosphere was welcoming, and the event was run with an attention to detail that made it smooth and enjoyable for everyone.\n\nAs a professional dog trainer myself, and someone who is passionate about hosting training seminars, I had the chance to speak with Rob about the possibility of him hosting an event for me. From that very first conversation, it was clear that Rob is not only professional and courteous, but also genuinely invested in making each seminar a success. He took care of everything: promotion, logistics, hospitality, and creating a supportive environment. All I had to do was show up and train.\n\nThis was especially meaningful to me, as it was the first dog training seminar I taught in three years. Rob's professionalism, strong reputation for bringing in some of the best trainers in the world, and the warm welcome he extended made my return to teaching at workshops an unforgettable experience.\n\nRob, I can't thank you enough. Your commitment to excellence, both in running your business and supporting the dog training community, is second to none. For anyone considering attending or hosting a seminar, I can say with confidence that Joint Forces K9 is one of the very best places you could choose.",
      avatar: "/nate_schoemer.png",
      googleReviewUrl: "https://maps.app.goo.gl/hvfrNeoy73VT7t3Y6",
    },
    {
      name: "Jeff Eastburn",
      role: "Google Review 9/30/2025",
      content:
        "I had the opportunity to attend a dog training seminar at Joint Forces K9 Group with Nate Schoemer, and it was an amazing experience from start to finish. Joint Forces K9 Group was the perfect host—professional, well-organized, and welcoming...",
      fullContent:
        "I had the opportunity to attend a dog training seminar at Joint Forces K9 Group with Nate Schoemer, and it was an amazing experience from start to finish. Joint Forces K9 Group was the perfect host—professional, well-organized, and welcoming. The facility was clean, spacious, and set up in a way that made the learning experience smooth and enjoyable.\n\nNate Schoemer's seminar was outstanding. He shared his deep knowledge of canine behavior and training in a way that was both easy to understand and incredibly practical. His teaching style kept everyone engaged, and he made sure all participants felt included, whether they were beginners or more experienced handlers.\n\nThe combination of Nate's expertise and Joint Forces K9 Group's top-notch hosting made this seminar one of the best training events I've attended. I left feeling more confident as a handler and excited to apply what I learned. I would recommend any of the services offered by Joint Forces K9 Group, and I highly recommend attending any event they put on—you won't be disappointed.",
      avatar: "/jeff_eastburn.png",
      googleReviewUrl: "https://maps.app.goo.gl/ViEVmKnDVvPn1vSt9",
    },
    {
      name: "JST",
      role: "Google Review 08/06/2025",
      content:
        "Awesome group to work with. Very patient & professional. They are also willing to teach your dog a language other than what they do there, as long as you print out commands! Thanks to Abigail Wilmuth & the rest of the JF K9 team!",
      fullContent:
        "Awesome group to work with. Very patient & professional. They are also willing to teach your dog a language other than what they do there, as long as you print out commands! Thanks to Abigail Wilmuth & the rest of the JF K9 team!",
      avatar: "/jst.png",
      googleReviewUrl: "https://maps.app.goo.gl/xK2NEFsypQFw17FP8",
    },
    {
      name: "Keila Rader",
      role: "Google Review 09/02/2025",
      content:
        "Terrific experience with Joint Forces K9 Group. We have 2 special pooches undergoing 2 week residential training now and are looking forward to the positive changes their training and our maintenance of the training will have in our home.",
      fullContent:
        "Terrific experience with Joint Forces K9 Group. We have 2 special pooches undergoing 2 week residential training now and are looking forward to the positive changes their training and our maintenance of the training will have in our home.",
      avatar: "/keila_rader.png",
      googleReviewUrl: "https://maps.app.goo.gl/d7H3AcXYATBVDk1L9",
    },
    {
      name: "Kevin Perry",
      role: "Google Review 07/31/2025",
      content:
        "Moxy and I were treated as if we were the only ones there. Dylan took extra time to evaluate and suggest and I never felt more at home with everyone I had interacted with. Highly recommend.",
      fullContent:
        "Moxy and I were treated as if we were the only ones there. Dylan took extra time to evaluate and suggest and I never felt more at home with everyone I had interacted with. Highly recommend.",
      avatar: "/kevin_perry.png",
      googleReviewUrl: "https://maps.app.goo.gl/mV8GuNFragChs1LK8",
    },
    {
      name: "Maria Garcia",
      role: "Search & Rescue Team Lead",
      content:
        "Outstanding training methodology and excellent results with our rescue dogs.",
      avatar: "/avatars/300-6.png",
      googleReviewUrl: undefined,
    },
    {
      name: "John Martinez",
      role: "Private K9 Handler",
      content:
        "The personalized training approach made all the difference for my service dog.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      googleReviewUrl: undefined,
    },
    {
      name: "Michael Brown",
      role: "Head of Operations, ScaleTech",
      content:
        "Reduced our operational costs by 40% while improving efficiency.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      googleReviewUrl: undefined,
    },
    {
      name: "Rachel Green",
      role: "CTO, InnovateLab",
      content: "The analytics dashboard gives us insights we never had before.",
      avatar:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
      googleReviewUrl: undefined,
    },
    {
      name: "John Doe",
      role: "CEO, TechStart",
      content: "The analytics dashboard gives us insights we never had before.",
      avatar:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
      googleReviewUrl: undefined,
    },
  ];

  const TestimonialCard = ({
    testimonial,
  }: {
    testimonial: (typeof testimonials)[0];
  }) => (
    <div
      className="flex-shrink-0 w-[350px] h-[200px] bg-gradient-to-br from-brand-navy/10 to-brand-red/10 dark:from-brand-navy/15 dark:to-brand-red/15 rounded-xl p-[15px] border border-border/50 shadow-sm mx-1.5 cursor-pointer hover:shadow-md transition-all duration-200 hover:border-brand-red/30 flex flex-col"
      onClick={() => {
        if (testimonial.googleReviewUrl) {
          window.open(
            testimonial.googleReviewUrl,
            "_blank",
            "noopener,noreferrer",
          );
        }
      }}
    >
      <p className="text-muted-foreground mb-15 font-medium line-clamp-4 flex-1">
        {testimonial.content}
      </p>
      <div className="flex items-center gap-15 mt-auto">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
          sizes="40px"
          loading="lazy"
          loader={({ src }) => src}
        />
        <div className="flex-1">
          <div className="font-semibold text-foreground">
            {testimonial.name}
          </div>
          <div className="text-sm text-muted-foreground">
            {testimonial.role}
          </div>
        </div>
        {testimonial.googleReviewUrl && (
          <div className="text-xs text-brand-red font-medium hover:underline">
            Read Full Review →
          </div>
        )}
      </div>
    </div>
  );

  const firstColumn = testimonials.slice(0, 5);
  const secondColumn = testimonials.slice(0, 5);

  return (
    <section id="testimonials" className="bg-white overflow-hidden w-full">
      <div className="container mx-auto px-15 py-15">
        {/* Header */}
        <div className="flex items-center justify-center flex-col text-center gap-15 mb-15">
          <CustomBadge variant="blue-line-red-text">
            What Clients Say
          </CustomBadge>

          <CustomTitle>Loved by Thousands</CustomTitle>

          <div className="w-full flex justify-center">
            <p className="text-lg md:text-xl text-muted-foreground whitespace-nowrap text-center">
              Discover why clients trust Joint Forces K9 Group for professional
              K9 training services.
            </p>
          </div>
        </div>

        <div className="w-full mt-15">
          <div className="flex w-full flex-col gap-15">
            <Marquee pauseOnHover className="[--duration:40s] grow">
              {firstColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:40s] grow">
              {secondColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
