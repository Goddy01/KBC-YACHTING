import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "ghost" | "outline" | "solid" | "gold";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  variant = "outline",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-sans transition-all duration-500 ease-luxury focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass disabled:opacity-50",
        size === "sm" && "px-5 py-2.5 text-[10px] uppercase tracking-[0.2em]",
        size === "md" && "px-7 py-3.5 text-[11px] uppercase tracking-[0.22em]",
        size === "lg" && "px-9 py-4 text-xs uppercase tracking-[0.22em]",
        variant === "outline" &&
          "border border-brass/60 text-cream hover:border-brass hover:bg-brass/10 hover:shadow-gold-glow",
        variant === "ghost" &&
          "border border-transparent text-navy hover:text-brass-deep",
        variant === "solid" &&
          "border border-navy bg-navy text-cream hover:bg-navy-soft",
        variant === "gold" &&
          "border border-brass bg-brass/15 text-navy hover:bg-brass hover:text-navy",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
