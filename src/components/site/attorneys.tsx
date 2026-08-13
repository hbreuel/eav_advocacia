import Image from "next/image";
import portrait from "../../../public/images/dra-eunice.png";
import { site } from "@/lib/site";

export function Attorneys() {
  return (
    <section id="dra-eunice" className="relative bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 max-w-3xl lg:mb-16" data-animate>
          <p className="eyebrow">Quem conduz</p>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-[-0.03em] text-petroleum sm:text-5xl lg:text-[3.25rem]">
            Experiência jurídica com proximidade e propósito
          </h2>
          <p className="mt-4 font-serif text-xl font-medium tracking-tight text-petroleum">
            {site.lawyer.name}
          </p>
          <p className="mt-2 text-[12px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            {site.lawyer.oab}
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none" data-animate>
            <div className="absolute -inset-3 border border-gold/50" aria-hidden />
            <div className="relative aspect-4/5 overflow-hidden bg-petroleum">
              <Image
                src={portrait}
                alt={`${site.lawyer.name} no escritório`}
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover object-[center_25%]"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-petroleum to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <p className="font-serif text-2xl leading-none font-semibold tracking-tight">
                  {site.lawyer.shortName}
                </p>
                <p className="mt-2 text-[11px] font-semibold tracking-[0.18em] text-gold uppercase">
                  {site.lawyer.oab}
                </p>
              </div>
            </div>
          </div>

          <div data-animate>
            <p className="font-serif text-[1.65rem] leading-snug font-semibold tracking-[-0.02em] text-petroleum sm:text-3xl">
              Uma advocacia construída para compreender pessoas e oferecer{" "}
              <em className="text-gold-gradient italic">orientação</em> adequada
              a cada situação.
            </p>
            <p className="body-copy mt-6">
              Formada em Direito pela{" "}
              <strong className="font-semibold text-petroleum">
                Pontifícia Universidade Católica do Paraná – PUC/PR, campus
                Maringá
              </strong>
              , e pós-graduada em{" "}
              <strong className="font-semibold text-petroleum">
                Direito Previdenciário e Direito Trabalhista
              </strong>
              , a Dra. Eunice de Almeida Vieira construiu sua trajetória na
              advocacia com uma atuação pautada pela responsabilidade e
              compromisso com cada cliente.
            </p>
            <p className="body-copy mt-4">
              Ao longo de sua experiência profissional, atua nas áreas{" "}
              <strong className="font-semibold text-petroleum">
                Trabalhista, Previdenciária, Cível, Direito do Consumidor,
                Família e Sucessões e Criminal
              </strong>
              , aliando conhecimento técnico à experiência prática em
              audiências, negociações, elaboração de peças e recursos.
            </p>
            <p className="body-copy mt-4">
              Mais do que compreender o processo, sua atuação busca compreender{" "}
              <strong className="font-medium text-petroleum">
                a realidade de cada pessoa e o que está por trás de cada demanda
              </strong>
              . Por isso, o atendimento é individualizado, transparente e
              próximo, permitindo que o cliente tenha clareza sobre suas opções
              e acompanhe cada etapa de sua questão jurídica.
            </p>
            <p className="mt-8 font-serif text-xl leading-snug font-semibold tracking-[-0.02em] text-petroleum sm:text-[1.35rem]">
              Uma advocacia técnica, acessível e humana, com orientação clara
              em cada etapa.
            </p>

            <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Formação
                </dt>
                <dd className="mt-2 font-serif text-2xl font-semibold tracking-tight text-petroleum">
                  PUC/PR
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Inscrição
                </dt>
                <dd className="mt-2 font-serif text-2xl font-semibold tracking-tight text-gold-deep">
                  {site.lawyer.oab}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Atendimento
                </dt>
                <dd className="mt-2 font-serif text-2xl font-semibold tracking-tight text-petroleum">
                  Presencial e on-line
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
