import Image from "next/image";

const cols = [
  { h: "Quick Links", items: ["About Us", "Contact Us", "Our Project", "News"] },
  { h: "Contacts", items: ["Address: Patricia C. Amedee 4011 Vanderbilt Street Cheyenne Nashville, TJ 76201", "Phone: (+93) 0 0 123 456 888", "Email: info@yourdomain.com"] },
  { h: "Working Hours", items: ["Mo-Fri: 09:00 - 21:00", "Sunday: 09:00 - 16:00"] },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10">
      <div className="bg-ink px-6 py-12 text-white lg:px-[8.33%] lg:py-[3.2vw]">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold lg:text-[1.6vw]">Don&apos;t Miss Any Opportunity</h2>
            <p className="mt-2 text-xs text-white/60 lg:text-[0.7vw]">There are many variations of passages.</p>
          </div>
          <form action="#" className="flex border-b border-white/30">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent py-3 text-sm placeholder:text-white/40 focus:outline-none lg:text-[0.8vw]"
            />
            <button className="px-2 text-xs font-semibold uppercase tracking-wider text-sun transition hover:text-white">Submit</button>
          </form>
        </div>
      </div>
      <div className="grid gap-10 bg-white px-6 py-14 lg:grid-cols-[1.3fr_1fr_1.3fr_1fr] lg:px-[8.33%] lg:py-[4vw]">
        <div>
          <Image src="/brand/logo.png" unoptimized alt="KFK Vistorias & Perícias" width={1400} height={201} className="h-9 w-auto lg:h-[2.6vw]" />
          <p className="mt-4 max-w-[16rem] text-xs leading-6 text-neutral-500 lg:text-[0.7vw]">
            There are many variations of passages of Lorem Ipsum available some.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <h3 className="text-sm font-bold lg:text-[0.85vw]">{c.h} <span className="ml-2 inline-block h-[3px] w-10 bg-sun align-middle" /></h3>
            <ul className="mt-4 space-y-2 text-xs leading-6 text-neutral-500 lg:text-[0.7vw]">
              {c.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <p className="border-t border-neutral-200 bg-white px-6 py-5 text-xs text-neutral-500 lg:px-[8.33%] lg:text-[0.7vw]">
        © 2026 KFK Vistorias &amp; Perícias. Todos os direitos reservados.
      </p>
    </footer>
  );
}
