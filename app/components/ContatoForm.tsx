"use client";

import type { ReactNode } from "react";
import { Alerta, Armadilha, Erro, useEnvio } from "./useEnvio";

const label = "block text-[11px] font-semibold uppercase tracking-[0.04em] text-neutral-500 lg:text-[length:max(0.7vw,12.6px)]";
const input =
  "mt-3 block w-full rounded-none border-0 bg-transparent p-0 text-base text-ink outline-none placeholder:text-neutral-400 lg:mt-[0.8vw] lg:text-[length:max(1.1vw,19.8px)]";

const assuntos = ["Orçamento", "Dúvidas", "Contato"];

/** One cell of the form grid: the whole cell is the label, so a click anywhere focuses the field. */
function Cell({
  name,
  title,
  erro,
  className = "",
  children,
}: {
  name: string;
  title: string;
  erro?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={name}
      className={`group block cursor-text px-5 py-5 transition-colors duration-300 focus-within:bg-white lg:px-[1.6vw] lg:py-[1.4vw] ${
        erro ? "bg-[#fdf2f3] shadow-[inset_0_0_0_1px_#dc3545]" : "paper"
      } ${className}`}
    >
      <span className={`${label} transition-colors duration-300 ${erro ? "text-[#dc3545]" : "group-focus-within:text-brand"}`}>{title}</span>
      {children}
      {erro}
    </label>
  );
}

export default function ContatoForm() {
  const { enviando, erros, alerta, alertaRef, campo, valores, fecharAlerta, formProps } = useEnvio("contato");
  const erro = (n: string) => (erros[n] ? <Erro tipo="contato" nome={n} erros={erros} /> : undefined);
  return (
    <form {...formProps} className="relative">
      <Alerta ref={alertaRef} alerta={alerta} onClose={fecharAlerta} className={alerta ? "mb-4 lg:mb-[1.2vw]" : ""} />
      {/* 1px gaps over a grey background draw the grid lines between the cells */}
      <div className="grid gap-px border-t border-neutral-200 bg-neutral-200 sm:grid-cols-2 sm:border-x lg:border-0">
        <Cell name="nome" title="Nome" erro={erro("nome")}>
          <input
            id="nome"
            name="nome"
            type="text"
            autoComplete="name"
            required
            defaultValue={valores.nome}
            placeholder="Seu nome"
            className={input}
            {...campo("nome")}
          />
        </Cell>
        <Cell name="email" title="E-mail" erro={erro("email")}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={valores.email}
            placeholder="voce@email.com"
            className={input}
            {...campo("email")}
          />
        </Cell>
        <Cell name="telefone" title="Telefone" erro={erro("telefone")}>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            defaultValue={valores.telefone}
            placeholder="(21) 00000-0000"
            className={input}
            {...campo("telefone")}
          />
        </Cell>
        <Cell name="assunto" title="Assunto" erro={erro("assunto")}>
          <select
            id="assunto"
            name="assunto"
            required
            defaultValue={valores.assunto ?? ""}
            className={`${input} cursor-pointer`}
            {...campo("assunto")}
          >
            <option value="" disabled>
              Selecione
            </option>
            {assuntos.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </Cell>
        <Cell name="mensagem" title="Mensagem" erro={erro("mensagem")} className="sm:col-span-2">
          <textarea
            id="mensagem"
            name="mensagem"
            rows={6}
            required
            defaultValue={valores.mensagem}
            {...campo("mensagem")}
            placeholder="Conte o que está acontecendo no imóvel: endereço, tipo de imóvel e o problema."
            className={`${input} resize-none leading-relaxed`}
          />
        </Cell>

        {/* last row: consent on the left, send on the right */}
        <div
          className={`flex flex-col justify-center px-5 py-5 lg:px-[1.6vw] lg:py-[1.4vw] ${
            erros.aceite ? "bg-[#fdf2f3] shadow-[inset_0_0_0_1px_#dc3545]" : "paper"
          }`}
        >
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-neutral-600 lg:gap-[0.9vw] lg:text-[length:max(0.85vw,15.3px)] lg:leading-[1.6]">
            <input type="checkbox" name="aceite" required defaultChecked={!!valores.aceite} className="peer sr-only" {...campo("aceite")} />
            <span
              aria-hidden
              className="mt-1 grid h-5 w-5 shrink-0 place-items-center border border-neutral-300 peer-aria-invalid:border-[#dc3545] text-transparent transition-colors duration-300 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-sun peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand lg:mt-[0.3vw] lg:h-[1.3vw] lg:min-h-5 lg:w-[1.3vw] lg:min-w-5"
            >
              <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 6.5 5 9.5 10 3" />
              </svg>
            </span>
            <span>Concordo que meus dados enviados sejam coletados e armazenados.</span>
          </label>
          {erro("aceite")}
        </div>
        <button
          type="submit"
          disabled={enviando}
          data-cursor="solid"
          className="group flex min-h-20 cursor-pointer items-center justify-between gap-4 bg-sun px-5 text-left text-sm font-medium uppercase tracking-[0.06em] text-ink transition-colors duration-300 hover:bg-ink hover:text-white disabled:cursor-wait disabled:opacity-70 lg:min-h-[5vw] lg:px-[1.6vw] lg:text-[length:max(0.9vw,16px)]"
        >
          {enviando ? "Enviando…" : "Enviar mensagem"}
          <span
            aria-hidden
            className="text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 lg:text-[1.6vw]"
          >
            ↗
          </span>
        </button>
      </div>
      <Armadilha />
    </form>
  );
}
