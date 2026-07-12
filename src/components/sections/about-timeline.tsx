"use client";

import { motion } from "framer-motion";
import { formatExperiencePeriod } from "@/lib/content/experience";
import { useLocale } from "@/components/providers/locale-provider";
import { SectionHeader } from "@/components/animations/section-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { PremiumCard } from "@/components/animations/premium-card";
import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/lib/content/types";
import type { UiDictionary } from "@/lib/i18n/ui";

function ExperienceList({
  title,
  items,
  align = "left",
}: {
  title: string;
  items: string[];
  align?: "left" | "right";
}) {
  if (items.length === 0) return null;

  return (
    <div className={align === "right" ? "sm:text-right" : ""}>
      <p className="mt-5 text-xs font-semibold uppercase tracking-wider">
        {title}
      </p>
      <ul
        className={`mt-3 space-y-2 ${
          align === "right" ? "sm:list-inside" : ""
        }`}
      >
        {items.map((item) => (
          <li
            key={item}
            className={`flex gap-2 text-sm leading-relaxed text-muted-foreground ${
              align === "right" ? "sm:flex-row-reverse sm:text-right" : ""
            }`}
          >
            <span
              className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceCard({
  item,
  align = "left",
  labels,
}: {
  item: Experience;
  align?: "left" | "right";
  labels: UiDictionary["about"];
}) {
  return (
    <PremiumCard className="ml-8 p-6 text-left sm:ml-0">
      <div
        className={`flex flex-wrap items-center gap-2 ${
          align === "right" ? "sm:justify-end" : ""
        }`}
      >
        <time className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {formatExperiencePeriod(item)}
        </time>
        <Badge variant="secondary" className="rounded-full px-2.5 py-0.5 text-[10px] font-normal">
          {item.location}
        </Badge>
      </div>

      <h3 className="mt-3 text-lg font-semibold">{item.role}</h3>
      <p className="mt-1 text-sm font-medium text-muted-foreground">
        {item.company}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {item.summary}
      </p>

      <ExperienceList
        title={labels.responsibilities}
        items={item.responsibilities}
        align={align}
      />
      <ExperienceList
        title={labels.achievements}
        items={item.achievements}
        align={align}
      />

      {item.businessImpact && (
        <div className={align === "right" ? "sm:text-right" : ""}>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider">
            {labels.businessImpact}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {item.businessImpact}
          </p>
        </div>
      )}

      {item.technologies.length > 0 && (
        <div className={align === "right" ? "sm:text-right" : ""}>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider">
            {labels.technologies}
          </p>
          <div
            className={`mt-3 flex flex-wrap gap-2 ${
              align === "right" ? "sm:justify-end" : ""
            }`}
          >
            {item.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="rounded-full px-2.5 py-0.5 text-[10px] font-normal"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </PremiumCard>
  );
}

export function AboutTimeline() {
  const { experience, ui } = useLocale();

  if (experience.length === 0) {
    return (
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            label={ui.about.experience}
            title={ui.about.experienceTitle}
            description={ui.about.noExperience}
          />
          <div className="glass-card rounded-2xl px-8 py-16 text-center">
            <p className="text-sm text-muted-foreground">{ui.about.noExperience}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          label={ui.about.experience}
          title={ui.about.experienceTitle}
        />

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-[11px] w-px bg-border sm:left-1/2 sm:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="space-y-12">
            {experience.map((item, index) => {
              const align = index % 2 === 0 ? "right" : "left";

              return (
                <ScrollReveal key={item.id} delay={index * 0.1}>
                  <li
                    className={`relative flex flex-col gap-6 sm:flex-row sm:gap-0 ${
                      index % 2 === 0 ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="hidden sm:block sm:w-1/2" aria-hidden="true" />

                    <motion.div
                      className="absolute left-0 z-10 flex size-4 items-center justify-center sm:left-1/2 sm:-translate-x-1/2"
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      aria-hidden="true"
                    >
                      <div className="size-3 rounded-full border-2 border-foreground bg-background" />
                    </motion.div>

                    <div
                      className={`sm:w-1/2 ${
                        index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
                      }`}
                    >
                      <ExperienceCard item={item} align={align} labels={ui.about} />
                    </div>
                  </li>
                </ScrollReveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
