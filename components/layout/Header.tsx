"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/yachts", label: t("yachts") },
    { href: "/villas", label: t("villas") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-luxury",
        scrolled || open
          ? "border-b border-brass/20 bg-navy/92 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      {/* Thin gold crown line when scrolled */}
      <div
        className={cn(
          "h-px w-full bg-gradient-to-r from-transparent via-brass/60 to-transparent transition-opacity duration-700",
          scrolled || open ? "opacity-100" : "opacity-0"
        )}
      />

      <Container className="flex h-20 items-center justify-between md:h-24">
        <Link href="/" className="group relative z-10 flex items-baseline gap-2.5">
          <span className="font-display text-2xl font-medium tracking-[0.14em] text-cream md:text-[1.65rem]">
            KBC
          </span>
          <span className="font-sans text-[9px] uppercase tracking-[0.32em] text-brass-light/80 transition-colors duration-500 group-hover:text-brass-light md:text-[10px]">
            Yachting
          </span>
        </Link>

        <nav className="hidden items-center gap-11 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-[10px] uppercase tracking-[0.22em] text-cream/75 transition-colors duration-500 hover:text-cream"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-brass transition-all duration-500 ease-luxury group-hover:w-full" />
            </Link>
          ))}
          <div className="ml-2 h-3 w-px bg-brass/30" />
          <LanguageSwitcher light />
        </nav>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={cn(
                "h-px w-full bg-cream transition-transform duration-500 ease-luxury",
                open && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-brass transition-opacity duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-cream transition-transform duration-500 ease-luxury",
                open && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </div>
        </button>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-brass/15 bg-navy transition-all duration-700 ease-luxury lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container className="flex flex-col gap-7 py-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-medium text-cream"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher light />
        </Container>
      </div>
    </header>
  );
}
