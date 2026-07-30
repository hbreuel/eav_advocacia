"use client";

import { Menu, Scale, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Início", "#inicio"],
  ["Áreas", "#areas"],
  ["Escritório", "#sobre"],
  ["Equipe", "#advogados"],
  ["Contato", "#contato"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Lumen Advocacia">
          <span className="grid size-10 place-items-center bg-primary text-gold-bright"><Scale size={19} /></span>
          <span className="text-lg font-bold leading-none tracking-[-0.04em] text-foreground">LUMEN <small className="mt-1 block text-[9px] font-medium tracking-[.2em] text-gold">ADVOCACIA</small></span>
        </a>
        <nav className="hidden items-center gap-8 text-xs font-medium tracking-[0.01em] lg:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => <a key={href} href={href} className="relative py-1 transition-colors hover:text-accent-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-200 after:ease-(--ease-out-strong) hover:after:scale-x-100">{label}</a>)}
        </nav>
        <a href="#contato" className="hidden bg-primary px-5 py-3 text-xs font-semibold tracking-[0.01em] text-primary-foreground transition-[background-color,transform] duration-150 ease-out hover:bg-primary/90 active:scale-[0.98] lg:block">Fale conosco</a>
        <button type="button" className="grid size-10 place-items-center transition-transform duration-150 ease-out active:scale-95 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Navegação móvel">
        <div className="mx-auto grid max-w-6xl gap-1">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="py-3 text-sm">{label}</a>)}
          <a href="#contato" onClick={() => setOpen(false)} className="mt-2 bg-primary px-4 py-3 text-center text-sm text-primary-foreground">Fale conosco</a>
        </div>
      </nav>}
    </header>
  );
}
