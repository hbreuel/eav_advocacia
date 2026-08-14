import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";
import { createPageMetadata, pageSeo } from "@/lib/seo";
import { siteRoutes } from "@/lib/routes";

const route = siteRoutes.office;

export const metadata: Metadata = createPageMetadata(pageSeo.escritorio);

export default function EscritorioPage() {
  return <HomePage section={route.section} />;
}
