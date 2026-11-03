const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  heroMain: "/photos/hero-principal.jpg",
  heroPlant: "/photos/hero-faixa.jpg",
  heroSmall: "/photos/hero-detalhe.jpg",
  aboutA: "/photos/problema-infiltracao.jpg",
  aboutB: "/photos/problema-trincas.jpg",
  aboutC: "/photos/problema-laudo.jpg",
  serviceA: "/photos/servico-inspecao.jpg",
  serviceB: "/photos/servico-vistoria.jpg",
  serviceMain: "/photos/servico-pericia.jpg",
  video: "/photos/laudo-protege.jpg",
};

export const services = [
  { n: "01", title: "Inspeção Predial", href: "/servicos/inspecao-predial", text: "Diagnóstico de estrutura, fachadas e instalações, com laudo conforme a NBR 16747." },
  { n: "02", title: "Vistorias Técnicas", href: "/servicos/vistorias-tecnicas", text: "Cautelar de vizinhança, imóvel novo, áreas comuns e locativa. Registramos o estado do imóvel antes que vire disputa." },
  { n: "03", title: "Avaliação e Perícia", href: "/servicos/avaliacao-e-pericia", text: "Avaliação de imóveis pela NBR 14653, perícia de engenharia e assistência técnica judicial." },
];

export type NavLink = { label: string; href: string; children?: { label: string; href: string }[] };

export const navLinks: NavLink[] = [
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos", children: services.map((x) => ({ label: x.title, href: x.href })) },
  { label: "Clientes", href: "/clientes" },
  { label: "Equipamentos", href: "/equipamentos" },
  { label: "Contato", href: "/#contact" },
];

export const benefits: { n: string; title: string; text: string; src: string }[] = [
  { n: "01", title: "Resguardo Jurídico", text: "Laudo e registro fotográfico protegem síndicos, proprietários e inquilinos em disputas e reclamações.", src: "/photos/beneficio-1-juridico.jpg" },
  { n: "02", title: "Mais Vida Útil", text: "Manutenção planejada a partir da inspeção prolonga a vida do imóvel e evita gastos futuros.", src: "/photos/beneficio-2-vida-util.jpg" },
  { n: "03", title: "Valorização do Imóvel", text: "Imóvel inspecionado e certificado por engenheiro vale mais e inspira confiança na venda.", src: "/photos/beneficio-3-valorizacao.jpg" },
  { n: "04", title: "Segurança Garantida", text: "Estrutura e sistemas verificados conforme as normas da ABNT, com laudo assinado por engenheiro.", src: "/photos/beneficio-4-seguranca.jpg" },
  { n: "05", title: "Detecção de Anomalias", text: "Infiltrações, trincas e corrosões identificadas cedo, com a causa e a correção indicadas.", src: "/photos/beneficio-5-anomalias.jpg" },
];

export const faqs = [
  { q: "O que é inspeção predial e quando fazer?", a: "É a avaliação técnica das condições de uso, conservação e segurança da edificação, conforme a NBR 16747. Indicada ao assumir um prédio, ao planejar a manutenção ou diante de sinais como fissuras, infiltrações e peças soltando da fachada." },
  { q: "Qual a diferença entre vistoria, laudo e perícia?", a: "A vistoria é a visita técnica que registra o estado do imóvel. O laudo é o documento com a análise e a conclusão do engenheiro. A perícia é a análise especializada, em geral para esclarecer fatos em processos judiciais ou disputas." },
  { q: "A autovistoria é obrigatória para o meu prédio?", a: "Depende da legislação do município, que define quais edificações precisam do laudo e com que frequência. Informe o endereço e a idade do prédio e dizemos se ele se enquadra." },
  { q: "Quanto tempo leva para receber o laudo?", a: "O prazo depende do porte do imóvel e do tipo de serviço. Ele é combinado na proposta, antes de começarmos." },
  { q: "Como é calculado o valor?", a: "Pelo escopo: tipo de serviço, tamanho e complexidade do imóvel e ensaios necessários. Você recebe a proposta com valor e prazo, sem compromisso." },
  { q: "O laudo vale na Justiça?", a: "O laudo é assinado por engenheiro habilitado, com ART/RRT, e segue as normas da ABNT, o que lhe dá base técnica para acordos e processos. A decisão final cabe sempre ao juiz." },
];
