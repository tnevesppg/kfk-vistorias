const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: img("1705326701287-346fc37a2c86", 1600),
  about: img("1716078410207-20e223587181"),
  video: img("1780042731953-15dd1b3b5f00", 1600),
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Lighting Design",
    text: "Iluminação pensada para valorizar cada ambiente, do funcional ao decorativo.",
  },
  {
    title: "Architectural Design",
    text: "Projetos que unem estrutura, fluxo e estética em espaços coerentes.",
  },
  {
    title: "Interior Design",
    text: "Mobiliário, cores e materiais escolhidos para contar a sua história.",
  },
];

export const categories = ["All", "Decoration", "Interior", "Kitchen"] as const;

export const projects: {
  title: string;
  tags: string[];
  src: string;
}[] = [
  { title: "Patio Dining Sets", tags: ["Uncategorized"], src: img("1653242370243-5f7ca54b00db", 900) },
  { title: "Kitchen Remodel", tags: ["Interior", "Kitchen"], src: img("1502005097973-6a7082348e28", 900) },
  { title: "Unique Wall Shelves", tags: ["Decoration"], src: img("1632489753406-52689c507a83", 900) },
  { title: "Affordable Home Accessories", tags: ["Decoration"], src: img("1749703836810-361f30aba87a", 900) },
  { title: "The Best Window Curtains", tags: ["Decoration", "Interior"], src: img("1764742814331-65fce6c3367c", 900) },
  { title: "Modern Cabinets", tags: ["Kitchen"], src: img("1610177534644-34d881503b83", 900) },
];

export const stats = [
  { label: "Products", value: 780 },
  { label: "Happy Customers", value: 1250 },
  { label: "Clients", value: 340 },
  { label: "Projects Launched", value: 215 },
  { label: "Materials", value: 96 },
];

export const testimonials = [
  {
    quote:
      "Transformaram nossa casa em um lugar que realmente tem a nossa cara. Atenção a cada detalhe.",
    name: "Martin Kabour",
    city: "New York",
  },
  {
    quote:
      "Processo claro, prazos cumpridos e um resultado acima do que imaginávamos.",
    name: "Sara Lopes",
    city: "Lisboa",
  },
  {
    quote:
      "Sensibilidade rara com luz e materiais. Recomendo para quem busca um projeto autoral.",
    name: "Daniel Reis",
    city: "São Paulo",
  },
];

export const posts = [
  {
    title: "Interior inspiration hidden in the middle of the text",
    date: "May 6, 2019",
    src: img("1465224414649-ceb7f1db3999", 800),
  },
  {
    title: "7 of the biggest interior trends of the year",
    date: "May 6, 2019",
    src: img("1776754373093-c36d872e635b", 800),
  },
  {
    title: "Global Interior Design Software compared",
    date: "May 6, 2019",
    src: img("1600489000022-c2086d79f9d4", 800),
  },
];
