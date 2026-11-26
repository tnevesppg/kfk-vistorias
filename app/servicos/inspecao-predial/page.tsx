import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";
import { inspecaoPredial } from "@/lib/servicos";
import { pagina } from "@/lib/seo";

export const metadata: Metadata = pagina({
  title: "Inspeção Predial no Rio de Janeiro (NBR 16747)",
  description: "Inspeção predial no Rio de Janeiro conforme a NBR 16747: estrutura, fachadas, coberturas e instalações avaliadas por engenheiro, com laudo, grau de risco e ART/RRT.",
  path: "/servicos/inspecao-predial",
  image: inspecaoPredial.image,
  imageAlt: inspecaoPredial.imageAlt,
});

export default function InspecaoPredialPage() {
  return <ServicePage s={inspecaoPredial} />;
}
