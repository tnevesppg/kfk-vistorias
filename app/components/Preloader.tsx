"use client";

import { useEffect, useState } from "react";

export const COUNT_MS = 2200;
const OPEN_MS = 1000;
const SWAP_MS = 130;

const PHOTOS = [
  "hero-principal",
  "problema-trincas",
  "servico-pericia",
  "problema-infiltracao",
  "servico-vistoria",
  "laudo-protege",
  "hero-faixa",
  "beneficio-4-seguranca",
];

// small optimized thumbnails so the loader itself loads in a blink
const thumb = (name: string) => `/_next/image?url=${encodeURIComponent(`/photos/${name}.jpg`)}&w=384&q=75`;

/**
 * White screen with a square in the middle that flips through photos. A thin frame around it
 * draws itself (top, left, bottom, right) as the load progresses. At the end the frame fades and
 * the two white halves slide apart (up and down) to reveal the page.
 */
export default function Preloader() {
  const [n, setN] = useState(0);
  const [open, setOpen] = useState(false);
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
      const p = Math.min((t - start) / COUNT_MS, 1);
      setN(Math.round((1 - Math.pow(1 - p, 1.6)) * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setOpen(true);
        document.body.style.overflow = "";
        t2 = setTimeout(() => setGone(true), OPEN_MS + 300);
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

  const active = Math.floor((n / 100) * (COUNT_MS / SWAP_MS)) % PHOTOS.length;
  const half = "absolute inset-x-0 h-1/2 bg-white transition-transform ease-[cubic-bezier(0.76,0,0.24,1)]";
  const seg = (k: number) => Math.min(1, Math.max(0, (n - 25 * k) / 25)); // 0..1 progress of side k
  const bar = "absolute bg-neutral-200"; // same grey as the vertical guide lines on the page
  const dir = active % 2 === 0 ? 1 : -1; // photos alternate sliding in from the left / right

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <span className={`${half} top-0`} style={{ transform: open ? "translateY(-100%)" : "none", transitionDuration: `${OPEN_MS}ms`, transitionDelay: open ? "150ms" : "0ms" }} />
      <span className={`${half} bottom-0`} style={{ transform: open ? "translateY(100%)" : "none", transitionDuration: `${OPEN_MS}ms`, transitionDelay: open ? "150ms" : "0ms" }} />

      <div
        className="absolute left-1/2 top-1/2 p-[5px] transition-all duration-300 ease-out"
        style={{ opacity: open ? 0 : 1, transform: `translate(-50%, -50%) scale(${open ? 0.94 : 1})` }}
      >
        {/* the frame draws itself: top, left, bottom, then right closes it */}
        <span className={`${bar} left-0 top-0 h-px w-full origin-left`} style={{ transform: `scaleX(${seg(0)})` }} />
        <span className={`${bar} left-0 top-0 h-full w-px origin-top`} style={{ transform: `scaleY(${seg(1)})` }} />
        <span className={`${bar} bottom-0 left-0 h-px w-full origin-left`} style={{ transform: `scaleX(${seg(2)})` }} />
        <span className={`${bar} bottom-0 right-0 h-full w-px origin-bottom`} style={{ transform: `scaleY(${seg(3)})` }} />

        {/* the photo square: every swap slides in and flashes */}
        <div className="relative h-[clamp(9.5rem,17vw,17.5rem)] w-[clamp(9.5rem,17vw,17.5rem)] overflow-hidden bg-neutral-100">
          {PHOTOS.map((name, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i === active ? `${name}-on-${active}` : name}
              src={thumb(name)}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover ${i === active ? "photo-swap" : ""}`}
              style={{ visibility: i === active ? "visible" : "hidden", ["--dir" as string]: dir }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
