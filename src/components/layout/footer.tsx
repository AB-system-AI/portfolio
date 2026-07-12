"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons/brand-icons";
import type { SocialPlatform } from "@/lib/content/types";
import { useLocale } from "@/components/providers/locale-provider";
import { AnimatedLink } from "@/components/ui/animated-link";
import { MagneticLinkButton } from "@/components/ui/magnetic-button";
import { springSoft } from "@/lib/motion";

const socialIcons: Partial<
  Record<SocialPlatform, ComponentType<{ className?: string }>>
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { siteConfig, navLinks, socialLinks, ui } = useLocale();

  return (
    <footer className="relative border-t border-border/50 bg-muted/30">
      <div className="mesh-gradient pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-12 h-px origin-left bg-gradient-to-r from-transparent via-border to-transparent"
          aria-hidden="true"
        />

        <div className="premium-card premium-card-border overflow-hidden rounded-3xl p-8 sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                {ui.footer.ctaTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {ui.footer.ctaDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <MagneticLinkButton href="/contact" size="lg" className="rounded-full px-6">
                {ui.footer.startProject}
              </MagneticLinkButton>
              <MagneticLinkButton
                href={siteConfig.resumeUrl ?? "/resume"}
                variant="outline"
                size="lg"
                className="rounded-full px-6"
              >
                {ui.footer.viewResume}
              </MagneticLinkButton>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight">
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.platform];
                return (
                  <motion.a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label} profile (opens in new tab)`}
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={springSoft}
                    className="flex size-10 items-center justify-center rounded-full border border-border/60 bg-background/50 text-muted-foreground backdrop-blur-sm transition-colors hover:border-foreground hover:text-foreground"
                  >
                    {Icon ? (
                      <Icon className="size-4" />
                    ) : (
                      <span className="text-xs font-medium">{link.label.charAt(0)}</span>
                    )}
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              {ui.footer.navigation}
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <AnimatedLink
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </AnimatedLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              {ui.footer.getInTouch}
            </h3>
            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                WhatsApp
              </a>
              <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
          className="my-8 h-px origin-left bg-gradient-to-r from-transparent via-border to-transparent"
          aria-hidden="true"
        />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. {ui.footer.rights}
          </p>
          <p className="text-xs text-muted-foreground">{ui.footer.crafted}</p>
        </div>
      </div>
    </footer>
  );
}
