import Image from "next/image";
import portrait from "../../../public/images/dra-eunice.png";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

export function Attorneys() {
  return (
    <section id="dra-eunice" className="relative bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl lg:mb-16" data-animate>
          <p className="eyebrow">Quem conduz</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.03em] text-petroleum sm:text-5xl lg:text-[3.5rem]">
            {site.lawyer.name}
          </h2>
          <p className="mt-3 text-[12px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
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
            <p className="font-serif text-[1.65rem] leading-snug font-medium tracking-[-0.02em] text-petroleum sm:text-3xl">
              Uma advocacia feita de escuta, responsabilidade e{" "}
              <em className="text-gold-gradient italic">proximidade</em>.
            </p>
            <p className="body-copy mt-6">{site.lawyer.formation}</p>
            <p className="body-copy mt-4">
              A experiência foi construída na prática diária: audiências,
              negociações, peças e recursos — sempre com atendimento
              individualizado e comunicação transparente.
            </p>
            <p className="body-copy mt-4">
              A escolha pelo Direito veio da vontade de defender pessoas e
              oferecer caminhos concretos em momentos delicados da vida. Essa
              vocação se confirma no contato direto com cada cliente.
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

            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-petroleum px-7 py-3.5 text-[13px] font-semibold text-primary-foreground transition-[transform,background-color] duration-150 ease-out hover:bg-petroleum-deep active:scale-[0.97]"
            >
              <WhatsAppIcon size={16} />
              Conversar com a Dra. Eunice
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
