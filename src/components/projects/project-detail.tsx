import Link from "next/link";
import type { Project } from "@/lib/content/types";
import { formatProjectCategory } from "@/lib/content/project-utils";
import { ProjectGallery } from "./project-gallery";
import { ProjectVisual } from "./project-visual";
import { ProjectLinks } from "./project-links";
import { ProjectCaseStudyList } from "./project-case-study-list";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { CTASection } from "@/components/sections/cta-section";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="rounded-full">
                {formatProjectCategory(project.category)}
              </Badge>
              <span className="text-sm text-muted-foreground">{project.year}</span>
              {project.client && (
                <span className="text-sm text-muted-foreground">
                  · {project.client}
                </span>
              )}
            </div>
            <h1 className="font-heading mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {project.shortDescription}
            </p>
            <ProjectLinks project={project} size="lg" className="mt-8" />
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-12">
            {project.images.length > 0 ? (
              <ProjectGallery images={project.images} title={project.title} />
            ) : (
              <div className="overflow-hidden rounded-2xl border border-border/50">
                <ProjectVisual project={project} priority />
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-3">
            <ScrollReveal className="lg:col-span-2">
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-semibold tracking-tight">
                  Overview
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  {project.fullDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <aside className="glass-card rounded-2xl p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider">
                  Technologies
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
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
                <div className="mt-8">
                  <ProjectLinks project={project} />
                </div>
              </aside>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <ScrollReveal>
              <ProjectCaseStudyList title="Key features" items={project.features} />
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <ProjectCaseStudyList title="Challenges" items={project.challenges} />
            </ScrollReveal>
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <ScrollReveal>
              <ProjectCaseStudyList title="Solution" items={project.solutions} />
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <ProjectCaseStudyList
                title="Business impact"
                items={project.results}
              />
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-16">
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              ← Back to all projects
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
