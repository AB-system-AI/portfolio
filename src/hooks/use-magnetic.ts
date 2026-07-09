"use client";

import { useCallback, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (prefersReducedMotion || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);

      setOffset({ x: x * strength, y: y * strength });
    },
    [prefersReducedMotion, strength]
  );

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  return {
    ref,
    offset,
    handleMouseMove,
    handleMouseLeave,
    isInteractive: !prefersReducedMotion,
  };
}
