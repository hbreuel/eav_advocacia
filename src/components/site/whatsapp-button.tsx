import { site } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

export function WhatsAppButton() {
  return (
    <a
      href={site.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a EAV Advocacia"
      className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(15,61,74,0.55)] transition-transform duration-150 ease-out hover:brightness-110 active:scale-[0.97] sm:right-7 sm:bottom-7"
    >
      <WhatsAppIcon size={20} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
