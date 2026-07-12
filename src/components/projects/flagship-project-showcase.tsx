"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Monitor, Smartphone, Tablet } from "lucide-react";
import type { Project } from "@/lib/content/types";
import { ProjectGallery } from "./project-gallery";
import { ProjectLinks } from "./project-links";
import { RelatedProjects } from "./related-projects";
import { ProjectNavigation } from "./project-navigation";
import { ProjectBackButton } from "./project-back-link";
import { ProjectTableOfContents } from "./project-table-of-contents";
import { StatsCounter } from "@/components/sections/stats-counter";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { CTASection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import { PremiumCard } from "@/components/animations/premium-card";
import {
  formatProjectCategory,
  getProjectCaseStudyContent,
  getRelatedProjects,
} from "@/lib/content/project-utils";
import { useLocale } from "@/components/providers/locale-provider";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EASE_PREMIUM, springSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FlagshipProjectShowcaseProps {
  project: Project;
}

function DeviceMockups({
  labels,
  accent,
}: {
  labels: { desktop: string; tablet: string; mobile: string };
  accent: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto mt-10 max-w-4xl">
      <div className="mesh-gradient pointer-events-none absolute inset-0 rounded-3xl opacity-50" aria-hidden="true" />
      <div className="relative flex items-end justify-center gap-4 px-4 pb-6 pt-10 sm:gap-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.1 }}
          className="hidden w-[58%] max-w-xl sm:block"
        >
          <div className="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
              <span className="size-2 rounded-full bg-red-400/80" />
              <span className="size-2 rounded-full bg-amber-400/80" />
              <span className="size-2 rounded-full bg-emerald-400/80" />
            </div>
            <div className="flex aspect-[16/10] flex-col items-center justify-center p-6 text-center">
              <Monitor className="size-8 opacity-40" style={{ color: accent }} />
              <p className="mt-3 text-xs font-medium text-white/70">{labels.desktop}</p>
              <p className="mt-1 text-[10px] text-white/40">Dashboard preview</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE_PREMIUM, delay: 0.2 }}
          className="w-[28%] max-w-[140px]"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black shadow-xl">
            <div className="flex aspect-[3/4] flex-col items-center justify-center p-3 text-center">
              <Tablet className="size-6 opacity-40" style={{ color: accent }} />
              <p className="mt-2 text-[9px] font-medium text-white/60">{labels.tablet}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.3 }}
          className="w-[18%] max-w-[88px]"
        >
          <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black shadow-xl">
            <div className="mx-auto mt-2 h-1 w-8 rounded-full bg-white/20" />
            <div className="flex aspect-[9/16] flex-col items-center justify-center p-2 text-center">
              <Smartphone className="size-5 opacity-40" style={{ color: accent }} />
              <p className="mt-2 text-[8px] font-medium text-white/60">{labels.mobile}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SectionBlock({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ScrollReveal>
      <section id={id} className={cn("scroll-mt-32", className)}>
        <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </section>
    </ScrollReveal>
  );
}

export function FlagshipProjectShowcase({ project }: FlagshipProjectShowcaseProps) {
  const { locale, ui } = useLocale();
  const showcase = project.showcase!;
  const caseStudy = getProjectCaseStudyContent(project, locale);
  const related = getRelatedProjects(project, 3, locale);
  const accent = project.accent ?? "#fafafa";

  const tocItems = [
    { id: "highlights", label: showcase.labels.highlights },
    { id: "statistics", label: showcase.labels.statistics },
    { id: "product-lines", label: showcase.labels.productLines },
    { id: "tech-stack", label: showcase.labels.techStack },
    { id: "features", label: showcase.labels.features },
    { id: "timeline", label: showcase.labels.timeline },
    { id: "gallery", label: showcase.labels.gallery },
    { id: "architecture", label: ui.projects.architecture },
    { id: "problem", label: ui.projects.problem },
    { id: "links", label: ui.projects.links },
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-90",
            project.gradient ?? "from-zinc-950 via-neutral-900 to-black"
          )}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.05),transparent_40%)]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6">
            <ProjectBackButton className="border-white/20 bg-white/10 text-white/80 hover:text-white" />
          </div>
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-full border-white/20 bg-white/10 text-white backdrop-blur-sm">
                {showcase.labels.flagship}
              </Badge>
              <Badge className="rounded-full border-emerald-400/30 bg-emerald-500/15 text-emerald-100">
                <CheckCircle2 className="me-1 size-3" />
                {showcase.statusBadge}
              </Badge>
              <Badge variant="outline" className="rounded-full border-white/20 text-white/80">
                {formatProjectCategory(project.category, locale)}
              </Badge>
              {project.timeline && (
                <span className="text-sm text-white/60">{project.timeline}</span>
              )}
            </div>

            <h1 className="font-heading mt-6 max-w-5xl text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
              {project.shortDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.slice(0, 8).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="rounded-full border-white/10 bg-white/10 text-xs font-normal text-white backdrop-blur-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-8" id="links">
              <ProjectLinks project={project} size="lg" />
            </div>
          </ScrollReveal>

          <DeviceMockups
            accent={accent}
            labels={{
              desktop: showcase.labels.mockupDesktop,
              tablet: showcase.labels.mockupTablet,
              mobile: showcase.labels.mockupMobile,
            }}
          />
        </div>
      </section>

      <section className="border-b border-border/50 bg-muted/20 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <p className="mx-auto max-w-4xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.fullDescription.split("\n\n")[0]}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 xl:grid-cols-[220px_minmax(0,1fr)]">
          <ProjectTableOfContents items={tocItems} />

          <div>
          <SectionBlock id="highlights" title={showcase.labels.highlights}>
            <div className="flex flex-wrap gap-2">
              {showcase.highlights.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="rounded-full px-3 py-1.5 text-xs font-normal"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock id="statistics" title={showcase.labels.statistics} className="mt-20">
            <div className="glass-card grid grid-cols-2 gap-6 rounded-3xl p-6 sm:grid-cols-4 sm:gap-8 sm:p-10">
              {showcase.stats.map((stat, index) => (
                <StatsCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  delay={index * 0.06}
                />
              ))}
            </div>
          </SectionBlock>

          <SectionBlock id="product-lines" title={showcase.labels.productLines} className="mt-20">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {showcase.productLines.map((line, index) => (
                <PremiumCard key={line} enableGlow className="p-6 text-center">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={springSoft}
                  >
                    <p className="font-heading text-xl font-semibold tracking-tight">{line}</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Product line {index + 1}
                    </p>
                  </motion.div>
                </PremiumCard>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock id="tech-stack" title={showcase.labels.techStack} className="mt-20">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="rounded-full px-3 py-1.5 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock id="features" title={showcase.labels.features} className="mt-20">
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {showcase.featureGrid.map((feature) => (
                <div
                  key={feature}
                  className="glass-card rounded-2xl px-4 py-4 text-sm font-medium transition-colors hover:bg-muted/40"
                >
                  {feature}
                </div>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock id="timeline" title={showcase.labels.timeline} className="mt-20">
            <div className="relative">
              <div className="absolute start-4 top-0 hidden h-full w-px bg-border sm:block" aria-hidden="true" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {showcase.timelinePhases.map((phase, index) => (
                  <div
                    key={phase.title}
                    className="relative rounded-2xl border border-border/60 bg-background/60 p-5 backdrop-blur-sm"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Phase {index + 1}
                    </span>
                    <p className="mt-2 font-medium">{phase.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionBlock>

          <SectionBlock id="gallery" title={showcase.labels.gallery} className="mt-20">
            <div className="overflow-hidden rounded-3xl border border-border/50 p-4 sm:p-6">
              <ProjectGallery project={project} />
            </div>
          </SectionBlock>

          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <SectionBlock id="architecture" title={ui.projects.architecture}>
              <p className="text-base leading-relaxed text-muted-foreground">
                {caseStudy.architecture}
              </p>
            </SectionBlock>
            <SectionBlock id="problem" title={ui.projects.problem}>
              <p className="text-base leading-relaxed text-muted-foreground">
                {caseStudy.problem}
              </p>
            </SectionBlock>
          </div>

          <RelatedProjects projects={related} />
          <div className="mt-16 space-y-8">
            <ProjectNavigation project={project} />
          </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
