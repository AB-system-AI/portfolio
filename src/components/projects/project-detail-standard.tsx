"use client";

import Link from "next/link";
import type { Project } from "@/lib/content/types";
import {
  formatProjectCategory,
  getProjectCaseStudyContent,
  getProjectReadingTime,
  getProjectTimeline,
  getRelatedProjects,
} from "@/lib/content/project-utils";
import { ProjectGallery } from "./project-gallery";
import { ProjectLinks } from "./project-links";
import { ProjectCaseStudyList } from "./project-case-study-list";
import { ProjectTableOfContents } from "./project-table-of-contents";
import { RelatedProjects } from "./related-projects";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { CTASection } from "@/components/sections/cta-section";
import { useLocale } from "@/components/providers/locale-provider";
import { CheckCircle2, Clock, Hammer, Star } from "lucide-react";

interface ProjectDetailProps {
  project: Project;
}

function CaseStudySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollReveal>
      <section id={id} className="scroll-mt-32">
        <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <div className="mt-5">{children}</div>
      </section>
    </ScrollReveal>
  );
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { locale, ui } = useLocale();
  const caseStudy = getProjectCaseStudyContent(project, locale);
  const related = getRelatedProjects(project, 3, locale);
  const readingTime = getProjectReadingTime(project);
  const timeline = getProjectTimeline(project, locale);
  const isBuilding = project.status === "in-development";
  const isProductionReady = project.status === "production-ready";

  const tocItems = [
    { id: "overview", label: ui.projects.overview },
    { id: "problem", label: ui.projects.problem },
    { id: "solution", label: ui.projects.solution },
    { id: "architecture", label: ui.projects.architecture },
    { id: "technologies", label: ui.projects.technologies },
    { id: "features", label: ui.projects.features },
    { id: "challenges", label: ui.projects.challenges },
    { id: "results", label: ui.projects.results },
    { id: "gallery", label: ui.projects.gallery },
    { id: "links", label: ui.projects.links },
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div className="mesh-gradient pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="rounded-full">
                {formatProjectCategory(project.category, locale)}
              </Badge>
              {timeline && (
                <span className="text-sm text-muted-foreground">{timeline}</span>
              )}
              <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="size-3.5" />
                {readingTime} {ui.featured.minRead}
              </span>
              {isProductionReady && (
                <Badge variant="outline" className="rounded-full border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="me-1 size-3" />
                  {project.showcase?.statusBadge ?? ui.projects.productionReady}
                </Badge>
              )}
              {isBuilding && (
                <Badge variant="outline" className="rounded-full">
                  <Hammer className="me-1 size-3" />
                  {ui.projects.currentlyBuilding}
                </Badge>
              )}
              {project.featured && (
                <Badge variant="outline" className="rounded-full">
                  <Star className="me-1 size-3" />
                  {ui.projects.featuredBadge}
                </Badge>
              )}
            </div>
            <h1 className="font-heading mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {project.shortDescription}
            </p>
            <div id="links" className="scroll-mt-32">
              <ProjectLinks project={project} size="lg" className="mt-8" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-12">
            <div id="gallery" className="scroll-mt-32 overflow-hidden rounded-2xl border border-border/50 p-4 sm:p-6">
              <ProjectGallery project={project} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 xl:grid-cols-[220px_minmax(0,1fr)]">
          <ProjectTableOfContents items={tocItems} />

          <div className="space-y-16">
            <CaseStudySection id="overview" title={ui.projects.overview}>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                {project.fullDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection id="problem" title={ui.projects.problem}>
              <p className="text-base leading-relaxed text-muted-foreground">
                {caseStudy.problem}
              </p>
            </CaseStudySection>

            <CaseStudySection id="solution" title={ui.projects.solution}>
              <ProjectCaseStudyList title="" items={project.solutions} />
            </CaseStudySection>

            <CaseStudySection id="architecture" title={ui.projects.architecture}>
              <p className="text-base leading-relaxed text-muted-foreground">
                {caseStudy.architecture}
              </p>
            </CaseStudySection>

            <CaseStudySection id="features" title={ui.projects.features}>
              <ProjectCaseStudyList title="" items={project.features} />
            </CaseStudySection>

            <CaseStudySection id="technologies" title={ui.projects.technologies}>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="rounded-full text-xs font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection id="challenges" title={ui.projects.challenges}>
              <ProjectCaseStudyList title="" items={project.challenges} />
            </CaseStudySection>

            <CaseStudySection id="results" title={ui.projects.results}>
              <ProjectCaseStudyList title="" items={project.results} />
            </CaseStudySection>

            <RelatedProjects projects={related} />

            <ScrollReveal>
              <Link
                href="/projects"
                className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {ui.projects.backToAll}
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
