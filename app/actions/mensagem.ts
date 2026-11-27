"use server";

import nodemailer from "nodemailer";
import { rotulos, validar, type Erros, type Tipo } from "@/lib/validacao";

/**
 * Sends the Contato and Orçamento forms by e-mail over SMTP.
 *
 * Environment (set on the host, never committed):
 *   SMTP_HOST, SMTP_PORT (465 = SSL, 587 = STARTTLS), SMTP_USER, SMTP_PASS
 *   MAIL_TO   where the messages arrive (today a provisional inbox; later contato@kfkvistorias.com.br)
 *   MAIL_FROM sender shown in the inbox, defaults to SMTP_USER
 */

/**
 * `erros` holds one message per failing field; `valores` echoes what was sent so the form can
 * be filled back in when the page re-renders after a submission made without JavaScript.
 */
export type Estado = { ok: boolean; mensagem: string; erros?: Erros; valores?: Record<string, string> } | null;

const CAMPOS: Record<Tipo, { assunto: string; campos: [string, string][] }> = {
  contato: {
    assunto: "Nova mensagem pelo site",
    campos: [
      ["nome", "Nome"],
      ["email", "E-mail"],
      ["telefone", "Telefone"],
      ["assunto", "Assunto"],
      ["mensagem", "Mensagem"],
    ],
  },
  orcamento: {
    assunto: "Novo pedido de orçamento pelo site",
    campos: [
      ["nome", "Nome"],
      ["telefone", "Telefone / WhatsApp"],
      ["email", "E-mail"],
      ["local", "Bairro / cidade do imóvel"],
      ["servico", "Serviço"],
      ["imovel", "Tipo de imóvel"],
      ["mensagem", "O que está acontecendo"],
    ],
  },
};

const ERRO = "Não foi possível enviar agora. Tente de novo em instantes ou fale com a gente pelo WhatsApp.";

const texto = (fd: FormData, k: string, max = 200) => String(fd.get(k) ?? "").trim().slice(0, max);
const escapar = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export async function enviarMensagem(tipo: Tipo, _anterior: Estado, fd: FormData): Promise<Estado> {
  const def = CAMPOS[tipo];
  if (!def) return { ok: false, mensagem: ERRO };

  // honeypot: people never see this field, bots fill it in; pretend it worked
  if (texto(fd, "site")) return { ok: true, mensagem: "Mensagem enviada. Retornamos em breve." };

  const dados = def.campos.map(([k, rotulo]) => [rotulo, texto(fd, k, k === "mensagem" ? 5000 : 200)] as const);
  const nome = texto(fd, "nome");
  const email = texto(fd, "email");

  // same rules as the browser, enforced here so a submission that skips the JavaScript is still refused
  const erros = validar(tipo, fd);
  if (Object.keys(erros).length) {
    const valores = Object.fromEntries(
      [...def.campos.map(([k]) => k), "aceite"].map((k) => [k, texto(fd, k, k === "mensagem" ? 5000 : 200)]),
    );
    return { ok: false, mensagem: `Preencha corretamente: ${rotulos(tipo, erros).join(", ")}.`, erros, valores };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    console.error("[mensagem] SMTP não configurado: defina SMTP_HOST, SMTP_USER, SMTP_PASS e MAIL_TO");
    return { ok: false, mensagem: ERRO };
  }

  const porta = Number(SMTP_PORT) || 465;
  const transporte = nodemailer.createTransport({
    host: SMTP_HOST,
    port: porta,
    secure: porta === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const linhas = dados.filter(([, v]) => v);
  try {
    await transporte.sendMail({
      from: `"Site KFK Vistorias" <${MAIL_FROM || SMTP_USER}>`,
      to: MAIL_TO,
      replyTo: `"${nome.replace(/"/g, "")}" <${email}>`,
      subject: `${def.assunto}: ${nome}`,
      text: linhas.map(([r, v]) => `${r}: ${v}`).join("\n\n"),
      html: linhas
        .map(([r, v]) => `<p><strong>${escapar(r)}</strong><br>${escapar(v).replace(/\n/g, "<br>")}</p>`)
        .join(""),
    });
  } catch (e) {
    console.error("[mensagem] falha no envio:", e);
    return { ok: false, mensagem: ERRO };
  }

  return {
    ok: true,
    mensagem:
      tipo === "orcamento"
        ? "Solicitação enviada. Um engenheiro retorna com a proposta em breve."
        : "Mensagem enviada. Retornamos em breve.",
  };
}
