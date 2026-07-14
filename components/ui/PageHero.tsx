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
        "relative overflow-hidden bg-navy pb-14 pt-32 text-cream sm:pb-20 sm:pt-40 md:pb-24 md:pt-48",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,168,108,0.08)_0%,transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <p className="text-[10px] uppercase tracking-royal text-brass">{eyebrow}</p>
        <Ornament light className="mt-5 ml-0 max-w-[5rem] sm:mt-6" />
        <h1 className="mt-5 max-w-3xl font-display text-3xl font-medium leading-[1.1] sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/55 sm:mt-6 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
