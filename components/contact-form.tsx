
import { useState } from 'react';
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

  const onSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast("Message sent!. Thank you for your message. We'll get back to you soon.");
    
    form.reset();
    setIsSubmitting(false);
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
    <section id="contact" className="bg-[#B31942]">
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

          <div className="mx-auto w-full mb-6">
            <div className="relative w-full aspect-video">
              <video 
                className="rounded-lg shadow-lg absolute inset-0 w-full h-full"
                autoPlay
                loop={true}
                muted
                playsInline
                preload="metadata"
              >
                <source src="/contact_page.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mb-1">
          {/* Contact Information */}
          <div className="space-y-6 mb-6">
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
          <div className="mb-6"> 
            <Card className="border-border/50 bg-white">
              <CardContent className="pt-4 px-8 pb-8">            
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
