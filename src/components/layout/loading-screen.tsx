"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const LOADING_KEY = "portfolio-visited";

function shouldShowLoader(): boolean {
  if (typeof window === "undefined") return false;
  if (sessionStorage.getItem(LOADING_KEY)) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return true;
}

export function LoadingScreen() {
  const prefersReducedMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || !shouldShowLoader()) return;

    const showTimer = window.setTimeout(() => {
      setEnabled(true);
      setIsLoading(true);
      sessionStorage.setItem(LOADING_KEY, "true");
    }, 0);

    return () => window.clearTimeout(showTimer);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!enabled || !isLoading) return;

    const hide = () => setIsLoading(false);

    if (document.readyState === "complete") {
      const timer = window.setTimeout(hide, 600);
      return () => window.clearTimeout(timer);
    }

    const onReady = () => window.setTimeout(hide, 600);
    window.addEventListener("load", onReady);
    const fallback = window.setTimeout(hide, 1200);

    return () => {
      window.removeEventListener("load", onReady);
      window.clearTimeout(fallback);
    };
  }, [enabled, isLoading]);

  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="loading"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        aria-label="Loading"
        role="status"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-foreground text-2xl font-bold text-background">
            {siteConfig.name.charAt(0)}
          </div>
          <div className="h-px w-24 overflow-hidden bg-border">
            <motion.div
              className="h-full bg-foreground"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
