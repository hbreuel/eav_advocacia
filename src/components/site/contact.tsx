"use client";

import { Clock, Mail, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
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

const fieldClass =
  "border-b border-border bg-transparent px-0 py-3 text-sm font-normal text-foreground outline-none transition-colors duration-200 placeholder:font-light placeholder:text-muted-foreground/60 focus:border-gold";

export function Contact() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Contato pelo site — ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\n\n${message}`,
    );
    window.location.href = `${site.contact.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contato" className="relative py-20 lg:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl" data-animate>
          <p className="eyebrow">Contato</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.03em] text-petroleum sm:text-5xl lg:text-[3.35rem]">
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

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="grid gap-4">
            {info.map((item) => {
              const content = (
                <>
                  <item.icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-gold-deep"
                  />
                  <h3 className="mt-5 font-serif text-xl font-semibold tracking-tight text-petroleum">
                    {item.title}
                  </h3>
                  {item.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm font-light text-muted-foreground">
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

          <div className="border border-border bg-card p-6 sm:p-8" data-animate>
            {sent ? (
              <div className="grid min-h-72 place-items-center text-center">
                <div>
                  <Send className="mx-auto text-gold-deep" />
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-petroleum">
                    Abrimos seu e-mail.
                  </h3>
                  <p className="mt-2 text-sm font-light text-muted-foreground">
                    Se preferir, fale agora pelo WhatsApp.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-5">
                <label className="grid gap-2 text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Nome completo
                  <input
                    required
                    name="name"
                    placeholder="Seu nome"
                    className={fieldClass}
                  />
                </label>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    E-mail
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="voce@email.com"
                      className={fieldClass}
                    />
                  </label>
                  <label className="grid gap-2 text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    Telefone
                    <input
                      name="phone"
                      placeholder="(44) 00000-0000"
                      className={fieldClass}
                    />
                  </label>
                </div>
                <label className="grid gap-2 text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Como podemos ajudar?
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Descreva brevemente sua necessidade."
                    className={`resize-none ${fieldClass}`}
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-petroleum px-6 py-3.5 text-[13px] font-semibold text-primary-foreground transition-[transform,background-color] duration-150 ease-out hover:bg-petroleum-deep active:scale-[0.97]"
                >
                  Enviar mensagem <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        <ContactMap />
      </div>
    </section>
  );
}
