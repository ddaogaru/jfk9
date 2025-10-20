import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-brand-navy text-white shadow-lg hover:bg-white hover:text-brand-navy transition-all hover:shadow-xl hover:shadow-brand-navy/25",
        destructive:
          "bg-destructive text-white shadow-lg hover:bg-brand-red focus-visible:ring-destructive/20 hover:shadow-xl hover:shadow-brand-red/25",
        outline:
          "border border-brand-navy bg-background text-brand-navy shadow-lg hover:bg-brand-navy hover:text-white hover:border-brand-navy hover:shadow-xl hover:shadow-brand-navy/25",
        secondary:
          "bg-brand-navy/10 text-brand-navy shadow-lg hover:bg-brand-red hover:text-white hover:shadow-xl hover:shadow-brand-red/25",
        ghost:
          "text-brand-navy hover:bg-brand-red/10 hover:text-brand-red hover:shadow-md",
        link: "text-brand-navy underline-offset-4 hover:text-brand-red hover:underline",
        accent:
          "bg-brand-red text-white shadow-lg hover:bg-brand-red-dark hover:text-white hover:shadow-xl hover:shadow-brand-navy/25 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy",
        outlineAccent:
          "border border-brand-navy bg-background text-brand-navy shadow-lg hover:bg-brand-red hover:text-white hover:border-brand-red hover:shadow-xl hover:shadow-brand-red/25",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
