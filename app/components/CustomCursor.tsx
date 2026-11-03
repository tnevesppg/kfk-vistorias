"use client";

import { useEffect, useRef } from "react";

const DOT = 14;
const PHOTO = 46;

/**
 * Mouse-only cursor. A small square that inverts whatever is under it (mix-blend-mode: difference):
 *  - over a link or button it grows into that element's box, so the label reads in negative;
 *  - over a photo it turns into a round lens (the photo itself just zooms in slowly).
 * Touch devices keep their native behaviour.
 */
export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const el = ref.current!;
    const root = document.documentElement;
    root.classList.add("has-cursor");

    let mx = -100, my = -100;
    let x = -100, y = -100, w = DOT, h = DOT, r = 0;
    let shown = false;
    let raf = 0;
    let link: Element | null = null;
    let photo: Element | null = null;
    let pressed = false;
    let solid = false; // buttons: plain dark dot instead of the inverting square

    const pick = (t: Element | null) => {
      solid = !!t?.closest(".btn-sun, .btn-dark, [data-cursor='solid']");
      // [data-cursor="dot"]: big links that change colour themselves (service rows) keep the plain square
      link = solid || t?.closest("[data-cursor='dot']") ? null : (t?.closest("a, button, [data-cursor='link']") ?? null);
      photo = link ? null : (t?.closest(".photo") ?? null);
    };

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!shown) {
        x = mx;
        y = my;
        shown = true;
        el.style.opacity = "1";
      }
      pick(e.target as Element);
    };
    const onScroll = () => pick(document.elementFromPoint(mx, my));
    const onLeave = () => {
      shown = false;
      el.style.opacity = "0";
    };
    const onDown = () => (pressed = true);
    const onUp = () => (pressed = false);

    const tick = () => {
      let tx = mx, ty = my, tw = DOT, th = DOT, tr = 0, k = 0.3;
      if (link) {
        const b = link.getBoundingClientRect();
        tx = b.left + b.width / 2;
        ty = b.top + b.height / 2;
        tw = b.width + 12;
        th = b.height + 6;
        tr = 3;
        k = 0.22;
      } else if (solid) {
        tw = th = 12;
        tr = 6;
      } else if (photo) {
        tw = th = PHOTO;
        tr = PHOTO / 2;
      } else if (pressed) {
        tw = th = DOT * 0.6;
      }
      x += (tx - x) * k;
      y += (ty - y) * k;
      w += (tw - w) * 0.2;
      h += (th - h) * 0.2;
      r += (tr - r) * 0.2;
      el.style.mixBlendMode = solid ? "normal" : "difference";
      el.style.backgroundColor = solid ? "#242625" : "#fff";
      el.style.width = `${w}px`;
      el.style.height = `${h}px`;
      el.style.borderRadius = `${r}px`;
      el.style.transform = `translate3d(${x - w / 2}px, ${y - h / 2}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointerup", onUp);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-cursor");
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[300] bg-white opacity-0 transition-opacity duration-200 mix-blend-difference"
        style={{ width: DOT, height: DOT }}
      />
    </>
  );
}
