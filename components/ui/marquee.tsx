

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
  return (
    <div
      {...props}
      data-allow-animation
      className={cn(
  "group flex overflow-hidden px-2 py-0 [--duration:40s] [--gap:1rem] [gap:0]",
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
              "flex justify-around items-center [gap:var(--gap)] [will-change:transform]",
              {
                // horizontal track should be at least the container width and not shrink
                "animate-marquee flex-row min-w-full flex-none": !vertical,
                // vertical track should be at least the container height and not shrink
                "animate-marquee-vertical flex-col min-h-full flex-none": vertical,
              },
              {
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              }
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
