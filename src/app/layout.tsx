import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${site.shortName} | ${site.lawyer.name}`,
  description:
    "EAV — Sociedade Individual de Advocacia, conduzida pela Dra. Eunice de Almeida Vieira, OAB/PR 75.311. Atuação em Direito Trabalhista, Previdenciário, Cível, Consumidor, Família e Sucessões e Criminal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`js ${montserrat.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
