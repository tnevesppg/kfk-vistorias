import { faqs } from "@/lib/data";
import Reveal from "./Reveal";

export default function Faq() {
  return (
    <section id="faq" className="relative px-6 py-16 lg:px-[8.33%] lg:py-[8vw]">
      <div className="blueprint-b pointer-events-none absolute left-0 top-[2vw] hidden h-[36vw] w-[36vw] opacity-60 lg:block" />
      <div className="relative mx-auto grid gap-6 md:max-w-2xl lg:max-w-none lg:grid-cols-[1fr_0.2fr] lg:gap-[3vw]">
        <div className="lg:ml-[8vw] lg:max-w-[52vw]">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <details name="faq" className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 lg:py-[1.5vw] [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-semibold lg:text-[length:max(1.25vw,22.5px)] lg:leading-[1.35]">{f.q}</h3>
                  <span aria-hidden className="relative block h-9 w-9 shrink-0 bg-sun transition-transform duration-500 ease-out group-open:rotate-45 lg:h-[2.2vw] lg:w-[2.2vw] lg:min-h-9 lg:min-w-9">
                    <span className="absolute left-1/2 top-1/2 h-[2px] w-[40%] -translate-x-1/2 -translate-y-1/2 bg-ink" />
                    <span className="absolute left-1/2 top-1/2 h-[40%] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-ink" />
                  </span>
                </summary>
                <p className="pb-6 text-[15px] leading-[1.7] text-neutral-600 lg:max-w-[44vw] lg:pb-[1.8vw] lg:text-[length:max(1vw,18.0px)] lg:leading-[1.7]">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
        <Reveal className="max-lg:-order-1">
          <h2 className="heading text-[2.6rem] leading-[1.02] lg:text-[2.3vw] lg:[writing-mode:vertical-rl]">Dúvidas Frequentes <span className="text-sun">.</span></h2>
        </Reveal>
      </div>
    </section>
  );
}
