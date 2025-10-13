'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';
import { scrollToHash } from '@/lib/scroll';

import Link from 'next/link'; 

const FAQ = () => {
  const faqs = [
    {
      question: "What kinds of dogs do you train?",
      answer: "We train all breeds, sizes, and temperaments. Whether your dog is a puppy just starting out or an adult struggling with unwanted behaviors, our programs are designed to teach useful commands and reinforce positive habits."
    },
    {
      question: "Do you offer private lessons?",
      answer: "Yes. We offer both in-facility and in-home private lessons. You'll learn how to teach and handle your dog with confidence while our trainers guide you through each step."
    },
    {
      question: "What vaccinations are required for boarding?",
      answer: "Dogs must be current on rabies, DHLPP (distemper), and Bordetella. K9 influenza is optional but recommended."
    },
    {
      question: "Can I board an unaltered dog?",
      answer: "Absolutely. We welcome unaltered dogs and provide separate accommodations to ensure safety."
    },
    {
      question: "Do you offer evaluations before training?",
      answer: "Yes. We offer free evaluations to help determine the best training program for your pet. Call us or use our contact form to schedule your meeting."
    },
    {
      question: "What are your hours?",
      answer: "We're open Monday through Friday from 8 AM to 6 PM and Saturday from 8 AM to 5 PM. Boarding pickups are available on Sundays between 12 and 2 PM."
    }
  ];

  return (
    <section id="faq" className="bg-[#B31942]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center flex-col text-center gap-5 mb-6">
          <CustomBadge variant="blue" className="text-white border-[#0A3161]">
            FAQ
          </CustomBadge>

          <CustomTitle className="text-white">
            Frequently Asked Questions
          </CustomTitle>
          
          <CustomSubtitle className="text-white">
            Got questions? We&apos;ve got answers. Here are the most common questions about our pricing and service.
          </CustomSubtitle>
        </div>

        <div className="max-w-4xl mx-auto mb-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index}>
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-white rounded-lg border! border-border px-6 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-start font-semibold text-foreground hover:text-[#0A3161] data-[state=open]:text-[#0A3161] transition-colors cursor-pointer group">
                    {faq.question}
                    <span className="group-data-[state=open]:text-[#0A3161] transition-colors" />
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>

        <div className="flex flex-col justify-center items-center gap-1.5 text-center mt-6">
          <span className="text-white">
            Still have questions?
          </span>

          <Link
            href="#contact"
            className="text-white hover:text-[#0A3161] transition-colors hover:underline"
            onClick={(event) => {
              event.preventDefault();
              scrollToHash('#contact');
            }}
          >
            Contact our Support Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
