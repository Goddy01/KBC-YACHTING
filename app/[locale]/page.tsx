import { setRequestLocale, getTranslations } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { FeaturedListings } from "@/components/home/FeaturedListings";
import { WhyKbc } from "@/components/home/WhyKbc";
import { Testimonials } from "@/components/home/Testimonials";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <CategoryTiles />
      <FeaturedListings />
      <WhyKbc />
      <Testimonials />
    </>
  );
}
