"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Ornament } from "@/components/ui/Ornament";
import { siteImages } from "@/data/images";

export function CategoryTiles() {
  const t = useTranslations("home");

  const categories = [
    {
      href: "/yachts",
      image: siteImages.categoryYachts,
      title: t("catYachts"),
      desc: t("catYachtsDesc"),
    },
    {
      href: "/yachts?type=rent",
      image: siteImages.categoryBoats,
      title: t("catBoats"),
      desc: t("catBoatsDesc"),
    },
    {
      href: "/villas",
      image: siteImages.categoryVillas,
      title: t("catVillas"),
      desc: t("catVillasDesc"),
    },
  ];

  return (
    <section className="bg-cream py-16 sm:py-28 md:py-36">
      <Container>
        <SectionReveal>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-royal text-brass">
              {t("categoriesEyebrow")}
            </p>
            <Ornament className="mt-6 max-w-[6rem]" />
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-medium leading-tight text-navy sm:text-4xl md:text-5xl lg:text-6xl">
              {t("categoriesTitle")}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-navy/55 sm:mt-6 sm:text-base">
              {t("categoriesSubtitle")}
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-3 sm:mt-16 sm:gap-4 md:grid-cols-3 md:gap-5">
          {categories.map((cat, i) => (
            <SectionReveal key={cat.href} delay={i * 0.1}>
              <Link
                href={cat.href}
                className="group relative block overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-[3/4.2]">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="img-grade object-cover transition-transform duration-[1.1s] ease-luxury group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-navy/10" />
                  <div className="absolute inset-3 border border-brass/0 transition-all duration-700 ease-luxury group-hover:border-brass/40 sm:inset-4 md:inset-5" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-9">
                  <h3 className="font-display text-2xl font-medium text-cream sm:text-3xl md:text-4xl">
                    {cat.title}
                  </h3>
                  <p className="mt-1.5 text-sm tracking-wide text-cream/65 sm:mt-2">
                    {cat.desc}
                  </p>
                  <span className="mt-4 inline-block h-px w-10 bg-brass transition-all duration-700 ease-luxury group-hover:w-20 sm:mt-5" />
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
