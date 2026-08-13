const differentials = [
  {
    title: "Atendimento próximo",
    text: "Cada caso é analisado de forma individual, com atenção à realidade e às necessidades de quem procura o escritório.",
  },
  {
    title: "Comunicação clara",
    text: "Informações objetivas em todas as etapas, para que o cliente compreenda o caminho e participe com tranquilidade.",
  },
  {
    title: "Ética e estratégia",
    text: "Atuação responsável, transparente e técnica, sem promessas de resultado e com compromisso em cada etapa.",
  },
  {
    title: "Presencial e on-line",
    text: "Facilidade de contato, inclusive por WhatsApp, para quem precisa de orientação com agilidade e acolhimento.",
  },
] as const;

export function Testimonials() {
  return (
    <section id="diferenciais" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl" data-animate>
          <p className="eyebrow">Diferenciais</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.03em] text-petroleum sm:text-5xl lg:text-[3.35rem]">
            O que nos guia
          </h2>
          <p className="lead mt-5 max-w-lg text-muted-foreground">
            Uma advocacia humana e técnica, pensada para transmitir
            profissionalismo, credibilidade e acolhimento.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {differentials.map((item, index) => (
            <article
              key={item.title}
              data-animate
              className="border border-border bg-card p-7 transition-colors duration-200 hover:border-gold/50"
            >
              <p className="font-sans text-[11px] font-semibold tracking-[0.22em] text-gold-deep">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-[1.65rem] leading-tight font-semibold tracking-[-0.02em] text-petroleum">
                {item.title}
              </h3>
              <p className="body-copy mt-3">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
