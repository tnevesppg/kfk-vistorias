import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import ClientCases from "../components/ClientCases";
import { clientes } from "@/lib/clientes";

export const metadata: Metadata = {
  title: "Clientes | KFK Vistorias & Perícias",
  description: "Clientes atendidos e cases de vistorias, inspeções e laudos técnicos: problema inicial, diagnóstico e solução.",
};

const pad = "px-6 lg:px-[4.2vw]";

export default function ClientesPage() {
  return (
    <PageShell>
      <section className={`${pad} pb-10 pt-28 lg:pb-[4vw] lg:pt-[9vw]`}>
        <p className="load-rise flex items-center gap-3 text-sm lg:gap-[0.8vw] lg:text-[length:max(0.9vw,16.2px)]">
          <a href="/" className="hover:text-brand">Início</a>
          <span aria-hidden className="text-neutral-400">→</span>
          <span className="text-neutral-400">Clientes</span>
        </p>
        <h1 className="load-rise mt-6 text-[2.6rem] leading-[1.04] tracking-[-0.03em] lg:mt-[2vw] lg:text-[5.2vw]" style={{ ["--d" as string]: "120ms" }}>
          Quem confia
          <br />
          no <span className="accent">nosso laudo</span>
        </h1>
      </section>

      <section className={`${pad} pb-14 lg:pb-[5vw]`}>
        <ClientCases clientes={clientes} />
      </section>
    </PageShell>
  );
}
