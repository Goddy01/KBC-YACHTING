import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { team } from "@/data/team";
import { siteImages } from "@/data/images";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: `${t("title")} · KBC Yachting` };
}

export default async function AboutPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const loc = locale as "fr" | "en";

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <SectionReveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={siteImages.about}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="font-display text-3xl text-navy md:text-4xl">
                {t("storyTitle")}
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-navy/65">
                <p>{t("storyP1")}</p>
                <p>{t("storyP2")}</p>
                <p>{t("storyP3")}</p>
              </div>
            </SectionReveal>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 text-cream md:py-28">
        <Container>
          <SectionReveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-brass">
              {t("presenceTitle")}
            </p>
            <p className="mt-6 max-w-2xl font-display text-3xl leading-snug md:text-4xl">
              {t("presenceText")}
            </p>
          </SectionReveal>
        </Container>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <SectionReveal>
            <h2 className="font-display text-3xl text-navy md:text-4xl">
              {t("teamTitle")}
            </h2>
            <p className="mt-4 text-navy/55">{t("teamSubtitle")}</p>
          </SectionReveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {team.map((member, i) => (
              <SectionReveal key={member.id} delay={i * 0.08}>
                <div className="relative aspect-[3/4] overflow-hidden bg-navy/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale-[20%]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl text-navy">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-navy/45">
                  {member.role[loc]}
                </p>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
