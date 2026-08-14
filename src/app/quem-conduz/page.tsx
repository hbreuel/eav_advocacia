import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";
import { createPageMetadata, pageSeo } from "@/lib/seo";
import { siteRoutes } from "@/lib/routes";

const route = siteRoutes.attorney;

export const metadata: Metadata = createPageMetadata(pageSeo.quemConduz);

export default function QuemConduzPage() {
  return <HomePage section={route.section} />;
}
