export const siteRoutes = {
  home: {
    path: "/",
    label: "Início",
    section: "inicio",
  },
  services: {
    path: "/atuacao",
    label: "Áreas de atuação",
    section: "servicos",
  },
  attorney: {
    path: "/quem-conduz",
    label: "Quem conduz",
    section: "dra-eunice",
  },
  about: {
    path: "/sobre",
    label: "Sobre",
    section: "dra-eunice",
  },
  office: {
    path: "/escritorio",
    label: "Escritório",
    section: "sobre",
  },
  contact: {
    path: "/contato",
    label: "Contato",
    section: "contato",
  },
} as const;

export const navLinks = [
  siteRoutes.home,
  siteRoutes.services,
  siteRoutes.attorney,
  siteRoutes.office,
  siteRoutes.contact,
] as const;

export type SiteSectionId =
  (typeof siteRoutes)[keyof typeof siteRoutes]["section"];
