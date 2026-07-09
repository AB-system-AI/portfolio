import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = createPageMetadata(
  "Projects",
  "Explore a curated collection of web applications, mobile apps, and enterprise solutions built with modern technologies.",
  "/projects"
);

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title="Projects that define my craft"
        description="From startups to enterprise — each project represents a unique challenge solved with creativity, precision, and modern technology."
      />
      <ProjectsGrid showHeader={false} />
      <CTASection />
    </>
  );
}
