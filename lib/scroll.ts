export type ScrollTarget = string | HTMLElement;

export type ScrollOptions = {
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

  if (header) {
    const measured = header.getBoundingClientRect().height;
    if (!Number.isNaN(measured) && measured > 0) {
      return measured;
    }

    if (header.offsetHeight > 0) {
      return header.offsetHeight;
    }
  }

  const rootStyles = getComputedStyle(document.documentElement);
  const rawValue = rootStyles.getPropertyValue('--header-height').trim();

  if (rawValue) {
    const parsed = Number.parseFloat(rawValue);
    if (!Number.isNaN(parsed) && parsed > 0) {
      return parsed;
    }
  }

  return DEFAULT_HEADER_FALLBACK;
}

export function scrollToSection(target: ScrollTarget, options: ScrollOptions = {}): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const element = resolveElement(target);

  if (!element) {
    return false;
  }

  const headerOffset = typeof options.offset === 'number' ? options.offset : getHeaderHeight();
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

export function scrollToHash(hash: string, options: ScrollOptions = {}): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const normalizedHash = hash.startsWith('#') ? hash : `#${hash}`;

  if (window.location.pathname !== '/') {
    window.location.href = `/${normalizedHash}`;
    return true;
  }

  const didScroll = scrollToSection(normalizedHash, {
    ...options,
    updateHash: options.updateHash ?? normalizedHash,
  });

  if (!didScroll) {
    window.location.hash = normalizedHash;
  }

  return didScroll;
}
