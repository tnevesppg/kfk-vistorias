"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** extra scroll distance (px) before this element starts, for staggering siblings */
  delay?: number;
  /** "fade": transparent to solid while rising. "wipe": uncovered from the bottom up */
  variant?: "fade" | "wipe";
  className?: string;
  style?: CSSProperties;
};

const clamp = (n: number) => Math.min(1, Math.max(0, n));

/**
 * Scroll-scrubbed reveal: progress follows the element's position in the viewport,
 * so content "finishes loading" as it climbs and un-loads if you scroll back up.
 */
export default function Reveal({ children, delay = 0, variant = "fade", className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let lastY = 0;

    const apply = (p: number) => {
      const e = p * p * (3 - 2 * p); // smoothstep: gradual over the whole scroll range
      el.style.opacity = String(e);
      if (variant === "wipe") {
        // "none" once done so shadows/overflow (e.g. portfolio hover) aren't clipped
        el.style.clipPath = e > 0.999 ? "none" : `inset(${(1 - e) * 100}% 0 0 0)`;
      } else {
        lastY = (1 - e) * 120;
        el.style.transform = `translate3d(0,${lastY}px,0)`;
      }
    };

    const update = () => {
      raf = 0;
      if (reduced) return apply(1);
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top - lastY;
      apply(clamp((vh - top - delay * 0.4) / (vh * 0.75)));
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, [delay, variant]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0, willChange: "opacity, transform", ...style }}>
      {children}
    </div>
  );
}
