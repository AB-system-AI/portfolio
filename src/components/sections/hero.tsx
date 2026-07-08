"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig, stats } from "@/lib/data";
import { LinkButton } from "@/components/ui/link-button";
import { AnimatedBackground } from "@/components/animations/animated-background";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function Hero() {
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
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Building digital
            <br />
            <span className="text-muted-foreground">experiences</span>
            <br />
            that matter.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            I&apos;m {siteConfig.name}, a {siteConfig.title.toLowerCase()} who
            transforms complex ideas into elegant, high-performance web
            applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <LinkButton
              href="/projects"
              size="lg"
              className="h-12 rounded-full px-8 text-sm"
            >
              View My Work
              <ArrowRight className="size-4" />
            </LinkButton>
            <LinkButton
              href="/contact"
              variant="outline"
              size="lg"
              className="h-12 rounded-full px-8 text-sm"
            >
              <Download className="size-4" />
              Get in Touch
            </LinkButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 gap-8 border-t border-border/50 pt-10 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

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
          <motion.div className="size-1.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
