"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { SectionHeader } from "@/components/animations/section-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function AboutTimeline() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          label="About Me"
          title="A journey of continuous growth"
          description="From writing my first line of code to leading engineering teams — every step has been driven by curiosity and a passion for building things that make a difference."
        />

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-[7px] w-px bg-border sm:left-1/2 sm:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 0.1}>
                <div
                  className={`relative flex flex-col gap-6 sm:flex-row sm:gap-0 ${
                    index % 2 === 0 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden sm:block sm:w-1/2" />

                  <motion.div
                    className="absolute left-0 z-10 flex size-4 items-center justify-center sm:left-1/2 sm:-translate-x-1/2"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="size-3 rounded-full border-2 border-foreground bg-background" />
                  </motion.div>

                  <div
                    className={`sm:w-1/2 ${
                      index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                    }`}
                  >
                    <div className="ml-8 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-border sm:ml-0">
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {item.year}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">
                        {item.company}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
