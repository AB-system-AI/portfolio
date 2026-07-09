"use client";

import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";
import { LinkButton } from "@/components/ui/link-button";

export default function NotFound() {
  const { ui } = useLocale();

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          404
        </p>
        <h1 className="font-heading mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {ui.common.notFoundTitle}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {ui.common.notFoundDescription}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <LinkButton href="/" size="lg" className="rounded-full px-8">
            {ui.common.backHome}
          </LinkButton>
          <Link
            href="/projects"
            className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {ui.cta.viewProjects}
          </Link>
        </div>
      </div>
    </section>
  );
}
