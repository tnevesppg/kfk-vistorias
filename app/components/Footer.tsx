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
  { h: "Atendimento", items: ["Seg a Sex: 08:00 - 18:00", "Sábado: sob agendamento"] },
];

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
            <p className="mt-3 text-sm leading-7 text-white/70 lg:mt-[1vw] lg:text-[1vw] lg:leading-[1.7]">
              Conte o que está acontecendo no imóvel. Um engenheiro analisa o seu caso e retorna com a proposta.
            </p>
          </div>
          <a href="/orcamento" className="btn-sun shrink-0 lg:gap-[1vw] lg:px-[3vw] lg:py-[1.4vw] lg:text-[1vw]">
            Solicitar Orçamento
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 bg-white px-6 py-12 lg:grid-cols-[1.3fr_1fr_1.3fr_1fr] lg:px-[8.33%] lg:py-[4vw]">
        <div className="col-span-2 lg:col-span-1">
          <Image src="/brand/logo.png" unoptimized alt="KFK Vistorias & Perícias" width={1400} height={201} className="h-6 w-auto lg:h-[clamp(1.5rem,1.55vw,2rem)]" />
          <p className="mt-4 max-w-[16rem] text-xs leading-6 text-neutral-500 lg:text-[0.7vw]">
            Laudos, vistorias e perícias assinados por engenheiro habilitado.
          </p>
        </div>
        {cols.map((c, ci) => (
          <div key={c.h} className={ci === 1 ? "col-span-2 max-lg:order-last lg:col-span-1" : ""}>
            <h3 className="text-sm font-bold lg:text-[0.85vw]">{c.h} <span className="ml-2 inline-block h-[3px] w-10 bg-sun align-middle" /></h3>
            <ul className="mt-4 space-y-2 text-xs leading-6 text-neutral-500 lg:text-[0.7vw]">
              {c.items.map((i) => (
                <li key={i}>
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
      <div className="flex flex-col gap-2 border-t border-neutral-200 bg-white px-6 pb-20 pt-5 text-xs text-neutral-500 lg:py-5 sm:flex-row sm:items-center sm:justify-between lg:px-[8.33%] lg:text-[0.7vw]">
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
