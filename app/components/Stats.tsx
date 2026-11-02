import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="px-6 py-12 lg:px-[8.33%] lg:py-[5vw]">
      <Reveal className="mx-auto text-center lg:max-w-[52vw]">
        <h2 className="heading text-[1.9rem] leading-[1.15] lg:text-[2.7vw]">
          O que o imóvel esconde, o laudo revela<span className="text-sun">.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[22rem] text-balance text-[17px] leading-[1.6] text-neutral-700 sm:max-w-lg lg:mt-[1.8vw] lg:max-w-[40vw] lg:text-[1.25vw] lg:leading-[1.55]">
          Um engenheiro examina, registra e explica o que encontrou, para você saber exatamente o que fazer primeiro.
        </p>
      </Reveal>
    </section>
  );
}
