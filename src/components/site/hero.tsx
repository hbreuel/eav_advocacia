"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { site } from "@/lib/site";
import { LatticeBackground } from "./lattice-background";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-hero]", { autoAlpha: 1, x: 0, y: 0, clearProps: "transform" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const slogans = gsap.utils.toArray<HTMLElement>("[data-slogan]");
        gsap.set(slogans, { autoAlpha: 0, y: 10 });
        if (slogans[0]) gsap.set(slogans[0], { autoAlpha: 1, y: 0 });

        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.8 },
        });

        tl.fromTo(
          "[data-hero='eyebrow']",
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.55 },
        )
          .fromTo(
            "[data-hero='title']",
            { autoAlpha: 0, y: 28 },
            { autoAlpha: 1, y: 0 },
            "-=0.35",
          )
          .fromTo(
            "[data-hero='lead']",
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.7 },
            "-=0.45",
          )
          .fromTo(
            "[data-hero='actions']",
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0, duration: 0.6 },
            "-=0.4",
          )
          .fromTo(
            "[data-hero='image']",
            { autoAlpha: 0, x: 72 },
            { autoAlpha: 1, x: 0, duration: 1.05 },
            0.15,
          );

        if (slogans.length < 2) return;

        let index = 0;
        let queued: gsap.core.Tween | gsap.core.Timeline | null = null;

        const swap = () => {
          if (document.hidden) {
            queued = gsap.delayedCall(4.4, swap);
            return;
          }

          const next = (index + 1) % slogans.length;
          slogans[index].setAttribute("aria-hidden", "true");
          slogans[next].removeAttribute("aria-hidden");

          queued = gsap
            .timeline({
              defaults: { duration: 0.55, ease: "power3.out" },
              onComplete: () => {
                queued = gsap.delayedCall(4.4, swap);
              },
            })
            .to(slogans[index], {
              autoAlpha: 0,
              y: -8,
              filter: "blur(2px)",
            })
            .fromTo(
              slogans[next],
              { autoAlpha: 0, y: 10, filter: "blur(2px)" },
              { autoAlpha: 1, y: 0, filter: "blur(0px)" },
              "-=0.28",
            );

          index = next;
        };

        queued = gsap.delayedCall(4.8, swap);

        return () => {
          queued?.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="inicio"
      className="relative overflow-hidden bg-petroleum text-primary-foreground"
    >
      <LatticeBackground id="hero" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] sm:gap-6 sm:px-8 sm:py-12 md:gap-10 md:py-16 lg:min-h-[min(88vh,840px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:py-20">
        <div className="flex min-w-0 max-w-136 flex-col">
          <p
            data-hero="eyebrow"
            className="eyebrow flex items-center gap-3 text-[0.6875rem] text-gold! sm:text-[0.75rem]"
          >
            <span aria-hidden className="h-px w-7 bg-gold" />
            Advocacia técnica e humana
          </p>
          <h1
            data-hero="title"
            className="mt-4 grid font-serif text-[clamp(2.05rem,8vw,3.3rem)] leading-[1.05] font-bold tracking-[-0.035em] text-primary-foreground sm:mt-5 sm:text-[clamp(1.7rem,3.4vw+0.55rem,2.85rem)] lg:text-[3.9rem]"
            aria-live="polite"
          >
            {site.slogans.map((slogan, index) => (
              <span
                key={slogan.accent}
                data-slogan
                aria-hidden={index === 0 ? undefined : true}
                className={`col-start-1 row-start-1 ${index === 0 ? "" : "invisible"}`}
              >
                {slogan.before}
                <em className="text-gold-gradient italic">{slogan.accent}</em>
                {slogan.after}
              </span>
            ))}
          </h1>
          <p
            data-hero="lead"
            className="lead mt-5 max-w-md text-[0.95rem] leading-relaxed text-primary-foreground/70 sm:mt-6 sm:text-[1.0625rem] sm:leading-[1.7]"
          >
            A {site.shortName} é conduzida pela {site.lawyer.name}. Orientação
            clara, análise cuidadosa de cada caso e acompanhamento em todas as
            etapas.
          </p>
          <div data-hero="actions" className="mt-6 flex flex-col gap-3 sm:mt-8 md:flex-row md:flex-wrap md:items-center">
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-5 py-3 text-[13px] font-semibold tracking-[0.04em] text-petroleum shadow-[0_10px_24px_-12px_rgba(154,116,40,0.7)] transition-[transform,filter] duration-150 ease-out hover:brightness-110 active:scale-[0.97]"
            >
              Entrar em contato
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/20 px-5 py-3 text-[13px] font-medium text-primary-foreground transition-[border-color,color,transform] duration-150 ease-out hover:border-gold hover:text-gold active:scale-[0.97]"
            >
              Ver áreas de atuação
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center pt-2 pb-4 sm:justify-end sm:py-0">
          <div data-hero="image" className="mx-auto w-full max-w-sm sm:mx-0 sm:max-w-none lg:max-w-lg">
            <div className="relative py-5 sm:px-3 lg:px-5">
              <div
                aria-hidden
                className="absolute inset-8 translate-x-3 translate-y-3 border border-gold/35"
              />

              <div aria-hidden className="pointer-events-none absolute inset-1">
                <span className="absolute top-0 left-0 h-9 w-9 border-t border-l border-gold" />
                <span className="absolute top-0 right-0 h-9 w-9 border-t border-r border-gold" />
                <span className="absolute bottom-0 left-0 h-9 w-9 border-b border-l border-gold" />
                <span className="absolute bottom-0 right-0 h-9 w-9 border-b border-r border-gold" />
              </div>

              <div className="relative border border-gold/70">
                <div className="relative aspect-13/16 overflow-hidden">
                  <Image
                    src="/images/dra-eunice-ameida-vieira-forum.png"
                    alt={`${site.lawyer.name} em frente ao Fórum de Maringá`}
                    width={928}
                    height={1142}
                    quality={90}
                    preload
                    sizes="(min-width: 1024px) 512px, (min-width: 640px) 36vw, calc(100vw - 2.5rem)"
                    className="size-full object-cover object-center"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-2.5 border border-gold/35"
                  />
                </div>

                <span
                  aria-hidden
                  className="absolute -top-4 -left-4 z-10 grid size-11 place-items-center border border-gold bg-petroleum font-serif text-sm font-semibold tracking-tight text-gold"
                >
                  EAV
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3">
              <span aria-hidden className="h-px w-8 bg-gold/60" />
              <p className="text-center">
                <span className="block font-serif text-lg leading-tight">
                  {site.lawyer.shortName}
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.22em] text-gold uppercase">
                  {site.lawyer.oab}
                </span>
              </p>
              <span aria-hidden className="h-px w-8 bg-gold/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
