export type ScrollTarget = string | HTMLElement;

type ScrollOptions = {
  offset?: number;
  updateHash?: string;
};

const DEFAULT_HEADER_FALLBACK = 64;

function resolveElement(target: ScrollTarget): HTMLElement | null {
  if (typeof target === 'string') {
    if (target.startsWith('#')) {
      return document.querySelector<HTMLElement>(target);
    }

    return document.getElementById(target);
  }

  return target;
}

function getHeaderHeight(): number {
  const header = document.querySelector('header') as HTMLElement | null;
  const fallback = header?.offsetHeight ?? DEFAULT_HEADER_FALLBACK;

  const rootStyles = getComputedStyle(document.documentElement);
  const rawValue = rootStyles.getPropertyValue('--header-height').trim();

  if (!rawValue) {
    return fallback;
  }

  const parsed = parseFloat(rawValue);
  return Number.isNaN(parsed) ? fallback : parsed;
}

export function scrollToSection(target: ScrollTarget, options: ScrollOptions = {}): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const element = resolveElement(target);

  if (!element) {
    return false;
  }

  const headerOffset = options.offset ?? getHeaderHeight();
  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  const targetY = Math.max(0, elementTop - headerOffset);

  window.scrollTo({ top: targetY, behavior: 'smooth' });

  if (options.updateHash) {
    if (history.pushState) {
      history.pushState(null, '', options.updateHash);
    } else {
      window.location.hash = options.updateHash;
    }
  }

  return true;
}
