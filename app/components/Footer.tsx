export default function Footer() {
  return (
    <footer id="contact" className="bg-ink py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-bold">Phlox</p>
          <p className="text-xs uppercase tracking-[0.25em] text-white/60">Interior Design</p>
        </div>
        <div className="text-sm leading-7 text-white/70">
          <p>contato@exemplo.com</p>
          <p>+55 (11) 99999-0000</p>
          <p>Rua Exemplo, 123 — São Paulo</p>
        </div>
        <form className="flex gap-2" action="#">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full border border-white/30 bg-transparent px-4 py-3 text-sm placeholder:text-white/40 focus:border-accent focus:outline-none"
          />
          <button className="bg-accent px-6 text-xs font-medium uppercase tracking-widest">
            Enviar
          </button>
        </form>
      </div>
      <p className="mt-12 text-center text-xs text-white/40">
        © 2026 Interior Design. Todos os direitos reservados.
      </p>
    </footer>
  );
}
