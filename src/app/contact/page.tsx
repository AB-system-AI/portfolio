import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = createPageMetadata(
  "Contact",
  "Get in touch to discuss your next project. Available for freelance work and full-time opportunities.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's create something great"
        description="Whether you have a project in mind or just want to connect, I&apos;m always open to new conversations and collaborations."
      />
      <ContactForm showHeader={false} />
    </>
  );
}
