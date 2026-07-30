import { Quote, Star } from "lucide-react";

const items = [
  ["“O atendimento foi direto, claro e cuidadoso. Eu soube o que esperar em cada momento.”", "Cliente · Direito Civil"],
  ["“A equipe entendeu rapidamente as necessidades da empresa e trouxe soluções consistentes.”", "Cliente · Empresarial"],
  ["“Em um momento delicado, encontrei orientação segura e uma condução muito respeitosa.”", "Cliente · Família e Sucessões"],
];

export function Testimonials() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center"><p className="flex items-center justify-center gap-3 text-[10px] font-semibold tracking-[.22em] text-accent-foreground"><span aria-hidden className="h-px w-8 bg-gold/60" />DEPOIMENTOS<span aria-hidden className="h-px w-8 bg-gold/60" /></p><h2 className="mt-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl">Confiança construída em cada encontro.</h2></div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {items.map(([quote, author]) => <figure key={author} className="flex min-h-72 flex-col border border-border bg-card p-7">
            <Quote size={28} strokeWidth={1.5} className="text-gold" />
            <div className="mt-5 flex gap-1 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
            <blockquote className="mt-5 flex-1 font-serif text-xl leading-snug">{quote}</blockquote>
            <figcaption className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">{author}</figcaption>
          </figure>)}
        </div>
      </div>
    </section>
  );
}
