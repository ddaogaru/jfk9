"use client";

import { useCallback } from "react";
import type { ComponentProps, MouseEvent } from "react";

import { Button } from "@/components/ui/button";
import { scrollToHash } from "@/lib/scroll";

type ButtonVariant = ComponentProps<typeof Button>["variant"];

type MembershipCtaButtonProps = {
  planName: string;
  variant?: ButtonVariant;
};

type GtagWindow = typeof window & {
  gtag?: (
    command: "event",
    action: string,
    params?: Record<string, unknown>
  ) => void;
};

const MembershipCtaButton = ({ planName, variant }: MembershipCtaButtonProps) => {
  const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    const gtagWindow = window as GtagWindow;

    gtagWindow.gtag?.("event", "membership_get_started_click", {
      membership_level: planName,
      event_category: "membership",
      event_label: planName,
    });

    // If we're on the homepage, keep smooth scrolling UX; otherwise navigate to /contact route
    if (window.location.pathname === '/') {
      event.preventDefault();
      scrollToHash("#contact");
    }
  }, [planName]);

  return (
    <Button className="w-full" size="lg" variant={variant} asChild>
      <a href="/contact" onClick={handleClick}>
        Get Started
      </a>
    </Button>
  );
};

export default MembershipCtaButton;
