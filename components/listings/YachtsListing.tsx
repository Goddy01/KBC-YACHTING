"use client";

import { useMemo, useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { FilterTabs } from "@/components/listings/FilterTabs";
import { ListingCard } from "@/components/listings/ListingCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { yachts, formatPrice } from "@/data/yachts";

export function YachtsListing() {
  const t = useTranslations("yachts");
  const tCommon = useTranslations("common");
  const locale = useLocale() as "fr" | "en";
  const searchParams = useSearchParams();
  const initial = searchParams.get("type") === "rent" ? "rent" : "all";
  const [filter, setFilter] = useState(initial);

  useEffect(() => {
    setFilter(searchParams.get("type") === "rent" ? "rent" : "all");
  }, [searchParams]);

  const options = [
    { value: "all", label: t("filterAll") },
    { value: "sale", label: t("filterSale") },
    { value: "rent", label: t("filterRent") },
  ];

  const filtered = useMemo(() => {
    if (filter === "all") return yachts;
    return yachts.filter((y) => y.listingType === filter);
  }, [filter]);

  return (
    <div>
      <FilterTabs options={options} value={filter} onChange={setFilter} />
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((yacht, i) => (
          <SectionReveal key={yacht.slug} delay={(i % 3) * 0.06}>
            <ListingCard
              href={
                yacht.hasDetailPage
                  ? `/yachts/${yacht.slug}`
                  : `/contact?interest=${yacht.listingType === "rent" ? "rent" : "yachts"}`
              }
              image={yacht.images[0]}
              title={yacht.name}
              meta={`${yacht.length} · ${yacht.location[locale]}`}
              price={
                formatPrice(yacht.price, locale) +
                (yacht.listingType === "rent"
                  ? yacht.priceLabel === "week"
                    ? ` ${t("perWeek")}`
                    : ` ${t("perDay")}`
                  : "")
              }
              badge={
                yacht.listingType === "rent" ? tCommon("rent") : tCommon("sale")
              }
              cta={t("viewDetails")}
            />
          </SectionReveal>
        ))}
      </div>
    </div>
  );
}
