"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Layers,
  ShoppingCart,
  GraduationCap,
  LayoutDashboard,
  Server,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { getAllServices, servicesIntro } from "@/lib/content/services";
import { SectionHeader } from "@/components/animations/section-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { LinkButton } from "@/components/ui/link-button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Layers,
  ShoppingCart,
  GraduationCap,
  LayoutDashboard,
  Server,
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
            title="Software solutions for growing businesses"
            description={servicesIntro}
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
                      "glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-8",
                      "transition-[transform,box-shadow,border-color] duration-500 hover:border-border hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20"
                    )}
                    whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="absolute -top-12 -right-12 size-32 rounded-full bg-foreground/[0.03] transition-transform duration-500 group-hover:scale-150" />

                    <div className="relative flex flex-1 flex-col">
                      <div className="flex size-12 items-center justify-center rounded-xl border border-border/50 bg-muted/50 transition-colors group-hover:bg-foreground group-hover:text-background">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>

                      <h3 className="font-heading mt-6 text-lg font-semibold tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>

                      <p className="mt-4 text-xs font-semibold uppercase tracking-wider">
                        Business value
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.businessValue}
                      </p>

                      <p className="mt-5 text-xs font-semibold uppercase tracking-wider">
                        Key features
                      </p>
                      <ul
                        className="mt-3 space-y-2"
                        aria-label={`${service.title} features`}
                      >
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <span
                              className="size-1 rounded-full bg-foreground/40"
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <p className="mt-5 text-xs font-semibold uppercase tracking-wider">
                        Technologies
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {service.technologies.join(" · ")}
                      </p>

                      <div className="mt-auto pt-6">
                        <LinkButton
                          href="/contact"
                          variant="outline"
                          size="sm"
                          className="w-full rounded-full"
                        >
                          {service.cta}
                          <ArrowRight className="size-3.5" />
                        </LinkButton>
                      </div>
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
