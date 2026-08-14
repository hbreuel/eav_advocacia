import {
  Briefcase,
  Building2,
  HeartHandshake,
  Scale,
  Shield,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description:
      "Orientação em relações de trabalho, verbas, rescisões e demais conflitos decorrentes das relações de trabalho.",
  },
  {
    icon: Building2,
    title: "Direito Previdenciário",
    description:
      "Aposentadorias, benefícios, revisões e defesa dos direitos previdenciários.",
  },
  {
    icon: Scale,
    title: "Direito Cível",
    description:
      "Contratos, indenizações, responsabilidade civil e questões patrimoniais.",
  },
  {
    icon: HeartHandshake,
    title: "Direito do Consumidor",
    description:
      "Apoio em cobranças indevidas, falhas na prestação de serviços e demais relações de consumo.",
  },
  {
    icon: Users,
    title: "Direito de Família e Sucessões",
    description:
      "Divórcio, guarda, pensão, inventário e demais temas familiares.",
  },
  {
    icon: Shield,
    title: "Direito Criminal",
    description:
      "Atuação na área criminal, com defesa e acompanhamento em inquéritos, ações penais e audiências.",
  },
] as const;

export function PracticeAreas() {
  return (
    <section id="servicos" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl" data-animate>
          <p className="eyebrow">Áreas de atuação</p>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-[-0.03em] text-petroleum sm:text-5xl lg:text-[3.35rem]">
            Áreas em que atuamos
          </h2>
          <p className="lead mt-5 max-w-lg text-muted-foreground">
            Atendimento presencial e on-line, com orientação para quem
            precisa compreender o próprio caso com clareza.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="group relative" data-animate>
              <div className="flex items-start gap-4">
                <span className="mt-1 grid size-11 shrink-0 place-items-center border border-gold/60 text-gold-deep transition-colors duration-200 group-hover:border-gold group-hover:text-petroleum">
                  <Icon size={22} strokeWidth={1.4} />
                </span>
                <div>
                  <p className="font-sans text-[11px] font-semibold tracking-[0.22em] text-gold-deep">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-serif text-[1.65rem] leading-tight font-bold tracking-[-0.02em] text-petroleum">
                    {title}
                  </h3>
                  <p className="body-copy mt-3">{description}</p>
                </div>
              </div>
              <span
                aria-hidden
                className="mt-8 block h-px bg-gradient-to-r from-gold/50 to-transparent"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
