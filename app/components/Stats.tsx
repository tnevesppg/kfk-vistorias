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
        const p = Math.min((t - start) / 1800, 1);
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

  return <span ref={ref}>{n}</span>;
}

export default function Stats() {
  return (
    <section className="px-6 py-14 lg:px-[8.33%] lg:py-[4vw]">
      <div className="grid grid-cols-2 gap-10 lg:grid-cols-5 lg:gap-0">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl font-bold tracking-tight lg:text-[2.1vw]">
              <Counter to={s.value} />
            </p>
            <p className="mt-2 text-xs font-medium lg:text-[0.7vw]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
