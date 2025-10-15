
import type { MouseEvent } from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { TikTokIcon } from '@/components/ui/tiktok-icon';
import { scrollToHash } from '@/lib/scroll';
import Image from 'next/image';
import Link from 'next/link';

type FooterLinkItem = {
  name: string;
  href: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/jointforcesk9group', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/jointforcesk9group', label: 'Instagram' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@jointforcesk9group', label: 'TikTok' },
  { icon: Youtube, href: 'https://www.youtube.com/@jointforcesk9group', label: 'YouTube' }
] as const;

const Footer = ({ setActiveService }: { setActiveService: (service: string) => void }) => {
  const handleServiceLinkClick = (event: MouseEvent<HTMLAnchorElement>, service: string) => {
    event.preventDefault();
    setActiveService(service);
    scrollToHash('#services');
  };

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();

    if (!href.startsWith('#')) {
      window.location.href = href;
      return;
    }

    scrollToHash(href);
  };

  const handleFinancingClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveService('training');

    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('services:select-training', {
          detail: { id: 'financing' },
        }),
      );
    }

    scrollToHash('#financing');
  };

  const links: Record<'services' | 'company' | 'resources', FooterLinkItem[]> = {
    services: [
      { name: 'Dog Boarding', href: '#services', onClick: (event) => handleServiceLinkClick(event, 'boarding') },
      { name: 'Dog Training', href: '#services', onClick: (event) => handleServiceLinkClick(event, 'training') },
      { name: 'Narcotics Detection', href: '#services', onClick: (event) => handleServiceLinkClick(event, 'detection') }
    ],
    company: [
      { name: 'About Us', href: '#about', onClick: (event) => handleLinkClick(event, '#about') },
      { name: 'Meet the Team', href: '#team', onClick: (event) => handleLinkClick(event, '#team') },
      { name: 'What Clients Say', href: '#testimonials', onClick: (event) => handleLinkClick(event, '#testimonials') },
      { name: 'Contact', href: '#contact', onClick: (event) => handleLinkClick(event, '#contact') }
    ],
    resources: [
      { name: 'FAQ', href: '#faq', onClick: (event) => handleLinkClick(event, '#faq') },
      { name: 'Financing', href: '#financing', onClick: handleFinancingClick },
    ]
  };

  return (
    <footer className="relative overflow-hidden bg-[#040b1a]">
  <div
    className="absolute inset-0 bg-cover bg-center opacity-80"
    style={{
      backgroundImage:
        "linear-gradient(to bottom, rgba(4, 11, 26, 0.05), rgba(4, 11, 26, 0.3)), url('/footer_background.jpg')",
    }}
    aria-hidden="true"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/10" aria-hidden="true" />
      
      {/* Footer Content */}
      <div className="relative z-10 container px-6 mx-auto pt-12 pb-6">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Logo and social icons - Left side */}
          <div className="space-y-4">
            <div className="mb-8 mt-6">
              <div className="relative transition-transform duration-200 hover:scale-105">
                <Link href="/" className="block">
                  <Image
                    src="/Joint_Forces_K9_Group_Logo.svg"
                    alt="Joint Forces K9 Group Logo"
                    width={480}
                    height={480}
                    priority
                    className="h-[10.5rem] w-auto"
                  />
                </Link>
              </div>
              <div className="flex justify-start space-x-4 mt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="size-9 rounded-md flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black hover:scale-105 focus-visible:scale-105 active:scale-95 group border border-white text-white hover:bg-[#B31942] hover:border-white"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="size-4 text-white transition-colors group-hover:text-white group-focus-visible:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 3 Column Menu - Right aligned */}
          <div className="w-full grow lg:w-2/3 lg:grow-0 flex justify-end mt-6">
            <div className="w-full lg:w-2/3 flex justify-between flex-wrap lg:flex lg:justify-between">
              {Object.entries(links).map(([category, items]) => (
                <div key={category} className={`${category === 'resources' ? 'text-right' : ''} ${category === 'company' ? 'mx-5' : ''} ${category === 'services' ? 'mr-5' : ''}`}>
                  <h3 className="font-bold text-2xl mb-4 capitalize text-[#B31942] text-shadow-white" style={{textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white'}}>{category}</h3>
                  <ul className="text-lg space-y-2">
                    {items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          onClick={item.onClick}
                          className="text-white hover:text-[#B31942] transition-colors font-bold"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer Description - Above separator */}
        <div className="mt-4 mb-4">
          <p className="text-white text-center text-base md:text-lg lg:text-xl xl:text-2xl">
            At Joint Forces K9 Group, we offer a full range of services designed to meet the needs of dogs at every age, skill level, and temperament. From group training classes to personalized one-on-one support, your pet receives expert care in a safe, supportive environment.
          </p>
        </div>
        
        <Separator className="my-5 bg-border/50" />

        <div className="flex justify-center">
          <p className="text-white text-sm">
            © 2025 Joint Forces K9 Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
