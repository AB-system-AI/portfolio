"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { LinkButton } from "@/components/ui/link-button";
import { useLocale } from "@/components/providers/locale-provider";

export function CTASection() {
  const { ui } = useLocale();

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-foreground to-foreground/90 px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(1_0_0/0.1),transparent_50%)]" />
            <div className="relative">
              <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight text-background sm:text-4xl md:text-5xl">
                {ui.cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-background/70 sm:text-lg">
                {ui.cta.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <LinkButton
                  href="/contact"
                  size="xl"
                  className="rounded-full bg-background text-foreground hover:bg-background/90"
                >
                  {ui.cta.startConversation}
                  <ArrowRight className="size-4 rtl:rotate-180" />
                </LinkButton>
                <LinkButton
                  href="/projects"
                  variant="outline"
                  size="xl"
                  className="rounded-full border-background/40 text-background hover:bg-background/10 hover:text-background"
                >
                  {ui.cta.viewProjects}
                </LinkButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
