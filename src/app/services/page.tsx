import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { getLocale } from "@/lib/i18n/get-locale";
import { getServicesIntro } from "@/lib/i18n/localized-content";
import { getUi } from "@/lib/i18n/ui";
import { ServicesCards } from "@/components/sections/services-cards";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/layout/page-hero";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const ui = getUi(locale);
  const servicesIntro = getServicesIntro(locale);

  return createPageMetadata(
    ui.metadata.servicesTitle,
    `${servicesIntro} ${ui.services.pageDescriptionSuffix}`,
    "/services"
  );
}

export default async function ServicesPage() {
  const locale = await getLocale();
  const ui = getUi(locale);
  const servicesIntro = getServicesIntro(locale);

  return (
    <>
      <PageHero
        label={ui.services.pageLabel}
        title={ui.services.pageTitle}
        description={`${servicesIntro} ${ui.services.pageDescriptionSuffix}`}
      />
      <ServicesCards showHeader={false} />
      <CTASection />
    </>
  );
}
