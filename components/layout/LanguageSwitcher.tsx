"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type LanguageSwitcherProps = {
  light?: boolean;
  className?: string;
};

export function LanguageSwitcher({ light, className }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: "fr" | "en") => {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  };

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex shrink-0 items-center rounded-sm border p-0.5 text-[10px] uppercase tracking-[0.14em] sm:text-[11px] sm:tracking-[0.18em]",
        light ? "border-brass/50 bg-navy/40 backdrop-blur-sm" : "border-brass/40 bg-cream",
        className
      )}
    >
      <button
        type="button"
        onClick={() => switchTo("fr")}
        className={cn(
          "min-w-[2rem] px-2 py-1.5 transition-all duration-300 sm:min-w-[2.5rem] sm:px-3",
          locale === "fr"
            ? "bg-brass text-navy"
            : light
              ? "text-cream/70 hover:text-cream"
              : "text-navy/45 hover:text-navy"
        )}
        aria-pressed={locale === "fr"}
        aria-label="Français"
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={cn(
          "min-w-[2rem] px-2 py-1.5 transition-all duration-300 sm:min-w-[2.5rem] sm:px-3",
          locale === "en"
            ? "bg-brass text-navy"
            : light
              ? "text-cream/70 hover:text-cream"
              : "text-navy/45 hover:text-navy"
        )}
        aria-pressed={locale === "en"}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
