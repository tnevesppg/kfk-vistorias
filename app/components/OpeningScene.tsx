"use client";

import { useEffect } from "react";

/**
 * Opening scene, built the way the reference site does it (santalarch.com):
 *
 *  - a thin grey line sits BEHIND the hero, in a viewport-sized sticky layer, drawn as a 1px CSS gradient whose
 *    angle is a variable. It starts corner to corner and turns clockwise, through the vertical, until it lies flat
 *    through the middle of the screen. Hero content (and the vertical guides) stay in front of it, untouched.
 *  - the block that follows the hero (the clients strip and what comes after) is clipped by that same line: only the
 *    half-plane on the line's leading side shows, so it is revealed as the line turns while the hero scrolls up.
 *  - once the line is flat the clip is dropped and everything just scrolls; the line scrolls away with the page.
 *
 * Markup lives in app/page.tsx (data-opening-* attributes); this component only drives it. Nothing is mounted
 * for people who prefer reduced motion: the line is hidden and nothing is clipped.
 */
const MIN_TURN = 0.65; // the turn lasts at least this share of a screen of scrolling (the reference uses 65%)
const MARGIN = 40; // px of breathing room between the flat line and the first revealed element

const clamp = (n: number) => Math.min(1, Math.max(0, n));

export default function OpeningScene() {
  useEffect(() => {
    const lineBox = document.querySelector<HTMLElement>("[data-opening-line]");
    const line = lineBox?.firstElementChild as HTMLElement | null;
    const bandLine = document.querySelector<HTMLElement>("[data-opening-band-line]");
    const mask = document.querySelector<HTMLElement>("[data-opening-mask]");
    const first = mask?.querySelector<HTMLElement>("[data-opening-first]");
    const headerBar = document.querySelector<HTMLElement>("header > div");
    if (!lineBox || !line || !mask || !first) return;

    const hideAll = () => {
      lineBox.style.display = "none";
      if (bandLine) bandLine.style.display = "none";
      mask.style.clipPath = "";
    };
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      hideAll();
      return;
    }

    let raf = 0;
    let turn = 1; // scroll distance (px) over which the line turns
    let clipped = false;

    const measure = () => {
      const V = line.clientHeight; // the sticky layer is one screen tall
      // exact header height for the band behind the menu (desktop only)
      if (headerBar && window.innerWidth >= 1024) {
        document.documentElement.style.setProperty("--header-h", `${headerBar.getBoundingClientRect().height}px`);
      }
      // where the first revealed element sits in the document without the extra space (whatever is applied now,
      // from the stylesheet or from an earlier pass, is taken out first)
      const applied = parseFloat(getComputedStyle(mask).paddingTop) || 0;
      const natural = first.getBoundingClientRect().top + window.scrollY - applied;
      // it must end up MARGIN below the flat line (the middle of the screen) exactly when the turn is over
      const gap = Math.max(0, MIN_TURN * V + V / 2 + MARGIN - natural);
      mask.style.paddingTop = `${gap}px`;
      turn = natural + gap - V / 2 - MARGIN;
      lineBox.style.height = `${V + turn}px`; // the sticky layer stays pinned for exactly that long
      draw();
    };

    const draw = () => {
      raf = 0;
      const s = window.scrollY;
      const p = clamp(s / turn);
      const w = line.clientWidth;
      const h = line.clientHeight;
      const start = (Math.atan2(h, w) * 180) / Math.PI - 180; // corner to corner, e.g. -148deg
      const angle = start * (1 - p); // ends at 0deg: flat
      const deg = `${angle.toFixed(3)}deg`;
      line.style.setProperty("--angle", deg);
      if (bandLine) {
        bandLine.style.setProperty("--angle", deg);
        bandLine.style.transform = `translate3d(0,${Math.min(s, turn).toFixed(1)}px,0)`;
      }

      if (p >= 1) {
        if (clipped) {
          mask.style.clipPath = "";
          clipped = false;
        }
        return;
      }
      // keep only the half-plane the line leads with: the same side a `linear-gradient(angle, #000 50%, transparent 50%)` mask keeps
      const r = mask.getBoundingClientRect();
      const a = (angle * Math.PI) / 180;
      const cx = r.width / 2;
      const cy = h / 2 - r.top; // middle of the screen, in the block's own coordinates
      const R = 4 * (w + h);
      const dx = Math.cos(a); // along the line
      const dy = Math.sin(a);
      const nx = -Math.sin(a); // towards the visible side
      const ny = Math.cos(a);
      const pt = (x: number, y: number) => `${x.toFixed(1)}px ${y.toFixed(1)}px`;
      mask.style.clipPath = `polygon(${[
        pt(cx - dx * R, cy - dy * R),
        pt(cx + dx * R, cy + dy * R),
        pt(cx + dx * R + nx * R, cy + dy * R + ny * R),
        pt(cx - dx * R + nx * R, cy - dy * R + ny * R),
      ].join(",")})`;
      clipped = true;
    };

    const on = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };
    const remeasure = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", remeasure);
    window.addEventListener("load", remeasure);
    document.fonts?.ready.then(remeasure);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", remeasure);
      window.removeEventListener("load", remeasure);
      cancelAnimationFrame(raf);
      mask.style.clipPath = "";
      mask.style.paddingTop = "";
    };
  }, []);

  return null;
}
