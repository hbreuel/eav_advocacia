import Image from "next/image";
import facade from "../../../public/images/fachada.png";
import { site } from "@/lib/site";

const values = [
  "Ética",
  "Transparência",
  "Comprometimento",
  "Responsabilidade",
  "Qualificação técnica",
  "Atendimento humanizado",
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl lg:mb-16" data-animate>
          <p className="eyebrow">Sobre o escritório</p>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-[-0.03em] text-petroleum sm:text-5xl lg:text-[3.15rem]">
            EAV — Sociedade Individual de Advocacia
          </h2>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative" data-animate>
            <div className="absolute -inset-3 border border-gold/50" aria-hidden />
            <div className="relative aspect-3/2 overflow-hidden bg-petroleum">
              <Image
                src={facade}
                alt={`Fachada da ${site.shortName} em ${site.contact.address.city}`}
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover object-center"
              />
            </div>
            <p className="mt-5 text-[12px] tracking-[0.14em] text-muted-foreground uppercase">
              {site.contact.address.street} · {site.contact.address.city}
            </p>
          </div>

          <div>
            <p className="body-copy text-[1.05rem]" data-animate>
              A EAV — Sociedade Individual de Advocacia atua com compromisso,
              ética e responsabilidade na defesa dos direitos de seus clientes.
            </p>
            <p className="body-copy mt-4" data-animate>
              Sob a condução da Dra. Eunice de Almeida Vieira — OAB/PR 75.311,
              o escritório atua nas áreas Trabalhista, Previdenciária, Cível,
              Direito do Consumidor, Direito de Família e Sucessões e Criminal,
              com atendimento presencial e on-line.
            </p>
            <p className="body-copy mt-4" data-animate>
              Mais do que acompanhar processos, buscamos compreender cada
              situação em sua singularidade, com estratégia jurídica alinhada
              às necessidades de quem nos procura.
            </p>
            <p className="body-copy mt-4" data-animate>
              Nossa missão é exercer uma advocacia técnica, acessível e
              humana, sempre com respeito, dedicação e compromisso com cada
              cliente.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <li
                  key={value}
                  data-animate
                  className="border-l border-gold/60 pl-4 text-sm font-medium tracking-wide text-petroleum"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
