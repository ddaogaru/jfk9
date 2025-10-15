
'use client';

import type { MouseEvent } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
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
  { name: 'Media', href: '#gallery' },
  { name: 'Contact Us', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerHeightRef = useRef(64);

  useEffect(() => {
    const root = document.documentElement;
    const headerEl = document.querySelector('header') as HTMLElement | null;

    const measureHeader = () => {
      const rootStyles = getComputedStyle(root);
      const headerHeightVar = rootStyles.getPropertyValue('--header-height').trim();
      const parsedVar = headerHeightVar.endsWith('px') ? parseFloat(headerHeightVar) : undefined;
      const measuredHeight = headerEl?.getBoundingClientRect().height ?? 64;
      headerHeightRef.current = parsedVar ?? measuredHeight;
    };

    measureHeader();
    window.addEventListener('resize', measureHeader);
    return () => window.removeEventListener('resize', measureHeader);
  }, []);

  const isHomeInView = useSectionInView('top');
  const isAboutInView = useSectionInView('about');
  const isServicesInView = useSectionInView('services');
  const isMembershipsInView = useSectionInView('memberships');
  const isFaqInView = useSectionInView('faq');
  const isGalleryInView = useSectionInView('gallery');
  const isContactInView = useSectionInView('contact');

  const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const element = document.querySelector(href) as HTMLElement | null;
    if (!element) return;

    const sectionTop = element.getBoundingClientRect().top + window.scrollY;
    const targetY = href === '#top' ? 0 : Math.max(0, sectionTop - headerHeightRef.current);

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });

    setIsOpen(false);
    if (history.pushState) {
      history.pushState(null, '', href);
    } else {
      window.location.hash = href;
    }
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50 h-[var(--header-height)] bg-white border-b shadow-sm">
      <div className="container mx-auto h-full px-4">
        <div className="flex h-full items-center gap-4 py-[10px]">
          <div className="flex items-center flex-shrink-0">
            <Logo />
          </div>

          <nav className="hidden lg:flex flex-1 justify-center" aria-label="Primary">
            <ul className="flex flex-wrap items-center justify-center gap-4 text-center">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'group nav-link inline-flex flex-col items-center px-3 py-2 text-base xl:text-lg font-semibold text-[#0A3161] transition-colors',
                      isActive(item.href) ? 'text-[#B31942]' : 'hover:text-[#B31942]',
                    )}
                    onClick={(event) => handleClick(event, item.href)}
                  >
                    <span
                      className="nav-link-underline"
                      data-active={isActive(item.href) ? 'true' : 'false'}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto hidden lg:flex flex-shrink-0">
            <a
              href="tel:+14798020775"
              className="inline-flex items-center gap-2 rounded-md bg-[#B31942] px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0A3161]"
            >
              Call Us Now
            </a>
          </div>

          <div className="ml-auto lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="pb-10 pt-6 bg-white">
                <SheetHeader className="mx-auto mb-4 w-full max-w-md text-center">
                  <SheetTitle className="text-[#B31942]">Navigation</SheetTitle>
                </SheetHeader>
                <div className="mx-auto w-full max-w-md">
                  <nav aria-label="Mobile navigation">
                    <ul className="grid gap-3">
                      {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              'block rounded-md bg-[#B31942] px-4 py-3 text-base font-semibold text-white transition-colors whitespace-nowrap',
                              'hover:bg-[#0A3161]',
                              isActive(item.href) && 'bg-[#0A3161]',
                            )}
                            onClick={(event) => handleClick(event, item.href)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="tel:+14798020775"
                      className="mt-6 block w-full rounded-md bg-[#B31942] px-4 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-[#0A3161]"
                      aria-label="Call Joint Forces K9 Group"
                    >
                      Call Us Now
                    </a>
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
