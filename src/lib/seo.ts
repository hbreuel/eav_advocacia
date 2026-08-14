import type { Metadata } from "next";
import { siteRoutes } from "./routes";
import { site } from "./site";

export const siteUrl = `https://${site.domain}`;

const defaultKeywords = [
  "advogado em Sarandi",
  "advogada em Sarandi",
  "escritório de advocacia Sarandi",
  "advogado Maringá região",
  "EAV Advocacia",
  site.lawyer.name,
] as const;

export const pageSeo = {
  home: {
    title: `${site.shortName} | Advogada em Sarandi — PR`,
    description: `${site.name}, conduzida pela ${site.lawyer.name}, ${site.lawyer.oab}. Atuação em Direito Trabalhista, Previdenciário, Cível, Consumidor, Família e Sucessões e Criminal em Sarandi e região. Atendimento presencial e on-line.`,
    path: siteRoutes.home.path,
    keywords: [
      ...defaultKeywords,
      "advogado trabalhista Sarandi",
      "advogado previdenciário Sarandi",
    ],
  },
  atuacao: {
    title: `Áreas de atuação | ${site.shortName}`,
    description: `Áreas de atuação da ${site.shortName} em Sarandi — PR: Direito Trabalhista, Previdenciário, Cível, Consumidor, Família e Sucessões e Criminal. Atendimento presencial e on-line.`,
    path: siteRoutes.services.path,
    keywords: [
      ...defaultKeywords,
      "advogado trabalhista Sarandi",
      "advogado previdenciário Sarandi",
      "advogado cível Sarandi",
      "advogado criminal Sarandi",
    ],
  },
  quemConduz: {
    title: `Quem conduz | ${site.shortName}`,
    description: `Conheça ${site.lawyer.name}, ${site.lawyer.oab}, advogada em Sarandi — PR. Especialista em ${site.lawyer.specializations.join(" e ")}. Formação pela PUC/PR.`,
    path: siteRoutes.attorney.path,
    keywords: [
      ...defaultKeywords,
      "advogada especialista direito trabalhista",
      "advogada especialista direito previdenciário",
    ],
  },
  sobre: {
    title: `Sobre | ${site.shortName}`,
    description: `Conheça ${site.lawyer.name}, ${site.lawyer.oab}, e a condução da ${site.shortName} em Sarandi — PR.`,
    path: siteRoutes.about.path,
    canonical: siteRoutes.attorney.path,
    keywords: [...defaultKeywords],
  },
  escritorio: {
    title: `Escritório | ${site.shortName}`,
    description: `Escritório da ${site.shortName} em ${site.contact.address.full}. Atendimento presencial e on-line em Sarandi — PR.`,
    path: siteRoutes.office.path,
    keywords: [
      ...defaultKeywords,
      "escritório de advocacia Sarandi",
      "advogado Jardim Panorama Sarandi",
    ],
  },
  contato: {
    title: `Contato | ${site.shortName}`,
    description: `Entre em contato com a ${site.shortName} em Sarandi — PR. Telefone ${site.contact.phoneDisplay}, e-mail e atendimento presencial e on-line.`,
    path: siteRoutes.contact.path,
    keywords: [
      ...defaultKeywords,
      "consulta advogado Sarandi",
      "advogado online Paraná",
    ],
  },
} as const;

export const sitemapEntries = [
  { path: pageSeo.home.path, priority: 1, changeFrequency: "monthly" as const },
  {
    path: pageSeo.atuacao.path,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: pageSeo.quemConduz.path,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: pageSeo.escritorio.path,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: pageSeo.contato.path,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
];

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  canonical?: string;
  keywords?: readonly string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  canonical,
  keywords,
}: CreatePageMetadataOptions): Metadata {
  const pageUrl = `${siteUrl}${path}`;
  const canonicalPath = canonical ?? path;

  return {
    title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: {
      canonical: `${siteUrl}${canonicalPath}`,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: site.shortName,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: "/images/logo-eav.png",
          width: 1200,
          height: 630,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/logo-eav.png"],
    },
  };
}

export const rootMetadata: Metadata = {
  ...createPageMetadata(pageSeo.home),
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
