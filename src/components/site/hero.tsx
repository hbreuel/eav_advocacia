import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Brilho dourado sutil remetendo ao nome "Lumen". */}
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 size-[34rem] rounded-full bg-gold/15 blur-[120px]" />
      <div className="relative mx-auto grid min-h-162.5 max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:py-20">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[.25em] text-gold-bright"><span aria-hidden className="h-px w-8 bg-gold-bright/60" />ADVOCACIA ESTRATÉGICA</p>
          <h1 className="mt-7 font-serif text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Clareza jurídica para decisões <i className="font-medium text-gold-bright">importantes.</i></h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/70">Atuação técnica e próxima para pessoas e empresas que precisam conduzir decisões, negócios e conflitos com segurança.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contato" className="inline-flex items-center gap-3 bg-gold-bright px-5 py-3.5 text-sm font-semibold text-primary transition-[background-color,transform] duration-150 ease-out hover:bg-gold active:scale-[0.98]">Fale com o escritório <ArrowRight size={16} /></a>
            <a href="#areas" className="border border-primary-foreground/25 px-5 py-3.5 text-sm font-semibold transition-[border-color,color,transform] duration-150 ease-out hover:border-gold-bright hover:text-gold-bright active:scale-[0.98]">Áreas de atuação</a>
          </div>
          <div className="mt-14 grid max-w-md grid-cols-3 border-t border-primary-foreground/15 pt-6 text-sm">
            <div><strong className="font-serif text-2xl text-gold-bright">15+</strong><span className="mt-1 block text-primary-foreground/55">anos de atuação</span></div>
            <div><strong className="font-serif text-2xl text-gold-bright">100%</strong><span className="mt-1 block text-primary-foreground/55">atendimento próximo</span></div>
            <div><strong className="font-serif text-2xl text-gold-bright">06</strong><span className="mt-1 block text-primary-foreground/55">áreas de atuação</span></div>
          </div>
        </div>
        <div className="relative">
          <div aria-hidden className="absolute -inset-3 translate-x-3 translate-y-3 border border-gold/40" />
          <img className="relative h-117.5 w-full object-cover lg:h-135" src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1100&q=90" alt="Símbolos da justiça sobre uma mesa de trabalho" />
        </div>
      </div>
    </section>
  );
}
