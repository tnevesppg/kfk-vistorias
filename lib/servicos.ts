export type Servico = {
  slug: string;
  nome: string;
  h1: string;
  h1Accent: string;
  slogan: string;
  resumo: string;
  image: string;
  imageAlt: string;
  meta: { k: string; v: string }[];
  pilares: { t: string; d: string }[];
  inclui: string[];
  etapas: { t: string; d: string }[];
  recebe: string[];
  recebeImage: string;
  recebeImageAlt: string;
  faq: { q: string; a: string }[];
};

export const inspecaoPredial: Servico = {
  slug: "inspecao-predial",
  nome: "Inspeção Predial",
  h1: "Inspeção Predial",
  h1Accent: "no Rio de Janeiro",
  slogan: "Conheça o seu prédio antes que ele cobre a conta.",
  resumo:
    "Inspecionamos estrutura, fachadas, coberturas e instalações e mostramos o que precisa ser feito, em que ordem e com que urgência.",
  image: "/photos/servico-inspecao.jpg",
  imageAlt: "Engenheiro inspecionando a fachada de um edifício",
  meta: [
    { k: "Norma", v: "ABNT NBR 16747" },
    { k: "Registro", v: "ART/RRT" },
    { k: "Atendimento", v: "Rio de Janeiro" },
  ],
  pilares: [
    { t: "Clareza", d: "Cada problema classificado por grau de risco." },
    { t: "Prioridade", d: "Você sabe o que resolver primeiro e o que pode esperar." },
    { t: "Economia", d: "Manutenção planejada custa menos que reparo de emergência." },
  ],
  inclui: [
    "Análise documental do prédio",
    "Vistoria de estrutura, fachadas, coberturas, impermeabilização, instalações e áreas comuns",
    "Registro fotográfico de cada ponto",
    "Classificação das irregularidades por risco",
    "Plano de ação com prioridades",
  ],
  etapas: [
    { t: "Documentos", d: "Reunimos a documentação do prédio e conversamos com o síndico sobre o histórico." },
    { t: "Vistoria em campo", d: "O engenheiro percorre estrutura, fachadas, coberturas e instalações com registro fotográfico." },
    { t: "Análise", d: "Classificamos cada irregularidade por grau de risco e urgência." },
    { t: "Laudo", d: "Entregamos o laudo e apresentamos os resultados." },
  ],
  recebe: [
    "Laudo com ART/RRT",
    "Lista de anomalias por prioridade",
    "Recomendações de correção",
  ],
  recebeImage: "/photos/beneficio-5-anomalias.jpg",
  recebeImageAlt: "Engenheiro registrando anomalias em uma parede",
  faq: [
    {
      q: "Inspeção predial é o mesmo que autovistoria?",
      a: "A inspeção predial segue a NBR 16747 e avalia a conservação e a segurança do prédio. A autovistoria é a vistoria exigida por lei municipal para as edificações enquadradas. Fazemos as duas e indicamos qual se aplica ao seu prédio.",
    },
    {
      q: "Com que frequência fazer?",
      a: "Depende da idade, do uso e da legislação aplicável ao prédio. Na proposta, indicamos a periodicidade adequada ao seu caso.",
    },
    {
      q: "O laudo serve para prestar contas em assembleia?",
      a: "Sim. O laudo mostra o estado do prédio e as prioridades, com fotos, e dá base técnica para prestar contas e planejar o orçamento de manutenção.",
    },
  ],
};
