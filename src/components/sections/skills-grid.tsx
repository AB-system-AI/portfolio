"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionHeader } from "@/components/animations/section-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-foreground"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        />
      </div>
    </div>
  );
}

export function SkillsGrid() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          label="Expertise"
          title="Skills & technologies"
          description="A comprehensive toolkit honed over years of building production-grade applications across the full stack."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group, groupIndex) => (
            <ScrollReveal key={group.category} delay={groupIndex * 0.1}>
              <motion.div
                className="h-full rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-colors hover:border-border"
                whileHover={{ y: -4 }}
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
      </div>
    </section>
  );
}
