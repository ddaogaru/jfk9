import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { TikTokIcon } from "@/components/ui/tiktok-icon";
import { siteConfig } from "@/config/site";

const Footer = ({
  setActiveService,
}: {
  setActiveService: (service: string) => void;
}) => {
  const handleServiceLinkClick = (service: string) => {
    setActiveService(service);
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href) as HTMLElement | null;
    if (!element) return;

    const rootStyles = getComputedStyle(document.documentElement);
    const headerHeightVar = rootStyles
      .getPropertyValue("--header-height")
      .trim();
    const headerHeight = headerHeightVar.endsWith("px")
      ? parseFloat(headerHeightVar)
      : (document.querySelector("header") as HTMLElement | null)
          ?.offsetHeight || 64;

    const sectionTop = element.getBoundingClientRect().top + window.scrollY;
    const targetY = Math.max(0, sectionTop - headerHeight);

    window.scrollTo({ top: targetY, behavior: "smooth" });
    if (history.pushState) {
      history.pushState(null, "", href);
    } else {
      window.location.hash = href;
    }
  };

  const links = {
    services: [
      {
        name: "Dog Boarding",
        onClick: () => handleServiceLinkClick("boarding"),
      },
      {
        name: "Dog Training",
        onClick: () => handleServiceLinkClick("training"),
      },
      {
        name: "Narcotics Detection",
        onClick: () => handleServiceLinkClick("detection"),
      },
    ],
    company: [
      {
        name: "About Us",
        href: "#about",
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
          handleLinkClick(e, "#about"),
      },
      {
        name: "Meet the Team",
        href: "#team",
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
          handleLinkClick(e, "#team"),
      },
      {
        name: "What Clients Say",
        href: "#testimonials",
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
          handleLinkClick(e, "#testimonials"),
      },
      {
        name: "Gallery",
        href: "#gallery",
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
          handleLinkClick(e, "#gallery"),
      },
      {
        name: "Press",
        href: "#press",
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
          handleLinkClick(e, "#press"),
      },
      {
        name: "Contact",
        href: "#contact",
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
          handleLinkClick(e, "#contact"),
      },
    ],
    resources: [
      {
        name: "FAQ",
        href: "#faq",
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
          handleLinkClick(e, "#faq"),
      },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: siteConfig.links.facebook, label: "Facebook" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/jointforcesk9group",
      label: "Instagram",
    },
    {
      icon: TikTokIcon,
      href: "https://www.tiktok.com/@jointforcesk9group",
      label: "TikTok",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@jointforcesk9group",
      label: "YouTube",
    },
  ];

  return (
  <footer className="relative overflow-hidden bg-brand-navy">
      {/* Footer Background Image and Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/footer_background.svg"
          alt="Decorative footer background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#3C3B6E] opacity-90"></div>
      </div>
      {/* Footer Content - ALL spacing 15px */}
      <div className="relative z-10 container px-15 py-15 mx-auto">
        <div className="flex flex-col gap-15">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-15">
            {/* Logo and social icons - Left side */}
            <div className="flex flex-col items-center gap-15 lg:items-start lg:justify-start">
              <div className="mb-15 flex justify-center lg:justify-start">
                <Logo />
              </div>
              <div className="flex gap-15">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-14 h-14 rounded border-4 border-white flex items-center justify-center transition-all duration-200 bg-transparent text-white hover:border-brand-red group"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-8 h-8 transition-colors group-hover:text-brand-red" />
                  </a>
                ))}
              </div>
            </div>

            {/* 3 Column Menu - Right aligned */}
            <div className="w-full lg:w-2/3 flex justify-end">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
                {Object.entries(links).map(([category, items]) => (
                  <div key={category} className="col-span-1 text-left">
                    <h3 className="text-base sm:text-lg font-bold mb-4 text-white uppercase tracking-wide">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <ul className="text-sm sm:text-base flex flex-col gap-2">
                      {items.map((item) => (
                        <li key={typeof item === 'string' ? item : item.name}>
                          {typeof item === "object" &&
                          "onClick" in item &&
                          !("href" in item) ? (
                            <Button
                              variant="ghost"
                              className="text-white text-left font-bold px-0 hover:text-brand-red hover:bg-transparent"
                              onClick={item.onClick}
                            >
                              {item.name}
                            </Button>
                          ) : typeof item === "object" && "href" in item ? (
                            <a
                              href={item.href}
                              onClick={item.onClick}
                              className="text-white hover:text-brand-red transition-colors font-bold"
                            >
                              {item.name}
                            </a>
                          ) : (
                            <a
                              href="#"
                              className="text-white hover:text-brand-red transition-colors font-bold"
                            >
                              {item as string}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Description - Above separator */}
          <p className="text-white text-center text-sm sm:text-base max-w-3xl mx-auto mt-2 mb-2">
            At Joint Forces K9 Group, we offer a full range of services designed
            to meet the needs of dogs at every age, skill level, and
            temperament. From group training classes to personalized one-on-one
            support, your pet receives expert care in a safe, supportive
            environment.
          </p>

          <Separator className="bg-white/30" />

          <div className="flex justify-center mt-2">
            <p className="text-white text-xs sm:text-sm text-center">
              © 2025 Joint Forces K9 Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
