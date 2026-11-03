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

export const vistoriasTecnicas: Servico = {
  slug: "vistorias-tecnicas",
  nome: "Vistorias Técnicas",
  h1: "Vistorias Técnicas",
  h1Accent: "no Rio de Janeiro",
  slogan: "Registre o estado do imóvel antes que vire disputa.",
  resumo:
    "Cautelar de vizinhança, imóvel novo, áreas comuns e locativa. Um engenheiro examina, fotografa e descreve cada ponto, para você ter o retrato técnico do imóvel na hora certa.",
  image: "/photos/servico-vistoria.jpg",
  imageAlt: "Engenheiro e cliente vistoriando um apartamento",
  meta: [
    { k: "Norma", v: "ABNT NBR 15575" },
    { k: "Registro", v: "ART/RRT" },
    { k: "Atendimento", v: "Rio de Janeiro" },
  ],
  pilares: [
    { t: "Registro", d: "Fotos e descrição técnica de cada ambiente e de cada detalhe." },
    { t: "Conferência", d: "Acabamentos, instalações e medidas verificados item por item." },
    { t: "Respaldo", d: "Laudo claro para usar em assembleia, acordo ou negociação." },
  ],
  inclui: [
    "Vistoria cautelar de vizinhança: o antes de uma escavação, demolição ou obra",
    "Vistoria de recebimento de imóvel novo: conferência contra o memorial e o projeto",
    "Recebimento de áreas comuns: sistemas, fachadas e documentos na entrega ao condomínio",
    "Vistoria locativa: laudo de entrada e de saída do contrato de locação",
    "Registro fotográfico e lista de pendências em todas elas",
  ],
  etapas: [
    { t: "Briefing", d: "Entendemos o imóvel, o momento da vistoria e o que você precisa registrar." },
    { t: "Proposta", d: "Escopo, prazo e valor definidos antes de começar." },
    { t: "Vistoria técnica", d: "O engenheiro vai a campo, examina e fotografa cada ponto." },
    { t: "Laudo", d: "Entregamos o documento assinado, com fotos e pendências classificadas." },
  ],
  recebe: [
    "Laudo com ART/RRT",
    "Registro fotográfico por ambiente",
    "Pendências classificadas, com prazo sugerido para correção",
  ],
  recebeImage: "/photos/beneficio-3-valorizacao.jpg",
  recebeImageAlt: "Entrega de chaves e do laudo de vistoria de um imóvel",
  faq: [
    {
      q: "Quando fazer a vistoria cautelar de vizinhança?",
      a: "Antes de a obra começar. Assim o registro mostra o estado dos imóveis vizinhos antes de escavação, demolição ou construção, e protege o construtor e o vizinho. Ao fim da obra, uma vistoria de saída é opcional.",
    },
    {
      q: "A vistoria vale também para imóvel usado?",
      a: "Sim. A conferência de acabamentos, instalações e estado geral serve também para quem compra um imóvel usado ou vai alugar, e o laudo registra tudo com fotos.",
    },
    {
      q: "Quem contrata a vistoria locativa, locador ou locatário?",
      a: "Qualquer uma das partes. O laudo é assinado por engenheiro e imparcial, e serve às duas na entrega e na devolução das chaves.",
    },
  ],
};

export const avaliacaoPericia: Servico = {
  slug: "avaliacao-e-pericia",
  nome: "Avaliação e Perícia",
  h1: "Avaliação e Perícia",
  h1Accent: "no Rio de Janeiro",
  slogan: "Um número confiável e uma conclusão que a Justiça entende.",
  resumo:
    "Avaliamos imóveis pela NBR 14653 e damos apoio técnico a quem está em processo: perícia de engenharia, assistência técnica e análise de laudos da parte contrária.",
  image: "/photos/servico-pericia.jpg",
  imageAlt: "Perito medindo a umidade de uma parede",
  meta: [
    { k: "Normas", v: "ABNT NBR 14653 e 13752" },
    { k: "Registro", v: "ART/RRT" },
    { k: "Atendimento", v: "Rio de Janeiro" },
  ],
  pilares: [
    { t: "Método", d: "Pesquisa de mercado e tratamento dos dados, passo a passo." },
    { t: "Fundamentação", d: "Conclusões baseadas em método e norma, e não em opinião." },
    { t: "Clareza", d: "Linguagem objetiva para juiz, advogados e partes." },
  ],
  inclui: [
    "Avaliação de imóveis pela NBR 14653, com vistoria, pesquisa de mercado e cálculo do valor",
    "Perícia de engenharia conforme a NBR 13752",
    "Assistência técnica judicial: quesitos, parecer e acompanhamento da perícia",
    "Análise do processo e de laudos da parte contrária",
    "Para venda, inventário e partilha, divórcio, financiamento, renovatória de aluguel e retificação de ITBI",
  ],
  etapas: [
    { t: "Briefing", d: "Entendemos o objetivo da avaliação ou o ponto do processo e reunimos os documentos." },
    { t: "Vistoria e pesquisa", d: "Vistoria do imóvel e pesquisa de mercado, ou análise do processo e dos quesitos." },
    { t: "Análise", d: "Tratamento dos dados, cálculo do valor e fundamentação das conclusões." },
    { t: "Laudo ou parecer", d: "Entregamos o documento assinado por engenheiro, com a fundamentação completa." },
  ],
  recebe: [
    "Laudo ou parecer com ART/RRT",
    "Valor fundamentado, com grau de fundamentação e precisão",
    "Documento aceito em bancos, cartórios e processos",
  ],
  recebeImage: "/photos/beneficio-1-juridico.jpg",
  recebeImageAlt: "Engenheiro assinando um laudo técnico sobre a mesa",
  faq: [
    {
      q: "Qual a diferença entre o laudo e a opinião de um corretor?",
      a: "O corretor estima um preço de mercado. O laudo de avaliação segue a NBR 14653, com pesquisa de dados, tratamento estatístico e fundamentação assinada por engenheiro, e por isso é aceito em bancos, cartórios e processos.",
    },
    {
      q: "Qual a diferença entre perito e assistente técnico?",
      a: "O perito é nomeado pelo juiz e atua para o processo. O assistente técnico é contratado por uma das partes para acompanhar a perícia, formular quesitos e dar parecer técnico.",
    },
    {
      q: "Posso contratar antes de existir um processo?",
      a: "Sim. Uma avaliação ou um parecer técnico prévio ajuda a negociar, a fechar um acordo ou a decidir se vale a pena entrar na Justiça.",
    },
  ],
};
