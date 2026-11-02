"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  /** px moved per px of distance from viewport center */
  speed?: number;
  /** "y": vertical drift relative to viewport; "scrollX": horizontal slide driven by page scroll */
  mode?: "y" | "scrollX";
  /** fade out as the page scrolls away from the top, and back in on the way up */
  fadeOut?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export default function Parallax({ speed = 0.1, mode = "y", fadeOut = false, className, style, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const anchor = el.parentElement ?? el;
    let raf = 0;

    const update = () => {
      raf = 0;
      if (fadeOut) {
        const t = Math.min(1, Math.max(0, (window.scrollY - window.innerHeight * 0.05) / (window.innerHeight * 0.6)));
        el.style.opacity = String(1 - t * t * (3 - 2 * t));
      }
      if (mode === "scrollX") {
        el.style.transform = `translate3d(${-window.scrollY * speed}px,0,0)`;
        return;
      }
      const r = anchor.getBoundingClientRect();
      const d = r.top + r.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0,${d * speed}px,0)`;
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
  }, [speed, mode, fadeOut]);

  return (
    <div ref={ref} className={`will-change-transform ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
}
