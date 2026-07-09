"use client";

import {
  getAllProjects,
  getFeaturedProjects,
} from "@/lib/content/projects";
import { SectionHeader } from "@/components/animations/section-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { LinkButton } from "@/components/ui/link-button";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectsEmptyState } from "@/components/projects/projects-empty-state";

interface ProjectsGridProps {
  limit?: number;
  showHeader?: boolean;
  featuredOnly?: boolean;
}

export function ProjectsGrid({
  limit,
  showHeader = true,
  featuredOnly = false,
}: ProjectsGridProps) {
  const source = featuredOnly ? getFeaturedProjects() : getAllProjects();
  const displayProjects = limit ? source.slice(0, limit) : source;
  const totalCount = getAllProjects().length;

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {showHeader && (
          <SectionHeader
            label="Portfolio"
            title="Selected projects"
            description="A curated collection of work spanning web applications, mobile apps, and enterprise solutions — each built with attention to detail and performance."
          />
        )}

        {displayProjects.length === 0 ? (
          <ProjectsEmptyState />
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {displayProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        )}

        {limit && totalCount > limit && (
          <ScrollReveal className="mt-12 text-center">
            <LinkButton href="/projects" variant="outline" size="xl" className="rounded-full">
              View All Projects
            </LinkButton>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
