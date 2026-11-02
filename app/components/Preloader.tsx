"use client";

import { useEffect, useState } from "react";

/** Blue fills the screen bottom-to-top as the counter climbs, then fades out to reveal the page. */
export default function Preloader() {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;
    let t2: ReturnType<typeof setTimeout>;

    const tick = (t: number) => {
      const p = Math.min((t - start) / 1500, 1);
      setN(Math.round((1 - Math.pow(1 - p, 2)) * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
        document.body.style.overflow = "";
        t2 = setTimeout(() => setGone(true), 1000);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] flex flex-col justify-end overflow-hidden bg-brand-dark p-6 text-sun transition-opacity duration-[900ms] ease-out lg:p-[3vw]"
      style={{ opacity: done ? 0 : 1 }}
    >
      <span className="absolute inset-0 origin-bottom bg-brand" style={{ transform: `scaleY(${n / 100})` }} />
      <div className="relative flex items-end justify-between">
        <p className="text-[clamp(4rem,14vw,16rem)] font-extrabold leading-[0.8] tracking-[-0.06em]">{n}</p>
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em]">Carregando</p>
      </div>
    </div>
  );
}
