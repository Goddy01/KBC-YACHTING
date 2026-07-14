import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ListingCard } from "@/components/listings/ListingCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { villas } from "@/data/villas";
import { formatPrice } from "@/data/yachts";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "villas" });
  return { title: `${t("title")} · KBC Yachting` };
}

export default async function VillasPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations("villas");
  const loc = locale as "fr" | "en";

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
      <section className="bg-cream py-10 sm:py-16 md:py-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            {villas.map((villa, i) => (
              <SectionReveal key={villa.slug} delay={(i % 3) * 0.06}>
                <ListingCard
                  href="/contact?interest=villas"
                  image={villa.images[0]}
                  title={villa.name[loc]}
                  meta={`${villa.bedrooms} ${t("bedrooms").toLowerCase()} · ${villa.surface} m² · ${villa.location[loc]}`}
                  price={
                    formatPrice(villa.price, locale) +
                    (villa.listingType === "rent"
                      ? villa.priceLabel === "week"
                        ? locale === "fr"
                          ? " / sem."
                          : " / week"
                        : locale === "fr"
                          ? " / mois"
                          : " / month"
                      : "")
                  }
                  badge={
                    villa.listingType === "rent" ? t("forRent") : t("forSale")
                  }
                  cta={t("viewDetails")}
                />
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
