import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import OrcamentoForm from "../components/OrcamentoForm";

export const metadata: Metadata = {
  title: "Solicitar orçamento | KFK Vistorias & Perícias",
  description: "Conte o que está acontecendo no imóvel. Um engenheiro analisa o seu caso e retorna com a proposta.",
};

const pad = "px-6 lg:px-[4.2vw]";
const label = "text-xs font-semibold uppercase tracking-[0.04em] lg:text-[length:max(0.8vw,14.4px)]";
const small = "text-[11px] font-semibold uppercase tracking-[0.04em] text-neutral-500 lg:text-[length:max(0.7vw,12.6px)]";
const value = "mt-2 block text-base leading-snug hover:text-brand lg:mt-[0.5vw] lg:text-[length:max(1.1vw,19.8px)]";

export default function OrcamentoPage() {
  return (
    <PageShell footerCta={false}>
      <section className={`${pad} pb-10 pt-28 lg:pb-[4vw] lg:pt-[9vw]`}>
        <p className="load-rise flex items-center gap-3 text-sm lg:gap-[0.8vw] lg:text-[length:max(0.9vw,16.2px)]">
          <a href="/" className="hover:text-brand">Início</a>
          <span aria-hidden className="text-neutral-400">→</span>
          <span className="text-neutral-400">Orçamento</span>
        </p>
        <h1 className="load-rise mt-6 text-[2.6rem] leading-[1.04] tracking-[-0.03em] lg:mt-[2vw] lg:text-[5.2vw]" style={{ ["--d" as string]: "120ms" }}>
          Solicite uma
          <br />
          <span className="accent">proposta</span>
        </h1>
      </section>

      <section className={`${pad} border-t border-neutral-200`}>
        <div className="grid lg:grid-cols-3">
          <div className="py-8 lg:py-[3vw] lg:pr-[3vw]">
            <div className="lg:sticky lg:top-[8vw]">
              <Reveal variant="left">
                <p className={label}>Fale com a gente</p>
                <p className="mt-4 text-[1.6rem] leading-[1.2] tracking-[-0.02em] lg:mt-[1.2vw] lg:text-[length:max(1.9vw,34px)]">
                  Conte o que está acontecendo no imóvel.
                </p>
                <p className="mt-5 max-w-sm text-[15px] leading-[1.75] text-neutral-700 lg:mt-[1.6vw] lg:max-w-[22vw] lg:text-[length:max(0.95vw,17.1px)]">
                  Um engenheiro analisa o seu caso e retorna com a proposta, com escopo, prazo e valor definidos antes de começar.
                </p>
              </Reveal>
              <Reveal variant="fade" delay={60} className="mt-10 grid gap-6 border-t border-neutral-200 pt-8 lg:mt-[3vw] lg:gap-[1.8vw] lg:pt-[2.4vw]">
                <div>
                  <p className={small}>Telefone / WhatsApp</p>
                  <a href="https://wa.me/552121600974" target="_blank" rel="noopener noreferrer" className={value}>
                    (21) 2160-0974
                  </a>
                </div>
                <div>
                  <p className={small}>E-mail</p>
                  <a href="mailto:contato@kfkconstrutora.com.br" className={`${value} break-all`}>
                    contato@kfkconstrutora.com.br
                  </a>
                </div>
                <div>
                  <p className={small}>Endereço</p>
                  <p className="mt-2 text-base leading-snug lg:mt-[0.5vw] lg:max-w-[20vw] lg:text-[length:max(1.1vw,19.8px)]">
                    Rua 24 de Fevereiro, 07, Bonsucesso, Rio de Janeiro, RJ
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="border-t border-neutral-200 py-8 lg:col-span-2 lg:border-l lg:border-t-0 lg:py-[3vw]">
            <OrcamentoForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
