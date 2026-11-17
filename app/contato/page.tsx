import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import ContatoForm from "../components/ContatoForm";

export const metadata: Metadata = {
  title: "Contato | KFK Vistorias & Perícias",
  description: "Fale com a KFK Vistorias & Perícias: WhatsApp (21) 2160-0974, contato@kfkvistorias.com.br, Bonsucesso, Rio de Janeiro.",
};

const pad = "px-6 lg:px-[4.2vw]";
const label = "text-xs font-semibold uppercase tracking-[0.04em] lg:text-[length:max(0.8vw,14.4px)]";
const small = "text-[11px] font-semibold uppercase tracking-[0.04em] text-neutral-500 lg:text-[length:max(0.7vw,12.6px)]";

const endereco = "Rua 24 de Fevereiro, 07, Bonsucesso, Rio de Janeiro, RJ";

const canais = [
  {
    k: "Telefone / WhatsApp",
    v: "(21) 2160-0974",
    acao: "Chamar no WhatsApp",
    href: "https://wa.me/552121600974",
    externo: true,
  },
  {
    k: "E-mail",
    v: "contato@kfkvistorias.com.br",
    acao: "Enviar e-mail",
    href: "mailto:contato@kfkvistorias.com.br",
    externo: false,
  },
  {
    k: "Endereço",
    v: endereco,
    acao: "Ver no mapa",
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`,
    externo: true,
  },
];

export default function ContatoPage() {
  return (
    <PageShell footerCta={false}>
      <section className={`${pad} pb-10 pt-28 lg:pb-[4vw] lg:pt-[9vw]`}>
        <p className="load-rise flex items-center gap-3 text-sm lg:gap-[0.8vw] lg:text-[length:max(0.9vw,16.2px)]">
          <a href="/" className="hover:text-brand">Início</a>
          <span aria-hidden className="text-neutral-400">→</span>
          <span className="text-neutral-400">Contato</span>
        </p>
        <div className="mt-6 grid gap-8 lg:mt-[2vw] lg:grid-cols-3 lg:gap-[3vw]">
          <h1 className="load-rise text-[2.6rem] leading-[1.04] tracking-[-0.03em] lg:col-span-2 lg:text-[5.2vw]" style={{ ["--d" as string]: "120ms" }}>
            Fale com
            <br />
            <span className="accent">a gente</span>
          </h1>
          <div className="load-rise flex flex-col justify-end lg:pb-[0.8vw]" style={{ ["--d" as string]: "260ms" }}>
            <span className="rule mb-5 w-12 lg:mb-[1.4vw]" />
            <p className="text-lg leading-snug tracking-[-0.01em] lg:text-[length:max(1.35vw,24px)]">
              Dúvida técnica, orçamento ou um problema no imóvel: conte o que está acontecendo e um engenheiro responde.
            </p>
          </div>
        </div>
      </section>

      {/* contact channels: one cell each, lines run edge to edge */}
      <section className={`${pad} border-y border-neutral-200`}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {canais.map((c, i) => (
            <a
              key={c.k}
              href={c.href}
              {...(c.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              data-cursor="dot"
              className={`group flex min-h-52 flex-col justify-between gap-8 py-8 transition-colors hover:bg-white/50 lg:min-h-[17vw] lg:py-[2.4vw] ${
                i > 0 ? "border-t border-neutral-200 sm:border-t-0" : ""
              } ${i % 2 === 1 ? "sm:border-l sm:pl-6" : "sm:pr-6"} ${i === 2 ? "sm:border-t lg:border-t-0" : ""} ${
                i > 0 ? "lg:border-l lg:pl-[2vw]" : ""
              } lg:pr-[2vw]`}
            >
              <span>
                <span className="flex items-center justify-between">
                  <span className={small}>{c.k}</span>
                  <span className="text-sm text-neutral-400 lg:text-[length:max(0.85vw,15.3px)]">0{i + 1}</span>
                </span>
                <span
                  className={`mt-4 block leading-snug tracking-[-0.02em] lg:mt-[1.2vw] ${
                    c.k === "E-mail" ? "break-all text-lg sm:break-normal lg:whitespace-nowrap lg:text-[length:max(1.05vw,18px)]" : "text-xl lg:text-[length:max(1.45vw,25px)]"
                  }`}
                >
                  {c.v}
                </span>
              </span>
              <span className={`${label} inline-flex items-center gap-2 self-start border-b border-ink pb-1 transition-colors group-hover:border-brand group-hover:text-brand`}>
                {c.acao}
                <span aria-hidden>↗</span>
              </span>
            </a>
          ))}

          {/* closes the row: shortcut to the quote page */}
          <a
            href="/orcamento"
            data-cursor="solid"
            className="group -mx-6 flex min-h-52 flex-col justify-between gap-8 bg-ink px-6 py-8 text-white sm:mx-0 sm:border-l sm:border-t sm:border-neutral-200 lg:min-h-[17vw] lg:border-t-0 lg:px-[2vw] lg:py-[2.4vw]"
          >
            <span className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-white/60 lg:text-[length:max(0.7vw,12.6px)]">Orçamento</span>
              <span aria-hidden className="h-2 w-2 bg-sun" />
            </span>
            <span className="text-2xl leading-[1.15] tracking-[-0.02em] lg:text-[length:max(1.7vw,30px)]">
              Precisa de um laudo<span className="text-sun">?</span>
            </span>
            <span className={`${label} inline-flex items-center gap-2 self-start border-b border-white pb-1 transition-colors group-hover:border-sun group-hover:text-sun`}>
              Solicite um orçamento
              <span aria-hidden>↗</span>
            </span>
          </a>
        </div>
      </section>

      {/* form: intro on the left third, fields as a grid of cells on the right */}
      <section className={`${pad} border-b border-neutral-200`}>
        <div className="grid lg:grid-cols-3">
          <div className="pb-8 pt-12 lg:py-[4vw] lg:pr-[3vw]">
            <p className={label}>Mensagem</p>
            <h2 className="mt-4 text-[1.9rem] leading-[1.1] tracking-[-0.03em] lg:mt-[1.2vw] lg:text-[length:max(2.4vw,40px)]">Envie sua mensagem</h2>
            <p className="mt-5 max-w-sm text-[15px] leading-[1.75] text-neutral-700 lg:mt-[1.6vw] lg:max-w-[22vw] lg:text-[length:max(0.95vw,17.1px)]">
              Quanto mais detalhes sobre o imóvel e o problema, mais rápido conseguimos indicar o serviço certo.
            </p>
          </div>
          <div className="-mx-6 sm:mx-0 lg:col-span-2 lg:border-l lg:border-neutral-200">
            <ContatoForm />
          </div>
        </div>
      </section>

      <div
        className="bg-ink bg-cover bg-center px-6 py-14 text-white lg:px-[8.33%] lg:py-[4.5vw]"
        style={{ backgroundImage: "url(/photos/vector-footer.png)" }}
      >
        <div className="lg:max-w-[52vw]">
          <h2 className="text-3xl font-extrabold leading-tight lg:text-[2.6vw]">
            Todo imóvel seguro começa com um laudo bem feito<span className="text-sun">.</span>
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/70 lg:mt-[1vw] lg:text-[length:max(1vw,18.0px)] lg:leading-[1.7]">
            Engenharia que enxerga o que os olhos não veem.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
