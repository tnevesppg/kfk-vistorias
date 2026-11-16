export type Equipamento = { nome: string; marca?: string; uso: string; src: string };

/** Equipment used in the field. Photos live in public/photos/equipamentos (white background). */
export const equipamentos: Equipamento[] = [
  { nome: "Drone Matrice 4T", marca: "DJI", uso: "Inspeção de fachadas, coberturas e áreas de difícil acesso, com câmera térmica e zoom.", src: "/photos/equipamentos/drone-dji-matrice-4t.webp" },
  { nome: "Câmera termográfica", marca: "Flir", uso: "Mostra diferenças de temperatura que revelam infiltrações, umidade oculta e falhas elétricas.", src: "/photos/equipamentos/camera-termografica-flir.webp" },
  { nome: "Detector de umidade", uso: "Mede o teor de umidade em paredes, pisos e lajes sem quebrar o revestimento.", src: "/photos/equipamentos/detector-de-umidade.webp" },
  { nome: "Pacômetro", marca: "Bosch", uso: "Localiza armaduras, tubulações e cabos dentro do concreto e da alvenaria.", src: "/photos/equipamentos/pacometro-bosch-d-tect-120.webp" },
  { nome: "Câmera boroscópica", uso: "Enxerga o interior de shafts, forros, tubulações e cavidades por pequenas aberturas.", src: "/photos/equipamentos/camera-boroscopica.webp" },
  { nome: "Potencial de corrosão", uso: "Mapeia o risco de corrosão das armaduras no concreto armado (método da meia-célula).", src: "/photos/equipamentos/medidor-potencial-de-corrosao.webp" },
  { nome: "Nível a laser", marca: "Bosch", uso: "Verifica prumo, nível e planicidade de pisos, paredes e esquadrias.", src: "/photos/equipamentos/nivel-laser-bosch-gll-3-80.webp" },
  { nome: "Esclerômetro", marca: "Metrotokyo", uso: "Estima a resistência superficial do concreto por ensaio não destrutivo.", src: "/photos/equipamentos/esclerometro-metrotokyo.webp" },
  { nome: "Traçador químico", uso: "Corante fluorescente que rastreia o caminho da água e identifica a origem da infiltração.", src: "/photos/equipamentos/tracador-quimico.webp" },
  { nome: "Paquímetro", marca: "Metrotokyo", uso: "Mede com precisão espessuras, aberturas de fissuras e dimensões de peças.", src: "/photos/equipamentos/paquimetro-metrotokyo.webp" },
  { nome: "Trena a laser", marca: "Bosch", uso: "Medições rápidas e precisas de ambientes, vãos e alturas.", src: "/photos/equipamentos/trena-laser-bosch-glm-50.webp" },
];
