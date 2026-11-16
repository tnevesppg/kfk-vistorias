import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { equipamentos } from "@/lib/equipamentos";

export const metadata: Metadata = {
  title: "Equipamentos | KFK Vistorias & Perícias",
  description: "Drone, câmera termográfica, pacômetro, esclerômetro e outros equipamentos que usamos em inspeções, vistorias e perícias.",
};

const pad = "px-6 lg:px-[4.2vw]";
const label = "text-xs font-semibold uppercase tracking-[0.04em] lg:text-[length:max(0.8vw,14.4px)]";
const body = "text-[15px] leading-[1.75] text-neutral-700 lg:text-[length:max(0.95vw,17.1px)]";

export default function EquipamentosPage() {
  return (
    <PageShell>
      <section className={`${pad} pb-10 pt-28 lg:pb-[4vw] lg:pt-[9vw]`}>
        <p className="load-rise flex items-center gap-3 text-sm lg:gap-[0.8vw] lg:text-[length:max(0.9vw,16.2px)]">
          <a href="/" className="hover:text-brand">Início</a>
          <span aria-hidden className="text-neutral-400">→</span>
          <span className="text-neutral-400">Equipamentos</span>
        </p>
        <h1 className="load-rise mt-6 text-[2.6rem] leading-[1.04] tracking-[-0.03em] lg:mt-[2vw] lg:text-[5.2vw]" style={{ ["--d" as string]: "120ms" }}>
          Diagnóstico com
          <br />
          <span className="accent">instrumento certo</span>
        </h1>
      </section>

      <section className={`${pad} border-t border-neutral-200`}>
        <div className="grid lg:grid-cols-3">
          <div className="py-8 lg:py-[3vw]">
            <p className={label}>Nossos equipamentos</p>
          </div>
          <Reveal variant="left" className="border-t border-neutral-200 py-8 lg:col-span-2 lg:border-l lg:border-t-0 lg:py-[3vw] lg:pl-[3vw]">
            <p className="text-[1.6rem] leading-[1.2] tracking-[-0.02em] lg:text-[length:max(1.9vw,34px)]">
              Medimos antes de concluir. Ensaios não destrutivos e equipamentos de precisão dão base técnica a cada laudo.
            </p>
            <p className={`${body} mt-5 max-w-[40rem] lg:mt-[1.6vw] lg:max-w-[40vw]`}>
              Do drone que alcança a fachada inteira ao paquímetro que mede a abertura de uma fissura, cada leitura vira registro no laudo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={`${pad} border-t border-neutral-200 py-10 lg:py-[3vw]`}>
        <div className="grid gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {equipamentos.map((e, i) => (
            <Reveal key={e.src} variant="fade" delay={(i % 4) * 60} className="paper">
              <div className="flex h-full flex-col">
                <div className="photo relative aspect-[4/3] bg-white">
                  <Image
                    src={e.src}
                    alt={e.marca ? `${e.nome} ${e.marca}` : e.nome}
                    fill
                    sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw"
                    className="object-contain p-8 lg:p-[2vw]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-[1.8vw]">
                  <p className="flex items-baseline justify-between gap-4 text-sm text-neutral-400 lg:text-[length:max(0.85vw,15.3px)]">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {e.marca && <span className="text-[11px] font-semibold uppercase tracking-[0.06em] lg:text-[length:max(0.7vw,12.6px)]">{e.marca}</span>}
                  </p>
                  <h2 className="mt-3 text-xl leading-tight tracking-[-0.02em] lg:mt-[0.8vw] lg:text-[length:max(1.5vw,26px)]">{e.nome}</h2>
                  <p className="mt-3 text-[14px] leading-[1.65] text-neutral-600 lg:mt-[0.8vw] lg:text-[length:max(0.86vw,15.5px)]">{e.uso}</p>
                </div>
              </div>
            </Reveal>
          ))}
          {/* closes the last row of the 4-column grid */}
          <Reveal variant="fade" delay={180} className="bg-ink text-white">
            <div className="flex h-full min-h-64 flex-col justify-between p-6 lg:p-[1.8vw]">
              <p className="text-2xl leading-[1.15] tracking-[-0.02em] lg:text-[length:max(1.7vw,30px)]">
                Precisa de um ensaio específico<span className="text-sun">?</span>
              </p>
              <a href="/orcamento" className="mt-8 inline-flex items-center gap-2 self-start border-b border-white pb-1 text-xs font-semibold uppercase tracking-[0.04em] hover:text-sun lg:text-[length:max(0.75vw,13.5px)]">
                <span aria-hidden className="h-2 w-2 bg-sun" />
                Solicite um orçamento
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
