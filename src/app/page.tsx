import { About } from "@/components/site/about";
import { Attorneys } from "@/components/site/attorneys";
import { Contact } from "@/components/site/contact";
import { Hero } from "@/components/site/hero";
import { PracticeAreas } from "@/components/site/practice-areas";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Testimonials } from "@/components/site/testimonials";

export default function Home() {
  return <main><SiteHeader /><Hero /><About /><PracticeAreas /><Attorneys /><Testimonials /><Contact /><SiteFooter /></main>;
}
