import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Gallery } from "@/components/listings/Gallery";
import { SpecsTable } from "@/components/listings/SpecsTable";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { getYachtBySlug, formatPrice, yachts } from "@/data/yachts";

type Props = {
  params: { locale: string; slug: string };
};

export function generateStaticParams() {
  return yachts
    .filter((y) => y.hasDetailPage)
    .flatMap((y) =>
      ["fr", "en"].map((locale) => ({ locale, slug: y.slug }))
    );
}

export async function generateMetadata({ params: { slug } }: Props) {
  const yacht = getYachtBySlug(slug);
  return { title: yacht ? `${yacht.name} · KBC Yachting` : "KBC Yachting" };
}

export default async function YachtDetailPage({
  params: { locale, slug },
}: Props) {
  setRequestLocale(locale);
  const t = await getTranslations("yachts");
  const yacht = getYachtBySlug(slug);

  if (!yacht || !yacht.hasDetailPage) {
    notFound();
  }

  const loc = locale as "fr" | "en";

  return (
    <div className="bg-cream">
      <div className="bg-navy pb-10 pt-32 md:pt-40">
        <Container>
          <Link
            href="/yachts"
            className="text-[11px] uppercase tracking-[0.18em] text-cream/50 transition-colors hover:text-brass-light"
          >
            ← {t("backToList")}
          </Link>
          <h1 className="mt-6 font-display text-4xl text-cream md:text-6xl">
            {yacht.name}
          </h1>
          <p className="mt-4 text-cream/60">
            {yacht.length} · {yacht.location[loc]} ·{" "}
            {formatPrice(yacht.price, locale)}
          </p>
        </Container>
      </div>

      <Container className="py-12 md:py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionReveal>
              <Gallery images={yacht.images} alt={yacht.name} />
            </SectionReveal>
            <SectionReveal className="mt-14">
              <h2 className="font-display text-2xl text-navy">
                {t("description")}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy/65">
                {yacht.description[loc]}
              </p>
            </SectionReveal>
          </div>

          <aside className="lg:col-span-4">
            <SectionReveal>
              <div className="lg:sticky lg:top-28">
                <h2 className="mb-6 font-display text-2xl text-navy">
                  {t("specs")}
                </h2>
                <SpecsTable
                  rows={yacht.specs.map((s) => ({
                    label: s[loc],
                    value: loc === "fr" ? s.valueFr : s.valueEn,
                  }))}
                />
                <div className="mt-10 border border-brass/30 bg-navy p-8 text-cream shadow-royal">
                  <p className="text-[10px] uppercase tracking-royal text-brass">
                    {t("detailCta")}
                  </p>
                  <p className="mt-4 font-display text-3xl font-medium">
                    {formatPrice(yacht.price, locale)}
                  </p>
                  <Link
                    href="/contact?interest=yachts"
                    className="mt-8 inline-flex border border-brass/70 px-7 py-3.5 text-[10px] uppercase tracking-[0.22em] text-brass-light transition-all duration-500 ease-luxury hover:border-brass hover:bg-brass/15"
                  >
                    {t("enquire")}
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </aside>
        </div>

        <SectionReveal className="mt-20 hidden md:block">
          <div className="grid grid-cols-3 gap-4">
            {yacht.images.slice(1, 4).map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </div>
  );
}
