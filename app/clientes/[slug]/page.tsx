import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageShell from "../../components/PageShell";
import { allCases, findCase } from "@/lib/clientes";
import { capaDoCase } from "@/lib/case-fotos";

const pad = "px-6 lg:px-[4.2vw]";
const label = "text-xs font-semibold uppercase tracking-[0.04em] lg:text-[length:max(0.8vw,14.4px)]";
const body = "text-[15px] leading-[1.75] text-neutral-700 lg:text-[length:max(0.95vw,17.1px)]";

// every case is prerendered from generateStaticParams; skip the dev-only instant-navigation check on params
export const instant = false;

export function generateStaticParams() {
  return allCases.map(({ caso }) => ({ slug: caso.slug }));
}

export async function generateMetadata({ params }: PageProps<"/clientes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const found = findCase(slug);
  if (!found) return {};
  const { cliente, caso } = found;
  return {
    title: `${caso.titulo} | ${cliente.nome} | KFK Vistorias & Perícias`,
    description: `${caso.servico} para ${cliente.nome}: ${caso.problema[0]}`,
    openGraph: { images: [{ url: capaDoCase(caso), alt: caso.capaAlt }] },
  };
}

export default async function CasePage({ params }: PageProps<"/clientes/[slug]">) {
  const { slug } = await params;
  const found = findCase(slug);
  if (!found) notFound();
  const { cliente, caso } = found;

  const at = allCases.findIndex((x) => x.caso.slug === slug);
  const n = allCases.length;
  const prev = n > 1 ? allCases[(at - 1 + n) % n] : null;
  const next = n > 1 ? allCases[(at + 1) % n] : null;

  return (
    <PageShell>
      {/* opening */}
      <section className={`relative ${pad} pt-28 lg:pt-[9vw]`}>
        <p className="load-rise flex flex-wrap items-center gap-3 text-sm lg:gap-[0.8vw] lg:text-[length:max(0.9vw,16.2px)]">
          <a href="/" className="hover:text-brand">Início</a>
          <span aria-hidden className="text-neutral-400">→</span>
          <a href="/clientes" className="hover:text-brand">Clientes</a>
          <span aria-hidden className="text-neutral-400">→</span>
          <span className="text-neutral-400">{cliente.nome}</span>
        </p>
        <div className="mt-6 grid gap-8 lg:mt-[2vw] lg:grid-cols-3 lg:gap-[3vw]">
          <div className="lg:col-span-2">
            <p className={`${label} load-rise flex items-center gap-3 text-brand`} style={{ ["--d" as string]: "80ms" }}>
              <span aria-hidden className="h-2 w-2 bg-sun" />
              {caso.servico}
            </p>
            <h1 className="load-rise mt-5 text-[2.6rem] leading-[1.04] tracking-[-0.03em] lg:mt-[1.4vw] lg:text-[4.6vw]" style={{ ["--d" as string]: "120ms" }}>
              {caso.titulo}
            </h1>
          </div>
          <div className="load-rise flex flex-col justify-end [--u:8.5px] lg:pb-[0.8vw] lg:[--u:1vw]" style={{ ["--d" as string]: "260ms" }}>
            <Image
              src={cliente.logo}
              alt={cliente.nome}
              width={900}
              height={Math.round(900 / cliente.ratio)}
              unoptimized
              style={{ width: `calc(var(--u) * ${cliente.k})`, height: "auto" }}
            />
            <span className="rule my-5 w-12 lg:my-[1.4vw]" />
            <p className="text-lg leading-snug tracking-[-0.01em] lg:text-[length:max(1.2vw,21px)]">{cliente.segmento}</p>
          </div>
        </div>
      </section>
      <div className="load-wipe photo photo-pop relative mt-8 aspect-[4/3] sm:aspect-[2/1] lg:mt-[3vw] lg:aspect-[2.4/1]" style={{ ["--d" as string]: "400ms" }}>
        <Image src={capaDoCase(caso)} alt={caso.capaAlt} fill priority sizes="100vw" className="object-cover" />
      </div>

      {/* meta */}
      <div className={`${pad} border-b border-neutral-200`}>
        <div className="grid sm:grid-cols-3">
          <div className="py-5 lg:py-[1.6vw]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.04em] text-neutral-500 lg:text-[length:max(0.7vw,12.6px)]">Cliente</p>
            <p className="mt-2 text-base lg:mt-[0.5vw] lg:text-[length:max(1.2vw,21px)]">{cliente.nome}</p>
          </div>
          <div className="border-t border-neutral-200 py-5 sm:col-span-2 sm:border-l sm:border-t-0 sm:pl-5 lg:py-[1.6vw] lg:pl-[2vw]">
            {caso.equipamentos.length > 0 ? (
              <>
            <p className="text-[11px] font-semibold uppercase tracking-[0.04em] text-neutral-500 lg:text-[length:max(0.7vw,12.6px)]">Equipamentos usados</p>
            <div className="mt-3 flex flex-wrap gap-2 lg:mt-[0.7vw]">
              {caso.equipamentos.map((e) => (
                <a key={e} href="/equipamentos" className="border border-neutral-300 bg-white px-3 py-1 text-[13px] hover:border-ink lg:text-[length:max(0.78vw,14px)]">
                  {e}
                </a>
              ))}
            </div>
              </>
            ) : (
              <>
                <p className="text-[11px] font-semibold uppercase tracking-[0.04em] text-neutral-500 lg:text-[length:max(0.7vw,12.6px)]">Serviço</p>
                <p className="mt-2 text-base lg:mt-[0.5vw] lg:text-[length:max(1.2vw,21px)]">{caso.servico}</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* the three fixed blocks */}
      <CaseBlock n="01" title="Problema inicial" paras={caso.problema} lead />
      <CaseBlock n="02" title="Diagnóstico" paras={caso.diagnostico} />
      <CaseBlock n="03" title="Solução" paras={caso.solucao} dark />

      {/* previous / next case (wraps around) */}
      {prev && next && (
        <nav aria-label="Outros cases" className={`${pad} border-b border-neutral-200`}>
          <div className="grid sm:grid-cols-2">
            <CaseLink to={prev} dir="prev" />
            <CaseLink to={next} dir="next" />
          </div>
        </nav>
      )}
    </PageShell>
  );
}

function CaseBlock({ n, title, paras, dark = false, lead = false }: { n: string; title: string; paras: string[]; dark?: boolean; lead?: boolean }) {
  return (
    // lines run edge to edge: the bottom rule spans the full width and the divider spans the full height
    <section className={`${pad} ${dark ? "bg-ink text-white" : "border-b border-neutral-200"}`}>
      <div className="grid lg:grid-cols-3">
        <div className="pb-6 pt-12 lg:py-[5vw] lg:pr-[3vw]">
          <p className={`flex items-center gap-3 text-sm lg:gap-[0.8vw] lg:text-[length:max(0.85vw,15.3px)] ${dark ? "text-sun" : "text-neutral-400"}`}>
            <span aria-hidden className="h-2 w-2 bg-sun" />
            {n}
          </p>
          <h2 className="mt-4 text-[1.9rem] leading-[1.1] tracking-[-0.03em] lg:mt-[1.2vw] lg:text-[length:max(2.4vw,40px)]">{title}</h2>
        </div>
        <div className={`space-y-5 pb-12 lg:col-span-2 lg:space-y-[1.4vw] lg:border-l lg:py-[5vw] lg:pl-[3vw] ${dark ? "lg:border-white/15" : "lg:border-neutral-200"}`}>
          {paras.map((p, i) => (
            <div key={i}>
              {lead && i === 0 ? (
                <p className="text-[1.4rem] leading-[1.3] tracking-[-0.02em] lg:text-[length:max(1.7vw,30px)]">{p}</p>
              ) : (
                <p className={`${body} max-w-[46rem] lg:max-w-[44vw] ${dark ? "!text-white/85" : ""}`}>{p}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseLink({ to, dir }: { to: (typeof allCases)[number]; dir: "prev" | "next" }) {
  const isNext = dir === "next";
  return (
    <a
      href={`/clientes/${to.caso.slug}`}
      data-cursor="dot"
      className={`group flex items-center gap-5 py-7 lg:gap-[1.6vw] lg:py-[2.4vw] ${
        isNext
          ? "flex-row-reverse border-t border-neutral-200 sm:border-l sm:text-right sm:border-t-0 sm:pl-6 lg:pl-[3vw]"
          : "sm:pr-6 lg:pr-[3vw]"
      }`}
    >
      <span
        aria-hidden
        className={`grid h-11 w-11 shrink-0 place-items-center bg-sun text-lg transition-[translate,background-color,color] duration-500 group-hover:bg-ink group-hover:text-white lg:h-[3.2vw] lg:w-[3.2vw] lg:text-[1.4vw] ${
          isNext ? "group-hover:translate-x-1.5" : "group-hover:-translate-x-1.5"
        }`}
      >
        {isNext ? "→" : "←"}
      </span>
      <span className="min-w-0 flex-1">
        <span className={`${label} block text-neutral-400`}>{isNext ? "Próximo case" : "Case anterior"}</span>
        <span className="mt-2 block text-[1.2rem] leading-[1.15] tracking-[-0.02em] transition-colors duration-300 group-hover:text-brand lg:mt-[0.6vw] lg:text-[length:max(1.35vw,24px)]">
          {to.caso.titulo}
        </span>
        <span className="mt-2 block text-sm text-neutral-500 lg:mt-[0.6vw] lg:text-[length:max(0.9vw,16px)]">
          {to.cliente.nome} · {to.caso.servico}
        </span>
      </span>
    </a>
  );
}
