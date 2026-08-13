import { Clock, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ContactMap } from "./contact-map";
import { InstagramIcon } from "./instagram-icon";
import { WhatsAppIcon } from "./whatsapp-icon";

const info = [
  {
    icon: Phone,
    title: "Telefone e WhatsApp",
    lines: [site.contact.phoneDisplay],
    href: site.contact.whatsappHref,
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: [site.contact.email],
    href: site.contact.emailHref,
  },
  {
    icon: Clock,
    title: "Horário",
    lines: ["Segunda a sexta", "9h às 11h30 · 13h30 às 17h30"],
    href: undefined,
  },
] as const;

export function Contact() {
  return (
    <section id="contato" className="relative bg-surface py-20 lg:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl" data-animate>
          <p className="eyebrow">Contato</p>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-[-0.03em] text-petroleum sm:text-5xl lg:text-[3.35rem]">
            Vamos conversar com clareza
          </h2>
          <p className="lead mt-5 text-muted-foreground">
            Atendimento presencial e on-line. Escolha o canal mais confortável
            para você.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-[13px] font-semibold text-white transition-transform duration-150 ease-out hover:brightness-110 active:scale-[0.97]"
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>
            <a
              href={site.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold/50 px-4 py-2.5 text-[13px] font-medium text-gold-deep transition-colors duration-150 hover:border-gold hover:text-petroleum"
            >
              <InstagramIcon size={16} />
              {site.contact.instagramHandle}
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {info.map((item) => {
            const content = (
              <>
                <item.icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-gold-deep"
                />
                <h3 className="mt-5 font-serif text-xl font-bold tracking-tight text-petroleum">
                  {item.title}
                </h3>
                {item.lines.map((line) => (
                  <p
                    key={line}
                    className="mt-1 text-sm font-light text-muted-foreground"
                  >
                    {line}
                  </p>
                ))}
              </>
            );

            return item.href ? (
              <a
                key={item.title}
                href={item.href}
                data-animate
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="border border-border bg-card p-5 transition-colors duration-200 hover:border-gold/50"
              >
                {content}
              </a>
            ) : (
              <div
                key={item.title}
                data-animate
                className="border border-border bg-card p-5"
              >
                {content}
              </div>
            );
          })}
        </div>

        <ContactMap />
      </div>
    </section>
  );
}
