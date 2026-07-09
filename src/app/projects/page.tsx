import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { getLocale } from "@/lib/i18n/get-locale";
import { getUi } from "@/lib/i18n/ui";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { ClientProjectsSection } from "@/components/sections/client-projects-section";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/layout/page-hero";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const ui = getUi(locale);

  return createPageMetadata(
    ui.metadata.projectsTitle,
    ui.projects.pageDescription,
    "/projects"
  );
}

export default async function ProjectsPage() {
  const locale = await getLocale();
  const ui = getUi(locale);

  return (
    <>
      <PageHero
        label={ui.projects.pageLabel}
        title={ui.projects.pageTitle}
        description={ui.projects.pageDescription}
      />
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ProjectsExplorer />
        </div>
      </section>
      <ClientProjectsSection />
      <CTASection />
    </>
  );
}
