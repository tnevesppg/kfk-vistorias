import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="px-6 py-12 lg:px-[8.33%] lg:py-[5vw]">
      <Reveal className="mx-auto text-center lg:max-w-[52vw]">
        <h2 className="heading text-[1.9rem] leading-[1.15] lg:text-[2.7vw]">
          O que o imóvel esconde, o laudo revela<span className="text-sun">.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-[1.7] text-neutral-600 lg:mt-[1.6vw] lg:max-w-[34vw] lg:text-[0.95vw] lg:leading-[1.8]">
          Inspeção, vistoria e perícia assinadas por engenheiro, com a clareza que a sua decisão exige.
        </p>
      </Reveal>
    </section>
  );
}
