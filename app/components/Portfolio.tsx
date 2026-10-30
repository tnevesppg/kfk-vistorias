"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Portfolio() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visible = projects.filter((p) => active === "All" || p.tags.includes(active));

  return (
    <section id="portfolio" className="px-6 py-16 lg:px-[8.33%] lg:py-[5vw]">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <h2 className="heading text-4xl lg:text-[2.1vw]">Portfolio Gallery .</h2>
        <ul className="order-3 flex w-full flex-wrap gap-5 text-[10px] font-medium uppercase tracking-wider lg:order-none lg:w-auto lg:text-[0.62vw] lg:gap-[1.8vw]">
          {categories.map((c) => (
            <li key={c}>
              <button
                onClick={() => setActive(c)}
                className={active === c ? "text-ink" : "text-neutral-400 transition hover:text-ink"}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
        <a href="#portfolio" className="btn-dark">View All</a>
      </div>

      <div className="mt-10 grid grid-cols-2 lg:mt-[3vw] lg:grid-cols-5">
        {visible.map((p, i) => (
          <Reveal key={`${active}-${p.title}`} delay={i * 80}>
            <figure className="group relative aspect-[3/4] overflow-hidden lg:aspect-auto lg:h-[22vw]">
              <Image
                src={p.src}
                alt={p.title}
                fill
                sizes="(min-width:1024px) 20vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5 text-white opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="text-sm font-semibold">{p.title}</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/70">{p.tags.join(" · ")}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
