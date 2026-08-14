export const site = {
  name: "EAV — Sociedade Individual de Advocacia",
  shortName: "EAV Advocacia",
  lawyer: {
    name: "Dra. Eunice de Almeida Vieira",
    shortName: "Dra. Eunice",
    oab: "OAB/PR 75.311",
    registration: "PR 75.311",
    formation:
      "Formada em Direito pela Pontifícia Universidade Católica do Paraná – PUC/PR, campus Maringá.",
    specializations: [
      "Direito Previdenciário",
      "Direito Trabalhista",
    ] as const,
  },
  slogans: [
    {
      before: "Advocacia técnica, ",
      accent: "humana",
      after: " e próxima.",
    },
    {
      before: "Orientação jurídica ",
      accent: "clara",
      after: " e resposta dedicada a cada cliente.",
    },
    {
      before: "Conhecimento jurídico com ",
      accent: "atenção",
      after: " a cada caso.",
    },
    {
      before: "Atuação jurídica pautada pela ",
      accent: "ética",
      after: " e responsabilidade.",
    },
    {
      before: "Informação, estratégia e ",
      accent: "presença",
      after: " em cada etapa.",
    },
  ],
  contact: {
    phoneDisplay: "(44) 99946-6874",
    phoneHref: "tel:+5544999466874",
    whatsappHref:
      "https://wa.me/5544999466874?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20EAV%20Advocacia.",
    email: "eunicevieira.adv@gmail.com",
    emailHref: "mailto:eunicevieira.adv@gmail.com",
    instagramUrl: "https://www.instagram.com/eavadvocacia/",
    instagramHandle: "@eavadvocacia",
    hours: "Segunda a sexta · 9h às 11h30 e 13h30 às 17h30",
    domain: "www.eavadvocacia.com.br",
    address: {
      street: "Av. Montreal, 552",
      complement: "Sala 02",
      neighborhood: "Jardim Panorama",
      city: "Sarandi — PR",
      zip: "87113-220",
      full: "Av. Montreal, 552 - Sl 02 - Jardim Panorama, Sarandi - PR, 87113-220",
      lat: -23.42816,
      lng: -51.88136,
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=-23.42816,-51.88136",
      wazeUrl:
        "https://waze.com/ul?ll=-23.42816,-51.88136&navigate=yes",
      embedUrl:
        "https://www.google.com/maps?q=-23.42816,-51.88136&hl=pt-BR&z=17&output=embed",
    },
  },
} as const;
