import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { getAbout, getSiteConfig } from "@/lib/i18n/localized-content";
import { getLocale } from "@/lib/i18n/get-locale";
import { getUi } from "@/lib/i18n/ui";
import { AboutContent } from "@/components/sections/about-content";
import { AboutTimeline } from "@/components/sections/about-timeline";
import { CertificatesPlaceholder } from "@/components/sections/certificates-placeholder";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/layout/page-hero";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const about = getAbout(locale);
  const ui = getUi(locale);

  return createPageMetadata(ui.metadata.aboutTitle, about.summary, "/about");
}

export default async function AboutPage() {
  const locale = await getLocale();
  const about = getAbout(locale);
  const siteConfig = getSiteConfig(locale);
  const ui = getUi(locale);

  return (
    <>
      <PageHero
        label={ui.about.pageLabel}
        title={about.heroTitle}
        description={about.summary}
      >
        <ScrollReveal delay={0.2}>
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border/50 pt-10 sm:grid-cols-4 sm:gap-8">
            {about.languages.map((language) => (
              <div key={language.name}>
                <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {language.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {language.level}
                </p>
              </div>
            ))}
            <div>
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                {siteConfig.education.expectedGraduation}
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {ui.about.expectedGraduation}
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                {ui.about.remote}
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {ui.about.freelanceRemote}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </PageHero>
      <AboutContent />
      <AboutTimeline />
      <CertificatesPlaceholder />
      <CTASection />
    </>
  );
}
