"use client";

import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Ornament } from "@/components/ui/Ornament";
import { ListingCard } from "@/components/listings/ListingCard";
import { yachts, formatPrice } from "@/data/yachts";
import { villas } from "@/data/villas";

export function FeaturedListings() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");
  const locale = useLocale() as "fr" | "en";

  const featuredYachts = yachts.filter((y) => y.featured).slice(0, 4);
  const featuredVillas = villas.filter((v) => v.featured).slice(0, 2);

  const items = [
    ...featuredYachts.map((y) => ({
      key: y.slug,
      href: y.hasDetailPage ? `/yachts/${y.slug}` : "/contact?interest=yachts",
      image: y.images[0],
      title: y.name,
      meta: `${y.length} · ${y.location[locale]}`,
      price:
        formatPrice(y.price, locale) +
        (y.listingType === "rent"
          ? y.priceLabel === "week"
            ? locale === "fr"
              ? " / sem."
              : " / week"
            : locale === "fr"
              ? " / j."
              : " / day"
          : ""),
      badge: y.listingType === "rent" ? tCommon("rent") : tCommon("sale"),
    })),
    ...featuredVillas.map((v) => ({
      key: v.slug,
      href: "/contact?interest=villas",
      image: v.images[0],
      title: v.name[locale],
      meta: `${v.bedrooms} · ${v.surface} m² · ${v.location[locale]}`,
      price:
        formatPrice(v.price, locale) +
        (v.listingType === "rent"
          ? v.priceLabel === "week"
            ? locale === "fr"
              ? " / sem."
              : " / week"
            : locale === "fr"
              ? " / mois"
              : " / month"
          : ""),
      badge: v.listingType === "rent" ? tCommon("rent") : tCommon("sale"),
    })),
  ].slice(0, 6);

  return (
    <section className="relative bg-cream-muted/50 py-16 sm:py-28 md:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent" />
      <Container>
        <SectionReveal>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-royal text-brass">
              {t("featuredEyebrow")}
            </p>
            <Ornament className="mt-6 max-w-[6rem]" />
            <h2 className="mt-6 font-display text-3xl font-medium text-navy sm:text-4xl md:text-5xl lg:text-6xl">
              {t("featuredTitle")}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base text-navy/55">
              {t("featuredSubtitle")}
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {items.map((item, i) => (
            <SectionReveal key={item.key} delay={i * 0.08}>
              <ListingCard
                href={item.href}
                image={item.image}
                title={item.title}
                meta={item.meta}
                price={item.price}
                badge={item.badge}
                cta={t("viewDetails")}
              />
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
