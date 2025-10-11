import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[#0A3161] text-white shadow-lg hover:bg-white hover:text-[#0A3161] transition-all hover:shadow-xl hover:shadow-[#0A3161]/25",
        destructive:
          "bg-destructive text-white shadow-lg hover:bg-[#B31942] focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 hover:shadow-xl hover:shadow-[#B31942]/25",
        outline:
          "border border-[#0A3161] bg-background text-[#0A3161] shadow-lg hover:bg-[#0A3161] hover:text-white hover:border-[#0A3161] hover:shadow-xl hover:shadow-[#0A3161]/25",
        secondary:
          "bg-[#0A3161]/10 text-[#0A3161] shadow-lg hover:bg-[#B31942] hover:text-white hover:shadow-xl hover:shadow-[#B31942]/25",
        ghost:
          "text-[#0A3161] hover:bg-[#B31942]/10 hover:text-[#B31942] hover:shadow-md",
        link: "text-[#0A3161] underline-offset-4 hover:text-[#B31942] hover:underline",
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
