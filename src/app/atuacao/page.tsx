import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";
import { createPageMetadata, pageSeo } from "@/lib/seo";
import { siteRoutes } from "@/lib/routes";

const route = siteRoutes.services;

export const metadata: Metadata = createPageMetadata(pageSeo.atuacao);

export default function AtuacaoPage() {
  return <HomePage section={route.section} />;
}
