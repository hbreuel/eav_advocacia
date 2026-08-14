import { siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

function parseAddress() {
  const [locality, region = "PR"] = site.contact.address.city.split(" — ");

  return {
    locality: locality.trim(),
    region: region.trim(),
  };
}

export function StructuredData() {
  const { locality, region } = parseAddress();
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;
  const lawyerId = `${siteUrl}/#lawyer`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": organizationId,
        name: site.name,
        alternateName: site.shortName,
        url: siteUrl,
        image: `${siteUrl}/images/logo-eav.png`,
        logo: `${siteUrl}/images/logo-eav-mark.png`,
        telephone: "+5544999466874",
        email: site.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.contact.address.street}, ${site.contact.address.complement}`,
          addressLocality: locality,
          addressRegion: region,
          postalCode: site.contact.address.zip,
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.contact.address.lat,
          longitude: site.contact.address.lng,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "11:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "13:30",
            closes: "17:30",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Sarandi" },
          { "@type": "City", name: "Maringá" },
          { "@type": "State", name: "Paraná" },
        ],
        sameAs: [site.contact.instagramUrl],
        priceRange: "$$",
        description: rootMetadataDescription(),
        employee: { "@id": lawyerId },
      },
      {
        "@type": "Person",
        "@id": lawyerId,
        name: site.lawyer.name.replace(/^Dra\.\s/, ""),
        honorificPrefix: "Dra.",
        jobTitle: "Advogada",
        worksFor: { "@id": organizationId },
        knowsAbout: [
          ...site.lawyer.specializations,
          "Direito Cível",
          "Direito do Consumidor",
          "Direito de Família e Sucessões",
          "Direito Criminal",
        ],
        identifier: site.lawyer.oab,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: site.shortName,
        description: rootMetadataDescription(),
        inLanguage: "pt-BR",
        publisher: { "@id": organizationId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

function rootMetadataDescription() {
  return `${site.name}, conduzida pela ${site.lawyer.name}, ${site.lawyer.oab}, em Sarandi — PR.`;
}
