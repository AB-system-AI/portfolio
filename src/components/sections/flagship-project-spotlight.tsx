"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Monitor, Smartphone, Tablet } from "lucide-react";
import { getProjectBySlug } from "@/lib/i18n/localized-content";
import { formatProjectCategory } from "@/lib/content/project-utils";
import { useLocale } from "@/components/providers/locale-provider";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { PremiumCard } from "@/components/animations/premium-card";
import { StatsCounter } from "@/components/sections/stats-counter";
import { Badge } from "@/components/ui/badge";
import { MagneticLinkButton } from "@/components/ui/magnetic-button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { springSoft } from "@/lib/motion";

export function FlagshipProjectSpotlight() {
  const { locale } = useLocale();
  const project = getProjectBySlug("coach-os", locale);
  const prefersReducedMotion = useReducedMotion();

  if (!project?.showcase) return null;

  const showcase = project.showcase;
  const topStats = showcase.stats.slice(0, 4);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {showcase.labels.flagship}
              </span>
              <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                CoachOS
              </h2>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {showcase.labels.viewCaseStudy}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        <PremiumCard enableGlow className="overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative overflow-hidden bg-gradient-to-br from-zinc-950 via-neutral-900 to-black p-8 sm:p-10 lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative">
                <div className="flex flex-wrap gap-2">
                  <Badge className="rounded-full border-emerald-400/30 bg-emerald-500/15 text-emerald-100">
                    <CheckCircle2 className="me-1 size-3" />
                    {showcase.statusBadge}
                  </Badge>
                  <Badge variant="outline" className="rounded-full border-white/20 text-white/80">
                    {formatProjectCategory(project.category, locale)}
                  </Badge>
                </div>

                <h3 className="font-heading mt-6 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                  {project.shortDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <Badge
                      key={tech}
                      className="rounded-full border-white/10 bg-white/10 text-[10px] text-white"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <MagneticLinkButton
                  href={`/projects/${project.slug}`}
                  size="lg"
                  className="mt-8 rounded-full"
                >
                  {showcase.labels.viewCaseStudy}
                  <ArrowRight className="size-4 rtl:rotate-180" />
                </MagneticLinkButton>
              </div>

              <div className="relative mt-10 flex items-end justify-center gap-3">
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  transition={springSoft}
                  className="hidden w-40 rounded-lg border border-white/10 bg-black/40 p-3 sm:block"
                >
                  <Monitor className="mx-auto size-5 text-white/50" />
                </motion.div>
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                  transition={springSoft}
                  className="w-16 rounded-xl border border-white/10 bg-black/40 p-2"
                >
                  <Tablet className="mx-auto size-4 text-white/50" />
                </motion.div>
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { y: -8 }}
                  transition={springSoft}
                  className="w-10 rounded-2xl border border-white/10 bg-black/40 p-2"
                >
                  <Smartphone className="mx-auto size-3.5 text-white/50" />
                </motion.div>
              </div>
            </div>

            <div className="border-t border-border/50 bg-background/80 p-8 sm:p-10 lg:border-t-0 lg:border-s lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {showcase.labels.statistics}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-6">
                {topStats.map((stat, index) => (
                  <StatsCounter
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    delay={index * 0.08}
                  />
                ))}
              </div>

              <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {showcase.labels.productLines}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {showcase.productLines.map((line) => (
                  <Badge key={line} variant="secondary" className="rounded-full">
                    {line}
                  </Badge>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                {project.fullDescription.split("\n\n")[0]}
              </p>
            </div>
          </div>
        </PremiumCard>
      </div>
    </section>
  );
}
