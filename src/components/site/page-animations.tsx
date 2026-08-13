"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function PageAnimations({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-animate]", {
          autoAlpha: 1,
          y: 0,
          clearProps: "transform",
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        ScrollTrigger.batch("[data-animate]", {
          start: "top 88%",
          once: true,
          interval: 0.12,
          batchMax: 6,
          onEnter: (elements) => {
            gsap.fromTo(
              elements,
              { autoAlpha: 0, y: 28 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.07,
                ease: "power3.out",
                overwrite: true,
              },
            );
          },
        });
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className="flex min-h-full flex-1 flex-col">
      {children}
    </div>
  );
}
