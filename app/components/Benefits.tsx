import Image from "next/image";
import { benefits } from "@/lib/data";
import Reveal from "./Reveal";

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 lg:py-[5vw]">
      <Reveal className="flex flex-wrap items-center justify-between gap-6 px-6 lg:px-[8.9%]">
        <div>
          <h2 className="heading text-[2.6rem] leading-[1.02] lg:text-[2.9vw]">Por que nos contratar <span className="text-sun">.</span></h2>
          <span className="rule mt-4 w-14 lg:mt-[1vw] lg:w-[2.75vw]" />
        </div>
        <span aria-hidden className="hidden bg-brand sm:block sm:h-14 sm:w-40 lg:h-[4.2vw] lg:w-[10vw]" />
      </Reveal>

      <div className="mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-[3.2vw] lg:grid lg:grid-cols-5 lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
        {benefits.map((b, i) => (
          <Reveal key={b.n} variant="wipe" delay={i * 90} className="max-lg:w-[min(80vw,22rem)] max-lg:shrink-0 max-lg:snap-center">
            <figure className="photo group relative aspect-[3/4] overflow-hidden lg:aspect-auto lg:h-[26.6vw]">
              <Image
                src={b.src}
                alt=""
                fill
                sizes="(min-width:1024px) 20vw, 50vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white lg:p-[1.8vw]">
                <p className="text-sm font-bold text-sun lg:text-[length:max(0.95vw,17.1px)]">{b.n}</p>
                <h3 className="mt-2 text-lg font-bold uppercase lg:mt-[0.6vw] lg:text-[length:max(1.1vw,19.8px)] lg:leading-[1.3]">{b.title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-white/90 lg:mt-[0.8vw] lg:text-[length:max(0.86vw,15.5px)] lg:leading-[1.55]">{b.text}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <p aria-hidden className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400 lg:hidden">Deslize →</p>
    </section>
  );
}
