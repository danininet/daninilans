import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://daninilans.daninihub.com"),
  title: {
    default: "DaniniLans | Voda, ritam i rutine bez medicinskih tvrdnji",
    template: "%s | DaniniLans",
  },
  description:
    "DaniniLans je edukativni sajt o vodi, dnevnom ritmu, rutinama, receptima, starim znanjima i knjizi utisaka — bez medicinskih obecanja i bez dijagnoza.",
  keywords: [
    "DaniniLans",
    "voda i ritam",
    "rutine",
    "balans",
    "navike",
    "recepti",
    "stara znanja",
    "knjiga utisaka",
  ],
  openGraph: {
    title: "DaniniLans",
    description: "Voda, ritam, rutine i stara znanja — edukativno i nemedicinski.",
    url: "https://daninilans.daninihub.com",
    siteName: "DaniniLans",
    type: "website",
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
