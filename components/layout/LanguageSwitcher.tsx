"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type LanguageSwitcherProps = {
  light?: boolean;
};

export function LanguageSwitcher({ light }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: "fr" | "en") => {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]",
        light ? "text-cream/70" : "text-navy/50"
      )}
    >
      <button
        type="button"
        onClick={() => switchTo("fr")}
        className={cn(
          "transition-colors duration-300",
          locale === "fr"
            ? light
              ? "text-brass-light"
              : "text-brass"
            : light
              ? "hover:text-cream"
              : "hover:text-navy"
        )}
        aria-pressed={locale === "fr"}
      >
        FR
      </button>
      <span className="opacity-40">/</span>
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={cn(
          "transition-colors duration-300",
          locale === "en"
            ? light
              ? "text-brass-light"
              : "text-brass"
            : light
              ? "hover:text-cream"
              : "hover:text-navy"
        )}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}
