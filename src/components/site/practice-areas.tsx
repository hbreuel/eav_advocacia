import { Building2, BriefcaseBusiness, Gavel, Handshake, House, Users } from "lucide-react";

const areas = [
  [Gavel, "Direito Civil", "Contratos, responsabilidade civil, indenizações e relações patrimoniais."],
  [Building2, "Direito Empresarial", "Assessoria para negócios, sócios, contratos e desafios corporativos."],
  [House, "Direito Imobiliário", "Operações, regularização e disputas que envolvem imóveis."],
  [Users, "Família e Sucessões", "Orientação objetiva e sensível em decisões pessoais e familiares."],
  [BriefcaseBusiness, "Relações de Trabalho", "Prevenção e solução de questões trabalhistas para empresas e profissionais."],
  [Handshake, "Contratos e Negociação", "Estruturas seguras para relações comerciais e particulares."],
] as const;

export function PracticeAreas() {
  return (
    <section id="areas" className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[.22em] text-gold-bright"><span aria-hidden className="h-px w-8 bg-gold-bright/60" />ÁREAS DE ATUAÇÃO</p>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl">Conhecimento aplicado ao seu contexto.</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/65">Atuamos em áreas complementares do Direito para oferecer orientação consistente, preventiva e contenciosa.</p>
        </div>
        <div className="mt-14 grid border-l border-t border-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(([Icon, title, description]) => <article key={title} className="group relative border-b border-r border-primary-foreground/15 p-7 transition-colors duration-200 hover:bg-primary-foreground/[0.05]">
            <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold-bright transition-transform duration-200 ease-(--ease-out-strong) group-hover:scale-x-100" />
            <Icon size={25} strokeWidth={1.5} className="text-gold-bright" />
            <h3 className="mt-8 font-serif text-2xl font-bold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">{description}</p>
          </article>)}
        </div>
      </div>
    </section>
  );
}
