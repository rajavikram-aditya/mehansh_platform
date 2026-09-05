/* Mehansh Platform style: calm, staggered mount-reveal. Fades + slides up on component mount with optional delay for stagger. */
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface ScrollRevealProps {
  children: ReactNode;
  /** Extra delay in seconds (for stagger orchestration). */
  delay?: number;
  /** Custom className on the wrapper div. */
  className?: string;
  /** Override the slide distance in px (default 24). */
  offset?: number;
  /** Optional ID for anchor linking. */
  id?: string;
  /** Optional aria-label for accessibility. */
  "aria-label"?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  offset = 24,
  id,
  "aria-label": ariaLabel,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      aria-label={ariaLabel}
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : offset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.55,
        ease: EASE_OUT,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
