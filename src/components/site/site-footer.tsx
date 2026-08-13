import { site } from "@/lib/site";
import { InstagramIcon } from "./instagram-icon";
import { Logo } from "./logo";
import { WhatsAppIcon } from "./whatsapp-icon";

export function SiteFooter() {
  return (
    <footer className="border-t border-petroleum-deep bg-petroleum text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div data-animate>
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed font-light text-primary-foreground/70">
            Advocacia técnica, acessível e humana, conduzida pela{" "}
            {site.lawyer.name} — {site.lawyer.oab}.
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-bright"
            >
              <WhatsAppIcon size={16} />
              {site.contact.phoneDisplay}
            </a>
            <a
              href={site.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-bright"
            >
              <InstagramIcon size={16} />
              {site.contact.instagramHandle}
            </a>
          </div>
        </div>

        <div data-animate>
          <h3 className="text-[11px] font-semibold tracking-[0.25em] text-gold uppercase">
            Navegação
          </h3>
          <div className="mt-4 grid gap-2 text-sm font-light text-primary-foreground/70">
            <a className="w-fit transition-colors hover:text-gold" href="#servicos">
              Serviços judiciais
            </a>
            <a className="w-fit transition-colors hover:text-gold" href="#dra-eunice">
              Quem conduz
            </a>
            <a className="w-fit transition-colors hover:text-gold" href="#diferenciais">
              Diferenciais
            </a>
            <a className="w-fit transition-colors hover:text-gold" href="#sobre">
              Sobre o escritório
            </a>
            <a className="w-fit transition-colors hover:text-gold" href="#contato">
              Contato
            </a>
          </div>
        </div>

        <div data-animate>
          <h3 className="text-[11px] font-semibold tracking-[0.25em] text-gold uppercase">
            Atendimento
          </h3>
          <p className="mt-4 text-sm leading-relaxed font-light text-primary-foreground/70">
            {site.contact.hours}
          </p>
          <a
            href={site.contact.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-sm leading-relaxed font-light text-primary-foreground/70 transition-colors hover:text-gold"
          >
            {site.contact.address.street} — {site.contact.address.complement}
            <br />
            {site.contact.address.neighborhood}, {site.contact.address.city}
          </a>
          <a
            href={site.contact.emailHref}
            className="mt-3 block text-sm font-light text-primary-foreground/70 transition-colors hover:text-gold"
          >
            {site.contact.email}
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 px-5 py-5 text-center text-[11px] font-light tracking-wide text-primary-foreground/50">
        © {new Date().getFullYear()} {site.name}. Conteúdo informativo, em
        conformidade com as normas de publicidade da OAB. Não constitui
        promessa de resultado.
      </div>
    </footer>
  );
}
