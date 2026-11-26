"use client";

import type { ReactNode } from "react";
import { Armadilha, Aviso, useEnvio } from "./useEnvio";

const label = "block text-[11px] font-semibold uppercase tracking-[0.04em] text-neutral-500 lg:text-[length:max(0.7vw,12.6px)]";
const input =
  "mt-3 block w-full rounded-none border-0 bg-transparent p-0 text-base text-ink outline-none placeholder:text-neutral-400 lg:mt-[0.8vw] lg:text-[length:max(1.1vw,19.8px)]";

const assuntos = ["Orçamento", "Dúvidas", "Contato"];

/** One cell of the form grid: the whole cell is the label, so a click anywhere focuses the field. */
function Cell({ name, title, className = "", children }: { name: string; title: string; className?: string; children: ReactNode }) {
  return (
    <label
      htmlFor={name}
      className={`group paper block cursor-text px-5 py-5 transition-colors duration-300 focus-within:bg-white lg:px-[1.6vw] lg:py-[1.4vw] ${className}`}
    >
      <span className={`${label} transition-colors duration-300 group-focus-within:text-brand`}>{title}</span>
      {children}
    </label>
  );
}

export default function ContatoForm() {
  const { estado, enviando, ref, onSubmit } = useEnvio("contato");
  return (
    <form ref={ref} onSubmit={onSubmit} className="relative">
      {/* 1px gaps over a grey background draw the grid lines between the cells */}
      <div className="grid gap-px border-t border-neutral-200 bg-neutral-200 sm:grid-cols-2 sm:border-x lg:border-0">
        <Cell name="nome" title="Nome">
          <input id="nome" name="nome" type="text" autoComplete="name" required placeholder="Seu nome" className={input} />
        </Cell>
        <Cell name="email" title="E-mail">
          <input id="email" name="email" type="email" autoComplete="email" required placeholder="voce@email.com" className={input} />
        </Cell>
        <Cell name="telefone" title="Telefone">
          <input id="telefone" name="telefone" type="tel" autoComplete="tel" inputMode="tel" placeholder="(21) 00000-0000" className={input} />
        </Cell>
        <Cell name="assunto" title="Assunto">
          <select id="assunto" name="assunto" required defaultValue="" className={`${input} cursor-pointer`}>
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
        <Cell name="mensagem" title="Mensagem" className="sm:col-span-2">
          <textarea
            id="mensagem"
            name="mensagem"
            rows={6}
            required
            placeholder="Conte o que está acontecendo no imóvel: endereço, tipo de imóvel e o problema."
            className={`${input} resize-none leading-relaxed`}
          />
        </Cell>

        {/* last row: consent on the left, send on the right */}
        <div className="paper flex items-center px-5 py-5 lg:px-[1.6vw] lg:py-[1.4vw]">
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-neutral-600 lg:gap-[0.9vw] lg:text-[length:max(0.85vw,15.3px)] lg:leading-[1.6]">
            <input type="checkbox" name="aceite" required className="peer sr-only" />
            <span
              aria-hidden
              className="mt-1 grid h-5 w-5 shrink-0 place-items-center border border-neutral-300 text-transparent transition-colors duration-300 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-sun peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand lg:mt-[0.3vw] lg:h-[1.3vw] lg:min-h-5 lg:w-[1.3vw] lg:min-w-5"
            >
              <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 6.5 5 9.5 10 3" />
              </svg>
            </span>
            <span>Concordo que meus dados enviados sejam coletados e armazenados.</span>
          </label>
        </div>
        <button
          type="submit"
          disabled={enviando}
          data-cursor="solid"
          className="group flex min-h-20 cursor-pointer items-center justify-between gap-4 bg-sun px-5 text-left text-sm font-medium uppercase tracking-[0.06em] text-ink transition-colors duration-300 hover:bg-ink hover:text-white disabled:cursor-wait disabled:opacity-70 lg:min-h-[5vw] lg:px-[1.6vw] lg:text-[length:max(0.9vw,16px)]"
        >
          {enviando ? "Enviando…" : "Enviar mensagem"}
          <span aria-hidden className="text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 lg:text-[1.6vw]">
            ↗
          </span>
        </button>
      </div>
      <Aviso estado={estado} className="paper border-t border-neutral-200 px-5 py-4 text-sm lg:px-[1.6vw] lg:py-[1.2vw] lg:text-[length:max(0.9vw,16px)]" />
      <Armadilha />
    </form>
  );
}
