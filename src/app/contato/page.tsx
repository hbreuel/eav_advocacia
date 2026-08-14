import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";
import { createPageMetadata, pageSeo } from "@/lib/seo";
import { siteRoutes } from "@/lib/routes";

const route = siteRoutes.contact;

export const metadata: Metadata = createPageMetadata(pageSeo.contato);

export default function ContatoPage() {
  return <HomePage section={route.section} />;
}
