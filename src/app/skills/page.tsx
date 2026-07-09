import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { getLocale } from "@/lib/i18n/get-locale";
import { getUi } from "@/lib/i18n/ui";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/layout/page-hero";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const ui = getUi(locale);

  return createPageMetadata(
    ui.metadata.skillsTitle,
    ui.skills.pageDescription,
    "/skills"
  );
}

export default async function SkillsPage() {
  const locale = await getLocale();
  const ui = getUi(locale);

  return (
    <>
      <PageHero
        label={ui.skills.pageLabel}
        title={ui.skills.pageTitle}
        description={ui.skills.pageDescription}
      />
      <SkillsGrid showHeader={false} />
      <CTASection />
    </>
  );
}
