import Image from "next/image";
import portrait from "../../../public/images/foto interior.png";
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
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-petroleum to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <p className="font-serif text-2xl leading-none font-semibold tracking-tight">
                  {site.lawyer.shortName}
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
              , a Dra. Eunice de Almeida Vieira complementou sua formação com
              especializações em{" "}
              <strong className="font-semibold text-petroleum">
                {site.lawyer.specializations.join(" e ")}
              </strong>
              , áreas em que concentra parte relevante de sua atuação
              profissional.
            </p>
            <p className="body-copy mt-4">
              Ao longo de sua experiência, atua nas áreas{" "}
              <strong className="font-semibold text-petroleum">
                Trabalhista, Previdenciária, Cível, Direito do Consumidor,
                Direito de Família e Sucessões e Criminal
              </strong>
              , aliando conhecimento técnico à experiência prática em
              audiências, negociações, elaboração de peças e recursos.
            </p>
            <p className="body-copy mt-4">
              Mais do que compreender o processo, sua atuação busca compreender{" "}
              <strong className="font-medium text-petroleum">
                a realidade de cada pessoa e o que está por trás de cada demanda
              </strong>
              . Por isso, cada atendimento é conduzido com transparência e
              respeito, para que o cliente compreenda suas opções e participe
              das decisões sobre sua questão jurídica.
            </p>
            <p className="mt-8 font-serif text-xl leading-snug font-semibold tracking-[-0.02em] text-petroleum sm:text-[1.35rem]">
              Uma advocacia técnica, acessível e humana — pautada pela escuta e
              pelo rigor jurídico.
            </p>

            <dl className="mt-10 grid gap-x-10 gap-y-10 border-t border-border pt-8 sm:grid-cols-2 xl:grid-cols-4">
              <div className="min-w-0">
                <dt className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Formação
                </dt>
                <dd className="stat-value mt-2 whitespace-nowrap">PUC/PR</dd>
              </div>

              <div className="min-w-0">
                <dt className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Especializações
                </dt>
                <dd className="mt-2 space-y-1">
                  {site.lawyer.specializations.map((item) => (
                    <span key={item} className="stat-value block">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>

              <div className="min-w-0">
                <dt className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Inscrição
                </dt>
                <dd className="stat-value mt-2 whitespace-nowrap text-gold-deep">
                  {site.lawyer.registration}
                </dd>
              </div>

              <div className="min-w-0">
                <dt className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Atendimento
                </dt>
                <dd className="stat-value mt-2">Presencial e on{"\u2011"}line</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
