import { faqs } from "@/lib/data";
import Reveal from "./Reveal";
import AccordionItem from "./AccordionItem";

export default function Faq() {
  return (
    <section id="faq" className="relative px-6 py-16 lg:px-[8.33%] lg:py-[8vw]">
      <div className="blueprint-b pointer-events-none absolute left-0 top-[2vw] hidden h-[36vw] w-[36vw] opacity-60 lg:block" />
      <div className="relative mx-auto grid gap-6 md:max-w-2xl lg:max-w-none lg:grid-cols-[1fr_0.2fr] lg:gap-[3vw]">
        <div className="lg:ml-[8vw] lg:max-w-[52vw]">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <AccordionItem
                group="faq"
                className="border-b border-neutral-200"
                btnClassName="py-5 lg:py-[1.5vw]"
                plusClassName="h-9 w-9 lg:h-[2.2vw] lg:w-[2.2vw] lg:min-h-9 lg:min-w-9"
                bodyClassName="pb-6 text-[15px] leading-[1.7] text-neutral-600 lg:max-w-[44vw] lg:pb-[1.8vw] lg:text-[length:max(1vw,18.0px)] lg:leading-[1.7]"
                head={<span className="text-base font-semibold lg:text-[length:max(1.25vw,22.5px)] lg:leading-[1.35]">{f.q}</span>}
              >
                {f.a}
              </AccordionItem>
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
