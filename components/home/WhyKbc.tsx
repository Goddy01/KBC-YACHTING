"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Ornament } from "@/components/ui/Ornament";

export function WhyKbc() {
  const t = useTranslations("home");

  const pillars = [
    { title: t("pillar1Title"), text: t("pillar1Text"), num: "I" },
    { title: t("pillar2Title"), text: t("pillar2Text"), num: "II" },
    { title: t("pillar3Title"), text: t("pillar3Text"), num: "III" },
    { title: t("pillar4Title"), text: t("pillar4Text"), num: "IV" },
  ];

  return (
    <section className="relative overflow-hidden bg-navy py-28 text-cream md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,108,0.07)_0%,transparent_50%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent" />

      <Container className="relative">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-royal text-brass">
              {t("whyEyebrow")}
            </p>
            <Ornament light className="mt-6 ml-0 max-w-[6rem]" />
            <h2 className="mt-6 font-display text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
              {t("whyTitle")}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/55">
              {t("whySubtitle")}
            </p>
          </div>
        </SectionReveal>

        <div className="mt-20 grid gap-0 md:grid-cols-2">
          {pillars.map((p, i) => (
            <SectionReveal key={p.num} delay={i * 0.08}>
              <div
                className={`border-t border-brass/20 py-10 md:px-8 md:py-12 ${
                  i % 2 === 0 ? "md:border-r md:border-brass/20 md:pl-0" : ""
                } ${i < 2 ? "md:border-b-0" : ""}`}
              >
                <span className="font-display text-2xl text-brass/70">
                  {p.num}
                </span>
                <h3 className="mt-5 font-display text-2xl font-medium md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/50">
                  {p.text}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
