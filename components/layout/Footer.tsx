"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  };

  return (
    <footer className="relative border-t border-brass/15 bg-navy text-cream">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent" />

      <Container className="py-24 md:py-32">
        <div className="mb-16 text-center">
          <p className="font-display text-4xl font-medium tracking-[0.12em] md:text-5xl">
            KBC
          </p>
          <p className="mt-2 text-[10px] uppercase tracking-royal text-brass-light">
            Yachting
          </p>
          <Ornament light className="mt-6 max-w-[5rem]" />
          <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-cream/50">
            {t("tagline")}
          </p>
        </div>

        <div className="grid gap-14 border-t border-brass/15 pt-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="grid grid-cols-2 gap-10 sm:col-span-2 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-royal text-brass">
                {t("explore")}
              </p>
              <ul className="space-y-3.5 text-sm text-cream/60">
                <li>
                  <Link
                    href="/yachts"
                    className="transition-colors hover:text-brass-light"
                  >
                    {nav("yachts")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/villas"
                    className="transition-colors hover:text-brass-light"
                  >
                    {nav("villas")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-royal text-brass">
                {t("company")}
              </p>
              <ul className="space-y-3.5 text-sm text-cream/60">
                <li>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-brass-light"
                  >
                    {nav("about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-brass-light"
                  >
                    {nav("contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-royal text-brass">
                {t("legal")}
              </p>
              <ul className="space-y-3.5 text-sm text-cream/60">
                <li>
                  <span className="cursor-default">{t("privacy")}</span>
                </li>
                <li>
                  <span className="cursor-default">{t("terms")}</span>
                </li>
              </ul>
              <div className="mt-8 flex gap-6 text-[10px] uppercase tracking-[0.2em] text-cream/40">
                <a href="#" className="transition-colors hover:text-brass-light">
                  {t("socialInstagram")}
                </a>
                <a href="#" className="transition-colors hover:text-brass-light">
                  {t("socialLinkedin")}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <p className="mb-5 text-[10px] uppercase tracking-royal text-brass">
              {t("newsletter")}
            </p>
            {done ? (
              <p className="font-display text-xl italic text-brass-light">
                Merci · Thank you
              </p>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("newsletterPlaceholder")}
                  className="border-b border-brass/25 bg-transparent py-3.5 text-sm text-cream placeholder:text-cream/30 outline-none transition-colors focus:border-brass"
                  required
                />
                <button
                  type="submit"
                  className="self-start pt-3 text-[10px] uppercase tracking-[0.22em] text-cream/70 transition-colors hover:text-brass-light"
                >
                  {t("newsletterSubmit")}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-brass/15 pt-8 text-[11px] tracking-wide text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} KBC Yachting. {t("rights")}
          </p>
          <p className="uppercase tracking-[0.18em]">Port-Grimaud · France</p>
        </div>
      </Container>
    </footer>
  );
}
