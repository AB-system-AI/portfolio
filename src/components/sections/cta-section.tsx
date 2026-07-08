"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { LinkButton } from "@/components/ui/link-button";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-foreground to-foreground/90 px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-background sm:text-4xl md:text-5xl">
                Ready to start your next project?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-background/70 sm:text-lg">
                Let&apos;s collaborate to bring your vision to life with
                cutting-edge technology and exceptional design.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <LinkButton
                  href="/contact"
                  size="lg"
                  className="h-12 rounded-full bg-background px-8 text-foreground hover:bg-background/90"
                >
                  Start a Conversation
                  <ArrowRight className="size-4" />
                </LinkButton>
                <LinkButton
                  href="/projects"
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full border-background/30 px-8 text-background hover:bg-background/10 hover:text-background"
                >
                  View Projects
                </LinkButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
