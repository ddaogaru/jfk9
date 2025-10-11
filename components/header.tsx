"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { useSectionInView } from "@/hooks/use-section-in-view";
// Removed unused NavigationMenu imports
import { Menu } from "lucide-react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Removed navTargetWidth usage - using fixed max-width instead
  // const pathname = usePathname();
  const isHomeInView = useSectionInView("top");
  const isMembershipsInView = useSectionInView("memberships");
  const isContactInView = useSectionInView("contact");
  const isFaqInView = useSectionInView("faq");
  const isGalleryInView = useSectionInView("gallery");
  const isPressInView = useSectionInView("press");
  const isServicesInView = useSectionInView("services");
  const isAboutInView = useSectionInView("about");

  const navItems: NavItem[] = [
    {
      name: "Home",
      href: "#top",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Memberships",
      href: "#memberships",
    },
    {
      name: "FAQ",
      href: "#faq",
    },
    {
      name: "Gallery",
      href: "#gallery",
    },
    {
      name: "Press",
      href: "#press",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
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

    // Divider line is at the very top of each section (via :before)
    const sectionTop = element.getBoundingClientRect().top + window.scrollY;
    const isTop = href === "#top";
    const targetY = isTop ? 0 : Math.max(0, sectionTop - headerHeight);

    window.scrollTo({ top: targetY, behavior: "smooth" });
    setIsOpen(false);
    // Update hash without default jump
    if (history.pushState) {
      history.pushState(null, "", href);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200 h-[var(--header-height)]",
          isScrolled
            ? "bg-background/80 backdrop-blur-sm border-b shadow-sm"
            : "bg-background",
        )}
      >
        <div className="container mx-auto px-15 h-full">
          <div className="relative flex h-full items-center justify-between md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:justify-start">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden w-full max-w-[600px] nav-responsive-width justify-center md:flex md:justify-self-center">
              <ul className="flex w-full items-center justify-center">
                {navItems.map((item, index) => {
                  const isActive =
                    (item.href === "#top" && isHomeInView) ||
                    (item.href === "#memberships" && isMembershipsInView) ||
                    (item.href === "#faq" && isFaqInView) ||
                    (item.href === "#gallery" &&
                      isGalleryInView &&
                      !isPressInView) ||
                    (item.href === "#press" && isPressInView) ||
                    (item.href === "#contact" && isContactInView) ||
                    (item.href === "#services" && isServicesInView) ||
                    (item.href === "#about" && isAboutInView);
                  return (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={cn(
                          "header-nav-link relative inline-flex items-center justify-center whitespace-nowrap px-15 py-0 text-xs font-semibold transition-colors duration-200 md:text-sm lg:text-base",
                          "text-brand-navy focus-visible:outline-none",
                          isActive && "text-brand-red",
                        )}
                        onClick={(e) => handleClick(e, item.href)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            {/* Mobile Navigation Trigger */}
            <div className="ml-auto md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open navigation menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="max-h-[80vh]">
                  <SheetHeader className="mx-auto w-full max-w-md text-center">
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="mx-auto w-full max-w-md">
                    <nav aria-label="Mobile navigation">
                      <ul className="grid gap-15 py-15">
                        {navItems.map((item, index) => {
                          const isActive =
                            (item.href === "#top" && isHomeInView) ||
                            (item.href === "#memberships" && isMembershipsInView) ||
                            (item.href === "#faq" && isFaqInView) ||
                            (item.href === "#gallery" &&
                              isGalleryInView &&
                              !isPressInView) ||
                            (item.href === "#press" && isPressInView) ||
                            (item.href === "#contact" && isContactInView) ||
                            (item.href === "#services" && isServicesInView) ||
                            (item.href === "#about" && isAboutInView);
                          return (
                            <li key={index}>
                              <Link
                                href={item.href}
                                className={cn(
                                  "block rounded-lg px-15 py-15 text-base font-semibold transition-colors",
                                  "bg-background/70 border border-border/50 text-brand-navy hover:border-brand-red hover:text-brand-red focus-visible:outline-none focus-visible:text-brand-red",
                                  isActive && "border-brand-red text-brand-red",
                                )}
                                onClick={(e) => {
                                  handleClick(e, item.href);
                                  setIsOpen(false);
                                }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      <div className="mt-15 pt-15 border-t border-border/20">
                        <Button asChild className="w-full bg-brand-red text-white transition-colors hover:bg-brand-navy hover:text-white">
                          <Link href="tel:+14798020775">Call Us Now</Link>
                        </Button>
                      </div>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
