"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1600, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return <span ref={ref}>{n.toLocaleString("pt-BR")}</span>;
}

export default function Stats() {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="section-title text-5xl font-bold text-accent">
              <Counter to={s.value} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-white/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
