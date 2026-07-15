import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";

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
    canonical: "/",
  },
  openGraph: {
    title: "DaniniLans | Zdrav stil života, voda, rutina i AI metoda",
    description: "Voda, ritam, kuhinja, stara znanja i AI dijalog — edukativno, odgovorno i nemedicinski.",
    url: "https://daninilans.daninihub.com",
    siteName: "DaniniLans",
    locale: "sr_RS",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://daninilans.daninihub.com/#organization",
      name: "DaniniLans",
      url: "https://daninilans.daninihub.com",
      description: "Edukativna DaniniHub vertikala o vodi, zdravom stilu života, dnevnom ritmu, kuhinji i odgovornoj upotrebi AI metode.",
      parentOrganization: {
        "@type": "Organization",
        name: "DaniniHub",
        url: "https://daninihub.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://daninilans.daninihub.com/#website",
      url: "https://daninilans.daninihub.com",
      name: "DaniniLans",
      inLanguage: "sr",
      publisher: { "@id": "https://daninilans.daninihub.com/#organization" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body>
        <a className="skipLink" href="#glavni-sadrzaj">Preskoči na glavni sadržaj</a>
        <StructuredData data={organizationSchema} />
        <Header />
        <main id="glavni-sadrzaj">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
