"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { Alerta, Armadilha, Erro, useEnvio } from "./useEnvio";

const label = "block text-[11px] font-semibold uppercase tracking-[0.04em] text-neutral-500 lg:text-[length:max(0.7vw,12.6px)]";
const input =
  "mt-2 block w-full rounded-none border-0 border-b border-neutral-300 bg-transparent py-3 text-base text-ink outline-none transition-colors duration-300 placeholder:text-neutral-400 focus:border-brand aria-[invalid=true]:border-[#dc3545] lg:mt-[0.6vw] lg:py-[0.9vw] lg:text-[length:max(1.1vw,19.8px)]";
const legend = "flex items-center gap-3 text-sm text-neutral-400 lg:gap-[0.8vw] lg:text-[length:max(0.85vw,15.3px)]";
const group = "border-t border-neutral-200 py-8 first:border-t-0 first:pt-0 lg:py-[3vw] lg:first:pt-0";

const servicos = ["Inspeção predial", "Vistorias técnicas", "Avaliação e perícia", "Ainda não sei"];
const imoveis = ["Condomínio", "Residencial", "Comercial", "Outro"];

function Field({ name, children }: { name: string; children: ReactNode }) {
  return (
    <label htmlFor={name} className="block">
      {children}
    </label>
  );
}

/** Pick-one options drawn as outlined chips; the chosen one turns solid ink. */
function Chips({
  name,
  options,
  required,
  invalido,
  marcado,
}: {
  name: string;
  options: string[];
  required?: boolean;
  invalido?: boolean;
  marcado?: string;
}) {
  return (
    <div className="mt-4 flex flex-wrap gap-3 lg:mt-[1.4vw] lg:gap-[0.8vw]">
      {options.map((o) => (
        <label key={o} className="relative">
          <input
            type="radio"
            name={name}
            value={o}
            required={required}
            defaultChecked={marcado === o}
            data-invalido={invalido || undefined}
            className="peer sr-only"
          />
          <span className="block border border-neutral-300 px-4 peer-data-invalido:border-[#dc3545] peer-data-invalido:bg-[#fdf2f3] py-3 text-sm leading-none transition-colors duration-300 hover:border-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand lg:px-[1.4vw] lg:py-[1.1vw] lg:text-[length:max(0.95vw,17.1px)]">
            {o}
          </span>
        </label>
      ))}
    </div>
  );
}

export default function OrcamentoForm() {
  const { enviando, erros, alerta, alertaRef, campo, valores, fecharAlerta, formProps } = useEnvio("orcamento");
  const erro = (n: string) => <Erro tipo="orcamento" nome={n} erros={erros} />;
  const rotulo = (n: string) => `${label} ${erros[n] ? "text-[#dc3545]" : ""}`;
  return (
    <div className="lg:pl-[3vw]">
      <Alerta ref={alertaRef} alerta={alerta} onClose={fecharAlerta} className={alerta ? "mb-8 lg:mb-[2.4vw]" : ""} />
      <form {...formProps} className="relative">
        <Reveal variant="right" className={group}>
          <p className={legend}>
            <span aria-hidden className="h-2 w-2 bg-sun" />
            01 · Seus dados
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:mt-[2vw] lg:gap-x-[3vw] lg:gap-y-[2.2vw]">
            <Field name="nome">
              <span className={rotulo("nome")}>Nome completo</span>
              <input
                id="nome"
                name="nome"
                type="text"
                autoComplete="name"
                required
                defaultValue={valores.nome}
                placeholder="Como podemos chamar você"
                className={input}
                {...campo("nome")}
              />
              {erro("nome")}
            </Field>
            <Field name="telefone">
              <span className={rotulo("telefone")}>Telefone / WhatsApp</span>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                required
                defaultValue={valores.telefone}
                placeholder="(21) 90000-0000"
                className={input}
                {...campo("telefone")}
              />
              {erro("telefone")}
            </Field>
            <Field name="email">
              <span className={rotulo("email")}>E-mail</span>
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
              {erro("email")}
            </Field>
            <Field name="local">
              <span className={label}>Bairro / cidade do imóvel</span>
              <input
                id="local"
                name="local"
                type="text"
                autoComplete="address-level2"
                defaultValue={valores.local}
                placeholder="Ex.: Tijuca, Rio de Janeiro"
                className={input}
              />
            </Field>
          </div>
        </Reveal>

        <Reveal variant="left" className={group}>
          <p className={legend}>
            <span aria-hidden className="h-2 w-2 bg-sun" />
            02 · O que você precisa
          </p>
          <fieldset className="mt-6 lg:mt-[2vw]" aria-describedby={erros.servico ? "orcamento-servico-erro" : undefined}>
            <legend className={rotulo("servico")}>Serviço</legend>
            <Chips name="servico" options={servicos} required invalido={!!erros.servico} marcado={valores.servico} />
            {erro("servico")}
          </fieldset>
          <fieldset className="mt-8 lg:mt-[2.4vw]">
            <legend className={label}>Tipo de imóvel</legend>
            <Chips name="imovel" options={imoveis} marcado={valores.imovel} />
          </fieldset>
        </Reveal>

        <Reveal variant="right" className={group}>
          <p className={legend}>
            <span aria-hidden className="h-2 w-2 bg-sun" />
            03 · Conte o caso
          </p>
          <div className="mt-6 lg:mt-[2vw]">
            <Field name="mensagem">
              <span className={rotulo("mensagem")}>O que está acontecendo no imóvel?</span>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                required
                defaultValue={valores.mensagem}
                {...campo("mensagem")}
                placeholder="Ex.: trincas na fachada, infiltração no teto, laudo para entrega de obra…"
                className={`${input} resize-none`}
              />
              {erro("mensagem")}
            </Field>
          </div>
        </Reveal>

        <Reveal variant="zoom" className="pt-8 lg:pt-[3vw]">
          <label className="flex items-start gap-3 text-sm leading-6 text-neutral-600 lg:gap-[0.9vw] lg:text-[length:max(0.85vw,15.3px)] lg:leading-[1.6]">
            <input type="checkbox" name="aceite" required defaultChecked={!!valores.aceite} className="peer sr-only" {...campo("aceite")} />
            <span
              aria-hidden
              className="mt-1 grid h-5 w-5 shrink-0 place-items-center border border-neutral-300 peer-aria-invalid:border-[#dc3545] text-transparent transition-colors duration-300 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-sun peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand lg:mt-[0.3vw] lg:h-[1.3vw] lg:min-h-5 lg:w-[1.3vw] lg:min-w-5"
            >
              <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 6.5 5 9.5 10 3" />
              </svg>
            </span>
            <span>Concordo em ser contatado pela KFK Vistorias &amp; Perícias para receber a proposta. Usamos seus dados apenas para isso.</span>
          </label>
          {erro("aceite")}
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6 lg:mt-[2.4vw] lg:gap-[2vw]">
            <button
              type="submit"
              disabled={enviando}
              className="btn-sun disabled:cursor-wait disabled:opacity-70 max-sm:w-full max-sm:justify-center lg:gap-[1vw] lg:px-[3vw] lg:py-[1.4vw] lg:text-[length:max(1vw,18px)]"
            >
              {enviando ? "Enviando…" : "Enviar solicitação"}
            </button>
            <p className="text-xs text-neutral-500 lg:text-[length:max(0.8vw,14.4px)]">Um engenheiro retorna com a proposta.</p>
          </div>
        </Reveal>
        <Armadilha />
      </form>
    </div>
  );
}
