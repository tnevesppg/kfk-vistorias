import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "../components/PageShell";
import HeroVideo from "../components/HeroVideo";
import Reveal from "../components/Reveal";
import PageOpening from "../components/PageOpening";
import AccordionItem from "../components/AccordionItem";

export const metadata: Metadata = {
  title: "Sobre | KFK Vistorias & Perícias",
  description: "A KFK Vistorias nasceu da experiência da KFK Engenharia e da KFK Construtora para oferecer inspeção, vistoria e perícia com independência técnica.",
};

/** Video slot under the title (the poster shows until the clip loads). */
const VIDEO_SRC = "/videos/sobre-video.mp4";
const VIDEO_POSTER = "/photos/sobre-quem-somos.jpg";

const diffs = [
  { t: "Visão de quem constrói", d: "O grupo executa obras, então o laudo aponta a causa e a solução viável, não só o defeito." },
  { t: "Quem vistoria é quem assina", d: "O engenheiro que vai a campo é o mesmo que assina o laudo, com ART/RRT." },
  { t: "Prazo e escopo combinados", d: "Proposta com escopo, prazo e valor definidos antes de começar." },
  { t: "Linguagem clara", d: "Sem jargão desnecessário: o laudo explica o que foi encontrado e o que fazer primeiro." },
];

const normas = [
  "ABNT NBR 16747 · Inspeção predial",
  "ABNT NBR 13752 · Perícias de engenharia",
  "ABNT NBR 14653 · Avaliação de bens",
  "ABNT NBR 9575 · Impermeabilização",
  "ART/RRT · Responsabilidade técnica",
];

const pad = "px-6 lg:px-[4.2vw]";
const label = "text-xs font-semibold uppercase tracking-[0.04em] lg:text-[length:max(0.8vw,14.4px)]";
const lead = "text-[1.6rem] leading-[1.2] tracking-[-0.02em] lg:text-[length:max(1.9vw,34px)]";
const body = "text-[15px] leading-[1.75] text-neutral-700 lg:text-[length:max(0.95vw,17.1px)]";
const cell = "border-t border-neutral-200 py-8 lg:border-l lg:border-t-0 lg:py-[3vw] lg:first:border-l-0";

export default function SobrePage() {
  return (
    <PageShell>
      <PageOpening
        mediaClassName="photo relative mt-8 h-[calc(100svh-24rem)] min-h-[15rem] lg:mt-[3vw] lg:h-[calc(100svh-26.3vw)] lg:min-h-[18rem]"
        title={
      <section className={`${pad} pt-28 lg:pt-[9vw]`}>
        <p className="flex items-center gap-3 text-sm lg:gap-[0.8vw] lg:text-[length:max(0.9vw,16.2px)]">
          <a href="/" className="hover:text-brand">Início</a>
          <span aria-hidden className="text-neutral-400">→</span>
          <span className="text-neutral-400">Sobre</span>
        </p>
        <h1 className="mt-6 text-[2.6rem] leading-[1.04] tracking-[-0.03em] lg:mt-[2vw] lg:text-[5.2vw]">
          Conhecemos a obra
          <br />
          <span className="accent">por dentro</span>
        </h1>
      </section>
        }
      >
        <HeroVideo alt="Engenheiro da KFK em vistoria de campo" src={VIDEO_SRC} poster={VIDEO_POSTER} />
      </PageOpening>

      {/* quem somos */}
      <section className={pad}>
        <div className="grid lg:grid-cols-3">
          <div className={cell}>
            <p className={label}>Quem somos</p>
          </div>
          <Reveal variant="left" className={`${cell} lg:col-span-2 lg:pl-[3vw]`}>
            <p className={lead}>
              A KFK Vistorias nasceu da experiência da KFK Engenharia e da KFK Construtora para oferecer inspeção, vistoria e perícia com independência técnica.
            </p>
          </Reveal>
        </div>
        <div className="grid border-t border-neutral-200 lg:grid-cols-3">
          <Reveal variant="wipe-x" className="relative aspect-[4/3] overflow-hidden py-0 lg:col-span-2 lg:my-[3vw] lg:aspect-auto lg:min-h-[28vw]">
            <div className="photo absolute inset-0">
              <Image src="/photos/sobre-quem-somos.jpg" alt="Engenheiro inspecionando equipamentos no terraço de um prédio no Rio de Janeiro" fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal variant="right" className="flex flex-col justify-end gap-5 border-neutral-200 py-8 lg:border-l lg:px-[3vw] lg:py-[3vw]">
            <p className={body}>
              Conhecemos a obra por dentro, e por isso sabemos onde os problemas costumam aparecer. Cada laudo é assinado por engenheiro habilitado, com ART/RRT, fotos e conclusões claras.
            </p>
            <p className={body}>
              Atendemos síndicos, administradoras, proprietários, construtoras e advogados no Rio de Janeiro, com linguagem clara e sem jargão desnecessário.
            </p>
          </Reveal>
        </div>
      </section>

      {/* normas */}
      <section className={`${pad} border-t border-neutral-200`}>
        <div className="grid lg:grid-cols-3">
          <div className={cell}>
            <p className={label}>Normas e referências</p>
            <h2 className="mt-4 text-[1.6rem] leading-[1.15] tracking-[-0.02em] lg:mt-[1.2vw] lg:text-[length:max(1.9vw,34px)]">Normas como ferramenta de trabalho</h2>
            <p className={`${body} mt-5 lg:mt-[1.6vw] lg:max-w-[22vw]`}>
              Cada laudo segue as normas técnicas aplicáveis da ABNT e é registrado com ART/RRT, para que a conclusão se sustente diante de qualquer parte.
            </p>
          </div>
          <ol className="border-t border-neutral-200 lg:col-span-2 lg:border-l lg:border-t-0">
            {normas.map((n, i) => (
              <Reveal key={n} variant={(["right", "left", "zoom", "right", "left"] as const)[i % 5]} delay={i * 40}>
                <li className="flex items-baseline gap-5 border-b border-neutral-200 py-5 last:border-b-0 lg:gap-[1.6vw] lg:px-[3vw] lg:py-[1.6vw]">
                  <span className="text-sm text-neutral-400 lg:text-[length:max(0.85vw,15.3px)]">0{i + 1}</span>
                  <span className="text-lg leading-tight tracking-[-0.01em] lg:text-[length:max(1.6vw,28px)]">{n}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* compromisso: grey panel */}
      <section className={`${pad} border-t border-neutral-200 py-10 lg:py-[3vw]`}>
        <Reveal variant="zoom" className="grid bg-neutral-200/70 lg:grid-cols-3">
          <div className="p-6 lg:p-[3vw]">
            <p className={label}>Compromisso</p>
            <h2 className="mt-4 text-[1.9rem] leading-[1.1] tracking-[-0.03em] lg:mt-[1.2vw] lg:text-[length:max(2.2vw,38px)]">
              O laudo no centro,
              <br />a clareza em cada etapa
            </h2>
          </div>
          <div className="border-t border-neutral-300 p-6 lg:border-l lg:border-t-0 lg:p-[3vw]">
            <p className={body}>
              Do contato ao laudo em quatro etapas claras: briefing, proposta, vistoria técnica e entrega do documento assinado por engenheiro.
            </p>
            <a href="/servicos" className="mt-6 inline-flex items-center gap-2 border-b border-ink pb-1 text-xs font-semibold uppercase tracking-[0.04em] hover:text-brand lg:mt-[2vw] lg:text-[length:max(0.75vw,13.5px)]">
              <span aria-hidden className="h-2 w-2 bg-sun" />
              Conheça os serviços
            </a>
          </div>
          <div className="relative min-h-64 lg:min-h-[22vw]">
            <div className="photo absolute inset-0">
              <Image src="/photos/sobre-compromisso.jpg" alt="Dois engenheiros revisando um laudo técnico sobre a mesa" fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* diferenciais: image + accordion */}
      <section className={`${pad} border-t border-neutral-200 py-10 lg:py-[4vw]`}>
        <p className={label}>Nosso diferencial</p>
        <h2 className="mt-4 text-[1.9rem] leading-[1.1] tracking-[-0.03em] lg:mt-[1.2vw] lg:text-[length:max(2.2vw,38px)]">O nosso compromisso, a sua garantia</h2>
        <div className="mt-10 grid gap-8 lg:mt-[4vw] lg:grid-cols-[1fr_1.3fr] lg:gap-0">
          <Reveal variant="wipe-x" className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[26vw] lg:mr-[3vw]">
            <div className="photo absolute inset-0">
              <Image src="/photos/sobre-diferencial.jpg" alt="Engenheiro mostrando um apartamento a dois clientes durante a vistoria" fill sizes="(min-width:1024px) 38vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <div className="border-neutral-200 lg:border-l lg:pl-[3vw]">
            {diffs.map((x, i) => (
              <Reveal key={x.t} variant={(["right", "left", "right", "left"] as const)[i % 4]} delay={i * 40}>
                <AccordionItem
                  group="diff"
                  defaultOpen={i === 0}
                  className="border-b border-neutral-300 first:border-t lg:first:border-t-0"
                  btnClassName="py-5 lg:py-[1.6vw]"
                  plusClassName="h-7 w-7 lg:h-[1.8vw] lg:min-h-7 lg:w-[1.8vw] lg:min-w-7"
                  bodyClassName={`${body} max-w-[34rem] pb-6 pl-9 lg:max-w-[34vw] lg:pb-[2vw] lg:pl-[3vw]`}
                  head={
                    <span className="flex items-baseline gap-4 lg:gap-[1.2vw]">
                      <span className="text-sm text-neutral-400 lg:text-[length:max(0.85vw,15.3px)]">0{i + 1}</span>
                      <span className="text-xl leading-tight tracking-[-0.02em] lg:text-[length:max(1.9vw,34px)]">{x.t}</span>
                    </span>
                  }
                >
                  {x.d}
                </AccordionItem>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
