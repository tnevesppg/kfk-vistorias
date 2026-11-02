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

    const smooth = (p: number) => p * p * (3 - 2 * p);

    // enter: 0 (below, hidden) -> 1 (settled). leave: 0 (settled) -> 1 (gone off the top)
    const apply = (enter: number, leave: number) => {
      const e = smooth(enter);
      const l = smooth(leave);
      el.style.opacity = String(e * (1 - l));
      if (variant === "wipe") {
        // "none" once done so shadows/overflow (e.g. portfolio hover) aren't clipped
        const hidden = Math.max(1 - e, l) * 100;
        el.style.clipPath = hidden < 0.1 ? "none" : `inset(${hidden}% 0 0 0)`;
      } else {
        lastY = (1 - e) * 48 - l * 32;
        el.style.transform = `translate3d(0,${lastY}px,0)`;
      }
    };

    const update = () => {
      raf = 0;
      if (reduced) return apply(1, 0);
      const vh = window.innerHeight;
      const rect = el.getBoundingClientRect();
      const top = rect.top - lastY;
      const bottom = rect.bottom - lastY;
      apply(
        clamp((vh - top - delay * 0.4) / (vh * 0.25)),
        clamp(1 - bottom / (vh * 0.3)),
      );
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
    <div ref={ref} className={className} style={{ opacity: 0, willChange: "opacity, transform", transition: "opacity 0.7s ease-out, clip-path 0.7s ease-out", ...style }}>
      {children}
    </div>
  );
}
