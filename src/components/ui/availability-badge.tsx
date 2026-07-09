"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface AvailabilityBadgeProps {
  label: string;
  className?: string;
}

function StatusDot({ animate = true }: { animate?: boolean }) {
  if (!animate) {
    return (
      <span className="relative flex size-2.5 items-center justify-center">
        <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.55)]" />
      </span>
    );
  }

  return (
    <span className="relative flex size-2.5 items-center justify-center">
      <motion.span
        aria-hidden="true"
        className="absolute size-2 rounded-full bg-emerald-400"
        animate={{
          scale: [1, 2.4, 1],
          opacity: [0.55, 0, 0.55],
        }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute size-2 rounded-full bg-emerald-400/30 blur-[3px]"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.2, 0.75, 0.2],
        }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.span
        className="relative size-2 rounded-full bg-emerald-400"
        animate={{
          opacity: [0.25, 1, 0.25],
          boxShadow: [
            "0 0 0px rgba(52, 211, 153, 0)",
            "0 0 14px rgba(52, 211, 153, 0.9)",
            "0 0 0px rgba(52, 211, 153, 0)",
          ],
        }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </span>
  );
}

export function AvailabilityBadge({ label, className }: AvailabilityBadgeProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20",
        "bg-emerald-500/[0.06] px-4 py-2 text-xs font-medium tracking-wide",
        "text-foreground/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
        "backdrop-blur-md dark:border-emerald-400/15 dark:bg-emerald-400/[0.08]",
        className
      )}
    >
      <StatusDot animate={!prefersReducedMotion} />
      <span>{label}</span>
    </span>
  );
}
