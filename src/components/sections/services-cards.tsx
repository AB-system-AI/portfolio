"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Bot,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { getAllServices } from "@/lib/content/services";
import { SectionHeader } from "@/components/animations/section-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Bot,
  Shield,
};

interface ServicesCardsProps {
  showHeader?: boolean;
}

export function ServicesCards({ showHeader = true }: ServicesCardsProps) {
  const prefersReducedMotion = useReducedMotion();
  const services = getAllServices();

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {showHeader && (
          <SectionHeader
            label="Services"
            title="What I can do for you"
            description="End-to-end development services tailored to your needs — from concept to deployment and beyond."
            align="center"
            className="mx-auto text-center"
          />
        )}

        {services.length === 0 ? (
          <div className="glass-card rounded-2xl px-8 py-16 text-center">
            <p className="text-sm text-muted-foreground">
              Services will appear here once content is added to src/lib/content/services.ts.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <ScrollReveal key={service.title} delay={index * 0.08}>
                <motion.div
                  className={cn(
                    "glass-card group relative h-full overflow-hidden rounded-2xl p-8",
                    "transition-[transform,box-shadow,border-color] duration-500 hover:border-border hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20"
                  )}
                  whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute -top-12 -right-12 size-32 rounded-full bg-foreground/[0.03] transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative">
                    <div className="flex size-12 items-center justify-center rounded-xl border border-border/50 bg-muted/50 transition-colors group-hover:bg-foreground group-hover:text-background">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>

                    <h3 className="font-heading mt-6 text-lg font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-2" aria-label={`${service.title} features`}>
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <span className="size-1 rounded-full bg-foreground/40" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
          </div>
        )}
      </div>
    </section>
  );
}
