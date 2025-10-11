import { cn } from "@/lib/utils";

export function CustomBadge({
  children,
  className,
  variant = "blue",
  inline = false,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "blue" | "red" | "red-line-blue-text" | "blue-line-red-text";
  inline?: boolean;
}) {
  return (
    <div
      className={cn(
        "py-0 font-semibold border-b-2 mb-0",
        inline && "inline-block",
        variant === "blue" && "text-brand-navy border-brand-navy",
        variant === "red" && "text-brand-red border-brand-red",
        variant === "red-line-blue-text" && "text-brand-navy border-brand-red",
        variant === "blue-line-red-text" && "text-brand-red border-brand-navy",
        className,
      )}
    >
      {children}
    </div>
  );
}
