export type Case = {
  slug: string;
  titulo: string;
  servico: string;
  /** names matching lib/equipamentos.ts, shown as tags */
  equipamentos: string[];
  /** each entry is one paragraph */
  problema: string[];
  diagnostico: string[];
  solucao: string[];
  /**
   * Cover photo (illustrative, AI-generated) at public/photos/cases/<slug>.jpg.
   * Until that file exists the page uses capaProvisoria. Prompts: docs/prompts-cases.md
   */
  capaAlt: string;
  capaProvisoria: string;
  /** work still under way: shows an "Em andamento" tag */
  andamento?: boolean;
};

export type Cliente = {
  slug: string;
  nome: string;
  /** short label under the name, e.g. type of institution */
  segmento: string;
  logo: string;
  ratio: number;
  /** logo width in design units, tuned so every mark carries about the same visual weight */
  k: number;
  cases: Case[];
};

/**
 * Clients and their cases. Every case follows the same three blocks:
 * Problema inicial -> Diagnóstico -> Solução.
 */
export const clientes: Cliente[] = [
  {
    slug: "unirio",
    nome: "UNIRIO",
    segmento: "Universidade Federal do Estado do Rio de Janeiro",
    logo: "/photos/clientes/unirio-preto.png",
    ratio: 900 / 288,
    k: 8.5,
    cases: [
      {
        slug: "unirio-subsolo",
        titulo: "Água no subsolo dos laboratórios",
        servico: "Laudo de detecção de vazamento",
        capaProvisoria: "/photos/problema-infiltracao.jpg",
        capaAlt: "Parede com marcas de infiltração",
        equipamentos: ["Traçador químico", "Câmera termográfica", "Detector de umidade", "Câmera boroscópica"],
        problema: [
          "O subsolo onde ficam os laboratórios da universidade acumulava água de forma constante.",
          "A suspeita da administração era o lençol freático, o que levaria a uma obra cara de rebaixamento e impermeabilização sem garantia de resolver o problema.",
        ],
        diagnostico: [
          "Com traçador químico, câmera termográfica, medidor de umidade e boroscopia dentro da tubulação, descartamos o lençol freático e encontramos duas origens.",
          "A primeira era uma rede de esgoto que corria ao lado do subsolo. Caminhões que abasteciam o refeitório paravam sobre ela e quebraram a tubulação antiga de manilha e a caixa de inspeção. Para piorar, a caixa estava entupida: o esgoto não descia e infiltrava no solo até chegar ao subsolo.",
          "A segunda era a água da encosta nos fundos do terreno. Ela descia para a rede de águas pluviais, mas a calha estava quebrada e a água ia direto para o solo.",
          "Um ensaio de laboratório confirmou a presença de matéria orgânica (DBO) na água coletada, comprovando a contribuição de esgoto.",
        ],
        solucao: [
          "Entregamos o laudo com as duas causas comprovadas e a terapia para cada uma: recuperação da rede de esgoto e da caixa de inspeção, desobstrução e proteção da área de manobra dos caminhões, e reparo da calha da rede pluvial que recebe a água da encosta.",
          "Com a causa real identificada, a universidade evitou uma intervenção no lençol freático que não resolveria o problema.",
        ],
      },
      {
        slug: "unirio-cisterna",
        titulo: "Cisterna que parava de encher",
        servico: "Laudo de detecção de vazamento",
        capaProvisoria: "/photos/hero-detalhe.jpg",
        capaAlt: "Inspeção técnica de detalhe construtivo",
        equipamentos: ["Câmera termográfica", "Detector de umidade"],
        problema: [
          "A cisterna enchia até um determinado nível e parava. A água simplesmente não passava daquele ponto.",
        ],
        diagnostico: [
          "Com câmera termográfica, inspeção com lanterna e detector de umidade, localizamos o vazamento na altura da tubulação de recalque da bomba: a água escapava por ali assim que atingia esse nível.",
          "Havia uma tubulação desativada e outra tamponada, ambas com a impermeabilização mal executada. A água entrava pela tubulação, corria por dentro da manta de impermeabilização e acabou rompendo a manta inteira.",
        ],
        solucao: [
          "O laudo apontou a origem do vazamento e a terapia para cada ponto: tratamento correto das tubulações desativada e tamponada e recuperação da impermeabilização comprometida.",
          "A universidade já está executando os reparos conforme as recomendações.",
        ],
      },
    ],
  },
  {
    slug: "caixa",
    nome: "Caixa",
    segmento: "Caixa Econômica Federal",
    logo: "/photos/clientes/caixa-preto.png",
    ratio: 900 / 205,
    k: 8.5,
    cases: [
      {
        slug: "caixa-avaliacao",
        titulo: "Avaliação de imóveis residenciais em todo o Rio",
        servico: "Laudo de avaliação de imóveis",
        capaAlt: "Prédios residenciais no Rio de Janeiro",
        capaProvisoria: "/photos/problema-laudo.jpg",
        equipamentos: [],
        problema: [
          "A Caixa precisa do valor de mercado de um grande volume de imóveis residenciais espalhados por todo o estado do Rio, com prazo e padrão técnico em cada um.",
        ],
        diagnostico: [
          "Vistoriamos cada imóvel e fazemos o laudo de avaliação simplificado, com grau I de fundamentação, comparando com imóveis semelhantes da região.",
          "O trabalho é só de imóveis residenciais, em grande escala, atendendo todo o Rio.",
        ],
        solucao: [
          "A Caixa recebe o valor de cada imóvel com base técnica para seguir com o financiamento habitacional.",
        ],
      },
      {
        slug: "caixa-construcao",
        titulo: "Do projeto à obra pronta: financiamento de construção",
        servico: "Análise de projeto e fiscalização de obra",
        capaAlt: "Casa em construção",
        capaProvisoria: "/photos/servico-inspecao.jpg",
        equipamentos: [],
        problema: [
          "Quem quer construir a casa própria, com ou sem terreno, pede à Caixa o financiamento da obra a partir de um projeto feito por arquiteto. Por exemplo: R$ 600 mil para comprar o terreno e construir.",
          "A Caixa precisa saber se o projeto é viável, se o imóvel vai valer o que está sendo financiado e se o dinheiro liberado está virando obra de fato.",
        ],
        diagnostico: [
          "Na análise do projeto, verificamos a viabilidade técnica e avaliamos a casa como se já estivesse pronta, somando o valor do terreno.",
          "Se a casa pronta vale R$ 1 milhão e o pedido é de R$ 600 mil, o financiamento tem lastro e pode ser aprovado.",
          "Durante a obra, vamos ao local a cada etapa e conferimos se o que foi previsto para aquela medição foi realmente executado.",
        ],
        solucao: [
          "A Caixa aprova o financiamento com segurança e libera cada parcela só depois da nossa verificação em campo.",
          "Quem constrói recebe o dinheiro no ritmo da obra, e o banco tem a garantia de que o imóvel está sendo construído como o projeto prevê.",
        ],
      },
    ],
  },
  {
    slug: "banco-do-brasil",
    nome: "Banco do Brasil",
    segmento: "Instituição financeira",
    logo: "/photos/clientes/bb-preto.png",
    ratio: 7.142857,
    k: 13,
    cases: [
      {
        slug: "banco-do-brasil-avaliacao",
        titulo: "Valor de mercado das agências e imóveis",
        servico: "Laudo de avaliação de imóveis",
        capaProvisoria: "/photos/servico-pericia.jpg",
        capaAlt: "Engenheiro analisando documentos de avaliação",
        equipamentos: [],
        problema: [
          "O Banco do Brasil precisa saber quanto valem as suas agências, seja para dar o imóvel em garantia ou vender, seja para negociar o aluguel.",
          "Além das agências, o banco também demanda a avaliação de imóveis residenciais e comerciais.",
        ],
        diagnostico: [
          "Para cada imóvel fazemos a vistoria, levantamos o mercado da região e comparamos com imóveis semelhantes.",
          "Fazemos dois tipos de laudo: o de avaliação para garantia, que indica o valor de venda, e o de avaliação para locação, que indica o valor do aluguel.",
          "Quando o banco pede o laudo completo, o trabalho atinge grau de fundamentação II e grau de precisão III, com vários anexos e o mapa das amostras usadas na comparação.",
        ],
        solucao: [
          "O banco recebe laudos que embasam decisões de garantia, venda e locação das agências e dos demais imóveis.",
          "O laudo completo, mais elaborado, dá ainda mais segurança técnica quando o valor precisa ser defendido.",
        ],
      },
      {
        slug: "banco-do-brasil-vistoria-agencias",
        titulo: "Vistoria das agências para contratos de serviço",
        servico: "Vistoria de agências",
        capaProvisoria: "/photos/servico-vistoria.jpg",
        capaAlt: "Vistoria técnica em imóvel",
        equipamentos: [],
        problema: [
          "As agências do Banco do Brasil têm contratos de serviço, como manutenção e limpeza, e o banco precisa verificar as condições de cada agência.",
        ],
        diagnostico: [
          "Vistoriamos as agências e registramos o estado dos ambientes e dos sistemas cobertos pelos contratos.",
        ],
        solucao: [
          "O banco recebe o registro técnico de cada agência para acompanhar os contratos de manutenção e limpeza.",
        ],
      },
    ],
  },
  {
    slug: "pjerj",
    nome: "PJERJ",
    segmento: "Tribunal de Justiça do Estado do Rio de Janeiro",
    logo: "/photos/clientes/pjerj-preto.png",
    ratio: 900 / 250,
    k: 9.5,
    cases: [
      {
        slug: "pjerj-pericia-estrutural",
        titulo: "A trinca é estrutural? O prédio corre risco?",
        servico: "Perícia judicial estrutural",
        capaAlt: "Trinca em parede de edificação",
        capaProvisoria: "/photos/problema-trincas.jpg",
        equipamentos: [],
        problema: [
          "Em um processo judicial, as partes discordam sobre trincas e anomalias em uma edificação: são estruturais ou não? O prédio corre risco?",
          "O juiz nomeia a KFK como perita: a questão é de engenharia, e ele precisa de uma resposta técnica para decidir a causa.",
        ],
        diagnostico: [
          "Vamos ao imóvel, avaliamos a estrutura e cada anomalia apontada no processo e identificamos se a trinca é estrutural ou não e qual a sua causa.",
        ],
        solucao: [
          "O juiz recebe o laudo pericial com a resposta técnica, se há ou não problema estrutural e o risco para a edificação, e decide a causa com base nele.",
        ],
      },
      {
        slug: "pjerj-pericia-infiltracao",
        titulo: "Infiltração: de quem é a responsabilidade?",
        servico: "Perícia judicial de infiltração",
        capaAlt: "Mancha de infiltração no teto de um apartamento",
        capaProvisoria: "/photos/laudo-protege.jpg",
        equipamentos: [],
        problema: [
          "Infiltração é um dos motivos mais comuns de processo: o apartamento de cima vaza no de baixo, ou a água do telhado chega à unidade e o morador e o condomínio discordam sobre quem deve pagar.",
          "O juiz nomeia a KFK como perita: a questão é de engenharia, e ele precisa de uma resposta técnica para decidir a causa.",
        ],
        diagnostico: [
          "Verificamos a infiltração no local, rastreamos a origem da água e apontamos a responsabilidade: se é do condomínio, de falta de manutenção ou do morador.",
        ],
        solucao: [
          "O laudo pericial mostra ao juiz a origem do problema e quem responde por ele, base para a sentença e para o reparo.",
        ],
      },
      {
        slug: "pjerj-pericia-concessionaria",
        titulo: "Medidor com defeito ou consumo real?",
        servico: "Perícia judicial em concessionárias",
        capaAlt: "Medidor de água e relógio de energia",
        capaProvisoria: "/photos/beneficio-5-anomalias.jpg",
        equipamentos: [],
        problema: [
          "O morador contesta a conta de água ou de luz, e a concessionária diz que o consumo é real. A discussão vai para a Justiça.",
          "O juiz nomeia a KFK como perita: a questão é de engenharia, e ele precisa de uma resposta técnica para decidir a causa.",
        ],
        diagnostico: [
          "Verificamos o medidor e as instalações do imóvel para identificar se o relógio está com defeito, se há fuga de água ou de corrente elétrica, ou se o consumo é de fato do morador.",
        ],
        solucao: [
          "O juiz recebe o laudo com a causa do consumo apontada tecnicamente e decide quem tem razão.",
        ],
      },
      {
        slug: "pjerj-avaliacao-judicial",
        titulo: "Quanto vale? Avaliações em partilhas e disputas",
        servico: "Perícia judicial de avaliação de imóveis",
        capaAlt: "Engenheiro avaliando um imóvel residencial",
        capaProvisoria: "/photos/beneficio-1-juridico.jpg",
        equipamentos: [],
        problema: [
          "Muitos processos dependem de um valor. Em uma separação, um dos dois continua morando no imóvel e o outro pede o aluguel da sua parte, ou o bem precisa ser dividido. Em outro caso, um vizinho abriu uma janela sobre o terreno ao lado e precisa pagar pela área usada.",
          "O juiz nomeia a KFK como perita: a questão é de engenharia, e ele precisa de uma resposta técnica para decidir a causa.",
        ],
        diagnostico: [
          "Vistoriamos o imóvel e calculamos o valor pedido no processo: o valor de mercado para a partilha, o valor de aluguel ou o valor do metro quadrado da área em disputa.",
        ],
        solucao: [
          "O juiz recebe o valor com fundamentação técnica e o usa para dividir o bem, fixar o aluguel ou definir a indenização.",
        ],
      },
    ],
  },
  {
    slug: "poupex",
    nome: "Poupex",
    segmento: "Associação de Poupança e Empréstimo, ligada ao Exército",
    logo: "/photos/clientes/poupex-preto.png",
    ratio: 900 / 240,
    k: 7.5,
    cases: [
      {
        slug: "poupex-avaliacao",
        titulo: "Avaliação de imóveis residenciais de militares",
        servico: "Laudo de avaliação de imóveis",
        capaProvisoria: "/photos/beneficio-3-valorizacao.jpg",
        capaAlt: "Imóvel residencial avaliado",
        equipamentos: [],
        problema: [
          "A Poupex atende militares do Exército e precisa saber o valor dos imóveis residenciais envolvidos em cada operação: venda, garantia ou locação.",
        ],
        diagnostico: [
          "Vistoriamos cada imóvel e fazemos o laudo de avaliação simplificado, comparando com imóveis semelhantes da região.",
          "O trabalho é sempre de imóveis residenciais, com o objetivo definido pela operação: valor de venda, valor para garantia ou valor de aluguel.",
        ],
        solucao: [
          "A Poupex recebe o valor de cada imóvel com base técnica para aprovar a operação de cada militar.",
        ],
      },
    ],
  },
  {
    slug: "rubi",
    nome: "Condomínio Rubi",
    segmento: "Residencial Jardim Mariana Rubi",
    logo: "/photos/clientes/rubi-preto.png",
    ratio: 900 / 585,
    k: 5.4,
    cases: [
      {
        slug: "rubi-laje-estacionamento",
        titulo: "A laje cedeu: risco estrutural ou vício da construtora?",
        servico: "Vistoria de análise de causalidade estrutural",
        capaProvisoria: "/photos/problema-infiltracao.jpg",
        capaAlt: "Laje de estacionamento com infiltração sobre estrutura metálica",
        equipamentos: ["Esclerômetro", "Nível a laser", "Câmera termográfica"],
        problema: [
          "A laje do estacionamento tinha uma flecha grande: um abaulamento visível por baixo. Os moradores temiam que ela tivesse cedido demais e que houvesse risco estrutural.",
          "O condomínio queria saber se podia cobrar a construtora. Vício construtivo estrutural é considerado vício oculto, não fica limitado ao prazo de 5 anos, e, se o risco for culpa da construtora, ela é obrigada a reparar. Se fosse falta de manutenção, a conta seria do próprio condomínio.",
        ],
        diagnostico: [
          "Fizemos uma vistoria de análise de causalidade para separar o que era defeito da obra do que era falta de manutenção.",
          "Com o esclerômetro, verificamos a resistência do concreto. Com o nível a laser, medimos o nivelamento da laje. O abaulamento existia só por baixo, sem nenhum reflexo na face de cima: a laje cedeu durante a execução, no escoramento, e a flecha não representava risco estrutural.",
          "A câmera termográfica, usada num dia de chuva, mostrou um problema maior: muitos pontos de infiltração. A laje estava muito fissurada e cheia de juntas, e a água passava direto para a estrutura metálica que a sustenta.",
          "Essa estrutura metálica estava com corrosão muito avançada, o que reduz muito a sua vida útil. Fomos chamados por um problema e encontramos outro, mais sério.",
        ],
        solucao: [
          "O laudo mostrou que a flecha não era um risco e apontou a causa real do dano: o projeto de arquitetura não previu, no memorial descritivo, impermeabilização nem revestimento adequado para uma laje de estacionamento.",
          "Com o diagnóstico, indicamos o tratamento da laje e da estrutura metálica.",
          "O condomínio saiu com a causa do problema definida e com base técnica para tratar com a construtora a falha de projeto.",
        ],
      },
    ],
  },
  {
    slug: "saint-martin",
    nome: "Saint Martin",
    segmento: "Condomínio residencial na Península, Barra da Tijuca",
    logo: "/photos/clientes/resstmartin-preto.png",
    ratio: 900 / 333,
    k: 7,
    cases: [
      {
        slug: "saint-martin-causalidade-estrutural",
        titulo: "O que está trincando o piso das garagens?",
        servico: "Vistoria de análise de causalidade estrutural",
        andamento: true,
        capaProvisoria: "/photos/problema-trincas.jpg",
        capaAlt: "Trincas no piso de concreto de uma garagem subterrânea",
        equipamentos: ["Potencial de corrosão", "Pacômetro"],
        problema: [
          "O condomínio, dentro da Península, tem dois subsolos de garagem com cerca de 19 mil m² cada. O piso dos dois, principalmente o do primeiro subsolo, está tomado de fissuras, trincas e rachaduras.",
          "Os dois pavimentos foram construídos em laje nervurada com cubetas. Sem saber o que provoca as aberturas, o condomínio não sabe se o problema é estrutural nem o que fazer para resolvê-lo.",
          "Cada abertura tem um nome porque cada uma pesa diferente: a fissura é fina e não tem caráter estrutural; a trinca, acima de 0,20 mm, e a rachadura, acima de 0,25 mm, já indicam um problema na estrutura.",
        ],
        diagnostico: [
          "É uma vistoria de análise de causalidade: o laudo precisa dizer o que causa o problema, e a causa não se constata só olhando.",
          "A primeira hipótese é a movimentação dos carros sobre um piso sem juntas de dilatação. Mas a causa pode estar no projeto, na execução ou numa armadura mal dimensionada, e só os ensaios confirmam qual é.",
          "Mapeamos todas as fissuras e trincas dos subsolos para entender como a estrutura está se comportando.",
          "Depois vêm os ensaios. Selos de vidro colados sobre as fissuras mostram se elas estão ativas: se o vidro trinca, a estrutura está se movimentando. O ensaio de potencial de corrosão mostra se o aço dentro da laje está corroendo. O pacômetro confere se o cobrimento de concreto sobre a armadura segue a norma.",
          "Por fim, modelamos a estrutura em 3D no computador para ver como ela trabalha e onde estão os pontos de fragilidade.",
          "Funciona como no médico: os ensaios são os exames que permitem fechar o diagnóstico.",
        ],
        solucao: [
          "Com o resultado dos ensaios, o laudo aponta a causa das trincas, se de projeto ou de execução, e indica o tratamento da estrutura.",
          "O ensaio de corrosão também define a vida útil do piso: quantos anos ele ainda aguenta e em que prazo precisa ser tratado.",
          "Assim o condomínio trata a causa uma vez, em vez de gastar com reparos que não resolvem o problema. O trabalho está em andamento.",
        ],
      },
    ],
  },
];

/** Every case in list order, paired with its client. */
export const allCases = clientes.flatMap((cliente) => cliente.cases.map((caso) => ({ cliente, caso })));

export const findCase = (slug: string) => allCases.find((x) => x.caso.slug === slug);
