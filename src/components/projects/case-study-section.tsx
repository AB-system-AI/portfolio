"use client";

import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function CaseStudySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <ScrollReveal>
      <section id={id} className="scroll-mt-32">
        <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <div className="mt-5">{children}</div>
      </section>
    </ScrollReveal>
  );
}
