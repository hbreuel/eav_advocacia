import type { Metadata } from "next";
import Link from "next/link";
import { PageAnimations } from "@/components/site/page-animations";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { createPageMetadata } from "@/lib/seo";
import { siteRoutes } from "@/lib/routes";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: `Página não encontrada | ${site.shortName}`,
    description: `A página solicitada não foi encontrada no site da ${site.shortName}.`,
    path: "/404",
  }),
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageAnimations>
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 py-20 text-center sm:px-8 sm:py-28">
          <p className="eyebrow">Erro 404</p>
          <p
            aria-hidden
            className="mt-6 font-serif text-[clamp(5.5rem,22vw,9rem)] leading-none font-bold tracking-tighter text-petroleum/10"
          >
            404
          </p>
          <h1 className="mt-2 max-w-xl font-serif text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] font-bold tracking-[-0.03em] text-petroleum">
            Página não encontrada
          </h1>
          <p className="lead mt-5 max-w-md text-muted-foreground">
            O endereço que você acessou não existe ou foi movido. Você pode
            retornar ao início ou entrar em contato conosco.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-5 py-3 text-[13px] font-semibold tracking-[0.04em] text-petroleum shadow-[0_10px_24px_-12px_rgba(154,116,40,0.7)] transition-[transform,filter] duration-150 ease-out hover:brightness-110 active:scale-[0.97]"
            >
              Voltar ao início
            </Link>
            <Link
              href={siteRoutes.contact.path}
              className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-[13px] font-medium text-petroleum transition-[border-color,color,transform] duration-150 ease-out hover:border-gold hover:text-gold-deep active:scale-[0.97]"
            >
              Ir para contato
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </PageAnimations>
  );
}
