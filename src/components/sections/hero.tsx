"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { getPortfolioStats } from "@/lib/content/project-utils";
import { MagneticLinkButton } from "@/components/ui/magnetic-button";
import { AvailabilityBadge } from "@/components/ui/availability-badge";
import { AnimatedBackground } from "@/components/animations/animated-background";
import { TextReveal } from "@/components/animations/text-reveal";
import { TypingText } from "@/components/animations/typing-text";
import { StatsCounter } from "@/components/sections/stats-counter";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EASE_PREMIUM } from "@/lib/motion";

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

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const stats = getPortfolioStats();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <AnimatedBackground />

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
            <TextReveal text="Building digital" />
            <br />
            <span className="text-muted-foreground">
              <TextReveal text="experiences" delay={0.15} />
            </span>
            <br />
            <TextReveal text="that matter." delay={0.3} />
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
              View My Work
              <ArrowRight className="size-4" />
            </MagneticLinkButton>
            <MagneticLinkButton
              href="/contact"
              variant="outline"
              size="xl"
              className="rounded-full px-8"
            >
              <Mail className="size-4" />
              Get in Touch
            </MagneticLinkButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 gap-6 border-t border-border/50 pt-8 sm:mt-20 sm:grid-cols-3 lg:grid-cols-5 sm:gap-8 sm:pt-10"
          >
            {stats.map((stat, index) => (
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
