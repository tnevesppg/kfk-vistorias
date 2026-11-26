import type { MetadataRoute } from "next";
import { allCases } from "@/lib/clientes";
import { abs } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginas: [string, number][] = [
    ["/", 1],
    ["/servicos", 0.9],
    ["/servicos/inspecao-predial", 0.9],
    ["/servicos/vistorias-tecnicas", 0.9],
    ["/servicos/avaliacao-e-pericia", 0.9],
    ["/clientes", 0.8],
    ["/orcamento", 0.8],
    ["/sobre", 0.6],
    ["/equipamentos", 0.6],
    ["/contato", 0.6],
  ];
  return [
    ...paginas.map(([path, priority]) => ({ url: abs(path), changeFrequency: "monthly" as const, priority })),
    ...allCases.map(({ caso }) => ({ url: abs(`/clientes/${caso.slug}`), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
