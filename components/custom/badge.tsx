import { cn } from "@/lib/utils";

export function CustomBadge({ 
    children, 
    className, 
    variant = "blue",
    inline = false 
}: { 
    children: React.ReactNode; 
    className?: string;
    variant?: "blue" | "red" | "red-line-blue-text" | "blue-line-red-text";
    inline?: boolean;
}) {
    return (
        <div className={cn(
            "py-1 font-semibold border-b-2 mb-1.5",
            inline && "inline-block",
            variant === "blue" && "text-[#0A3161] border-[#0A3161]",
            variant === "red" && "text-[#B31942] border-[#B31942]",
            variant === "red-line-blue-text" && "text-[#0A3161] border-[#B31942]",
            variant === "blue-line-red-text" && "text-[#B31942] border-[#0A3161]",
            className
        )}>
            {children}
        </div>
    );
}