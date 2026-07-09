"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { springSoft } from "@/lib/motion";

interface StatsCounterProps {
  value: string;
  label: string;
  delay?: number;
}

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { numeric: null as number | null, suffix: value };
  return { numeric: Number(match[1]), suffix: match[2] ?? "" };
}

export function StatsCounter({ value, label, delay = 0 }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const { numeric, suffix } = parseStatValue(value);
  const [count, setCount] = useState(value);
  const shouldAnimate =
    isInView && numeric !== null && !prefersReducedMotion;

  useEffect(() => {
    if (!shouldAnimate) return;

    let frame = 0;
    const totalFrames = 36;
    let rafId = 0;

    const animate = () => {
      frame += 1;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(`${Math.round(numeric * eased)}${suffix}`);
      if (frame < totalFrames) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const timeout = window.setTimeout(() => {
      rafId = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [delay, numeric, shouldAnimate, suffix]);

  const displayValue = shouldAnimate ? count : value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...springSoft, delay }}
    >
      <p className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
        {displayValue}
      </p>
      <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</p>
    </motion.div>
  );
}
