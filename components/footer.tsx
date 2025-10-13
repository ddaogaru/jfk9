
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { TikTokIcon } from '@/components/ui/tiktok-icon';
import { scrollToSection } from '@/lib/scroll';
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({ setActiveService }: { setActiveService: (service: string) => void }) => {
  const handleServiceLinkClick = (service: string) => {
    setActiveService(service);

    if (typeof window === 'undefined') {
      return;
    }

    if (window.location.pathname === '/') {
      const didScroll = scrollToSection('#services', { updateHash: '#services' });

      if (!didScroll) {
        window.location.hash = '#services';
      }
    } else {
      window.location.href = '/#services';
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (typeof window === 'undefined') {
      return;
    }

    if (!href.startsWith('#')) {
      window.location.href = href;
      return;
    }

    if (window.location.pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }

    const didScroll = scrollToSection(href, { updateHash: href });

    if (!didScroll) {
      window.location.hash = href;
    }
  };

  const links = {
    services: [
      { name: 'Dog Boarding', onClick: () => handleServiceLinkClick('boarding') },
      { name: 'Dog Training', onClick: () => handleServiceLinkClick('training') },
      { name: 'Narcotics Detection', onClick: () => handleServiceLinkClick('detection') }
    ],
    company: [
      { name: 'About Us', href: '#about', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, '#about') },
      { name: 'Meet the Team', href: '#team', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, '#team') },
      { name: 'What Clients Say', href: '#testimonials', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, '#testimonials') },
      { name: 'Contact', href: '#contact', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, '#contact') }
    ],
    resources: [
      { name: 'FAQ', href: '#faq', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, '#faq') }
    ]
  };

  // Contact info displayed in header or other sections; not used directly here

    const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/jointforcesk9group', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/jointforcesk9group', label: 'Instagram' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@jointforcesk9group', label: 'TikTok' },
    { icon: Youtube, href: 'https://www.youtube.com/@jointforcesk9group', label: 'YouTube' }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Full Footer Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/footer_background.svg" 
          alt="Footer background" 
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
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
                    width={504}
                    height={152}
                    priority
                    className="h-[10.5rem] w-auto"
                    unoptimized
                  />
                </Link>
              </div>
              <div className="flex justify-start space-x-4 mt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="size-9 border border-border/60 rounded-md flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:border-[#B31942] hover:text-[#B31942] group hover:scale-105 active:scale-95"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="size-4 fill-white group-hover:fill-[#B31942] transition-colors" />
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
                    {items.map((item, index) => (
                      <li key={index}>
                        {typeof item === 'object' && 'onClick' in item && !('href' in item) ? (
                            <button
                              onClick={item.onClick}
                              className="text-white hover:text-[#B31942] transition-colors text-left font-bold"
                            >
                              {item.name}
                            </button>
                          ) : typeof item === 'object' && 'href' in item ? (
                            <a
                              href={item.href}
                              onClick={item.onClick}
                              className="text-white hover:text-[#B31942] transition-colors font-bold"
                            >
                              {item.name}
                            </a>
                          ) : (
                            <a
                              href="#"
                              className="text-white hover:text-[#B31942] transition-colors font-bold"
                            >
                              {item as string}
                            </a>
                          )
                        }
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
