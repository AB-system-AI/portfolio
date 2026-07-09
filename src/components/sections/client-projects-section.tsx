"use client";

import { getClientProjects } from "@/lib/i18n/localized-content";
import { ProjectCard } from "@/components/projects/project-card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionHeader } from "@/components/animations/section-header";
import { useLocale } from "@/components/providers/locale-provider";
import { useMemo } from "react";

export function ClientProjectsSection() {
  const { locale, ui, clientProjectsDisclaimer, clientProjectsFootnote } = useLocale();

  const clientProjects = useMemo(() => getClientProjects(locale), [locale]);

  if (clientProjects.length === 0) return null;

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          label={ui.projects.clientWork}
          title={ui.projects.clientTitle}
          description={ui.projects.clientDescription}
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
