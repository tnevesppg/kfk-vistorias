import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";
import { vistoriasTecnicas } from "@/lib/servicos";
import { pagina } from "@/lib/seo";

export const metadata: Metadata = pagina({
  title: "Vistorias Técnicas no Rio de Janeiro",
  description: "Vistoria técnica por engenheiro no Rio de Janeiro: cautelar de vizinhança, recebimento de imóvel novo, áreas comuns e vistoria locativa, com laudo e registro fotográfico.",
  path: "/servicos/vistorias-tecnicas",
  image: vistoriasTecnicas.image,
  imageAlt: vistoriasTecnicas.imageAlt,
});

export default function Page() {
  return <ServicePage s={vistoriasTecnicas} />;
}
