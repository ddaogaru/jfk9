import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type CustomTitleProps = {
	children: ReactNode;
	className?: string;
	as?: HeadingLevel;
};

export function CustomTitle({ children, className, as = "h2" }: CustomTitleProps) {
	const Tag = as;

	return (
		<Tag className={cn("leading-6 text-3xl md:text-5xl font-bold text-foreground", className)}>
			{children}
		</Tag>
	);
}
