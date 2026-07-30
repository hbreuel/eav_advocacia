const attorneys = [
  ["Mariana Lemos", "Sócia fundadora", "Direito Civil e Empresarial", "ML"],
  ["Henrique Vidal", "Sócio fundador", "Imobiliário e Contratos", "HV"],
  ["Clara Monteiro", "Advogada associada", "Família e Sucessões", "CM"],
];

export function Attorneys() {
  return (
    <section id="advogados" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-[10px] font-semibold tracking-[.22em] text-accent-foreground"><span aria-hidden className="h-px w-8 bg-gold/60" />NOSSA EQUIPE<span aria-hidden className="h-px w-8 bg-gold/60" /></p>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl">Profissionais que caminham ao seu lado.</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">Experiência, escuta e compromisso em cada etapa da sua demanda.</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {attorneys.map(([name, role, focus, initials]) => <article key={name} className="border border-border bg-card transition-[border-color,box-shadow] duration-200 hover:border-gold/50 hover:shadow-[0_12px_32px_-16px_oklch(0.26_0.045_260/0.25)]">
            <div className="grid h-64 place-items-center bg-secondary"><span className="grid size-28 place-items-center rounded-full bg-primary font-serif text-3xl text-gold-bright ring-1 ring-gold/40 ring-offset-4 ring-offset-secondary">{initials}</span></div>
            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold">{name}</h3>
              <p className="mt-1 text-xs font-semibold tracking-[.12em] text-accent-foreground uppercase">{role}</p>
              <p className="mt-4 text-sm text-muted-foreground">{focus}</p>
              <p className="mt-2 text-xs tracking-wide text-muted-foreground/80">OAB/UF 00.000</p>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
