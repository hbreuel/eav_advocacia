import type { ComponentType } from "react";
import { Clock, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ContactMap } from "./contact-map";
import { InstagramIcon } from "./instagram-icon";

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

const info: {
  icon: ComponentType<IconProps>;
  title: string;
  lines: readonly string[];
  href?: string;
}[] = [
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
    icon: InstagramIcon,
    title: "Instagram",
    lines: [site.contact.instagramHandle],
    href: site.contact.instagramUrl,
  },
  {
    icon: Clock,
    title: "Horário",
    lines: ["Segunda a sexta", "9h às 11h30 · 13h30 às 17h30"],
  },
];

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
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {info.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon
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
