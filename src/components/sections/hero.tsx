"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons/brand-icons";
import type { SocialPlatform } from "@/lib/content/types";
import { MagneticLinkButton } from "@/components/ui/magnetic-button";
import { AvailabilityBadge } from "@/components/ui/availability-badge";
import { AnimatedBackground } from "@/components/animations/animated-background";
import { TextReveal } from "@/components/animations/text-reveal";
import { TypingText } from "@/components/animations/typing-text";
import { StatsCounter } from "@/components/sections/stats-counter";
import { useLocale } from "@/components/providers/locale-provider";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EASE_PREMIUM, springSoft } from "@/lib/motion";

const socialIcons: Partial<
  Record<SocialPlatform, ComponentType<{ className?: string }>>
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
};

const floatingTech = ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

function FloatingTechIcons() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {floatingTech.map((tech, index) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.15, 0.35, 0.15],
            y: [0, -12, 0],
            x: [0, index % 2 === 0 ? 6 : -6, 0],
          }}
          transition={{
            duration: 5 + index * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
          className="absolute rounded-full border border-border/40 bg-background/40 px-3 py-1.5 text-[10px] font-medium text-muted-foreground backdrop-blur-sm sm:text-xs"
          style={{
            top: `${12 + index * 12}%`,
            left: index % 2 === 0 ? `${6 + index * 4}%` : undefined,
            right: index % 2 === 1 ? `${4 + index * 3}%` : undefined,
          }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { siteConfig, portfolioStats, socialLinks, ui } = useLocale();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <AnimatedBackground />
      <FloatingTechIcons />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants}>
            <AvailabilityBadge label={siteConfig.availability} />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading mt-8 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <TextReveal text={ui.hero.building} />
            <br />
            <span className="text-muted-foreground">
              <TextReveal text={ui.hero.experiences} delay={0.15} />
            </span>
            <br />
            <TextReveal text={ui.hero.thatMatter} delay={0.3} />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          >
            <TypingText text={siteConfig.tagline} speed={22} />
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticLinkButton href="/projects" size="xl" className="rounded-full px-8">
              {ui.hero.viewWork}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </MagneticLinkButton>
            <MagneticLinkButton
              href="/contact"
              variant="outline"
              size="xl"
              className="rounded-full px-8"
            >
              <Mail className="size-4" />
              {ui.hero.getInTouch}
            </MagneticLinkButton>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.platform];
              return (
                <motion.a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} (opens in new tab)`}
                  whileHover={{ y: -3, scale: 1.06 }}
                  transition={springSoft}
                  className="flex size-10 items-center justify-center rounded-full border border-border/60 bg-background/50 text-muted-foreground backdrop-blur-sm transition-colors hover:border-foreground hover:text-foreground"
                >
                  {Icon ? <Icon className="size-4" /> : link.label.charAt(0)}
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 gap-6 border-t border-border/50 pt-8 sm:mt-20 sm:grid-cols-3 lg:grid-cols-5 sm:gap-8 sm:pt-10"
          >
            {portfolioStats.map((stat, index) => (
              <StatsCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={index * 0.08}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {!prefersReducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1.5"
          >
            <div className="size-1.5 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
