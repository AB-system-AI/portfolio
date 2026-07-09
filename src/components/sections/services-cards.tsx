"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Globe,
  Layers,
  ShoppingCart,
  GraduationCap,
  LayoutDashboard,
  Server,
  ArrowRight,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { getAllServices, servicesIntro } from "@/lib/content/services";
import { SectionHeader } from "@/components/animations/section-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { PremiumCard } from "@/components/animations/premium-card";
import { MagneticLinkButton } from "@/components/ui/magnetic-button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { springSoft } from "@/lib/motion";
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
  const [expanded, setExpanded] = useState<number | null>(null);

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
              const isExpanded = expanded === index;

              return (
                <ScrollReveal key={service.title} delay={index * 0.08}>
                  <PremiumCard className="flex h-full flex-col overflow-hidden p-8">
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={springSoft}
                      className="flex size-12 items-center justify-center rounded-xl border border-border/50 bg-muted/50"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </motion.div>

                    <h3 className="font-heading mt-6 text-lg font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="mt-4 rounded-xl border border-border/60 bg-muted/20 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider">
                        Business value
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.businessValue}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setExpanded(isExpanded ? null : index)}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "Hide details" : "View details"}
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform",
                          isExpanded && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4">
                            <p className="text-xs font-semibold uppercase tracking-wider">
                              Key features
                            </p>
                            <ul className="mt-3 space-y-2" aria-label={`${service.title} features`}>
                              {service.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-center gap-2 text-xs text-muted-foreground"
                                >
                                  <span className="size-1 rounded-full bg-foreground/40" />
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
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="mt-auto pt-6">
                      <MagneticLinkButton
                        href="/contact"
                        variant="outline"
                        size="sm"
                        className="w-full rounded-full"
                      >
                        {service.cta}
                        <ArrowRight className="size-3.5" />
                      </MagneticLinkButton>
                    </div>
                  </PremiumCard>
                </ScrollReveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
