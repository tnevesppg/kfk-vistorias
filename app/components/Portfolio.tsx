"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, projects } from "@/lib/data";

export default function Portfolio() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visible = projects.filter(
    (p) => active === "All" || p.tags.includes(active),
  );

  return (
    <section id="portfolio" className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="section-title text-4xl font-bold md:text-5xl">
            Portfolio Gallery<span className="text-accent">.</span>
          </h2>
          <a href="#portfolio" className="text-xs font-medium uppercase tracking-widest hover:text-accent">
            View All
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-6 text-xs font-medium uppercase tracking-widest">
          {categories.map((c) => (
            <li key={c}>
              <button
                onClick={() => setActive(c)}
                className={
                  active === c
                    ? "border-b-2 border-accent pb-1 text-ink"
                    : "pb-1 text-neutral-400 hover:text-ink"
                }
              >
                {c}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <figure key={p.title} className="group relative aspect-[4/5] overflow-hidden">
              <Image
                src={p.src}
                alt={p.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white opacity-0 transition group-hover:opacity-100">
                <p className="font-semibold">{p.title}</p>
                <p className="text-xs uppercase tracking-widest text-white/70">
                  {p.tags.join(" / ")}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
