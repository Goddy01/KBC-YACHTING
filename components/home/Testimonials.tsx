"use client";

import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Ornament } from "@/components/ui/Ornament";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const t = useTranslations("home");
  const locale = useLocale() as "fr" | "en";

  return (
    <section className="bg-cream py-16 sm:py-28 md:py-36">
      <Container>
        <SectionReveal>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-royal text-brass">
              {t("testimonialsEyebrow")}
            </p>
            <Ornament className="mt-6 max-w-[6rem]" />
            <h2 className="mt-6 font-display text-3xl font-medium text-navy sm:text-4xl md:text-5xl lg:text-6xl">
              {t("testimonialsTitle")}
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-12 sm:mt-20 sm:gap-16 md:grid-cols-3 md:gap-12 lg:gap-16">
          {testimonials.map((item, i) => (
            <SectionReveal key={item.id} delay={i * 0.1}>
              <blockquote className="relative text-center md:text-left">
                <span
                  className="font-display text-5xl leading-none text-brass/35 sm:text-6xl"
                  aria-hidden
                >
                  “
                </span>
                <p className="-mt-5 font-display text-lg font-normal leading-relaxed text-navy sm:-mt-6 sm:text-xl md:text-2xl">
                  {item.quote[locale]}
                </p>
                <div className="mx-auto mt-8 h-px w-10 bg-brass/50 md:mx-0" />
                <footer className="mt-6">
                  <p className="font-display text-lg text-navy">{item.author}</p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-navy/40">
                    {item.role[locale]}
                  </p>
                </footer>
              </blockquote>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
