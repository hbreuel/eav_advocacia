import { MapPin, Scale } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div><div className="flex items-center gap-3"><span className="grid size-10 place-items-center border border-gold/40 text-gold-bright"><Scale size={18} /></span><span className="font-serif text-xl font-bold">LUMEN <small className="block font-sans text-[9px] font-medium tracking-[.2em] text-gold-bright">ADVOCACIA</small></span></div><p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/60">Atuação jurídica estratégica, próxima e comprometida com decisões responsáveis.</p></div>
        <div><h3 className="text-xs font-semibold tracking-[.15em] text-gold-bright">NAVEGAÇÃO</h3><div className="mt-4 grid gap-2 text-sm text-primary-foreground/60"><a className="w-fit transition-colors hover:text-primary-foreground" href="#areas">Áreas de atuação</a><a className="w-fit transition-colors hover:text-primary-foreground" href="#sobre">O escritório</a><a className="w-fit transition-colors hover:text-primary-foreground" href="#advogados">Equipe</a><a className="w-fit transition-colors hover:text-primary-foreground" href="#contato">Contato</a></div></div>
        <div><h3 className="text-xs font-semibold tracking-[.15em] text-gold-bright">ONDE ESTAMOS</h3><p className="mt-4 flex gap-2 text-sm leading-relaxed text-primary-foreground/60"><MapPin size={16} className="shrink-0" />Av. Paulista, 1000 · Bela Vista<br />São Paulo · SP</p></div>
      </div>
      <div className="border-t border-primary-foreground/10 px-5 py-5 text-center text-xs text-primary-foreground/45">© 2026 Lumen Advocacia. Conteúdo informativo em conformidade com o Provimento OAB nº 205/2021.</div>
    </footer>
  );
}
