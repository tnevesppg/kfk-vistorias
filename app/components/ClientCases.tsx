import Image from "next/image";
import type { Cliente } from "@/lib/clientes";

const label = "text-xs font-semibold uppercase tracking-[0.04em] lg:text-[length:max(0.8vw,14.4px)]";

function Logo({ c }: { c: Cliente }) {
  return (
    <Image
      src={c.logo}
      alt={c.nome}
      width={900}
      height={Math.round(900 / c.ratio)}
      unoptimized
      style={{ width: `calc(var(--u) * ${c.k})`, height: "auto" }}
    />
  );
}

/** small tag for a case whose work is still under way */
export function Andamento({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] lg:text-[length:max(0.62vw,11px)] ${
        dark ? "border-white/30 text-white/80" : "border-neutral-300 text-neutral-600"
      }`}
    >
      <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-sun" />
      Em andamento
    </span>
  );
}

/**
 * Client list: one row per client, logo on the left and that client's cases stacked on the right,
 * each linking to its page (/clientes/[slug]). Clients without a case yet show "Case em breve".
 */
export default function ClientCases({ clientes }: { clientes: Cliente[] }) {
  return (
    <ul className="border-b border-neutral-200 [--u:8.5px] lg:[--u:1vw]">
      {clientes.map((c) => (
        <li key={c.slug} className="grid border-t border-neutral-200 lg:grid-cols-[22vw_1fr]">
          {/* logo lines up with the client's first case */}
          <div className="flex h-24 items-center justify-center px-6 lg:h-[8.5vw] lg:self-start lg:px-[2vw]">
            <Logo c={c} />
          </div>

          {c.cases.length === 0 ? (
            <p className={`${label} flex items-center pb-6 text-neutral-400 opacity-70 lg:pb-0 lg:pl-[3vw]`}>Case em breve</p>
          ) : (
            <ul className="lg:border-l lg:border-neutral-200">
              {c.cases.map((x, j) => (
                <li key={x.slug} className={j > 0 ? "border-t border-neutral-200" : ""}>
                  <a
                    href={`/clientes/${x.slug}`}
                    data-cursor="dot"
                    className="group grid grid-cols-[1fr_auto] items-center gap-4 py-5 transition-colors hover:bg-white/50 lg:min-h-[8.5vw] lg:grid-cols-[1fr_8vw] lg:gap-0 lg:py-[1.6vw] lg:pl-[3vw]"
                  >
                    <span className="flex flex-col gap-1.5">
                      <span className="text-xl leading-tight tracking-[-0.02em] transition-colors duration-300 group-hover:text-brand lg:text-[length:max(1.6vw,28px)]">
                        {x.titulo}
                      </span>
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-500 lg:text-[length:max(0.9vw,16px)]">
                        {x.servico}
                        {x.andamento && <Andamento />}
                      </span>
                    </span>
                    <span className="flex justify-end lg:pr-[0.4vw]">
                      <span
                        aria-hidden
                        className="grid h-11 w-11 place-items-center bg-sun text-lg transition-[translate,background-color,color] duration-500 group-hover:translate-x-1.5 group-hover:bg-ink group-hover:text-white lg:h-[3.2vw] lg:w-[3.2vw] lg:text-[1.4vw] lg:group-hover:translate-x-[0.5vw]"
                      >
                        →
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
