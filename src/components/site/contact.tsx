"use client";

import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const info = [
  [MapPin, "Endereço", ["Av. Paulista, 1000 · Bela Vista", "São Paulo · SP"]],
  [Phone, "Telefone", ["(11) 0000-0000", "(11) 90000-0000"]],
  [Mail, "E-mail", ["contato@lumen.adv.br"]],
  [Clock, "Horário", ["Seg. a Sex. · 09h às 18h"]],
] as const;

const fieldClass = "border-b border-primary-foreground/25 bg-transparent px-0 py-3 text-sm text-primary-foreground outline-none transition-colors duration-200 placeholder:text-primary-foreground/35 focus:border-gold-bright";

export function Contact() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return (
    <section id="contato" className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl"><p className="flex items-center gap-3 text-[10px] font-semibold tracking-[.25em] text-gold-bright"><span aria-hidden className="h-px w-8 bg-gold-bright/60" />CONTATO</p><h2 className="mt-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl">Vamos conversar sobre o seu momento.</h2><p className="mt-5 leading-relaxed text-primary-foreground/65">Envie uma mensagem ou fale diretamente com nossa equipe.</p></div>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {info.map(([Icon, title, lines]) => <div key={title} className="border border-primary-foreground/15 p-5"><Icon size={20} className="text-gold-bright" /><h3 className="mt-5 font-serif text-xl font-bold">{title}</h3>{lines.map((line) => <p key={line} className="mt-1 text-sm text-primary-foreground/60">{line}</p>)}</div>)}
            <iframe title="Localização da Lumen Advocacia" src="https://www.google.com/maps?q=Avenida+Paulista,+1000,+S%C3%A3o+Paulo&output=embed" className="h-56 w-full border-0 grayscale sm:col-span-2" loading="lazy" />
          </div>
          <div className="border border-primary-foreground/15 p-6 sm:p-8">
            {sent ? <div className="grid min-h-96 place-items-center text-center"><div><Send className="mx-auto text-gold-bright" /><h3 className="mt-5 font-serif text-2xl font-bold">Mensagem enviada.</h3><p className="mt-2 text-sm text-primary-foreground/60">A equipe retornará pelo canal informado.</p></div></div> :
              <form onSubmit={submit} className="grid gap-5">
                <label className="grid gap-2 text-xs text-primary-foreground/70">Nome completo<input required placeholder="Seu nome" className={fieldClass} /></label>
                <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-xs text-primary-foreground/70">E-mail<input required type="email" placeholder="voce@email.com" className={fieldClass} /></label><label className="grid gap-2 text-xs text-primary-foreground/70">Telefone<input placeholder="(00) 00000-0000" className={fieldClass} /></label></div>
                <label className="grid gap-2 text-xs text-primary-foreground/70">Como podemos ajudar?<textarea required rows={4} placeholder="Descreva brevemente sua necessidade." className={`resize-none ${fieldClass}`} /></label>
                <button className="mt-2 inline-flex w-fit items-center gap-3 bg-gold-bright px-5 py-3.5 text-sm font-semibold text-primary transition-[background-color,transform] duration-150 ease-out hover:bg-gold active:scale-[0.98]">Enviar mensagem <Send size={16} /></button>
              </form>}
          </div>
        </div>
      </div>
    </section>
  );
}
