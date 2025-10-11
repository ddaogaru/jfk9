import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-full px-6 py-2 text-xs md:text-sm lg:text-base font-semibold transition-all duration-200 has-[>svg]:px-6 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-brand-navy focus-visible:ring-2 focus-visible:ring-brand-navy/50 aria-invalid:ring-brand-red/20 dark:aria-invalid:ring-brand-red/40 aria-invalid:border-brand-red shadow-lg",
  {
    variants: {
      variant: {
        default:
          "bg-brand-navy text-white border border-brand-navy shadow-lg hover:bg-white hover:text-brand-navy hover:border-brand-navy hover:shadow-xl hover:shadow-brand-navy/25",
        destructive:
          "bg-brand-red text-white border border-brand-red shadow-lg hover:bg-white hover:text-brand-red hover:border-brand-red hover:shadow-xl hover:shadow-brand-red/25",
        outline:
          "border border-brand-navy bg-white text-brand-navy shadow-lg hover:bg-brand-navy hover:text-white hover:shadow-xl hover:shadow-brand-navy/25",
        secondary:
          "bg-white text-brand-navy border border-brand-navy shadow-lg hover:bg-brand-red hover:text-white hover:border-brand-red hover:shadow-xl hover:shadow-brand-red/25",
        ghost:
          "text-brand-navy bg-transparent hover:bg-brand-red/10 hover:text-brand-red hover:shadow-md",
        link: "text-brand-navy underline underline-offset-4 hover:text-brand-red hover:decoration-brand-red",
      },
      size: {
        default: "",
        sm: "px-4 py-1 gap-2 has-[>svg]:px-4",
        lg: "px-8 py-3 gap-6 has-[>svg]:px-8",
        icon: "size-10 rounded-full p-2 [&_svg]:size-5",
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
