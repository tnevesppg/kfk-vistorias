/** Dark closing band over the blueprint drawing, used at the foot of Contato and Orçamento. */
export default function FaixaLaudo({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <div
      className="bg-ink bg-cover bg-center px-6 py-14 text-white lg:px-[8.33%] lg:py-[4.5vw]"
      style={{ backgroundImage: "url(/photos/vector-footer.png)" }}
    >
      <div className="lg:max-w-[52vw]">
        <h2 className="text-3xl font-extrabold leading-tight lg:text-[2.6vw]">
          {titulo}
          <span className="text-sun">.</span>
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/70 lg:mt-[1vw] lg:text-[length:max(1vw,18.0px)] lg:leading-[1.7]">{texto}</p>
      </div>
    </div>
  );
}
