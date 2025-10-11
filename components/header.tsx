'use client';

import React, { useEffect, useState } from 'react';
import { useSectionInView } from '@/hooks/use-section-in-view';
// Removed unused NavigationMenu imports
import { Menu } from 'lucide-react';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const pathname = usePathname();
  const isHomeInView = useSectionInView('top');
  const isMembershipsInView = useSectionInView('memberships');
  const isContactInView = useSectionInView('contact');
  const isFaqInView = useSectionInView('faq');
  const isGalleryInView = useSectionInView('gallery');
  const isServicesInView = useSectionInView('services');
  const isAboutInView = useSectionInView('about');

  const navItems: NavItem[] = [
    { 
      name: 'Home',
      href: '#top'
    },
    {
      name: 'About',
      href: '#about'
    },
    {
      name: 'Services',
      href: '#services'
    },
    {
      name: 'Memberships',
      href: '#memberships'
    },
    {
      name: 'FAQ',
      href: '#faq'
    },
    {
      name: 'Gallery',
      href: '#gallery'
    },
    {
      name: 'Contact',
      href: '#contact'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href) as HTMLElement | null;
    if (!element) return;

    const rootStyles = getComputedStyle(document.documentElement);
    const headerHeightVar = rootStyles.getPropertyValue('--header-height').trim();
    const headerHeight = headerHeightVar.endsWith('px')
      ? parseFloat(headerHeightVar)
      : (document.querySelector('header') as HTMLElement | null)?.offsetHeight || 64;

    // Divider line is at the very top of each section (via :before)
    const sectionTop = element.getBoundingClientRect().top + window.scrollY;
    const isTop = href === '#top';
    const targetY = isTop ? 0 : Math.max(0, sectionTop - headerHeight);

    window.scrollTo({ top: targetY, behavior: 'smooth' });
    setIsOpen(false);
    // Update hash without default jump
    if (history.pushState) {
      history.pushState(null, '', href);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200 h-[var(--header-height)]',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b shadow-sm' : 'bg-white'
      )}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href}
                      className={cn(
                        "inline-block text-base font-medium px-4 py-2 transition-all duration-200",
                        "hover:text-[#0A3161] relative",
                        "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-[#0A3161] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200",
                        ((item.href === '#top' && isHomeInView) ||
                         (item.href === '#memberships' && isMembershipsInView) ||
                         (item.href === '#faq' && isFaqInView) ||
                         (item.href === '#gallery' && isGalleryInView) ||
                         (item.href === '#contact' && isContactInView) ||
                         (item.href === '#services' && isServicesInView) ||
                         (item.href === '#about' && isAboutInView)) && 
                        "text-[#0A3161] after:scale-x-100"
                      )}
                      onClick={(e) => handleClick(e, item.href)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Navigation Trigger */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="pb-10 pt-6">
                  <SheetHeader className="mx-auto w-full max-w-md text-center mb-4">
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="mx-auto w-full max-w-md">
                    <nav aria-label="Mobile navigation">
                      <ul className="grid gap-3">
                        {navItems.map((item, index) => (
                          <li key={index}>
                            <Link
                              href={item.href}
                              className={cn(
                                "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                                "bg-background/70 border border-border/50 hover:border-[#0A3161] hover:text-[#0A3161]",
                                ((item.href === '#top' && isHomeInView) ||
                                 (item.href === '#memberships' && isMembershipsInView) ||
                                 (item.href === '#faq' && isFaqInView) ||
                                 (item.href === '#gallery' && isGalleryInView) ||
                                 (item.href === '#contact' && isContactInView) ||
                                 (item.href === '#services' && isServicesInView) ||
                                 (item.href === '#about' && isAboutInView)) && 
                                "border-[#0A3161] text-[#0A3161]"
                              )}
                              onClick={(e) => handleClick(e, item.href)}
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
    </>
  );
};

export default Header;
