
import Marquee from "@/components/ui/marquee";
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Nate Schoemer',
      role: 'Google Review 10/01/2025',
      content: 'I had the privilege of attending the Larry Krohn workshop at Joint Forces K9 this past March, and the experience was absolutely incredible. Not only is Larry an exceptional trainer, but the event itself was hosted flawlessly by Rob and his team...',
      fullContent: 'I had the privilege of attending the Larry Krohn workshop at Joint Forces K9 this past March, and the experience was absolutely incredible. Not only is Larry an exceptional trainer, but the event itself was hosted flawlessly by Rob and his team at Joint Forces K9. From start to finish, everything was handled in a truly professional way; refreshments and pastries were provided for attendees in the morning, the atmosphere was welcoming, and the event was run with an attention to detail that made it smooth and enjoyable for everyone.\n\nAs a professional dog trainer myself, and someone who is passionate about hosting training seminars, I had the chance to speak with Rob about the possibility of him hosting an event for me. From that very first conversation, it was clear that Rob is not only professional and courteous, but also genuinely invested in making each seminar a success. He took care of everything: promotion, logistics, hospitality, and creating a supportive environment. All I had to do was show up and train.\n\nThis was especially meaningful to me, as it was the first dog training seminar I taught in three years. Rob\'s professionalism, strong reputation for bringing in some of the best trainers in the world, and the warm welcome he extended made my return to teaching at workshops an unforgettable experience.\n\nRob, I can\'t thank you enough. Your commitment to excellence, both in running your business and supporting the dog training community, is second to none. For anyone considering attending or hosting a seminar, I can say with confidence that Joint Forces K9 is one of the very best places you could choose.',
      avatar: '/nate_schoemer.webp',
      googleReviewUrl: 'https://maps.app.goo.gl/hvfrNeoy73VT7t3Y6'
    },
    {
      name: 'Jeff Eastburn',
      role: 'Google Review 09/30/2025',
      content: 'I had the opportunity to attend a dog training seminar at Joint Forces K9 Group with Nate Schoemer, and it was an amazing experience from start to finish. Joint Forces K9 Group was the perfect host—professional, well-organized, and welcoming...',
      fullContent: 'I had the opportunity to attend a dog training seminar at Joint Forces K9 Group with Nate Schoemer, and it was an amazing experience from start to finish. Joint Forces K9 Group was the perfect host—professional, well-organized, and welcoming. The facility was clean, spacious, and set up in a way that made the learning experience smooth and enjoyable.\n\nNate Schoemer\'s seminar was outstanding. He shared his deep knowledge of canine behavior and training in a way that was both easy to understand and incredibly practical. His teaching style kept everyone engaged, and he made sure all participants felt included, whether they were beginners or more experienced handlers.\n\nThe combination of Nate\'s expertise and Joint Forces K9 Group\'s top-notch hosting made this seminar one of the best training events I\'ve attended. I left feeling more confident as a handler and excited to apply what I learned. I would recommend any of the services offered by Joint Forces K9 Group, and I highly recommend attending any event they put on—you won\'t be disappointed.',
      avatar: '/jeff_eastburn.png',
      googleReviewUrl: 'https://maps.app.goo.gl/ViEVmKnDVvPn1vSt9'
    },
    {
      name: 'JST',
      role: 'Google Review 08/06/2025',
      content: 'Awesome group to work with. Very patient & professional. They are also willing to teach your dog a language other than what they do there, as long as you print out commands! Thanks to Abigail Wilmuth & the rest of the JF K9 team!',
      fullContent: 'Awesome group to work with. Very patient & professional. They are also willing to teach your dog a language other than what they do there, as long as you print out commands! Thanks to Abigail Wilmuth & the rest of the JF K9 team!',
      avatar: '/jst.png',
      googleReviewUrl: 'https://maps.app.goo.gl/xK2NEFsypQFw17FP8'
    },
    {
      name: 'Keila Rader',
      role: 'Google Review 09/02/2025',
      content: 'Terrific experience with Joint Forces K9 Group. We have 2 special pooches undergoing 2 week residential training now and are looking forward to the positive changes their training and our maintenance of the training will have in our home.',
      fullContent: 'Terrific experience with Joint Forces K9 Group. We have 2 special pooches undergoing 2 week residential training now and are looking forward to the positive changes their training and our maintenance of the training will have in our home.',
      avatar: '/keila_rader.png',
      googleReviewUrl: 'https://maps.app.goo.gl/d7H3AcXYATBVDk1L9'
    },
    {
      name: 'Kevin Perry',
      role: 'Google Review 07/31/2025',
      content: 'Moxy and I were treated as if we were the only ones there. Dylan took extra time to evaluate and suggest and I never felt more at home with everyone I had interacted with. Highly recommend.',
      fullContent: 'Moxy and I were treated as if we were the only ones there. Dylan took extra time to evaluate and suggest and I never felt more at home with everyone I had interacted with. Highly recommend.',
      avatar: '/kevin_perry.webp',
      googleReviewUrl: 'https://maps.app.goo.gl/mV8GuNFragChs1LK8'
    },
    {
      name: 'KM',
      role: 'Google Review 07/03/2025',
      content: 'Very kind, patient, and knowledgeable. In just an hour introduction session, our extremely velcro husky-german shepherd was trying her best, and made small but happy progress. There was another family being helped with their tiny doodle, and I watched that dog as well and there was steady progress there too. The trainers really do boost their confidence enough to trust the owner',
      avatar: '/km.png',
      googleReviewUrl: 'https://maps.app.goo.gl/wcxz6YYiD1RkQWJ78'
    },
    {
      name: 'Tracy Smith',
      role: 'Google Review 08/13/2025',
      content: 'Loved our experience!  Our dog CoCo spent 4 weeks with her trainer, Trey.  We are super satisfied with the care she got while training. We loved that we could watch her progress during her stay.  We appreciated their willingness to work with us and give us "training" as well.  Thank you Trey and all the staff involved with Coco.',
      avatar: '/tracy_smith.png',
      googleReviewUrl: 'https://maps.app.goo.gl/g4875pG6gNBPUKRq9'
    },
    {
      name: 'Melissa Johnson',
      role: 'Google Review 09/30/2025',
      content: "Very knowledgeable in how to teach you how to teach your dog. Can't wait to see what's next",
      avatar: '/melissa_johnson.png',
      googleReviewUrl: 'https://maps.app.goo.gl/gqBV3Nq4BJPmA2Ar5'
    },
    {
      name: 'Cashonna Perry',
      role: 'Google Review 09/08/2025',
      content: 'Friendly and helpful staff!! Took our Luna in for the board and train program on the same day that we called! Excited to see her progress at the 2 week mark!!',
      avatar: '/cashonna_perry.png',
      googleReviewUrl: 'https://maps.app.goo.gl/adgCdsHwMu4f8xk1A'
    },
    {
      name: 'Lindsay Wilson',
      role: 'Google Review 07/14/2025',
      content: 'We handed Dylan quite the challenge: an unruly, bottle-raised rescue pup with a big personality, boundless energy, and a brain that’s always one step ahead of everyone else in the room (but with zero confidence, yelping at the end of her leash). With a mix of stubbornness, smarts, and serious drive (thanks to her unique breed blend), June needed someone with the right balance of structure, intuition, and heart. Enter Dylan. From the start, it was clear he simply gets dogs. He met June exactly where she was, saw through her sass and smarts, and brought out the best in her. While we’re still convinced not even Cesar Millan himself could fully conquer her potty training — Dylan cracked her code turning chaos into something teachable, and gave us back a dog who’s starting to learn how to channel all that energy in the right direction. And best of all? She loved him. We’re glad she’s in such capable hands and genuinely looking forward to what he’ll help her accomplish after her upcoming session next month.',
      avatar: '/lindsay_wilson.png',
      googleReviewUrl: 'https://maps.app.goo.gl/hdExuiBP9aYSSkEe8'
    }
  ];

  const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
    const CardWrapper = testimonial.googleReviewUrl ? 'a' : 'div';

    return (
      <CardWrapper
        {...(testimonial.googleReviewUrl
          ? {
              href: testimonial.googleReviewUrl,
              target: '_blank',
              rel: 'noopener noreferrer',
            }
          : {})}
        className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] bg-brand-gradient-soft rounded-xl p-3 sm:p-4 md:p-5 border border-border/50 shadow-sm transition-all duration-200 hover:shadow-md hover:border-brand-red/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
      >
        <p className="text-muted-foreground mb-4 font-medium leading-[1.5] line-clamp-4 min-h-[6rem] sm:min-h-0">
          {testimonial.content}
        </p>
        <div className="flex items-center gap-2.5">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
            sizes="40px"
            loading={index < 3 ? "eager" : "lazy"}
            priority={index < 3}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div className="flex-1">
            <div className="font-semibold text-foreground">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
          </div>
          {testimonial.googleReviewUrl && (
            <span className="text-xs text-brand-red font-semibold underline underline-offset-2 decoration-current transition-colors hover:text-brand-navy">
              Read Full Review →
            </span>
          )}
        </div>
      </CardWrapper>
    );
  };

  const firstColumn = testimonials.slice(0, 5);
  const secondColumn = testimonials.slice(5, 10);

  return (
    <section id="testimonials" className="section-spacing bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-center flex-col text-center gap-3 mb-4">
          <CustomBadge variant="blue-line-red-text">
            What Clients Say
          </CustomBadge>

          <CustomTitle>
            Loved by Thousands
          </CustomTitle>
          
          <p className="text-lg text-muted-foreground text-center w-full max-w-4xl md:max-w-none mx-auto">
            Discover why clients trust Joint Forces K9 Group and join today to experience our professional K9 training services.
          </p>
        </div>

      </div>
      
      {/* Full-width scrolling testimonials */}
      <div className="w-full overflow-hidden">
        <div className="flex w-full flex-col gap-4 py-4 sm:gap-6 sm:py-6 md:gap-8 md:py-8">
          <Marquee
            pauseOnHover
            className="[--duration:40s] [--gap:0.5rem] sm:[--gap:0.75rem] md:[--gap:1rem]"
          >
            {firstColumn.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:40s] [--gap:0.5rem] sm:[--gap:0.75rem] md:[--gap:1rem]"
          >
            {secondColumn.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index + 5} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
