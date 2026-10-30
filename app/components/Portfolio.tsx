"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Portfolio() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visible = projects.filter((p) => active === "All" || p.tags.includes(active));

  return (
    <section id="portfolio" className="py-16 lg:py-[5vw]">
      <Reveal className="flex flex-wrap items-center justify-between gap-6 px-6 lg:px-[8.9%]">
        <div>
          <h2 className="heading text-4xl lg:text-[2.9vw]">Portfolio Gallery <span className="text-sun">.</span></h2>
          <span className="rule mt-4 w-14 lg:mt-[1vw] lg:w-[2.75vw]" />
        </div>
        <ul className="order-3 flex w-full flex-wrap gap-5 text-[11px] font-medium uppercase lg:order-none lg:w-auto lg:gap-[2.5vw] lg:pt-[1vw] lg:text-[0.95vw]">
          {categories.map((c) => (
            <li key={c}>
              <button
                onClick={() => setActive(c)}
                className={active === c ? "border-b-2 border-brand pb-0.5 font-bold text-brand" : "text-neutral-700 transition hover:text-ink"}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
        <a href="#portfolio" className="btn-dark !px-8 !py-5 lg:!w-[10vw] lg:!py-[1.5vw] lg:!text-[0.8vw]">
          View All
        </a>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 lg:mt-[3.2vw] lg:grid-cols-5">
        {visible.map((p, i) => (
          <Reveal key={`${active}-${p.title}`} variant="wipe" delay={i * 90} className="hover:z-10">
            <figure className="group relative aspect-[3/4] overflow-hidden transition-shadow duration-500 hover:shadow-[0_2.5vw_5vw_rgba(0,0,0,0.18)] lg:aspect-auto lg:h-[26.6vw] lg:overflow-visible">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(min-width:1024px) 20vw, 50vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                />
              </div>

              {/* hover panel: plus square on top, vertical title bar at the bottom */}
              <div className="absolute inset-0 overflow-hidden lg:left-[3%] lg:w-[27%] lg:right-auto">
                <span className="absolute inset-x-0 top-0 grid aspect-square -translate-y-full place-items-center bg-sun text-2xl font-light text-ink transition-transform duration-500 ease-out group-hover:translate-y-0 lg:text-[1.6vw]">
                  +
                </span>
                <div className="absolute inset-x-0 bottom-0 flex h-[64%] translate-y-full items-end justify-center gap-2 bg-ink/95 py-[8%] text-white transition-transform duration-500 ease-out group-hover:translate-y-0">
                  <p className="text-[11px] font-light [writing-mode:vertical-rl] rotate-180 lg:text-[0.8vw]">{p.tags.join(" · ")}</p>
                  <p className="text-sm font-bold [writing-mode:vertical-rl] rotate-180 lg:text-[1.1vw]">{p.title}</p>
                </div>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
