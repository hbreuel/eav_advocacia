"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { site } from "@/lib/site";
import { Logo } from "./logo";

const links = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Quem conduz", "#dra-eunice"],
  ["Diferenciais", "#diferenciais"],
  ["Escritório", "#sobre"],
  ["Contato", "#contato"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const root = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpen = useRef(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-header]", {
          autoAlpha: 1,
          y: 0,
          clearProps: "transform",
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.5 },
        });

        tl.fromTo(
          "[data-header='logo']",
          { autoAlpha: 0, y: -16 },
          { autoAlpha: 1, y: 0, duration: 0.55 },
        )
          .fromTo(
            "[data-header='link']",
            { autoAlpha: 0, y: -12 },
            { autoAlpha: 1, y: 0, duration: 0.42, stagger: 0.045 },
            "-=0.32",
          )
          .fromTo(
            "[data-header='action']",
            { autoAlpha: 0, y: -12 },
            { autoAlpha: 1, y: 0, duration: 0.42, stagger: 0.06 },
            "-=0.28",
          )
          .fromTo(
            "[data-header='menu']",
            { autoAlpha: 0, y: -10 },
            { autoAlpha: 1, y: 0, duration: 0.4 },
            0.12,
          );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const panel = panelRef.current;
      if (!overlay || !panel) return;

      gsap.set(overlay, { autoAlpha: 0 });
      gsap.set(panel, { xPercent: 100 });
      gsap.set(".mobile-link", { autoAlpha: 0, y: 18 });
      gsap.set(".mobile-meta", { autoAlpha: 0, y: 12 });

      timeline.current = gsap
        .timeline({ paused: true })
        .to(overlay, {
          autoAlpha: 1,
          duration: 0.32,
          ease: "power2.out",
        })
        .to(
          panel,
          {
            xPercent: 0,
            duration: 0.45,
            ease: "power3.out",
          },
          0.04,
        )
        .to(
          ".mobile-link",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.055,
            ease: "power3.out",
          },
          0.18,
        )
        .to(
          ".mobile-meta",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.06,
            ease: "power3.out",
          },
          0.38,
        );
    },
    { scope: overlayRef },
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tl = timeline.current;

    if (reduce) {
      gsap.set(overlayRef.current, { autoAlpha: open ? 1 : 0 });
      gsap.set(panelRef.current, { xPercent: open ? 0 : 100 });
      gsap.set(".mobile-link, .mobile-meta", {
        autoAlpha: open ? 1 : 0,
        y: 0,
      });
    } else if (open) {
      tl?.play();
    } else {
      tl?.reverse();
    }

    document.body.style.overflow = open ? "hidden" : "";

    if (open) {
      wasOpen.current = true;
      requestAnimationFrame(() => firstLinkRef.current?.focus());
    } else if (wasOpen.current) {
      menuButtonRef.current?.focus({ preventScroll: true });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const root = panelRef.current;
      if (!root) return;

      const focusables = [
        ...root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ].filter((el) => el.tabIndex !== -1);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header
      ref={root}
      className={`sticky top-0 z-60 border-b transition-[background-color,border-color,box-shadow] duration-200 ease-out ${
        scrolled
          ? "border-border bg-background/95 shadow-[0_8px_24px_-18px_rgba(15,61,74,0.45)] backdrop-blur-md"
          : "border-border bg-background/92 backdrop-blur-md"
      }`}
    >
      <div className="relative z-20 mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          data-header="logo"
          href="#inicio"
          aria-label={site.name}
          onClick={closeMenu}
        >
          <Logo preload />
        </a>

        <nav
          className="hidden items-center gap-7 text-[11px] font-semibold tracking-[0.16em] uppercase text-muted-foreground xl:flex"
          aria-label="Navegação principal"
        >
          {links.map(([label, href]) => (
            <a
              data-header="link"
              key={href}
              href={href}
              className="relative py-1 transition-colors duration-200 hover:text-petroleum after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-200 after:ease-out-strong hover:after:scale-x-100"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            data-header="action"
            href={site.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-petroleum px-5 py-2.5 text-[11px] font-semibold tracking-widest text-primary-foreground uppercase transition-[transform,background-color] duration-150 ease-out hover:bg-petroleum-deep active:scale-[0.97]"
          >
            Entrar em contato
          </a>
        </div>

        <button
          data-header="menu"
          ref={menuButtonRef}
          type="button"
          className="relative grid size-11 place-items-center text-petroleum transition-transform duration-150 ease-out active:scale-95 xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          <span className="relative block h-3.5 w-5" aria-hidden>
            <span
              className={`absolute left-0 h-px w-full bg-current transition-transform duration-200 ease-out-strong ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-1.5 left-0 h-px w-full bg-current transition-opacity duration-150 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-current transition-transform duration-200 ease-out-strong ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        ref={overlayRef}
        className={`fixed inset-0 z-10 invisible opacity-0 xl:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 bg-petroleum-deep/55"
          aria-label="Fechar menu"
          tabIndex={-1}
          onClick={closeMenu}
        />

        <nav
          ref={panelRef}
          id="menu-mobile"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          aria-hidden={!open}
          className="absolute inset-y-0 right-0 flex w-[min(100%,24rem)] flex-col overflow-y-auto overscroll-contain bg-petroleum px-6 pt-24 pb-10 text-primary-foreground shadow-[-24px_0_60px_-28px_rgba(0,0,0,0.45)]"
        >
          <p className="mobile-meta eyebrow text-gold!">Navegação</p>

          <ul className="mt-6 flex flex-col gap-1">
            {links.map(([label, href], index) => (
              <li key={href}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={href}
                  tabIndex={open ? 0 : -1}
                  onClick={closeMenu}
                  className="mobile-link group flex items-baseline gap-4 border-b border-primary-foreground/10 py-4 transition-colors duration-200 hover:border-gold/50"
                >
                  <span className="font-sans text-[11px] font-semibold tracking-[0.22em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-[1.85rem] leading-none font-semibold tracking-tight transition-colors duration-200 group-hover:text-gold">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-meta mt-auto grid gap-3 pt-10">
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-5 py-3.5 text-[12px] font-semibold tracking-[0.12em] text-petroleum uppercase shadow-[0_10px_24px_-12px_rgba(154,116,40,0.7)] transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              Entrar em contato
            </a>
            <p className="pt-2 text-center text-[12px] font-light tracking-wide text-primary-foreground/55">
              {site.contact.hours}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
