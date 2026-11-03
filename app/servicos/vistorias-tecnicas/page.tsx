import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";
import { vistoriasTecnicas } from "@/lib/servicos";

export const metadata: Metadata = {
  title: "Vistorias Técnicas | KFK Vistorias & Perícias",
  description: "Vistorias técnicas feitas por engenheiro: cautelar de vizinhança, imóvel novo, áreas comuns e locativa, com laudo e registro fotográfico.",
};

export default function Page() {
  return <ServicePage s={vistoriasTecnicas} />;
}
