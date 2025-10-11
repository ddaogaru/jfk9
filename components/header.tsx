'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useSectionInView } from '@/hooks/use-section-in-view';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#top' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Memberships', href: '#memberships' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomeInView = useSectionInView('top');
  const isAboutInView = useSectionInView('about');
  const isServicesInView = useSectionInView('services');
  const isMembershipsInView = useSectionInView('memberships');
  const isFaqInView = useSectionInView('faq');
  const isGalleryInView = useSectionInView('gallery');
  const isContactInView = useSectionInView('contact');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    const element = document.querySelector(href) as HTMLElement | null;
    if (!element) return;

    const rootStyles = getComputedStyle(document.documentElement);
    const headerHeightVar = rootStyles.getPropertyValue('--header-height').trim();
    const headerHeight = headerHeightVar.endsWith('px')
      ? parseFloat(headerHeightVar)
      : (document.querySelector('header') as HTMLElement | null)?.offsetHeight || 64;

    const sectionTop = element.getBoundingClientRect().top + window.scrollY;
    const targetY = href === '#top' ? 0 : Math.max(0, sectionTop - headerHeight);

    window.scrollTo({ top: targetY, behavior: 'smooth' });
    setIsOpen(false);
    if (history.pushState) {
      history.pushState(null, '', href);
    } else {
      window.location.hash = href;
    }
  };

  const isActive = (href: string) => {
    switch (href) {
      case '#top':
        return isHomeInView;
      case '#about':
        return isAboutInView;
      case '#services':
        return isServicesInView;
      case '#memberships':
        return isMembershipsInView;
      case '#faq':
        return isFaqInView;
      case '#gallery':
        return isGalleryInView;
      case '#contact':
        return isContactInView;
      default:
        return false;
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200 h-[var(--header-height)]',
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm border-b shadow-sm'
          : 'bg-white',
      )}
    >
      <div className="container mx-auto h-full px-4">
        <div className="relative flex h-full items-center justify-between">
          <Logo />

          <nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center justify-center gap-4 text-center">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'inline-block px-4 py-2 text-base font-semibold transition-all duration-200',
                      'hover:text-[#0A3161] relative after:content-[\'\'] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#0A3161] after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100',
                      isActive(item.href) && 'text-[#0A3161] after:scale-x-100',
                    )}
                    onClick={(event) => handleClick(event, item.href)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="pb-10 pt-6">
                <SheetHeader className="mx-auto mb-4 w-full max-w-md text-center">
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <div className="mx-auto w-full max-w-md">
                  <nav aria-label="Mobile navigation">
                    <ul className="grid gap-3">
                      {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              'block rounded-lg border border-border/50 bg-background/70 px-4 py-3 text-base font-medium transition-colors',
                              'hover:border-[#0A3161] hover:text-[#0A3161]',
                              isActive(item.href) && 'border-[#0A3161] text-[#0A3161]',
                            )}
                            onClick={(event) => handleClick(event, item.href)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
