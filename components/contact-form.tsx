import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { CustomBadge } from "@/components/custom/badge";
import { CustomSubtitle } from "@/components/custom/subtitle";
import { CustomTitle } from "@/components/custom/title";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  dogBreed: z.string().min(2, "Please specify your dog's breed"),
  trainingType: z.string().min(5, "Please specify the type of training needed"),
  message: z
    .string()
    .min(10, "Please provide additional details about your training needs"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Removed membershipWidth usage - using fixed max-width instead

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      dogBreed: "",
      trainingType: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast(
      "Message sent!. Thank you for your message. We'll get back to you soon.",
    );

    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@jointforcesk9.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "479-802-0775",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "17606 Highway 16\nSiloam Springs, AR 72761",
      url: "https://maps.app.goo.gl/ac9zbvesyq2JZPui9",
    },
  ];

  return (
    <section id="contact" className="bg-brand-red w-full">
      <div className="container mx-auto container-spacing">
        <div className="flex items-center justify-center flex-col text-center gap-15 mb-15 pt-[15px]">
          <CustomBadge variant="red" className="text-white border-brand-navy">
            Get in Touch
          </CustomBadge>

          <CustomTitle className="text-white">Contact Us</CustomTitle>

          <CustomSubtitle className="text-white">
            Have questions about our dog training services? Ready to get
            started? Send us a message and we&apos;ll respond as soon as
            possible.
          </CustomSubtitle>

          <div className="mt-15 mb-15 mx-auto w-full flex justify-center">
            <div className="responsive-width max-w-[800px]">
              <div className="video-aspect-ratio">
                <video
                  className="rounded-lg shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src="/contact_page.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-15 grid grid-cols-1 lg:grid-cols-2 gap-15 w-full mx-auto">
          {/* Contact Information */}
          <div className="space-y-[15px]">
            <div>
              <h3 className="text-2xl font-semibold mb-15 text-white">
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-white/90 mb-15">
                Whether you need professional dog training, handler training, or
                specialized K9 services, our expert team is here to help you and
                your canine companion succeed.
              </p>
            </div>

            <div className="space-y-[15px]">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-15">
                  <info.icon className="size-4 text-white/80" />
                  <div>
                    <h4 className="font-semibold text-white mb-15">
                      {info.title}
                    </h4>
                    {info.icon === Mail ? (
                      <Link
                        href={`mailto:${info.content}`}
                        className="text-white/90 hover:text-brand-navy transition-colors whitespace-pre-line"
                      >
                        {info.content}
                      </Link>
                    ) : info.icon === Phone ? (
                      <Link
                        href={`tel:${info.content.replace(/[^0-9]/g, "")}`}
                        className="text-white/90 hover:text-brand-navy transition-colors whitespace-pre-line"
                      >
                        {info.content}
                      </Link>
                    ) : info.url ? (
                      <Link
                        href={info.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-brand-navy transition-colors whitespace-pre-line"
                      >
                        {info.content}
                      </Link>
                    ) : (
                      <p className="text-white/90 whitespace-pre-line">
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-border/50">
              <CardContent className="p-[15px]">
                <h3 className="text-xl font-semibold mb-15 text-center">
                  Contact Form
                </h3>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-[15px]"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-[15px]">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-[15px]">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your@email.com"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem className="space-y-[15px]">
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your phone number"
                                type="tel"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="dogBreed"
                        render={({ field }) => (
                          <FormItem className="space-y-[15px]">
                            <FormLabel>Dog Breed</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your dog's breed"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="trainingType"
                      render={({ field }) => (
                        <FormItem className="space-y-[15px]">
                          <FormLabel>Training Type</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What type of training are you interested in?"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-[15px]">
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Additional details about your training needs..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      size="lg"
                      className="w-full hover:bg-brand-red hover:text-white"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
