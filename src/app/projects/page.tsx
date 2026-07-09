import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { ClientProjectsSection } from "@/components/sections/client-projects-section";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = createPageMetadata(
  "Projects",
  "Personal portfolio work and business system projects — web applications, management platforms, and production-ready software built with modern technologies.",
  "/projects"
);

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title="Projects that define my craft"
        description="A selection of personal work and business system experience — built with modern technologies, clean architecture, and a focus on real operational value."
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
