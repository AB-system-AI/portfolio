import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = createPageMetadata(
  "Skills",
  "Technical skills and expertise in React, Next.js, TypeScript, Node.js, cloud infrastructure, and modern development practices.",
  "/skills"
);

export default function SkillsPage() {
  return (
    <>
      <PageHero
        label="Expertise"
        title="Tools of the trade"
        description="A deep toolkit spanning frontend, backend, DevOps, and design — continuously refined through years of hands-on experience."
      />
      <SkillsGrid showHeader={false} />
      <CTASection />
    </>
  );
}
