import { cn } from "@/lib/cn";
import { Ornament } from "@/components/ui/Ornament";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function PageHero({ eyebrow, title, subtitle, className }: PageHeroProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-navy pb-20 pt-40 text-cream md:pb-24 md:pt-48",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,168,108,0.08)_0%,transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <p className="text-[10px] uppercase tracking-royal text-brass">{eyebrow}</p>
        <Ornament light className="mt-6 ml-0 max-w-[5rem]" />
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/55">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
