/**
 * Field rules for the Contato and Orçamento forms, shared by the browser (instant feedback)
 * and the Server Action (the real gate: it runs even when JavaScript is off or bypassed).
 */

export type Tipo = "contato" | "orcamento";
export type Erros = Partial<Record<string, string>>;

type Regra = { rotulo: string; obrigatorio?: boolean; checar?: (v: string) => string | null };

// name@domain.tld: allowed characters only, no leading/trailing/double dots, a letters-only TLD
const EMAIL = /^(?!\.)(?!.*\.\.)[A-Za-z0-9._%+-]+(?<!\.)@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;
const digitos = (v: string) => v.replace(/\D/g, "").length;

const email: Regra["checar"] = (v) => (EMAIL.test(v) ? null : "Digite um e-mail válido, como voce@email.com.");
const telefone: Regra["checar"] = (v) => (digitos(v) >= 10 && digitos(v) <= 11 ? null : "Digite o telefone com DDD, como (21) 90000-0000.");
const minimo = (n: number, o: string) => (v: string) => (v.length >= n ? null : `Escreva pelo menos ${n} caracteres ${o}.`);

export const REGRAS: Record<Tipo, Record<string, Regra>> = {
  contato: {
    nome: { rotulo: "Nome", obrigatorio: true, checar: minimo(2, "no nome") },
    email: { rotulo: "E-mail", obrigatorio: true, checar: email },
    telefone: { rotulo: "Telefone", checar: telefone },
    assunto: { rotulo: "Assunto", obrigatorio: true },
    mensagem: { rotulo: "Mensagem", obrigatorio: true, checar: minimo(10, "na mensagem") },
    aceite: { rotulo: "Concordância com o uso dos dados", obrigatorio: true },
  },
  orcamento: {
    nome: { rotulo: "Nome completo", obrigatorio: true, checar: minimo(2, "no nome") },
    telefone: { rotulo: "Telefone / WhatsApp", obrigatorio: true, checar: telefone },
    email: { rotulo: "E-mail", obrigatorio: true, checar: email },
    servico: { rotulo: "Serviço", obrigatorio: true },
    mensagem: { rotulo: "O que está acontecendo no imóvel", obrigatorio: true, checar: minimo(10, "na descrição") },
    aceite: { rotulo: "Concordância com o contato", obrigatorio: true },
  },
};

const VAZIO: Record<string, string> = {
  assunto: "Selecione um assunto.",
  servico: "Escolha um dos serviços.",
  aceite: "Marque a caixa para continuar.",
};

/** Error for one field, or null when it passes. */
export function validarCampo(tipo: Tipo, nome: string, valor: string): string | null {
  const r = REGRAS[tipo][nome];
  if (!r) return null;
  const v = valor.trim();
  if (!v) return r.obrigatorio ? (VAZIO[nome] ?? `Preencha o campo ${r.rotulo}.`) : null;
  return r.checar?.(v) ?? null;
}

/** Every failing field of a submission, in the order the form shows them. */
export function validar(tipo: Tipo, fd: FormData): Erros {
  const erros: Erros = {};
  for (const nome of Object.keys(REGRAS[tipo])) {
    const e = validarCampo(tipo, nome, String(fd.get(nome) ?? ""));
    if (e) erros[nome] = e;
  }
  return erros;
}

export const rotulos = (tipo: Tipo, erros: Erros) => Object.keys(erros).map((k) => REGRAS[tipo][k]?.rotulo ?? k);

/**
 * Phone mask: only the first two digits are formatted, as the area code in parentheses.
 * The rest is kept as typed (digits and an optional hyphen), so 8- and 9-digit numbers both fit.
 */
export function mascararTelefone(valor: string, apagando = false): string {
  const d = valor.replace(/\D/g, "");
  if (!d) return "";
  if (d.length < 2 || (d.length === 2 && apagando)) return `(${d}`;
  if (d.length === 2) return `(${d}) `;
  let vistos = 0;
  const corte = [...valor].findIndex((c) => /\d/.test(c) && ++vistos === 2) + 1;
  const resto = valor.slice(corte).replace(/[^\d-]/g, "").replace(/^-+/, "").slice(0, 10);
  return `(${d.slice(0, 2)}) ${resto}`;
}
