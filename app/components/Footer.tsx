import Image from "next/image";
import Year from "./Year";

const QUICK: Record<string, string> = {
  "Início": "/",
  "Sobre Nós": "/sobre",
  "Serviços": "/servicos",
  "Clientes": "/clientes",
  "Equipamentos": "/equipamentos",
  "Contato": "/#contact",
};

const cols = [
  { h: "Links Rápidos", items: ["Início", "Sobre Nós", "Serviços", "Clientes", "Equipamentos", "Contato"] },
  { h: "Contato", items: ["Endereço: Rua 24 de Fevereiro, 07, Bonsucesso, Rio de Janeiro, RJ", "Telefone: (21) 2160-0974", "E-mail: contato@kfkconstrutora.com.br"] },
];

const col = "flex flex-col gap-10 border-t border-neutral-200 px-6 py-10 first:border-t-0 lg:min-h-[20vw] lg:border-l lg:border-t-0 lg:px-[2.6vw] lg:py-[3.2vw] lg:first:border-l-0";
const heading = "text-sm font-bold lg:text-[length:max(0.95vw,17.1px)]";
const body = "text-xs leading-6 text-neutral-500 lg:text-[length:max(0.8vw,14.4px)] lg:leading-[1.8]";
const Rule = () => <span className="ml-2 inline-block h-[3px] w-8 bg-sun align-middle" />;

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10">
      <div
        className="bg-ink bg-cover bg-center px-6 py-14 text-white lg:px-[8.33%] lg:py-[4.5vw]"
        style={{ backgroundImage: "url(/photos/vector-footer.png)" }}
      >
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-[4vw]">
          <div className="lg:max-w-[40vw]">
            <h2 className="text-3xl font-extrabold leading-tight lg:text-[2.6vw]">
              Solicite o Seu Orçamento<span className="text-sun">.</span>
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/70 lg:mt-[1vw] lg:text-[length:max(1vw,18.0px)] lg:leading-[1.7]">
              Conte o que está acontecendo no imóvel. Um engenheiro analisa o seu caso e retorna com a proposta.
            </p>
          </div>
          <a href="/orcamento" className="btn-sun shrink-0 lg:gap-[1vw] lg:px-[3vw] lg:py-[1.4vw] lg:text-[length:max(1vw,18.0px)]">
            Solicitar Orçamento
          </a>
        </div>
      </div>
      <div className="grid paper lg:grid-cols-3">
        <div className={col}>
          <div>
            <Image src="/brand/logo-outline.png" unoptimized alt="KFK Vistorias & Perícias" width={1400} height={201} className="h-6 w-auto lg:h-[clamp(1.5rem,1.55vw,2rem)]" />
            <p className={`mt-3 max-w-[16rem] lg:mt-[0.8vw] lg:max-w-[18vw] ${body}`}>
              Laudos, vistorias e perícias assinados por engenheiro habilitado.
            </p>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h} className={col}>
            <h3 className={heading}>{c.h} <Rule /></h3>
            <ul className={`space-y-2 ${body}`}>
              {c.items.map((i) => (
                <li key={i} className="max-w-[20rem] lg:max-w-[20vw]">
                  {QUICK[i] ? (
                    <a href={QUICK[i]} className="hover:text-ink">{i}</a>
                  ) : i.startsWith("Telefone") ? (
                    <>
                      Telefone/WhatsApp:{" "}
                      <a href="https://wa.me/552121600974" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand">
                        (21) 2160-0974
                      </a>
                    </>
                  ) : i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 border-t border-neutral-200 paper px-6 pb-20 pt-5 text-xs text-neutral-500 lg:py-5 sm:flex-row sm:items-center sm:justify-between lg:px-[2.6vw] lg:text-[length:max(0.8vw,14.4px)]">
        <p>© <Year /> KFK Vistorias &amp; Perícias. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a href="https://electricsheep.com.br/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand">
            Electric Sheep
          </a>
        </p>
      </div>
    </footer>
  );
}
