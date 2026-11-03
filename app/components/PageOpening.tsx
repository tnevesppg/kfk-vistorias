"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Opening of an inner page: the title and the image under it stay pinned for a stretch of scrolling while a thin
 * grey line turns (corner to corner, then flat) and the image is revealed by it. At the start the half of the image
 * on the line's leading side is already visible; the line then turns and climbs above the image, uncovering the rest.
 * When it is done the pin is released and the page scrolls on. People who prefer reduced motion get a plain page.
 */
const PIN = "70svh"; // extra scrolling spent on the turn
const MARGIN = 24; // the line ends this many px above the image

const clamp = (n: number) => Math.min(1, Math.max(0, n));

export default function PageOpening({ title, mediaClassName, children }: { title: ReactNode; mediaClassName: string; children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLSpanElement>(null);
  const spacer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = track.current;
    const st = stage.current;
    const m = media.current;
    const l = line.current;
    const sp = spacer.current;
    if (!t || !st || !m || !l || !sp) return;

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sp.style.height = "0px";
      st.style.position = "static";
      m.style.clipPath = "none";
      l.style.display = "none";
      return;
    }

    let raf = 0;
    const draw = () => {
      raf = 0;
      const pin = sp.offsetHeight || 1;
      const p = clamp(-t.getBoundingClientRect().top / pin);
      const mw = m.offsetWidth;
      const mh = m.offsetHeight;
      const start = (Math.atan2(mh, mw) * 180) / Math.PI - 180; // corner to corner of the image
      const deg = start * (1 - p); // ends flat
      const a = (deg * Math.PI) / 180;
      const cx = mw / 2;
      const cy = (mh / 2) * (1 - p) + -MARGIN * p; // from the middle of the image to just above it

      // the line itself, in the stage's coordinates (it runs across the whole width, behind the title)
      l.style.left = `${m.offsetLeft + cx}px`;
      l.style.top = `${m.offsetTop + cy}px`;
      l.style.transform = `translate(-50%,-50%) rotate(${deg.toFixed(3)}deg)`;

      if (p >= 1) {
        m.style.clipPath = "none";
        return;
      }
      // keep the half-plane the line leads with (same side as the home's opening)
      const R = 4 * (mw + mh);
      const dx = Math.cos(a);
      const dy = Math.sin(a);
      const nx = -Math.sin(a);
      const ny = Math.cos(a);
      const pt = (x: number, y: number) => `${x.toFixed(1)}px ${y.toFixed(1)}px`;
      m.style.clipPath = `polygon(${[
        pt(cx - dx * R, cy - dy * R),
        pt(cx + dx * R, cy + dy * R),
        pt(cx + dx * R + nx * R, cy + dy * R + ny * R),
        pt(cx - dx * R + nx * R, cy - dy * R + ny * R),
      ].join(",")})`;
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    document.fonts?.ready.then(on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={track}>
      <div ref={stage} className="sticky top-0 overflow-hidden">
        <span ref={line} aria-hidden className="pointer-events-none absolute z-0 block h-px w-[400vmax] bg-neutral-300" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%) rotate(-156deg)" }} />
        <div className="relative z-10">{title}</div>
        {/* first paint: corner to corner, upper-right half visible (matches the script's starting frame) */}
        <div ref={media} className={mediaClassName} style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}>
          {children}
        </div>
      </div>
      {/* the scrolling spent with the stage pinned (a real box: sticky does not travel through padding) */}
      <div ref={spacer} aria-hidden style={{ height: PIN }} />
    </div>
  );
}
