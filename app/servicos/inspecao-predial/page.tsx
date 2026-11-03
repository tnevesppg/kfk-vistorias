import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";
import { inspecaoPredial } from "@/lib/servicos";

export const metadata: Metadata = {
  title: "Inspeção Predial no Rio de Janeiro | KFK Vistorias & Perícias",
  description: "Inspeção predial conforme a NBR 16747: estrutura, fachadas, coberturas e instalações, com laudo assinado por engenheiro e ART/RRT.",
};

export default function InspecaoPredialPage() {
  return <ServicePage s={inspecaoPredial} />;
}
