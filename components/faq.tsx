import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CustomBadge } from "@/components/custom/badge";
import { CustomTitle } from "@/components/custom/title";

import Link from "next/link";

const FAQ = () => {
  // Use fluid type and a reasonable max width without inline styles

  const faqs = [
    {
      question: "What kinds of dogs do you train?",
      answer:
        "We train all breeds, sizes, and temperaments. Whether your dog is a puppy just starting out or an adult struggling with unwanted behaviors, our programs are designed to teach useful commands and reinforce positive habits.",
    },
    {
      question: "Do you offer private lessons?",
      answer:
        "Yes. We offer both in-facility and in-home private lessons. You'll learn how to teach and handle your dog with confidence while our trainers guide you through each step.",
    },
    {
      question: "What vaccinations are required for boarding?",
      answer:
        "Dogs must be current on rabies, DHLPP (distemper), and Bordetella. K9 influenza is optional but recommended.",
    },
    {
      question: "Can I board an unaltered dog?",
      answer:
        "Absolutely. We welcome unaltered dogs and provide separate accommodations to ensure safety.",
    },
    {
      question: "Do you offer evaluations before training?",
      answer:
        "Yes. We offer free evaluations to help determine the best training program for your pet. Call us or use our contact form to schedule your meeting.",
    },
    {
      question: "What are your hours?",
      answer:
        "We're open Monday through Friday from 8 AM to 6 PM and Saturday from 8 AM to 5 PM. Boarding pickups are available on Sundays between 12 and 2 PM.",
    },
  ];

  return (
    <section id="faq" className="bg-brand-red w-full">
      <div className="container mx-auto px-15 py-15">
        <div className="flex items-center justify-center flex-col text-center gap-15 mb-15">
          <CustomBadge variant="blue" className="text-white border-brand-navy">
            FAQ
          </CustomBadge>

          <CustomTitle className="text-white">
            Frequently Asked Questions
          </CustomTitle>

          <div className="w-full flex justify-center">
            <p
              className="text-white whitespace-nowrap text-center [font-size:clamp(1rem,3vw,1.5rem)] max-w-[800px] w-full"
            >
              Got questions? We&apos;ve got answers. Here are the most common
              questions about our pricing and service.
            </p>
          </div>
        </div>

        <div className="w-full mx-auto">
          <Accordion type="single" collapsible className="">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <AccordionItem
                  value={faq.question}
                  className="bg-background rounded-lg border border-border px-15 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-start font-semibold text-foreground hover:text-brand-navy data-[state=open]:text-brand-navy transition-colors cursor-pointer group">
                    {faq.question}
                    <span className="group-data-[state=open]:text-brand-navy transition-colors" />
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>

        <div className="flex flex-col justify-center items-center gap-15 text-center mt-15">
          <span className="text-white">Still have questions?</span>

          <Link
            href="#contact"
            className="text-white hover:text-brand-navy transition-colors hover:underline"
          >
            Contact our Support Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
