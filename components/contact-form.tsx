"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from "sonner";
import { CustomBadge } from '@/components/custom/badge';
import { CustomSubtitle } from '@/components/custom/subtitle';
import { CustomTitle } from '@/components/custom/title';
import Link from 'next/link';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      enterprise?: {
        ready: (cb: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
  dogBreed: z.string().min(2, 'Please specify your dog\'s breed'),
  trainingType: z.string().min(5, 'Please specify the type of training needed'),
  message: z.string().min(10, 'Please provide additional details about your training needs'),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const contactEndpoint =
    process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? '/api/contact';
  const recaptchaInitPromiseRef = useRef<Promise<void> | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const ensureRecaptchaReady = useCallback(async () => {
    if (!siteKey) {
      return;
    }

    if (recaptchaInitPromiseRef.current) {
      await recaptchaInitPromiseRef.current;
    } else {
      recaptchaInitPromiseRef.current = new Promise<void>((resolve, reject) => {
        const scriptId = `recaptcha-enterprise-script-${siteKey}`;
        const existingScript = document.getElementById(
          scriptId,
        ) as HTMLScriptElement | null;

        if (existingScript && window.grecaptcha?.enterprise) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src =
          `https://www.google.com/recaptcha/enterprise.js?render=${siteKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => {
          recaptchaInitPromiseRef.current = null;
          reject(new Error('Failed to load reCAPTCHA Enterprise.'));
        };
        document.head.appendChild(script);
      });

      await recaptchaInitPromiseRef.current.finally(() => {
        recaptchaInitPromiseRef.current = null;
      });
    }

    const readyFn =
      window.grecaptcha?.enterprise?.ready ?? window.grecaptcha?.ready;
    if (readyFn) {
      await new Promise<void>((resolve) => readyFn(resolve));
    }
  }, [siteKey]);

  useEffect(() => {
    if (!siteKey) {
      return;
    }

    const formElement = formRef.current;
    if (!formElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          ensureRecaptchaReady().catch(() => undefined);
        }
      },
      { rootMargin: '200px 0px' },
    );

    observer.observe(formElement);

    return () => observer.disconnect();
  }, [ensureRecaptchaReady, siteKey]);

  const executeRecaptcha = useCallback(async (): Promise<string | null> => {
    if (!siteKey) {
      return null;
    }

    await ensureRecaptchaReady();

    const enterprise = window.grecaptcha?.enterprise;

    if (enterprise?.execute) {
      return enterprise.execute(siteKey, { action: 'contact_form' });
    }

    if (window.grecaptcha?.execute) {
      return window.grecaptcha.execute(siteKey, { action: 'contact_form' });
    }

    throw new Error('ReCAPTCHA is not available. Please reload and try again.');
  }, [ensureRecaptchaReady, siteKey]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      dogBreed: '',
      trainingType: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);

      let recaptchaToken: string | null = null;

      if (siteKey) {
        recaptchaToken = await executeRecaptcha();

        if (!recaptchaToken) {
          throw new Error('Verification failed. Please try again.');
        }
      }

      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          recaptchaToken: recaptchaToken ?? undefined,
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body?.error ?? 'Something went wrong. Please try again later.');
      }

      toast.success("Message sent! Thank you for your message. We'll get back to you soon.");
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to send message right now. Please call us directly at 479-802-0775.';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@jointforcesk9.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '479-802-0775',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '17606 Highway 16\nSiloam Springs, AR 72761',
      url: 'https://maps.app.goo.gl/ac9zbvesyq2JZPui9'
    },
  ];

  return (
  <section id="contact" className="bg-[#B31942] scroll-mt-[var(--header-height)] pt-8">
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-center flex-col text-center gap-3 mb-4">
          <CustomBadge variant="red" className="text-white border-[#0A3161]">
            Get in Touch
          </CustomBadge>

          <CustomTitle className="text-white">
            Contact Us
          </CustomTitle>
          
          <CustomSubtitle className="text-white">
            Have questions about our dog training services? Ready to get started?
            Send us a message and we&apos;ll respond as soon as possible.
          </CustomSubtitle>

        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mb-1">
          {/* Contact Information */}
          <div className="space-y-6 mb-3">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-white/90 mb-6">
                Whether you need professional dog training, handler training, or specialized K9 services,
                our expert team is here to help you and your canine companion succeed.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <info.icon className="size-4 text-white/80 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {info.title}
                    </h4>
                    {info.icon === Mail ? (
                      <Link href={`mailto:${info.content}`} className="text-white/90 hover:text-[#0A3161] transition-colors whitespace-pre-line">
                        {info.content}
                      </Link>
                    ) : info.icon === Phone ? (
                      <Link href={`tel:${info.content.replace(/[^0-9]/g, '')}`} className="text-white/90 hover:text-[#0A3161] transition-colors whitespace-pre-line">
                        {info.content}
                      </Link>
                    ) : info.url ? (
                      <Link href={info.url} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#0A3161] transition-colors whitespace-pre-line">
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
          <div className="mb-3"> 
            <Card className="border-border/50 bg-white">
              <CardContent className="pt-4 px-8 pb-8">
                <Form {...form}>
                  <form
                    ref={formRef}
                    onSubmit={form.handleSubmit(onSubmit)}
                    onFocusCapture={() => {
                      ensureRecaptchaReady().catch(() => undefined);
                    }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
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
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="dogBreed"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Dog Breed</FormLabel>
                            <FormControl>
                              <Input placeholder="Your dog's breed" {...field} />
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
                        <FormItem>
                          <FormLabel>Training Type</FormLabel>
                          <FormControl>
                            <Input placeholder="What type of training are you interested in?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
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
                      type="submit" 
                      className="w-full hover:bg-[#B31942] hover:text-white" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      This site is protected by reCAPTCHA Enterprise and the{' '}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        Google&nbsp;Privacy&nbsp;Policy
                      </a>{' '}
                      and{' '}
                      <a
                        href="https://policies.google.com/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        Terms&nbsp;of&nbsp;Service
                      </a>{' '}
                      apply.
                    </p>
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
