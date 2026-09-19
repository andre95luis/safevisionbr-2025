"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion, useScroll, useSpring } from "motion/react";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-0.5 origin-left bg-cyan-400 z-[60]"
    />
  );
}

export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      {children}
    </MotionConfig>
  );
}
