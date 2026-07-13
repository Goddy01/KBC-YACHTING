import { Suspense } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { YachtsListing } from "@/components/listings/YachtsListing";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "yachts" });
  return { title: `${t("title")} · KBC Yachting` };
}

export default async function YachtsPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations("yachts");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
      <section className="bg-cream py-16 md:py-24">
        <Container>
          <Suspense fallback={null}>
            <YachtsListing />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
