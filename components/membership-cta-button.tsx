"use client";

import { useCallback } from "react";
import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";

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
  const handleClick = useCallback(() => {
    const gtagWindow = window as GtagWindow;

    gtagWindow.gtag?.("event", "membership_get_started_click", {
      membership_level: planName,
      event_category: "membership",
      event_label: planName,
    });
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
