import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";
import { avaliacaoPericia } from "@/lib/servicos";
import { pagina } from "@/lib/seo";

export const metadata: Metadata = pagina({
  title: "Avaliação de Imóveis e Perícia de Engenharia no RJ",
  description: "Avaliação de imóveis pela NBR 14653, perícia de engenharia e assistência técnica judicial no Rio de Janeiro, com laudo assinado por engenheiro e ART/RRT.",
  path: "/servicos/avaliacao-e-pericia",
  image: avaliacaoPericia.image,
  imageAlt: avaliacaoPericia.imageAlt,
});

export default function Page() {
  return <ServicePage s={avaliacaoPericia} />;
}
