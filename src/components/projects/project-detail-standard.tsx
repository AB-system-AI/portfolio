"use client";

import type { Project } from "@/lib/content/types";
import {
  getEnterpriseCaseStudySections,
  getRelatedProjects,
} from "@/lib/content/project-utils";
import { EnterpriseCaseStudy, ProjectDetailHero } from "./enterprise-case-study";
import { ProjectTableOfContents } from "./project-table-of-contents";
import { RelatedProjects } from "./related-projects";
import { ProjectNavigation } from "./project-navigation";
import { ProjectBackLink } from "./project-back-link";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { CTASection } from "@/components/sections/cta-section";
import { useLocale } from "@/components/providers/locale-provider";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { locale } = useLocale();
  const related = getRelatedProjects(project, 3, locale);
  const tocItems = getEnterpriseCaseStudySections(project, locale);

  return (
    <>
      <ProjectDetailHero project={project} />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 xl:grid-cols-[220px_minmax(0,1fr)]">
          <ProjectTableOfContents items={tocItems} />

          <div className="space-y-16">
            <EnterpriseCaseStudy project={project} />
            <RelatedProjects projects={related} />
            <ProjectNavigation project={project} />
            <ScrollReveal>
              <ProjectBackLink />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
