"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

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
      <div
        aria-hidden
        className="hero-pattern pointer-events-none absolute inset-0 text-gold"
      >
        <svg className="size-full" aria-hidden>
          <defs>
            <pattern
              id="hero-lattice"
              width="88"
              height="88"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M44 0L88 44L44 88L0 44Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.7"
              />
              <path
                d="M44 22L66 44L44 66L22 44Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.4"
                opacity="0.38"
              />
              <path
                d="M44 41.15 46.85 44 44 46.85 41.15 44Z"
                fill="currentColor"
              />
              <circle cx="44" cy="0" r="1.15" fill="currentColor" />
              <circle cx="88" cy="44" r="1.15" fill="currentColor" />
              <circle cx="44" cy="88" r="1.15" fill="currentColor" />
              <circle cx="0" cy="44" r="1.15" fill="currentColor" />
            </pattern>
            <pattern
              id="hero-lattice-lg"
              width="176"
              height="176"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M88 0L176 88L88 176L0 88Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.55"
                opacity="0.32"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-lattice-lg)" />
          <rect width="100%" height="100%" fill="url(#hero-lattice)" />
        </svg>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[62%] bg-[radial-gradient(ellipse_at_72%_40%,rgba(201,164,72,0.22),transparent_64%)]"
      />

      <div className="relative mx-auto grid min-h-[min(88vh,840px)] max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
        <div className="flex max-w-[34rem] flex-col py-16 lg:max-w-none lg:py-20">
          <p
            data-hero="eyebrow"
            className="eyebrow flex items-center gap-3 text-gold!"
          >
            <span aria-hidden className="h-px w-7 bg-gold" />
            {site.lawyer.oab}
          </p>
          <h1
            data-hero="title"
            className="mt-5 grid font-serif text-[2.15rem] leading-[1.12] font-semibold tracking-[-0.03em] text-primary-foreground sm:text-4xl lg:text-[3.35rem]"
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
            className="lead mt-6 max-w-md text-primary-foreground/72"
          >
            A {site.shortName} é conduzida pela {site.lawyer.name}. Orientação
            clara, análise cuidadosa de cada caso e acompanhamento em todas as
            etapas.
          </p>
          <div data-hero="actions" className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-[13px] font-semibold tracking-[0.04em] text-petroleum shadow-[0_10px_24px_-12px_rgba(154,116,40,0.7)] transition-[transform,filter] duration-150 ease-out hover:brightness-110 active:scale-[0.97]"
            >
              <WhatsAppIcon size={16} />
              Entrar em contato
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center rounded-full border border-primary-foreground/20 px-5 py-3 text-[13px] font-medium text-primary-foreground transition-[border-color,color,transform] duration-150 ease-out hover:border-gold hover:text-gold active:scale-[0.97]"
            >
              Ver áreas de atuação
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center py-10 lg:justify-end lg:py-8">
          <div data-hero="image" className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-lg">
            <div className="relative px-5 py-5">
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
                    sizes="(min-width: 1024px) 512px, 448px"
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
