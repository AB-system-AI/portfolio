"use client";

import { motion } from "framer-motion";
import { getAllSkills } from "@/lib/content/skills";
import { SectionHeader } from "@/components/animations/section-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

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
  const prefersReducedMotion = useReducedMotion();
  const skills = getAllSkills();

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
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((group, groupIndex) => (
            <ScrollReveal key={group.category} delay={groupIndex * 0.1}>
              <motion.div
                className="glass-card h-full rounded-2xl p-8 transition-[border-color,box-shadow] duration-500 hover:border-border"
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider">
                  {group.category}
                </h3>
                <div className="space-y-5">
                  {group.items.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={groupIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
