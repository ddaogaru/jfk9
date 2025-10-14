import { cn } from "@/lib/utils";

type CustomSubtitleProps = {
	children: React.ReactNode;
	className?: string;
	fullWidth?: boolean;
};

export function CustomSubtitle({ children, className, fullWidth = false }: CustomSubtitleProps) {
	return (
		<p
			className={cn(
				"text-lg md:text-xl text-muted-foreground mx-auto",
				fullWidth ? "w-full max-w-none" : "max-w-2xl",
				className,
			)}
		>
			{children}
		</p>
	);
}