"use client";

import { useEffect } from "react";
import { About } from "@/components/site/about";
import { Attorneys } from "@/components/site/attorneys";
import { Contact } from "@/components/site/contact";
import { Hero } from "@/components/site/hero";
import { PageAnimations } from "@/components/site/page-animations";
import { PracticeAreas } from "@/components/site/practice-areas";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import type { SiteSectionId } from "@/lib/routes";

type HomePageProps = {
  section?: SiteSectionId;
};

export function HomePage({ section }: HomePageProps) {
  useEffect(() => {
    if (!section) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const target = document.getElementById(section);
    if (!target) return;

    target.scrollIntoView({ behavior: "auto", block: "start" });
  }, [section]);

  return (
    <PageAnimations>
      <SiteHeader />
      <main>
        <Hero />
        <PracticeAreas />
        <Attorneys />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </PageAnimations>
  );
}
