"use client";

import { startTransition, useActionState, useEffect, useRef, type FormEvent } from "react";
import { enviarMensagem, type Estado } from "../actions/mensagem";

const acoes = {
  contato: enviarMensagem.bind(null, "contato"),
  orcamento: enviarMensagem.bind(null, "orcamento"),
};

/**
 * Sends a form through the e-mail Server Action. The submit is dispatched by hand (not via the
 * form's action prop) so a failed send keeps what the visitor typed; the form clears only on success.
 */
export function useEnvio(tipo: keyof typeof acoes) {
  const [estado, despachar, enviando] = useActionState<Estado, FormData>(acoes[tipo], null);
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (estado?.ok) ref.current?.reset();
  }, [estado]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    startTransition(() => despachar(fd));
  };

  return { estado, enviando, ref, onSubmit };
}

/** Hidden field bots fill in and people never see. */
export function Armadilha() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Site
        <input type="text" name="site" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

export function Aviso({ estado, className = "" }: { estado: Estado; className?: string }) {
  return (
    <p role="status" aria-live="polite" className={`${estado ? "" : "sr-only"} ${estado?.ok ? "text-brand" : "text-red-700"} ${className}`}>
      {estado?.mensagem}
    </p>
  );
}
