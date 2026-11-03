import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";
import { avaliacaoPericia } from "@/lib/servicos";

export const metadata: Metadata = {
  title: "Avaliação e Perícia no Rio de Janeiro | KFK Vistorias & Perícias",
  description: "Avaliação de imóveis pela NBR 14653, perícia de engenharia e assistência técnica judicial, com laudo assinado por engenheiro e ART/RRT.",
};

export default function Page() {
  return <ServicePage s={avaliacaoPericia} />;
}
