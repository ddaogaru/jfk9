import * as React from "react";
import { cn } from "@/lib/utils";

type CustomTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const CustomTitle = React.forwardRef<
  HTMLHeadingElement,
  CustomTitleProps
>(({ children, className }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(
        "leading-6 text-3xl md:text-5xl font-bold text-foreground",
        className,
      )}
    >
      {children}
    </h2>
  );
});

CustomTitle.displayName = "CustomTitle";
