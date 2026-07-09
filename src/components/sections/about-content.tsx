"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { SectionHeader } from "@/components/animations/section-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Badge } from "@/components/ui/badge";

export function AboutContent() {
  const { about, siteConfig, ui } = useLocale();

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <SectionHeader
                label={ui.about.background}
                title={ui.about.learningTitle}
                description={about.background}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider">
                {ui.about.languages}
              </h2>
              <ul className="mt-4 space-y-3">
                {about.languages.map((language) => (
                  <li
                    key={language.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="font-medium">{language.name}</span>
                    <span className="text-muted-foreground">{language.level}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-border/50 pt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  {ui.about.education}
                </h3>
                <p className="mt-3 text-sm font-medium">
                  {siteConfig.education.institution}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {ui.about.expectedGraduationColon}{" "}
                  {siteConfig.education.expectedGraduation}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-16">
          <SectionHeader
            label={ui.about.specialization}
            title={ui.about.focusTitle}
            description={ui.about.focusDescription}
          />
          <div className="flex flex-wrap gap-2">
            {about.specializations.map((item) => (
              <Badge
                key={item}
                variant="secondary"
                className="rounded-full px-3 py-1 text-xs font-normal"
              >
                {item}
              </Badge>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <ScrollReveal>
            <div className="glass-card h-full rounded-2xl p-8">
              <h2 className="font-heading text-xl font-semibold tracking-tight">
                {ui.about.lookingFor}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {about.lookingFor}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card h-full rounded-2xl p-8">
              <h2 className="font-heading text-xl font-semibold tracking-tight">
                {ui.about.differentiators}
              </h2>
              <ul className="mt-4 space-y-3">
                {about.differentiators.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/50"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
