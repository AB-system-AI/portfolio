import { ScrollReveal } from "@/components/animations/scroll-reveal";

const PLACEHOLDER_LOGOS = [
  "Retail",
  "Education",
  "Hospitality",
  "Services",
  "Operations",
  "Commerce",
];

export function ClientLogos() {
  return (
    <section className="border-y border-border/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by businesses across industries
          </p>
        </ScrollReveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PLACEHOLDER_LOGOS.map((label, index) => (
            <ScrollReveal key={label} delay={index * 0.05}>
              <div className="premium-card flex h-16 items-center justify-center rounded-xl border border-dashed border-border/70 bg-muted/20 px-4">
                <span className="text-xs font-medium tracking-wide text-muted-foreground/80">
                  {label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
