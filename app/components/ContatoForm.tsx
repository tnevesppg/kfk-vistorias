"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";

const label = "block text-[11px] font-semibold uppercase tracking-[0.04em] text-neutral-500 lg:text-[length:max(0.7vw,12.6px)]";
const input =
  "mt-2 block w-full rounded-none border-0 border-b border-neutral-300 bg-transparent py-3 text-base text-ink outline-none transition-colors duration-300 placeholder:text-neutral-400 focus:border-brand lg:mt-[0.6vw] lg:py-[0.9vw] lg:text-[length:max(1.1vw,19.8px)]";

const assuntos = ["Orçamento", "Dúvidas", "Contato"];

function Field({ name, children }: { name: string; children: ReactNode }) {
  return (
    <label htmlFor={name} className="block">
      {children}
    </label>
  );
}

export default function ContatoForm() {
  return (
    <form
      className="lg:pl-[3vw]"
      onSubmit={(e) => {
        // the screen only: sending is not wired yet
        e.preventDefault();
      }}
    >
      <Reveal variant="right">
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-x-[3vw] lg:gap-y-[2.2vw]">
          <Field name="nome">
            <span className={label}>Nome</span>
            <input id="nome" name="nome" type="text" autoComplete="name" required className={input} />
          </Field>
          <Field name="email">
            <span className={label}>E-mail</span>
            <input id="email" name="email" type="email" autoComplete="email" required className={input} />
          </Field>
          <Field name="telefone">
            <span className={label}>Telefone</span>
            <input id="telefone" name="telefone" type="tel" autoComplete="tel" inputMode="tel" className={input} />
          </Field>
          <Field name="assunto">
            <span className={label}>Assunto</span>
            <select id="assunto" name="assunto" required defaultValue="" className={input}>
              <option value="" disabled>
                Selecione
              </option>
              {assuntos.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field name="mensagem">
              <span className={label}>Mensagem</span>
              <textarea id="mensagem" name="mensagem" rows={5} required className={`${input} resize-none`} />
            </Field>
          </div>
        </div>
      </Reveal>

      <Reveal variant="zoom" className="mt-8 lg:mt-[3vw]">
        <label className="flex items-start gap-3 text-sm leading-6 text-neutral-600 lg:gap-[0.9vw] lg:text-[length:max(0.85vw,15.3px)] lg:leading-[1.6]">
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
        <div className="mt-8 lg:mt-[2.4vw]">
          <button type="submit" className="btn-sun max-sm:w-full max-sm:justify-center lg:gap-[1vw] lg:px-[3vw] lg:py-[1.4vw] lg:text-[length:max(1vw,18px)]">
            Enviar
          </button>
        </div>
      </Reveal>
    </form>
  );
}
