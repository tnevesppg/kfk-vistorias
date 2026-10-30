"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="section-title text-4xl font-bold md:text-5xl">
          Customer Says<span className="text-accent">.</span>
        </h2>
        <div className="mt-12 min-h-56">
          <span className="section-title text-7xl leading-none text-accent">“</span>
          <p className="mt-2 text-lg leading-8 text-neutral-600">{t.quote}</p>
          <p className="mt-6 font-semibold">{t.name}</p>
          <p className="text-xs uppercase tracking-widest text-neutral-400">{t.city}</p>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Depoimento ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2.5 w-2.5 rounded-full ${idx === i ? "bg-accent" : "bg-neutral-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
