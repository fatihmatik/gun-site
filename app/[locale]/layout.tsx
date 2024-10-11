import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../[locale]/components/NavBar";
import Footer from "../[locale]/components/Footer";
import FloatingWhatsApp from "@/app/[locale]/components/FloatingWhatsApp";
import { I18nProviderClient } from "@/locales/client"; // Import your i18n provider
import { ReactElement } from "react";

export const metadata: Metadata = {
  title: "Oversea Education | overseaeducation.com",
  description: "Oversea Education Avrupa'da Eğitim için sizlerle beraber.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "Avrupa Egitim",
    "Avrupa Staj",
    "Avrupa Calisma",
    "Avrupa Universiteler",
    "İtalya Staj",
    "İtalya Lisans",
    "İtalya Yüksek Lisans",
    "Yurtdisinda is staj",
    "Yurtdisinda okuma calisma",
    "oversea education",
    "avrupa staj danismanlik",
  ],
};

export default function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactElement;
}) {
  return (
    <html lang="tr">
      <I18nProviderClient locale={locale} fallback={<p>Loading...</p>}>
        <body className="flex flex-col min-h-screen bg-gradient_background">
          {/* <NavBar /> */}
          <div className="px-4 md:px-32 mt-16">{children}</div>
          {/* <FloatingWhatsApp />
        <Footer /> */}
        </body>
      </I18nProviderClient>
    </html>
  );
}
