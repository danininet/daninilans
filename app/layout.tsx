import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://daninilans.daninihub.com"),
  title: {
    default: "DaniniLans | Zdrav stil života, voda, rutina i AI metoda",
    template: "%s | DaniniLans",
  },
  description:
    "DaniniLans je edukativni sajt o zdravom stilu života kroz vodu, dnevni ritam, kuhinju, stare navike, tehnologiju i metodu Pitaj AI — AI pita tebe, bez medicinskih obećanja.",
  keywords: [
    "DaniniLans",
    "zdrav stil života",
    "voda i ritam",
    "rutine",
    "kuhinja",
    "recepti",
    "stara znanja",
    "Balkan navike",
    "AI metoda",
    "Pitaj AI AI pita tebe",
    "UMH",
    "Welan",
    "filteri za vodu",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-icon.svg",
  },
  alternates: {
    canonical: "/sr",
    languages: {
      "sr": "/sr",
      "de": "/de",
      "en": "/en",
    },
  },
  openGraph: {
    title: "DaniniLans | Zdrav stil života, voda, rutina i AI metoda",
    description: "Voda, ritam, kuhinja, stara znanja i AI dijalog — edukativno, odgovorno i nemedicinski.",
    url: "https://daninilans.daninihub.com/sr",
    siteName: "DaniniLans",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "DaniniLans" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DaniniLans",
    description: "Zdrav stil života kroz vodu, ritam, kuhinju, tradiciju i AI metodu.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
