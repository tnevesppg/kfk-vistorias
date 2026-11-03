import Image from "next/image";
import type { Servico } from "@/lib/servicos";
import PageShell from "./PageShell";
import Reveal from "./Reveal";

const pad = "px-6 lg:px-[4.2vw]";
const label = "text-xs font-semibold uppercase tracking-[0.04em] lg:text-[length:max(0.8vw,14.4px)]";
const h2 = "text-[1.9rem] leading-[1.1] tracking-[-0.03em] lg:text-[length:max(2.4vw,40px)]";
const body = "text-[15px] leading-[1.75] text-neutral-700 lg:text-[length:max(0.95vw,17.1px)]";

/** Horizontal rule that draws itself left to right as it enters the screen. */
function LineX({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`draw-x block h-px w-full bg-neutral-300 ${className}`} />;
}

function Plus() {
  return (
    <span aria-hidden className="relative block h-7 w-7 shrink-0 bg-sun transition-transform duration-500 ease-out group-open:rotate-45 lg:h-[1.8vw] lg:min-h-7 lg:w-[1.8vw] lg:min-w-7">
      <span className="absolute left-1/2 top-1/2 h-[2px] w-[40%] -translate-x-1/2 -translate-y-1/2 bg-ink" />
      <span className="absolute left-1/2 top-1/2 h-[40%] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-ink" />
    </span>
  );
}

export default function ServicePage({ s }: { s: Servico }) {
  return (
    <PageShell footerCta={false}>
      {/* title */}
      <section className={`relative ${pad} pt-28 lg:pt-[9vw]`}>
        <p className="flex flex-wrap items-center gap-3 text-sm lg:gap-[0.8vw] lg:text-[length:max(0.9vw,16.2px)]">
          <a href="/" className="hover:text-brand">Início</a>
          <span aria-hidden className="text-neutral-400">→</span>
          <a href="/servicos" className="hover:text-brand">Serviços</a>
          <span aria-hidden className="text-neutral-400">→</span>
          <span className="text-neutral-400">{s.nome}</span>
        </p>
        <div className="mt-6 grid gap-8 lg:mt-[2vw] lg:grid-cols-3 lg:gap-[3vw]">
          <h1 className="text-[2.6rem] leading-[1.04] tracking-[-0.03em] lg:col-span-2 lg:text-[5.2vw]">
            {s.h1}
            <br />
            <span className="accent">{s.h1Accent}</span>
          </h1>
          <div className="flex flex-col justify-end lg:pb-[0.8vw]">
            <span className="rule mb-5 w-12 lg:mb-[1.4vw]" />
            <p className="text-lg leading-snug tracking-[-0.01em] lg:text-[length:max(1.35vw,24px)]">{s.slogan}</p>
          </div>
        </div>
      </section>

      {/* hero image + fact strip */}
      <Reveal variant="wipe" className="photo photo-pop relative mt-10 aspect-[16/10] overflow-hidden lg:mt-[4vw] lg:aspect-[2.3/1]">
        <Image src={s.image} alt={s.imageAlt} fill priority sizes="100vw" className="object-cover" />
      </Reveal>
      <div className={`relative ${pad}`}>
        <div className="grid sm:grid-cols-3">
          {s.meta.map((m, i) => (
            <div key={m.k} className={`py-5 lg:py-[1.6vw] ${i > 0 ? "border-t border-neutral-300 sm:border-l sm:border-t-0 sm:pl-5 lg:pl-[2vw]" : ""}`}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.04em] text-neutral-500 lg:text-[length:max(0.7vw,12.6px)]">{m.k}</p>
              <p className="mt-2 text-base lg:mt-[0.5vw] lg:text-[length:max(1.2vw,21px)]">{m.v}</p>
            </div>
          ))}
        </div>
        <LineX />
      </div>

      {/* resumo + pilares */}
      <section className={`relative ${pad} py-12 lg:py-[6vw]`}>
        <Reveal className="max-w-3xl lg:max-w-[52vw]">
          <p className="text-[1.6rem] leading-[1.2] tracking-[-0.02em] lg:text-[length:max(2vw,34px)]">{s.resumo}</p>
        </Reveal>
        <div className="mt-12 lg:mt-[5vw]">
          <LineX />
          <div className="grid lg:grid-cols-3">
            {s.pilares.map((p, i) => (
              <Reveal key={p.t} delay={i * 60} className="relative py-8 lg:py-[3vw] lg:pr-[3vw] lg:[&:not(:first-child)]:pl-[3vw]">
                {i > 0 && <span aria-hidden className="draw-y absolute inset-y-0 left-0 hidden w-px bg-neutral-300 lg:block" />}
                <p className="flex items-center gap-3 text-sm text-neutral-400 lg:gap-[0.8vw] lg:text-[length:max(0.85vw,15.3px)]">
                  <span aria-hidden className="h-2 w-2 bg-sun" />
                  0{i + 1}
                </p>
                <h3 className="mt-4 text-[1.9rem] leading-[1.05] tracking-[-0.03em] lg:mt-[1.2vw] lg:text-[length:max(2.6vw,42px)]">{p.t}</h3>
                <p className={`${body} mt-4 max-w-sm lg:mt-[1.2vw] lg:max-w-[20vw]`}>{p.d}</p>
              </Reveal>
            ))}
          </div>
          <LineX />
        </div>
      </section>

      {/* o que inclui */}
      <section className={`relative ${pad} pb-12 lg:pb-[6vw]`}>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-0">
          <div className="lg:sticky lg:top-[8vw] lg:self-start lg:pr-[3vw]">
            <p className={label}>Escopo</p>
            <h2 className={`${h2} mt-4 lg:mt-[1.2vw]`}>O que inclui</h2>
            <p className={`${body} mt-5 max-w-sm lg:mt-[1.6vw] lg:max-w-[22vw]`}>
              Tudo o que um engenheiro olha para entender a condição real do prédio, do papel ao telhado.
            </p>
            <a href="/orcamento" className="btn-sun mt-8 lg:mt-[2.4vw]">Pedir proposta</a>
          </div>
          <ol className="lg:col-span-2 lg:border-l lg:border-neutral-300 lg:pl-[3vw]">
            <LineX />
            {s.inclui.map((item, i) => (
              <Reveal key={item} delay={i * 30}>
                <li className="group">
                  <div className="flex items-baseline gap-5 py-5 transition-colors duration-300 group-hover:text-brand lg:gap-[2vw] lg:py-[1.8vw]">
                    <span className="w-8 shrink-0 text-sm text-neutral-400 lg:w-[3vw] lg:text-[length:max(0.9vw,16.2px)]">0{i + 1}</span>
                    <span className="flex-1 text-lg leading-snug tracking-[-0.01em] lg:text-[length:max(1.5vw,26px)]">{item}</span>
                    <span aria-hidden className="text-xl text-sun transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                  </div>
                  <LineX />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* como fazemos: timeline */}
      <section className={`relative ${pad} pb-12 lg:pb-[7vw]`}>
        <p className={label}>Como fazemos</p>
        <h2 className={`${h2} mt-4 lg:mt-[1.2vw]`}>Do primeiro contato ao laudo</h2>
        <div className="relative mt-12 lg:mt-[5vw]">
          <span aria-hidden className="draw-x absolute left-0 right-0 top-[5px] hidden h-px bg-neutral-300 lg:block" />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-[2vw]">
            {s.etapas.map((e, i) => (
              <Reveal key={e.t} delay={i * 70} className="relative border-l border-neutral-300 pl-6 lg:border-l-0 lg:pl-0 lg:pt-[2.4vw]">
                <span aria-hidden className="absolute -left-[5px] top-1 h-[11px] w-[11px] rounded-full bg-sun lg:left-0 lg:top-0" />
                <span aria-hidden className="draw-y absolute left-[5px] top-[11px] hidden h-[1.6vw] w-px bg-neutral-300 lg:block" />
                <p className="text-sm text-neutral-400 lg:text-[length:max(0.85vw,15.3px)]">Etapa 0{i + 1}</p>
                <h3 className="mt-2 text-2xl leading-tight tracking-[-0.02em] lg:mt-[0.6vw] lg:text-[length:max(1.8vw,30px)]">{e.t}</h3>
                <p className={`${body} mt-3 lg:mt-[0.8vw]`}>{e.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* você recebe: grey panel */}
      <section className={`relative ${pad} pb-12 lg:pb-[6vw]`}>
        <Reveal className="grid bg-neutral-200/70 lg:grid-cols-3">
          <div className="p-6 lg:p-[3vw]">
            <p className={label}>Entregáveis</p>
            <h2 className={`${h2} mt-4 lg:mt-[1.2vw]`}>Você recebe</h2>
          </div>
          <ul className="border-t border-neutral-300 lg:border-l lg:border-t-0">
            {s.recebe.map((r) => (
              <li key={r} className="flex items-center gap-4 border-b border-neutral-300 px-6 py-5 last:border-b-0 lg:gap-[1.2vw] lg:px-[3vw] lg:py-[1.8vw]">
                <span aria-hidden className="h-2 w-2 shrink-0 bg-sun" />
                <span className="text-lg leading-snug lg:text-[length:max(1.3vw,23px)]">{r}</span>
              </li>
            ))}
          </ul>
          <div className="relative min-h-64 lg:min-h-[20vw]">
            <div className="photo absolute inset-0">
              <Image src={s.recebeImage} alt={s.recebeImageAlt} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* faq */}
      <section className={`relative ${pad} pb-12 lg:pb-[7vw]`}>
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-0">
          <div>
            <p className={label}>Dúvidas</p>
            <h2 className={`${h2} mt-4 lg:mt-[1.2vw]`}>Perguntas frequentes</h2>
          </div>
          <div className="lg:col-span-2 lg:border-l lg:border-neutral-300 lg:pl-[3vw]">
            <LineX />
            {s.faq.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <details name="svc-faq" className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 lg:py-[1.6vw] [&::-webkit-details-marker]:hidden">
                    <h3 className="text-lg leading-snug lg:text-[length:max(1.4vw,25px)]">{f.q}</h3>
                    <Plus />
                  </summary>
                  <p className={`${body} max-w-xl pb-6 lg:max-w-[40vw] lg:pb-[2vw]`}>{f.a}</p>
                </details>
                <LineX />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* closing CTA (replaces the footer's black band on this page) */}
      <section className="relative z-10 bg-ink bg-cover bg-center text-white" style={{ backgroundImage: "url(/photos/vector-footer.png)" }}>
        <div className={`${pad} py-14 lg:py-[6vw]`}>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.04em] lg:gap-[0.8vw] lg:text-[length:max(0.8vw,14.4px)]">
            <span aria-hidden className="h-2 w-2 bg-sun" />
            {s.nome}
          </p>
          <h2 className="mt-5 text-[2.4rem] leading-[1.02] tracking-[-0.03em] lg:mt-[1.6vw] lg:text-[4.6vw]">
            Entregamos
            <br />
            <span className="accent">o melhor</span>
          </h2>
          <span aria-hidden className="draw-x mt-10 block h-px w-full bg-white/25 lg:mt-[4vw]" />
          <div className="grid lg:grid-cols-3">
            {["Qualidade comprovada", "Equipe especializada", "Laudos que resistem à prova"].map((t, i) => (
              <p key={t} className={`border-b border-white/25 py-5 text-lg lg:border-b-0 lg:py-[2vw] lg:text-[length:max(1.4vw,25px)] ${i > 0 ? "lg:border-l lg:pl-[3vw]" : ""}`}>
                <span className="mr-3 text-sun lg:mr-[1vw]">0{i + 1}</span>
                {t}
              </p>
            ))}
          </div>
          <span aria-hidden className="draw-x block h-px w-full bg-white/25" />
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-[3.4vw] lg:gap-[1.6vw]">
            <a href="/orcamento" className="btn-sun justify-center lg:gap-[1vw] lg:px-[3vw] lg:py-[1.4vw] lg:text-[length:max(1vw,16px)]">
              Solicitar orçamento
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
