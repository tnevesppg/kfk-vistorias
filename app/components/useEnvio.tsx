"use client";

import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent, type Ref } from "react";
import { enviarMensagem, type Estado } from "../actions/mensagem";
import { mascararTelefone, validar, validarCampo, type Erros, type Tipo } from "@/lib/validacao";

const acoes = {
  contato: enviarMensagem.bind(null, "contato"),
  orcamento: enviarMensagem.bind(null, "orcamento"),
};

type Alerta = { ok: boolean; mensagem: string } | null;

/** Only the first failing field, in form order: the visitor fixes one thing at a time. */
const primeiro = (e: Erros): Erros => Object.fromEntries(Object.entries(e).slice(0, 1));

/**
 * Validates and sends a form through the e-mail Server Action.
 *
 * With JavaScript: fields are checked before anything is sent, one at a time: only the first failing
 * field is marked, focused and brought into view. The alert is kept for the server's answer. The
 * submit is dispatched by hand so a failed send keeps what the visitor typed; the form clears only
 * on success.
 * Without JavaScript: the form posts to the same action (the `action` prop), which runs the same
 * rules and sends the errors back with the typed values.
 */
export function useEnvio(tipo: Tipo) {
  const [estado, despachar, enviando] = useActionState<Estado, FormData>(acoes[tipo], null);
  const ref = useRef<HTMLFormElement>(null);
  const [erros, setErros] = useState<Erros>(primeiro(estado?.erros ?? {}));
  const [alerta, setAlerta] = useState<Alerta>(estado ? doServidor(estado) : null);
  const alertaRef = useRef<HTMLDivElement>(null);

  // a new answer from the server replaces the field errors and the alert (adjusted during render, not in an effect)
  const [visto, setVisto] = useState(estado);
  if (estado !== visto) {
    setVisto(estado);
    if (estado) {
      setErros(primeiro(estado.erros ?? {}));
      setAlerta(doServidor(estado));
    }
  }

  useEffect(() => {
    if (estado?.ok) ref.current?.reset();
  }, [estado]);

  // bring the alert into view whenever it changes to a new message
  useEffect(() => {
    if (alerta)
      alertaRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }, [alerta?.mensagem, alerta?.ok]); // eslint-disable-line react-hooks/exhaustive-deps

  const focar = (nome: string) => {
    const alvo = ref.current?.querySelector<HTMLElement>(`[name="${nome}"]`);
    alvo?.focus({ preventScroll: true });
    // the checkbox and the option chips are visually hidden, so scroll to what is drawn around them
    (alvo?.closest("fieldset") ?? alvo?.closest("label"))?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const novos = primeiro(validar(tipo, fd));
    setErros(novos);
    setAlerta(null);
    const [invalido] = Object.keys(novos);
    if (invalido) {
      focar(invalido);
      return;
    }
    startTransition(() => despachar(fd));
  };

  /** Re-checks a field as it is corrected, so its message disappears as soon as it is fixed. */
  const onChange = (e: FormEvent<HTMLFormElement>) => {
    const alvo = e.target as HTMLInputElement;
    if (alvo.type === "tel") {
      const apagando = ((e.nativeEvent as InputEvent).inputType ?? "").startsWith("delete");
      const mascarado = mascararTelefone(alvo.value, apagando);
      if (mascarado !== alvo.value) alvo.value = mascarado;
    }
    if (!alvo.name || !(alvo.name in erros)) return;
    const valor = alvo.type === "checkbox" ? (alvo.checked ? "on" : "") : alvo.value;
    const erro = validarCampo(tipo, alvo.name, valor);
    if (erro === erros[alvo.name]) return;
    const proximos = { ...erros };
    if (erro) proximos[alvo.name] = erro;
    else delete proximos[alvo.name];
    setErros(proximos);
  };

  /** Props that tie a field to its message for screen readers. */
  const campo = (nome: string) => ({
    "aria-invalid": erros[nome] ? (true as const) : undefined,
    "aria-describedby": erros[nome] ? `${tipo}-${nome}-erro` : undefined,
  });

  return {
    enviando,
    ref,
    erros,
    alerta,
    alertaRef,
    campo,
    valores: estado?.valores ?? {},
    fecharAlerta: () => setAlerta(null),
    formProps: { ref, onSubmit, onChange, action: despachar, noValidate: true },
  };
}

/** The alert for the server's answer; field errors are shown on the field itself. */
function doServidor(estado: NonNullable<Estado>): Alerta {
  if (estado.erros && Object.keys(estado.erros).length) return null;
  return { ok: estado.ok, mensagem: estado.mensagem };
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

const Icone = ({ ok }: { ok: boolean }) =>
  ok ? (
    <svg viewBox="0 0 16 16" aria-hidden className="mt-0.5 h-4 w-4 shrink-0" fill="currentColor">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.02L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
  ) : (
    <svg viewBox="0 0 16 16" aria-hidden className="mt-0.5 h-4 w-4 shrink-0" fill="currentColor">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
    </svg>
  );

/** Dismissible alert in the Bootstrap style: danger for problems, success when the message went out. */
export function Alerta({
  alerta,
  onClose,
  ref,
  className = "",
}: {
  alerta: Alerta;
  onClose: () => void;
  ref?: Ref<HTMLDivElement>;
  className?: string;
}) {
  return (
    <div ref={ref} aria-live="assertive" className={`scroll-mt-32 ${className}`}>
      {alerta && (
        <div
          role="alert"
          className={`flex items-start gap-3 rounded-md border px-4 py-3 text-sm leading-6 lg:text-[length:max(0.9vw,15px)] ${
            alerta.ok ? "border-[#badbcc] bg-[#d1e7dd] text-[#0f5132]" : "border-[#f5c2c7] bg-[#f8d7da] text-[#842029]"
          }`}
        >
          <Icone ok={alerta.ok} />
          <div className="min-w-0 flex-1">
            <p className="font-semibold">{alerta.mensagem}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar aviso"
            className="-mr-1 grid h-6 w-6 shrink-0 cursor-pointer place-items-center rounded opacity-60 transition-opacity hover:opacity-100"
          >
            <svg viewBox="0 0 16 16" aria-hidden className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 2l12 12M14 2 2 14" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

/** The message under a field that failed, like Bootstrap's invalid-feedback. */
export function Erro({ tipo, nome, erros }: { tipo: Tipo; nome: string; erros: Erros }) {
  const msg = erros[nome];
  if (!msg) return null;
  return (
    <span
      id={`${tipo}-${nome}-erro`}
      className="mt-2 flex items-start gap-1.5 text-xs font-medium normal-case tracking-normal text-[#dc3545] lg:text-[length:max(0.75vw,13px)]"
    >
      <svg viewBox="0 0 16 16" aria-hidden className="mt-px h-3.5 w-3.5 shrink-0" fill="currentColor">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
      </svg>
      {msg}
    </span>
  );
}
