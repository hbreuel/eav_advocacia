import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";
import { createPageMetadata, pageSeo } from "@/lib/seo";
import { siteRoutes } from "@/lib/routes";

const route = siteRoutes.about;

export const metadata: Metadata = createPageMetadata(pageSeo.sobre);

export default function SobrePage() {
  return <HomePage section={route.section} />;
}
