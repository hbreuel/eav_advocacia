import { About } from "@/components/site/about";
import { Attorneys } from "@/components/site/attorneys";
import { Contact } from "@/components/site/contact";
import { Hero } from "@/components/site/hero";
import { PageAnimations } from "@/components/site/page-animations";
import { PracticeAreas } from "@/components/site/practice-areas";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function Home() {
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
