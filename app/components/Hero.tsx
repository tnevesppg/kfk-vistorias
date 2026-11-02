import Image from "next/image";
import { images } from "@/lib/data";
import { u } from "@/lib/u";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import HeroTitle from "./HeroTitle";
import HeroVideo from "./HeroVideo";

function Lead() {
  return (
    <p className="text-center text-lg font-semibold text-neutral-700 lg:text-[1.7vw]">
      Você se identifica com algum desses problemas?
    </p>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative">
      {/* desktop: absolute collage mirrored from the demo (1920 design grid) */}
      <div className="relative hidden lg:block" style={{ height: u(1130) }}>
        <Parallax speed={0.12} fadeOut className="photo load-wipe absolute" style={{ left: u(160), top: u(136), width: u(160), height: u(564), ["--d" as string]: "700ms" }}>
          <Image src={images.heroPlant} alt="Fachada de edifício residencial vista de baixo" fill sizes="25vw" quality={90} priority className="object-cover" />
        </Parallax>

        <Parallax speed={0.1} fadeOut className="photo load-wipe absolute" style={{ left: u(1152), top: u(136), width: u(736), height: u(564), ["--d" as string]: "600ms" }}>
          <HeroVideo alt="Engenheiro inspecionando trinca em parede" />
        </Parallax>

        <span className="absolute h-[3px] bg-brand" style={{ left: u(490), top: u(136), width: u(53) }} />
        <span className="absolute h-[3px] bg-sun" style={{ left: u(1095), top: u(647), width: u(53) }} />

        <Parallax mode="scrollX" speed={0.28} className="absolute z-10 whitespace-nowrap" style={{ left: u(490), top: u(262) }}>
          <h1 className="font-extrabold" aria-label="Laudos precisos, decisões seguras.">
            <HeroTitle />
          </h1>
        </Parallax>

        <div className="load-rise absolute" style={{ left: u(490), top: u(520), width: u(640), ["--d" as string]: "400ms" }}>
          <p className="text-neutral-700" style={{ fontSize: u(18), lineHeight: 1.65 }}>
            <span className="block lg:whitespace-nowrap">Mancha que volta, trinca que cresce, laudo contestado.</span>
            <span className="block lg:whitespace-nowrap">Descubra a causa real antes que vire prejuízo.</span>
          </p>
        </div>

        <div className="load-rise absolute" style={{ left: u(490), top: u(650), ["--d" as string]: "600ms" }}>
          <a href="#contact" className="btn-sun">Solicitar Orçamento</a>
        </div>

        <Parallax speed={0.08} fadeOut className="photo load-wipe absolute" style={{ left: u(800), top: u(700), width: u(320), height: u(275), ["--d" as string]: "200ms" }}>
          <Image src={images.heroSmall} alt="Mão com régua medindo trinca na parede" fill sizes="35vw" quality={90} className="object-cover" />
        </Parallax>

        <div className="load-rise absolute" style={{ left: u(1265), top: u(740), width: u(430), ["--d" as string]: "300ms" }}>
          <h2 className="font-extrabold" style={{ fontSize: u(64), letterSpacing: "-0.05em", lineHeight: 1 }}>
            sem achismo
          </h2>
          <p className="text-neutral-700" style={{ marginTop: u(40), fontSize: u(18), lineHeight: 1.65 }}>
            Você não precisa adivinhar o tamanho do problema. Um engenheiro registra, explica e indica o caminho, com laudo que sustenta sua decisão em assembleia, seguro ou disputa.</p>
        </div>

        <div className="load-rise absolute" style={{ left: u(160), top: u(1050), width: u(1600) }}>
          <Lead />
        </div>
      </div>

      {/* mobile / tablet */}
      <div className="mx-auto px-6 pb-14 pt-28 md:max-w-2xl lg:hidden">
        <span className="load-rise block h-[3px] w-12 bg-brand" style={{ ["--d" as string]: "300ms" }} />
        <h1 className="mt-5 text-[clamp(2.5rem,10.4vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.045em]" aria-label="Laudos precisos, decisões seguras.">
          {[
            [{ t: "Laudos ", accent: false }, { t: "precisos,", accent: true }],
            [{ t: "decisões seguras.", accent: false }],
          ].map((line, li) => (
            <span key={li} aria-hidden className="block">
              {line.map((part, pi) => (
                <span key={pi} className={part.accent ? "accent" : undefined}>
                  {Array.from(part.t).map((ch, i) => (
                    <span key={i} className="draw-letter" style={{ ["--i" as string]: li * 12 + pi * 7 + i }}>
                      {ch === " " ? "\u00a0" : ch}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <div className="load-rise" style={{ ["--d" as string]: "550ms" }}>
          <p className="mt-6 text-[17px] leading-[1.6] text-neutral-700">
            <span className="block">Mancha que volta, trinca que cresce, laudo contestado.</span>
            <span className="mt-2 block font-semibold text-ink">Descubra a causa real antes que vire prejuízo.</span>
          </p>
          <a href="#contact" className="btn-sun mt-8 w-full justify-center py-4 text-sm">
            Solicitar Orçamento <span aria-hidden>→</span>
          </a>
        </div>

        <div className="relative mt-12">
          <span className="absolute -left-6 -top-3 z-10 h-[3px] w-10 bg-sun" />
          <Reveal>
            <div className="photo load-wipe relative aspect-[4/3] overflow-hidden" style={{ ["--d" as string]: "700ms" }}>
              <Parallax speed={0.05} className="absolute -inset-y-[6%] inset-x-0">
                <HeroVideo alt="Engenheiro inspecionando trinca em parede" />
              </Parallax>
            </div>
          </Reveal>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Reveal delay={60}>
              <div className="photo load-wipe relative aspect-[3/4] overflow-hidden" style={{ ["--d" as string]: "850ms" }}>
                <Parallax speed={0.07} className="absolute -inset-y-[6%] inset-x-0">
                  <Image src={images.heroPlant} alt="Fachada de edifício residencial vista de baixo" fill sizes="(min-width:768px) 21rem, 50vw" quality={90} className="object-cover" />
                </Parallax>
              </div>
            </Reveal>
            <Reveal delay={140} className="mt-10">
              <div className="photo load-wipe relative aspect-[3/4] overflow-hidden" style={{ ["--d" as string]: "1000ms" }}>
                <Parallax speed={-0.05} className="absolute -inset-y-[6%] inset-x-0">
                  <Image src={images.heroSmall} alt="Mão com régua medindo trinca na parede" fill sizes="(min-width:768px) 21rem, 50vw" quality={90} className="object-cover" />
                </Parallax>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 pb-2">
          <Lead />
        </div>
      </div>
    </section>
  );
}
