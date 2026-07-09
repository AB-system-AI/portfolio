"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TypingText({ text, className, speed = 28 }: TypingTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (prefersReducedMotion) return;

    let index = 0;

    const interval = window.setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion, speed, text]);

  if (prefersReducedMotion) {
    return (
      <span className={className} aria-label={text}>
        {text}
      </span>
    );
  }

  return (
    <motion.span className={className} aria-label={text}>
      {displayed}
      {displayed.length < text.length && (
        <span className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-foreground/60 align-middle" />
      )}
    </motion.span>
  );
}
