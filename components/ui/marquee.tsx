'use client';

import { useCallback, useMemo, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const {
    onPointerEnter: userOnPointerEnter,
    onPointerLeave: userOnPointerLeave,
    ...restProps
  } = props;

  const [isPaused, setIsPaused] = useState(false);

  const handlePointerEnter = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (pauseOnHover) {
        setIsPaused(true);
      }

      if (typeof userOnPointerEnter === "function") {
        userOnPointerEnter(event);
      }
    },
    [pauseOnHover, userOnPointerEnter],
  );

  const handlePointerLeave = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (pauseOnHover) {
        setIsPaused(false);
      }

      if (typeof userOnPointerLeave === "function") {
        userOnPointerLeave(event);
      }
    },
    [pauseOnHover, userOnPointerLeave],
  );

  const animationStyle = useMemo(
    () =>
      pauseOnHover
        ? ({
            animationPlayState: isPaused ? "paused" : "running",
          } as const)
        : undefined,
    [pauseOnHover, isPaused],
  );

  return (
    <div
      {...restProps}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      data-allow-animation
      className={cn(
        "flex overflow-hidden px-2 py-0 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex items-stretch justify-start [gap:var(--gap)] [will-change:transform]",
              {
                "animate-marquee flex-row min-w-full flex-none": !vertical,
                "animate-marquee-vertical flex-col min-h-full flex-none": vertical,
              },
              {
                "[animation-direction:reverse]": reverse,
              },
            )}
            style={animationStyle}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
