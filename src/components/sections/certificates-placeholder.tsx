import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { PremiumCard } from "@/components/animations/premium-card";

export function CertificatesPlaceholder() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-8">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Credentials
            </span>
            <h2 className="font-heading mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Certificates
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <PremiumCard className="rounded-2xl border border-dashed border-border/80 px-8 py-14 text-center">
            <p className="text-sm text-muted-foreground">
              Certificate highlights will appear here as they are added.
            </p>
          </PremiumCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
