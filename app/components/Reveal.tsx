"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** extra scroll distance (px) before this element starts, for staggering siblings */
  delay?: number;
  /**
   * "fade": transparent to solid while rising. "wipe": uncovered from the top down.
   * "left" / "right": slides in from that side. "zoom": grows in from a little smaller. "wipe-x": uncovered from the left.
   */
  variant?: "fade" | "wipe" | "left" | "right" | "zoom" | "wipe-x";
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
    let lastY = 0; // translateY currently applied (taken out when measuring)
    let lastScale = 1; // scale currently applied (idem)

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
      } else if (variant === "wipe-x") {
        const hidden = Math.max(1 - e, l) * 100;
        el.style.clipPath = hidden < 0.1 ? "none" : `inset(0 ${hidden}% 0 0)`;
      } else if (variant === "left" || variant === "right") {
        const dir = variant === "left" ? -1 : 1;
        const dist = Math.min(window.innerWidth * 0.07, 110);
        el.style.transform = `translate3d(${(dir * ((1 - e) * dist - l * dist * 0.35)).toFixed(1)}px,0,0)`;
      } else if (variant === "zoom") {
        lastScale = 0.9 + 0.1 * e - l * 0.04;
        lastY = (1 - e) * 28 - l * 24;
        el.style.transform = `translate3d(0,${lastY}px,0) scale(${lastScale.toFixed(4)})`;
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
      // layout position: the transform applied last frame is taken out, so the element does not chase itself
      const grow = ((1 - lastScale) * el.offsetHeight) / 2;
      const top = rect.top - lastY - grow;
      const bottom = rect.bottom - lastY + grow;
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
