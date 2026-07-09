"use client";

import {
  clientProjectsDisclaimer,
  clientProjectsFootnote,
} from "@/lib/content/projects-additional";
import { getClientProjects } from "@/lib/content/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionHeader } from "@/components/animations/section-header";

export function ClientProjectsSection() {
  const clientProjects = getClientProjects();

  if (clientProjects.length === 0) return null;

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          label="Client Work"
          title="Professional client projects"
          description="Projects developed for real businesses while working professionally. Presented respectfully without confidential client data."
        />

        <ScrollReveal>
          <div className="glass-card mb-8 rounded-2xl border border-border/60 px-6 py-4 text-sm leading-relaxed text-muted-foreground">
            <p>{clientProjectsDisclaimer}</p>
            <p className="mt-2 font-medium text-foreground">{clientProjectsFootnote}</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {clientProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
