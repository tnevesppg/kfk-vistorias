"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { introSeen } from "./Preloader";

/**
 * Opening of the inner pages, after heronaiapp.com: thin lines draw themselves across a blank page (vertical ones
 * first, then horizontal), the page then opens in four shutters that slide up one after the other, and the lines
 * fade out as the content is revealed. Purely CSS (see .pi-* in globals.css); this component only removes the
 * overlay when it is done. It plays once per session, on the first page seen (the home's loader counts as that
 * page), and never for people who prefer reduced motion.
 */
const COLS = 4; // shutters (and so vertical lines at 25, 50, 75%)
const DONE_MS = 2000;

const seen = () => {
  if (introSeen()) return true;
  try {
    return !!sessionStorage.getItem("kfk-intro");
  } catch {
    return false;
  }
};
const subscribe = () => () => {};

export default function PageIntro() {
  // server and hydration render the overlay (no flash on the first visit); a returning visit drops it right after
  const skip = useSyncExternalStore(subscribe, seen, () => false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (skip) return;
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem("kfk-intro", "1");
      } catch {}
      // the home must not play its loader after this, and entrances should start at once from now on
      document.documentElement.dataset.seen = "1";
      setGone(true);
    }, DONE_MS);
    return () => clearTimeout(t);
  }, [skip]);

  if (skip || gone) return null;

  return (
    <div aria-hidden className="pi-root pointer-events-none fixed inset-0 z-[120]">
      {Array.from({ length: COLS }, (_, i) => (
        <span key={i} className="pi-shutter" style={{ left: `${(i * 100) / COLS}%`, width: `${100 / COLS}%`, ["--i" as string]: i }} />
      ))}
      <div className="pi-lines absolute inset-0">
        {[1, 2, 3].map((n) => (
          <span key={`v${n}`} className="pi-line-y" style={{ left: `${(n * 100) / COLS}%`, ["--i" as string]: n }} />
        ))}
        {[33.33, 66.66].map((top, n) => (
          <span key={`h${n}`} className="pi-line-x" style={{ top: `${top}%`, ["--i" as string]: n }} />
        ))}
      </div>
    </div>
  );
}
