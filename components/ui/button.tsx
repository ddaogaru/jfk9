import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-15 whitespace-nowrap rounded-full px-15 py-15 text-xs md:text-sm lg:text-base font-semibold transition-all has-[>svg]:px-15 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-brand-navy text-white shadow-lg hover:bg-white hover:text-brand-navy transition-all hover:shadow-xl hover:shadow-brand-navy/25",
        destructive:
          "bg-destructive text-white shadow-lg hover:bg-brand-red focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 hover:shadow-xl hover:shadow-brand-red/25",
        outline:
          "border border-brand-navy bg-background text-brand-navy shadow-lg hover:bg-brand-navy hover:text-white hover:border-brand-navy hover:shadow-xl hover:shadow-brand-navy/25",
        secondary:
          "bg-brand-navy/10 text-brand-navy shadow-lg hover:bg-brand-red hover:text-white hover:shadow-xl hover:shadow-brand-red/25",
        ghost:
          "text-brand-navy hover:bg-brand-red/10 hover:text-brand-red hover:shadow-md",
        link: "text-brand-navy underline-offset-4 hover:text-brand-red hover:underline",
      },
      size: {
        default: "",
        sm: "px-15 gap-15 has-[>svg]:px-15",
        lg: "px-15 has-[>svg]:px-15",
        icon: "size-11 rounded-full p-[15px] [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
