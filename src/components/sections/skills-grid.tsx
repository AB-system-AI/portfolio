"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAllSkills } from "@/lib/content/skills";
import { SectionHeader } from "@/components/animations/section-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { PremiumCard } from "@/components/animations/premium-card";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground" aria-hidden="true">
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        {prefersReducedMotion ? (
          <div
            className="h-full rounded-full bg-foreground"
            style={{ width: `${level}%` }}
          />
        ) : (
          <motion.div
            className="h-full rounded-full bg-foreground"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
          />
        )}
      </div>
    </div>
  );
}

interface SkillsGridProps {
  showHeader?: boolean;
}

export function SkillsGrid({ showHeader = true }: SkillsGridProps) {
  const skills = getAllSkills();
  const [activeCategory, setActiveCategory] = useState(0);
  const activeGroup = skills[activeCategory];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {showHeader && (
          <SectionHeader
            label="Expertise"
            title="Skills & technologies"
            description="A comprehensive toolkit for building production-grade web applications, business systems, and modern full-stack solutions."
          />
        )}

        {skills.length === 0 ? (
          <div className="glass-card rounded-2xl px-8 py-16 text-center">
            <p className="text-sm text-muted-foreground">
              Skills will appear here once content is added to src/lib/content/skills.ts.
            </p>
          </div>
        ) : (
          <>
            <ScrollReveal>
              <div className="mb-8 flex flex-wrap gap-2">
                {skills.map((group, index) => (
                  <button
                    key={group.category}
                    type="button"
                    onClick={() => setActiveCategory(index)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
                      activeCategory === index
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-background/50 text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {group.category}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            <AnimatePresence mode="wait">
              {activeGroup && (
                <motion.div
                  key={activeGroup.category}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <PremiumCard className="p-8">
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                      <h3 className="text-sm font-semibold uppercase tracking-wider">
                        {activeGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {activeGroup.items.slice(0, 6).map((skill) => (
                          <span
                            key={skill.name}
                            className="rounded-full border border-border/70 bg-muted/30 px-3 py-1 text-[10px] text-muted-foreground"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      {activeGroup.items.map((skill, skillIndex) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          delay={skillIndex * 0.05}
                        />
                      ))}
                    </div>
                  </PremiumCard>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((group, groupIndex) => (
                <ScrollReveal key={group.category} delay={groupIndex * 0.06}>
                  <PremiumCard
                    className={cn(
                      "cursor-pointer p-6 transition-colors",
                      activeCategory === groupIndex && "border-foreground/30"
                    )}
                    onClick={() => setActiveCategory(groupIndex)}
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-wider">
                      {group.category}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {group.items.length} skills
                    </p>
                  </PremiumCard>
                </ScrollReveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
