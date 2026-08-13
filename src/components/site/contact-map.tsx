import { ArrowUpRight, MapPin, Navigation } from "lucide-react";
import { site } from "@/lib/site";

const { address } = site.contact;

export function ContactMap() {
  return (
    <div
      className="relative mt-10 overflow-hidden border border-border bg-card"
      data-animate
    >
      <div className="relative h-88 w-full sm:h-104 lg:h-128">
        <iframe
          title={`Mapa do escritório — ${address.full}`}
          src={address.embedUrl}
          className="absolute inset-0 h-[calc(100%+4.5rem)] w-full -translate-y-12 border-0 contrast-[1.04] saturate-[0.72]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-r from-background/55 via-transparent to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-petroleum/25 to-transparent"
        />

        <div className="absolute inset-x-4 bottom-4 z-10 sm:inset-x-auto sm:top-8 sm:bottom-auto sm:left-8 sm:max-w-88">
          <div className="border border-border bg-card/95 p-5 shadow-[0_24px_48px_-28px_rgba(15,61,74,0.55)] backdrop-blur-md sm:p-6">
            <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] text-gold-deep uppercase">
              <MapPin size={14} strokeWidth={1.75} />
              Escritório
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-petroleum">
              {address.street}
            </h3>
            <p className="mt-1 text-sm font-light text-muted-foreground">
              {address.complement} · {address.neighborhood}
            </p>
            <p className="text-sm font-light text-muted-foreground">
              {address.city}, {address.zip}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-petroleum px-4 py-2.5 text-[13px] font-semibold text-primary-foreground transition-[transform,background-color] duration-150 ease-out hover:bg-petroleum-deep active:scale-[0.97]"
              >
                <Navigation size={14} strokeWidth={2} />
                Como chegar
                <ArrowUpRight size={14} />
              </a>
              <a
                href={address.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold/50 px-4 py-2.5 text-[13px] font-medium text-gold-deep transition-colors duration-150 hover:border-gold hover:text-petroleum"
              >
                Waze
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
