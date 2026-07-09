import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { getLocale } from "@/lib/i18n/get-locale";
import { getUi } from "@/lib/i18n/ui";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/layout/page-hero";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const ui = getUi(locale);

  return createPageMetadata(
    ui.metadata.contactTitle,
    ui.contact.pageDescription,
    "/contact"
  );
}

export default async function ContactPage() {
  const locale = await getLocale();
  const ui = getUi(locale);

  return (
    <>
      <PageHero
        label={ui.contact.pageLabel}
        title={ui.contact.pageTitle}
        description={ui.contact.pageDescription}
      />
      <ContactForm showHeader={false} />
    </>
  );
}
