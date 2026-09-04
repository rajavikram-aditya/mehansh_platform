/* Mehansh Platform style: quiet, considered count-up. Animates a number from 0 to target when it enters the viewport. */
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** The target number to count up to. */
  to: number;
  /** Optional prefix (e.g. "0" to render "01"). */
  prefix?: string;
  /** Optional suffix (e.g. "+"). */
  suffix?: string;
  /** Duration in ms (default 500). */
  duration?: number;
  /** ClassName applied to the wrapping span. */
  className?: string;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 500,
  className,
}: CountUpProps) {
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = useState(shouldReduceMotion ? to : 0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  /* Observe intersection once. */
  useEffect(() => {
    if (shouldReduceMotion || hasStarted) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldReduceMotion, hasStarted]);

  /* Animate when started. */
  useEffect(() => {
    if (!hasStarted || shouldReduceMotion) return;

    let raf: number;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setValue(Math.round(eased * to));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, to, duration, shouldReduceMotion]);

  const display = `${prefix}${value}${suffix}`;

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
