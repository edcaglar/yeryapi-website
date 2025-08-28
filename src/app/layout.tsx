import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yer Yapı Sondaj & Jeofizik - Bilimsel Zemin Çözümleri",
  description:
    "Jeoloji, jeofizik ve inşaat mühendisliği alanında uzman ekibimizle zemin etüdü, sondaj, maden araştırma ve yeraltı suyu hizmetleri sunuyoruz.",
  keywords:
    "zemin etüdü, sondaj, jeofizik, jeoloji, inşaat mühendisliği, maden araştırma, yeraltı suyu, Ordu",
  authors: [{ name: "Yer Yapı Sondaj & Jeofizik" }],
  creator: "Yer Yapı Sondaj & Jeofizik",
  publisher: "Yer Yapı Sondaj & Jeofizik",
  openGraph: {
    title: "Yer Yapı Sondaj & Jeofizik - Bilimsel Zemin Çözümleri",
    description:
      "Jeoloji, jeofizik ve inşaat mühendisliği alanında uzman ekibimizle zemin etüdü, sondaj, maden araştırma ve yeraltı suyu hizmetleri sunuyoruz.",
    url: "https://yeryapisondaj.com",
    siteName: "Yer Yapı Sondaj & Jeofizik",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://yeryapisondaj.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yer Yapı Sondaj & Jeofizik - Bilimsel Zemin Çözümleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yer Yapı Sondaj & Jeofizik - Bilimsel Zemin Çözümleri",
    description:
      "Jeoloji, jeofizik ve inşaat mühendisliği alanında uzman ekibimizle zemin etüdü, sondaj, maden araştırma ve yeraltı suyu hizmetleri sunuyoruz.",
    images: ["https://yeryapisondaj.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://yeryapisondaj.com",
    languages: {
      "tr-TR": "https://yeryapisondaj.com",
    },
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://yeryapisondaj.com/#organization",
              name: "Yer Yapı Sondaj & Jeofizik",
              legalName:
                "YER YAPI SONDAJ JEOLOJİ JEOFİZİK İNŞAAT MÜHENDİSLİK MADEN ARAŞTIRMA SAN. TİC. LTD. ŞTİ",
              description:
                "Jeoloji, jeofizik ve inşaat mühendisliği alanında uzman ekibimizle zemin etüdü, sondaj, maden araştırma ve yeraltı suyu hizmetleri sunuyoruz.",
              url: "https://yeryapisondaj.com",
              telephone: "+90-452-666-00-45",
              email: "info@yeryapisondaj.com",
              foundingDate: "2010",
              slogan: "Bilimsel Zemin Çözümleri, Güvenli Yapılar İçin",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Atatürk Bulvarı 190/5",
                addressLocality: "Altınordu",
                addressRegion: "Ordu",
                postalCode: "52100",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.9839",
                longitude: "37.8764",
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
              priceRange: "$$",
              serviceArea: [
                {
                  "@type": "State",
                  name: "Ordu",
                },
                {
                  "@type": "State",
                  name: "Samsun",
                },
                {
                  "@type": "State",
                  name: "Trabzon",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Jeoloji ve Jeofizik Hizmetleri",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Zemin Etüdü ve Sondaj",
                      description:
                        "Temel sondajları, laboratuvar testleri ve detaylı raporlama hizmetleri",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Maden Sondajı ve Araştırma",
                      description:
                        "Rezerv arama, numune alma ve jeolojik rapor hazırlama",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Su Arama ve Sondaj",
                      description:
                        "Yeraltı suyu tespiti, içme ve sulama kuyuları açma",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Jeofizik Çalışmalar",
                      description:
                        "Sismik, mikrotremör, ERT ve GPR yöntemleri ile yeraltı analizi",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.linkedin.com/company/yeryapisondaj",
                "https://www.facebook.com/yeryapisondaj",
                "https://www.instagram.com/yeryapisondaj",
              ],
            }),
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff8a4c" />
        <meta name="msapplication-TileColor" content="#ff8a4c" />
      </head>
      <body className={`font-sans ${inter.variable} antialiased`}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
