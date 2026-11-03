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
        <div className="flex items-center gap-4 px-6 pb-10 lg:gap-[1.4vw] lg:px-[4.2vw] lg:pb-[3.4vw]">
          <span aria-hidden className="h-[5px] w-[5px] rounded-full bg-ink" />
          <span aria-hidden className="h-px flex-1 bg-neutral-200 lg:flex-none lg:basis-[26vw]" />
          <h1 className="text-lg uppercase lg:text-[length:max(1.15vw,20.7px)]">Nossos Serviços</h1>
        </div>
        <ServiceList />
      </section>
    </PageShell>
  );
}
