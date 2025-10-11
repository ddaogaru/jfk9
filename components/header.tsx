'use client';

import Logo from '@/components/logo';

type NavItem = { name: string; href: string };

const NAV: NavItem[] = [
  { name: 'Home', href: '#top' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Memberships', href: '#memberships' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[var(--header-height)] bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 h-full">
        <div className="relative h-full">
          {/* Left: Logo in normal flow */}
          <div className="h-full flex items-center">
            <Logo />
          </div>

          {/* Center: Desktop nav, absolutely centered */}
          <nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-label="Primary">
            <ul className="flex items-center gap-2 text-center">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-block text-base font-semibold px-4 py-2 text-[#0A3161] hover:text-[#B31942] transition-colors nav-link-underline">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Desktop CTA, absolute right & vertically centered */}
          <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2">
            <a href="tel:+14798020775" className="inline-flex items-center justify-center rounded-md bg-[#0A3161] px-6 py-2 text-white font-medium hover:bg-[#B31942] transition-colors">
              Call Us Now
            </a>
          </div>

          {/* Right: Mobile menu toggle (CSS-only) */}
          <details className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <summary className="list-none inline-flex items-center justify-center rounded-md px-3 py-2 border text-[#0A3161] border-[#0A3161]/30 hover:bg-[#0A3161]/5 cursor-pointer select-none">
              Menu
            </summary>
            {/* Mobile dropdown panel (positioned relative to viewport top under header) */}
            <div className="fixed left-0 right-0 top-[var(--header-height)] z-40 bg-white border-b shadow-sm">
              <nav aria-label="Mobile navigation" className="container mx-auto px-4 py-4">
                <ul className="grid gap-2">
                  {NAV.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="block rounded-lg px-4 py-3 text-base font-medium border border-[#0A3161]/20 hover:border-[#0A3161] hover:text-[#0A3161]">
                        {item.name}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="tel:+14798020775" className="block w-full text-center rounded-md bg-[#0A3161] py-3 text-white font-medium hover:bg-[#B31942] transition-colors">
                      Call Us Now
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}