import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/sections/contact-form";
import { AnimatedBackground } from "@/components/animations/animated-background";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export const metadata: Metadata = createPageMetadata(
  "Contact",
  "Get in touch to discuss your next project. Available for freelance work and full-time opportunities."
);

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-8 sm:pt-40">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Let&apos;s create something great
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Whether you have a project in mind or just want to connect, I&apos;m
              always open to new conversations and collaborations.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
