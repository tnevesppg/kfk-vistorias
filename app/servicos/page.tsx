import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import ServiceList from "../components/ServiceList";

export const metadata: Metadata = {
  title: "Serviços | KFK Vistorias & Perícias",
  description: "Inspeção predial, vistorias técnicas e avaliação e perícia, com laudo assinado por engenheiro.",
};

export default function ServicosPage() {
  return (
    <PageShell>
      <section className="pb-0 pt-28 lg:pt-[9vw]">
        <div className="px-6 pb-10 lg:px-[4.2vw] lg:pb-[4vw]">
          <p className="flex items-center gap-3 text-sm lg:gap-[0.8vw] lg:text-[length:max(0.9vw,16.2px)]">
            <a href="/" className="hover:text-brand">Início</a>
            <span aria-hidden className="text-neutral-400">→</span>
            <span className="text-neutral-400">Serviços</span>
          </p>
          <h1 className="mt-6 text-[2.6rem] leading-[1.04] tracking-[-0.03em] lg:mt-[2vw] lg:text-[5.2vw]">
            Nossos serviços
            <br />
            <span className="accent">sem achismo</span>
          </h1>
        </div>
        <ServiceList />
      </section>
    </PageShell>
  );
}
