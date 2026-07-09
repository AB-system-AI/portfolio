"use client";

import { motion } from "framer-motion";
import { getAllExperience } from "@/lib/content/experience";
import { SectionHeader } from "@/components/animations/section-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function AboutTimeline() {
  const experience = getAllExperience();

  if (experience.length === 0) {
    return (
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            label="Experience"
            title="A journey of continuous growth"
            description="Professional experience will appear here once content is added to src/lib/content/experience.ts."
          />
          <div className="glass-card rounded-2xl px-8 py-16 text-center">
            <p className="text-sm text-muted-foreground">No experience entries yet.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          label="Experience"
          title="A journey of continuous growth"
          description="From writing my first line of code to leading engineering teams — every step has been driven by curiosity and a passion for building things that make a difference."
        />

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-[11px] w-px bg-border sm:left-1/2 sm:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="space-y-12">
            {experience.map((item, index) => (
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
                      index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                    }`}
                  >
                    <div className="glass-card ml-8 rounded-2xl p-6 transition-[border-color] duration-500 hover:border-border sm:ml-0">
                      <time className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {item.year}
                      </time>
                      <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">
                        {item.company}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
