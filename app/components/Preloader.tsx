"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/** Dark curtain with a counter; on 100% it lifts away bottom-to-top, uncovering the page. */
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
        t2 = setTimeout(() => setGone(true), 1200);
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
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-white p-6 text-ink transition-[clip-path] duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] lg:p-[3vw]"
      style={{ clipPath: done ? "inset(0 0 100% 0)" : "inset(0 0 0 0)" }}
    >
      <Image src="/brand/logo.png" unoptimized alt="" width={1400} height={201} priority className="h-10 w-auto lg:h-[3.4vw]" />
      <div className="flex items-end justify-between">
        <p className="text-[clamp(4rem,14vw,16rem)] font-extrabold leading-[0.8] tracking-[-0.06em]">{n}</p>
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-brand">Carregando</p>
      </div>
      <span className="absolute inset-x-0 bottom-0 h-1.5 origin-left bg-gradient-to-r from-brand from-70% to-sun to-70%" style={{ transform: `scaleX(${n / 100})` }} />
    </div>
  );
}
