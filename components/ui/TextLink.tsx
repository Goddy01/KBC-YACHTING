import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
};

export function TextLink({ href, children, className, light }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center text-xs uppercase tracking-[0.16em] transition-colors duration-300",
        light ? "text-cream/90 hover:text-cream" : "text-navy/80 hover:text-navy",
        className
      )}
    >
      <span>{children}</span>
      <span
        className={cn(
          "absolute -bottom-1 left-0 h-px w-0 transition-all duration-500 ease-luxury group-hover:w-full",
          light ? "bg-brass" : "bg-brass"
        )}
      />
    </Link>
  );
}
