"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const PARTICLES = [
  { left: "12%", top: "18%", size: 3, duration: 18 },
  { left: "78%", top: "22%", size: 2, duration: 22 },
  { left: "45%", top: "65%", size: 2.5, duration: 20 },
  { left: "88%", top: "72%", size: 2, duration: 24 },
  { left: "25%", top: "80%", size: 2, duration: 19 },
  { left: "62%", top: "35%", size: 1.5, duration: 21 },
];

export function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="mesh-gradient absolute inset-0" />

      {prefersReducedMotion ? (
        <>
          <div className="absolute -left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-foreground/[0.03] blur-2xl md:h-[600px] md:w-[600px] md:blur-3xl dark:bg-foreground/[0.05]" />
          <div className="absolute -right-1/4 bottom-0 h-[350px] w-[350px] rounded-full bg-foreground/[0.02] blur-2xl md:h-[500px] md:w-[500px] md:blur-3xl dark:bg-foreground/[0.04]" />
        </>
      ) : (
        <>
          <motion.div
            className="absolute -left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-foreground/[0.04] blur-2xl md:h-[600px] md:w-[600px] md:blur-3xl dark:bg-foreground/[0.06]"
            animate={{ x: [0, 80, 20, 0], y: [0, 40, 10, 0], scale: [1, 1.08, 1.02, 1] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-1/4 top-1/4 h-[350px] w-[350px] rounded-full bg-foreground/[0.03] blur-2xl md:h-[500px] md:w-[500px] md:blur-3xl dark:bg-foreground/[0.05]"
            animate={{ x: [0, -60, -20, 0], y: [0, 30, -20, 0], scale: [1, 1.06, 1.1, 1] }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/3 bottom-0 h-[300px] w-[300px] rounded-full bg-foreground/[0.02] blur-3xl dark:bg-foreground/[0.04]"
            animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0] }}
            transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          />
          {PARTICLES.map((particle, index) => (
            <motion.span
              key={index}
              className="absolute rounded-full bg-foreground/20 dark:bg-foreground/30"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
              }}
              animate={{ y: [0, -12, 0], opacity: [0.2, 0.5, 0.2] }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4,
              }}
            />
          ))}
        </>
      )}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--background)_100%)]" />
      <div className="noise-texture absolute inset-0 opacity-[0.02] dark:opacity-[0.035]" />
    </div>
  );
}
