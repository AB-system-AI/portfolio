"use client";

import type { Project } from "@/lib/content/types";
import {
  formatProjectCategory,
  getProjectCaseStudyContent,
  getProjectReadingTime,
  getProjectTimeline,
} from "@/lib/content/project-utils";
import { ProjectGallery } from "./project-gallery";
import { ProjectLinks } from "./project-links";
import { ProjectCaseStudyList } from "./project-case-study-list";
import { CaseStudySection } from "./case-study-section";
import { Badge } from "@/components/ui/badge";
import { PremiumCard } from "@/components/animations/premium-card";
import { ProjectBackButton } from "./project-back-link";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { CheckCircle2, Clock, Hammer, Star } from "lucide-react";

interface EnterpriseCaseStudyProps {
  project: Project;
}

export function EnterpriseCaseStudy({ project }: EnterpriseCaseStudyProps) {
  const { locale, ui } = useLocale();
  const caseStudy = getProjectCaseStudyContent(project, locale);
  const timeline = getProjectTimeline(project, locale);
  const impactItems = project.businessValue ?? project.results;
  const implementation =
    project.developmentProcess ?? caseStudy.developmentProcess;

  return (
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

      {project.research && project.research.length > 0 && (
        <CaseStudySection id="research" title={ui.projects.research}>
          <ProjectCaseStudyList title="" items={project.research} />
        </CaseStudySection>
      )}

      <CaseStudySection id="architecture" title={ui.projects.architecture}>
        <p className="text-base leading-relaxed text-muted-foreground">
          {caseStudy.architecture}
        </p>
      </CaseStudySection>

      {implementation.length > 0 && (
        <CaseStudySection id="implementation" title={ui.projects.implementation}>
          <ProjectCaseStudyList title="" items={implementation} />
        </CaseStudySection>
      )}

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

      <CaseStudySection id="solutions" title={ui.projects.solution}>
        <ProjectCaseStudyList title="" items={project.solutions} />
      </CaseStudySection>

      {impactItems.length > 0 && (
        <CaseStudySection id="business-impact" title={ui.projects.businessImpact}>
          <ProjectCaseStudyList title="" items={impactItems} />
        </CaseStudySection>
      )}

      {project.lessonsLearned && project.lessonsLearned.length > 0 && (
        <CaseStudySection id="lessons-learned" title={ui.projects.lessonsLearned}>
          <ProjectCaseStudyList title="" items={project.lessonsLearned} />
        </CaseStudySection>
      )}

      {project.futureImprovements && project.futureImprovements.length > 0 && (
        <CaseStudySection
          id="future-improvements"
          title={ui.projects.futureImprovements}
        >
          <ProjectCaseStudyList title="" items={project.futureImprovements} />
        </CaseStudySection>
      )}

      {timeline && (
        <CaseStudySection id="timeline" title={ui.projects.timeline}>
          <PremiumCard className="p-6" enableTilt={false}>
            <p className="text-lg font-medium">{timeline}</p>
            {project.timeline && project.timeline !== timeline && (
              <p className="mt-2 text-sm text-muted-foreground">{project.timeline}</p>
            )}
          </PremiumCard>
        </CaseStudySection>
      )}
    </div>
  );
}

interface ProjectDetailHeroProps {
  project: Project;
  showGallery?: boolean;
}

export function ProjectDetailHero({
  project,
  showGallery = true,
}: ProjectDetailHeroProps) {
  const { locale, ui } = useLocale();
  const readingTime = getProjectReadingTime(project);
  const timeline = getProjectTimeline(project, locale);
  const isBuilding = project.status === "in-development";
  const isProductionReady = project.status === "production-ready";

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div
        className="mesh-gradient pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <div
        className="noise-texture pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6">
          <ProjectBackButton />
        </div>
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
              <Badge
                variant="outline"
                className="rounded-full border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
              >
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

        {showGallery && (
          <ScrollReveal delay={0.1} className="mt-12">
            <PremiumCard className="premium-card-border p-4 sm:p-6" enableTilt={false}>
              <div id="gallery" className="scroll-mt-32">
                <ProjectGallery project={project} />
              </div>
            </PremiumCard>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
