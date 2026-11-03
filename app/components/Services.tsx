import Image from "next/image";
import { images, services } from "@/lib/data";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

function More({ s, className = "" }: { s: (typeof services)[number]; className?: string }) {
  return (
    <a
      href={s.href}
      aria-label={`Saiba mais sobre ${s.title}`}
      className={`group inline-flex items-center gap-2 border-b border-sun pb-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink lg:text-[length:max(0.65vw,11.7px)] ${className}`}
    >
      Saiba mais <span aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
    </a>
  );
}

function Item({ s, w, right = false }: { s: (typeof services)[number]; w: string; right?: boolean }) {
  return (
    <Reveal className={`lg:w-max ${right ? "lg:text-right" : ""}`} style={{ ["--w" as string]: w }}>
      <h3 className="text-xl font-bold text-[#0c0c0c] lg:whitespace-nowrap lg:text-[length:max(1.55vw,27.9px)] lg:leading-[1.4]">
        <a href={s.href} className="hover:text-brand">{s.n}. {s.title}</a>
      </h3>
      <p className={`mt-4 max-w-sm text-[15px] leading-[1.7] text-[#0c0c0c] lg:mt-[1vw] lg:w-[var(--w)] lg:max-w-none lg:text-[length:max(0.88vw,15.8px)] lg:leading-[1.5] ${right ? "lg:ml-auto" : ""}`}>{s.text}</p>
      <More s={s} className="mt-4 lg:mt-[1.1vw]" />
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-16 lg:px-0 lg:pb-[5vw] lg:pt-[0.7vw]">
      <div
        className="blueprint pointer-events-none absolute right-0 top-[2vw] hidden h-[56vw] w-[28vw] opacity-90 lg:block"
        style={{ backgroundSize: "auto 90%" }}
      />
      {/* mobile / tablet: title first, then each service with its own photo */}
      <div
        aria-hidden
        className="blueprint pointer-events-none absolute -right-16 top-10 h-[110vw] w-[80vw] opacity-[0.12] lg:hidden"
        style={{ backgroundSize: "auto 90%" }}
      />
      <div className="relative mx-auto md:max-w-2xl lg:hidden">
        <Reveal>
          <h2 className="heading text-[2.6rem] leading-[1.02]">Nossos Serviços<span className="text-sun">.</span></h2>
          <span className="rule mt-5 w-14" />
        </Reveal>
        <div className="mt-12 space-y-14">
          {[
            { s: services[0], src: images.serviceA, alt: "Engenheiro inspecionando a fachada de um edifício", ratio: "aspect-[4/3]", sp: 0.05 },
            { s: services[1], src: images.serviceB, alt: "Engenheiro e cliente vistoriando um apartamento", ratio: "aspect-[16/10]", sp: -0.05 },
            { s: services[2], src: images.serviceMain, alt: "Perito medindo umidade em parede", ratio: "aspect-[4/5]", sp: 0.05 },
          ].map(({ s, src, alt, ratio, sp }) => (
            <article key={s.n}>
              <Reveal variant="wipe" className={`photo relative overflow-hidden ${ratio}`}>
                <Parallax speed={sp} className="absolute -inset-y-[6%] inset-x-0">
                  <Image src={src} alt={alt} fill sizes="(min-width:768px) 42rem, 100vw" className="object-cover" />
                </Parallax>
                <span className="absolute left-0 top-0 grid h-12 w-14 place-items-center bg-sun text-lg font-extrabold text-ink">{s.n}</span>
              </Reveal>
              <Reveal delay={80}>
                <h3 className="mt-6 text-[1.4rem] font-bold leading-tight text-[#0c0c0c]"><a href={s.href}>{s.title}</a></h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-neutral-700">{s.text}</p>
                <More s={s} className="mt-4" />
              </Reveal>
            </article>
          ))}
        </div>
      </div>

      <div className="relative hidden lg:grid lg:grid-cols-[29.8vw_36vw_1fr] lg:gap-x-[4.7vw] lg:pl-[1.6vw]">
        {/* left column: two staggered items, text aligned to the right edge */}
        <div className="flex flex-col gap-12 lg:gap-[1.2vw]">
          <Parallax speed={0.06} className="space-y-6 lg:flex lg:flex-col lg:items-end lg:space-y-0 lg:gap-[1vw]">
            <Reveal variant="wipe" className="photo relative aspect-[4/3] lg:aspect-[338/300] lg:w-[17.6vw]">
              <Image src={images.serviceA} alt="" fill sizes="20vw" className="object-cover" />
            </Reveal>
            <Item s={services[0]} w="14.4vw" right />
          </Parallax>
          <Parallax speed={0.09} className="space-y-6 lg:flex lg:flex-col lg:items-end lg:space-y-0 lg:gap-[1vw]">
            <Reveal variant="wipe" className="photo relative aspect-[4/3] lg:aspect-[573/333] lg:w-full">
              <Image src={images.serviceB} alt="" fill sizes="30vw" className="object-cover" />
            </Reveal>
            <Item s={services[1]} w="21.6vw" right />
          </Parallax>
        </div>

        {/* center tall image */}
        <Reveal variant="wipe" delay={150} className="photo relative aspect-[3/4] lg:-mt-[3vw] lg:aspect-auto lg:h-[56vw]">
          <Parallax speed={-0.05} className="absolute inset-0">
            <Image src={images.serviceMain} alt="Perito medindo umidade em parede" fill sizes="36vw" className="object-cover" />
          </Parallax>
        </Reveal>

        {/* right column: vertical heading on top, third item at the bottom */}
        <div className="relative lg:min-h-[52vw]">
          <Reveal className="lg:absolute lg:left-[26%] lg:top-[3vw]">
            <h2 className="heading text-4xl lg:text-[2.6vw] lg:[writing-mode:vertical-rl]">Nossos Serviços.</h2>
          </Reveal>
          <div className="mt-8 lg:absolute lg:bottom-[9vw] lg:left-0 lg:mt-0">
            <Item s={services[2]} w="17vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
