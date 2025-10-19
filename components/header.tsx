
"use client";

import { useState } from "react";
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';

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
import { usePathname } from 'next/navigation';

type NavItem = {
  name: string;
  href?: string;
  children?: NavItem[];
};

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    children: [
      { name: 'About Us', href: '/about' },
      { name: 'Team', href: '/team' },
      { name: 'Media', href: '/media' },
      { name: 'News', href: '/news' },
    ],
  },
  {
    name: 'Services',
    children: [
      { name: 'Dog Boarding', href: '/services/boarding' },
      {
        name: 'Dog Training',
        children: [
          { name: 'Obedience Training', href: '/services/training/obedience' },
          { name: 'Aggressive Dog Training', href: '/services/training/aggressive' },
          { name: 'Protection Dog Training', href: '/services/training/protection' },
          { name: 'Service Dog Training', href: '/services/training/service' },
        ],
      },
      { name: 'Narcotics Detection', href: '/services/detection' },
      { name: 'Memberships', href: '/memberships' },
      { name: 'Financing', href: '/financing' },
    ],
  },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isPathActive = (href?: string) => {
    if (!href) return false;
    if (!pathname) return false;
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };
  const isItemActive = (item: NavItem): boolean => {
    if (isPathActive(item.href)) {
      return true;
    }
    return item.children?.some((child) => isItemActive(child)) ?? false;
  };

  const renderDesktopDropdown = (items: NavItem[]) => {
    return (
      <ul className="flex w-full flex-col gap-1">
        {items.map((child) => {
          const childActive = isItemActive(child);
          const hasGrandchildren = Boolean(child.children?.length);
          return (
            <li key={child.name} className="flex flex-col">
              {child.href ? (
                <Link
                  href={child.href}
                  className={cn(
                    'flex w-full items-center px-3 py-2 text-sm font-semibold text-[#0A3161] transition-colors hover:text-[#B31942] focus-visible:text-[#B31942]',
                    childActive && 'text-[#B31942]',
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {child.name}
                </Link>
              ) : (
                <span
                  className={cn(
                    'flex w-full items-center px-3 py-2 text-sm font-semibold text-[#0A3161]',
                    childActive && 'text-[#B31942]',
                  )}
                  aria-label={child.name}
                >
                  {child.name}
                </span>
              )}
              {hasGrandchildren && (
                <div className="ml-3 border-l border-border pl-3">
                  {renderDesktopDropdown(child.children!)}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  const renderMobileItems = (items: NavItem[], depth = 0) => {
    return items.map((item) => {
      const hasChildren = Boolean(item.children?.length);
      const active = isItemActive(item);
      const depthPadding =
        depth === 0 ? '' : depth === 1 ? 'pl-5' : depth === 2 ? 'pl-8' : 'pl-10';
      const baseClasses =
        depth === 0
          ? 'block rounded-md bg-[#B31942] px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0A3161]'
          : 'block rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#0A3161] transition-colors hover:text-[#B31942]';
      const activeClasses =
        depth === 0 ? (active ? 'bg-[#0A3161]' : '') : active ? 'text-[#B31942]' : '';

      return (
        <li key={`${depth}-${item.name}`} className={depth > 0 ? 'space-y-2' : undefined}>
          {item.href ? (
            <Link
              href={item.href}
              className={cn(baseClasses, depthPadding, activeClasses)}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ) : (
            <button
              type="button"
              className={cn(baseClasses, depthPadding, 'w-full text-left', activeClasses)}
              aria-haspopup={hasChildren ? 'true' : undefined}
              aria-expanded={hasChildren ? active : undefined}
            >
              {item.name}
            </button>
          )}
          {hasChildren && (
            <ul className={cn('mt-2 space-y-2', depth === 0 ? 'pl-4' : 'pl-2')}>
              {renderMobileItems(item.children!, depth + 1)}
            </ul>
          )}
        </li>
      );
    });
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
              {NAV_ITEMS.map((item) => {
                const active = isItemActive(item);
                const hasChildren = Boolean(item.children?.length);
                return (
                  <li key={item.name} className={cn(hasChildren && 'relative group')}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={cn(
                          'group/nav-link nav-link inline-flex items-center gap-1 px-3 py-2 text-base xl:text-lg font-semibold text-[#0A3161] transition-colors',
                          active ? 'text-[#B31942]' : 'hover:text-[#B31942]',
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="nav-link-underline" data-active={active ? 'true' : 'false'}>
                          {item.name}
                        </span>
                        {hasChildren && (
                          <ChevronDown
                            className="h-3 w-3 transition-transform group-hover/nav-link:-rotate-180 group-focus-visible/nav-link:-rotate-180"
                            aria-hidden
                          />
                        )}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className={cn(
                          'group/nav-link nav-link inline-flex items-center gap-1 px-3 py-2 text-base xl:text-lg font-semibold text-[#0A3161] transition-colors',
                          active ? 'text-[#B31942]' : 'hover:text-[#B31942]',
                        )}
                        aria-haspopup={hasChildren ? 'true' : undefined}
                        aria-expanded={hasChildren ? active : undefined}
                      >
                        <span className="nav-link-underline" data-active={active ? 'true' : 'false'}>
                          {item.name}
                        </span>
                        {hasChildren && (
                          <ChevronDown
                            className="h-3 w-3 transition-transform group-hover/nav-link:-rotate-180 group-focus-visible/nav-link:-rotate-180"
                            aria-hidden
                          />
                        )}
                      </button>
                    )}
                    {hasChildren && (
                      <div className="absolute left-1/2 top-full z-40 hidden w-56 -translate-x-1/2 rounded-md border border-border bg-white py-3 text-left shadow-lg group-hover:block group-focus-within:block">
                        {renderDesktopDropdown(item.children!)}
                      </div>
                    )}
                  </li>
                );
              })}
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
                      {renderMobileItems(NAV_ITEMS)}
                    </ul>
                    <a
                      href="tel:+14798020775"
                      className="mt-6 block w-full rounded-md bg-[#B31942] px-4 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-[#0A3161]"
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
