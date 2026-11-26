import type { Metadata } from "next";

/** Public address of the site. Set NEXT_PUBLIC_SITE_URL when the final domain goes live. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "production" ? "https://kfkvistorias.electricsheep.com.br" : "http://localhost:3100")
).replace(/\/$/, "");

export const BRAND = "KFK Vistorias & Perícias";

export const EMPRESA = {
  nome: BRAND,
  telefone: "+55-21-2160-0974",
  email: "contato@kfkvistorias.com.br",
  whatsapp: "https://wa.me/552121600974",
  endereco: {
    rua: "Rua 24 de Fevereiro, 07",
    bairro: "Bonsucesso",
    cidade: "Rio de Janeiro",
    uf: "RJ",
    pais: "BR",
  },
};

export const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`);

/** Cuts a description at a word boundary so search results do not truncate it mid-word. */
export function resumir(texto: string, max = 155) {
  const t = texto.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:]$/, "")}…`;
}

/**
 * Full metadata for one page: title, description, canonical, and the Open Graph / Twitter cards
 * (Next does not merge openGraph, so each page sets its own instead of inheriting the home card).
 */
export function pagina({
  title,
  description,
  path,
  image,
  imageAlt,
  absoluteTitle = false,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
}): Metadata {
  const desc = resumir(description);
  const shareTitle = absoluteTitle ? title : `${title} | ${BRAND}`;
  // pages without their own photo share the site card (app/opengraph-image.jpg)
  const images = [
    image
      ? { url: image, alt: imageAlt ?? title }
      : { url: "/opengraph-image.jpg", alt: "KFK Vistorias & Perícias: laudos precisos, assinados por engenheiro", width: 1200, height: 630 },
  ];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title: shareTitle,
      description: desc,
      url: path,
      siteName: BRAND,
      locale: "pt_BR",
      type,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description: desc,
      images: images.map((i) => i.url),
    },
  };
}

/** The business itself, referenced by @id from every other block. */
export const ORG_ID = `${SITE_URL}/#empresa`;

export function empresaLd() {
  const e = EMPRESA;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: e.nome,
    url: SITE_URL,
    logo: abs("/icon.png"),
    image: abs("/opengraph-image.jpg"),
    description:
      "Inspeção predial, vistorias técnicas, avaliação de imóveis e perícias de engenharia com laudo assinado por engenheiro, no Rio de Janeiro.",
    telephone: e.telefone,
    email: e.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: e.endereco.rua,
      addressLocality: e.endereco.cidade,
      addressRegion: e.endereco.uf,
      addressCountry: e.endereco.pais,
    },
    areaServed: { "@type": "State", name: "Rio de Janeiro" },
    knowsAbout: ["Inspeção predial", "Vistoria técnica", "Perícia de engenharia", "Avaliação de imóveis", "Laudo técnico"],
    sameAs: [e.whatsapp],
  };
}

export function trilhaLd(itens: { nome: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itens.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.nome, item: abs(it.path) })),
  };
}

export function faqLd(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
