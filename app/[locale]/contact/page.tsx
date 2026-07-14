import Image from "next/image";
import { Suspense } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteImages } from "@/data/images";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: `${t("title")} · KBC Yachting` };
}

export default async function ContactPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
      <section className="bg-cream py-10 sm:py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <SectionReveal className="min-w-0 lg:col-span-6">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </SectionReveal>

            <SectionReveal className="min-w-0 lg:col-span-5 lg:col-start-8" delay={0.1}>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-brass">
                  {t("officeTitle")}
                </p>
                <p className="mt-4 font-display text-xl text-navy sm:text-2xl">
                  {t("officeAddress")}
                </p>
                <p className="mt-2 text-sm text-navy/55 sm:text-base">{t("officeCity")}</p>
              </div>

              <div className="relative mt-8 aspect-[4/3] overflow-hidden bg-navy/10 sm:mt-10">
                <Image
                  src={siteImages.contactMap}
                  alt={t("mapLabel")}
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/70 to-transparent p-4 sm:p-6">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-cream/80 sm:text-[11px]">
                    {t("mapLabel")}
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
