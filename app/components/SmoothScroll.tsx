"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { COUNT_MS } from "./Preloader";

/** Weighty, slower wheel scrolling (mouse). Touch keeps native scrolling. */
export default function SmoothScroll() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.075, // lower = heavier and slower to catch up
      wheelMultiplier: 0.85, // each wheel notch travels a bit less
      smoothWheel: true,
      autoRaf: true, // Lenis 1.3 does not run its own animation loop unless asked
    });

    // keep the page still while the preloader runs, then release
    lenis.stop();
    const release = setTimeout(() => lenis.start(), COUNT_MS);

    // in-page anchors glide too, and respect scroll-margin (fixed header on mobile)
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a || a.target === "_blank") return;
      const id = a.getAttribute("href")!.slice(1);
      const el = id ? document.getElementById(id) : document.documentElement;
      if (!el) return;
      e.preventDefault();
      const margin = id ? parseFloat(getComputedStyle(el).scrollMarginTop) || 0 : 0;
      lenis.scrollTo(id ? el : 0, { offset: -margin, duration: 1.6 });
      history.replaceState(null, "", id ? `#${id}` : location.pathname);
    };
    document.addEventListener("click", onClick);

    return () => {
      clearTimeout(release);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
