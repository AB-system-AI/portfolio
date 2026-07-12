"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/content/types";
import { getAdjacentProjects } from "@/lib/content/project-utils";
import { useLocale } from "@/components/providers/locale-provider";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { PremiumCard } from "@/components/animations/premium-card";

interface ProjectNavigationProps {
  project: Project;
}

export function ProjectNavigation({ project }: ProjectNavigationProps) {
  const { locale, ui } = useLocale();
  const { previous, next } = getAdjacentProjects(project, locale);

  if (!previous && !next) return null;

  return (
    <ScrollReveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {previous ? (
          <PremiumCard className="group p-5">
            <Link href={`/projects/${previous.slug}`} className="block">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {ui.projects.previousProject}
              </span>
              <p className="mt-2 flex items-center gap-2 font-medium transition-colors group-hover:text-muted-foreground">
                <ArrowLeft className="size-4 rtl:rotate-180" />
                <span className="line-clamp-1">{previous.title}</span>
              </p>
            </Link>
          </PremiumCard>
        ) : (
          <div />
        )}
        {next ? (
          <PremiumCard className="group p-5 sm:text-end">
            <Link href={`/projects/${next.slug}`} className="block">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {ui.projects.nextProject}
              </span>
              <p className="mt-2 flex items-center justify-end gap-2 font-medium transition-colors group-hover:text-muted-foreground">
                <span className="line-clamp-1">{next.title}</span>
                <ArrowRight className="size-4 rtl:rotate-180" />
              </p>
            </Link>
          </PremiumCard>
        ) : null}
      </div>
    </ScrollReveal>
  );
}
