"use client";

import { useEffect } from 'react';

type Props = {
  targetId: string; // section id without '#', e.g., 'about'
  offsetVar?: string; // CSS var name that stores header height
};

export default function ScrollToSection({ targetId, offsetVar = '--header-height' }: Props) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const root = document.documentElement;
    const headerVar = getComputedStyle(root).getPropertyValue(offsetVar).trim();
    const headerOffset = headerVar.endsWith('px') ? parseFloat(headerVar) : 64;

    // Wait a tick to ensure layout is painted
    const id = requestAnimationFrame(() => {
      const rectTop = el.getBoundingClientRect().top + window.scrollY;
      const top = targetId === 'top' ? 0 : Math.max(0, rectTop - headerOffset);
      // Use standard ScrollBehavior to satisfy TypeScript/ESLint
      const behavior: ScrollBehavior = 'auto';
      window.scrollTo({ top, behavior });
    });
    return () => cancelAnimationFrame(id);
  }, [targetId, offsetVar]);

  return null;
}
