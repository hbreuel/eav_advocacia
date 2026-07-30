import { Check } from "lucide-react";

const values = ["Atendimento personalizado e humano", "Transparência em cada etapa", "Compromisso ético e responsável", "Estratégias adequadas a cada caso"];

export function About() {
  return (
    <section id="sobre" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=90" alt="Interior do escritório Lumen Advocacia" className="h-[410px] w-full object-cover" />
          <div className="absolute -bottom-5 -right-3 border-l-2 border-gold-bright bg-primary p-5 text-primary-foreground sm:right-6"><strong className="font-serif text-3xl text-gold-bright">Desde 2010</strong><span className="mt-1 block text-xs text-primary-foreground/65">presença e consistência</span></div>
        </div>
        <div>
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[.22em] text-accent-foreground"><span aria-hidden className="h-px w-8 bg-gold/60" />O ESCRITÓRIO</p>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl">Uma advocacia construída com confiança.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">A Lumen Advocacia nasceu para oferecer uma atuação técnica, acessível e comprometida com o contexto de cada cliente. Acreditamos que boas decisões jurídicas começam por uma escuta atenta.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Nossa equipe une repertório, atualização constante e uma comunicação clara para conduzir cada demanda com responsabilidade.</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {values.map((value) => <li key={value} className="flex gap-3 text-sm"><span className="mt-0.5 grid size-5 shrink-0 place-items-center bg-accent text-accent-foreground"><Check size={13} strokeWidth={2.5} /></span><span>{value}</span></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
