"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const srMainLinks = [
  ["Voda i ritam", "/voda-i-ritam"],
  ["Rutine", "/rutine"],
  ["Metoda", "/metoda"],
  ["Vodiči", "/vodici"],
  ["Kontakt", "/kontakt"],
];

const deMainLinks = [
  ["Startseite", "/de"],
  ["Wasser & Rhythmus", "/de/wasser-und-rhythmus"],
  ["KI-Methode", "/de/methode"],
  ["Kontakt", "/kontakt"],
];

const contentLinks = [
  ["Recepti", "/recepti"],
  ["Stara znanja", "/stara-znanja"],
  ["Knjiga utisaka", "/recenzije"],
  ["AI u svakodnevici", "/vodici/ai-u-svakodnevici"],
];

const legalLinks = [
  ["Granice sadržaja", "/disclaimer"],
  ["AI transparentnost", "/ai-disclosure"],
  ["Affiliate transparentnost", "/affiliate-disclosure"],
  ["Politika kolačića", "/cookie-policy"],
  ["Uslovi korišćenja", "/terms"],
  ["Zaštita podataka", "/datenschutz"],
  ["Impressum", "/impressum"],
];

const systemLinks = [
  ["DaniniHub OS", "https://daninihub.com"],
  ["DaniniNet", "https://danininet.daninihub.com"],
  ["Partnerstva", "https://danininet.daninihub.com/sr/blog/poziv-za-saradnike-proizvode-i-partnere"],
];

export default function Footer() {
  const pathname = usePathname();
  const isGerman = pathname === "/de" || pathname.startsWith("/de/");
  const mainLinks = isGerman ? deMainLinks : srMainLinks;

  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <strong>DaniniLans</strong>
          <p>{isGerman
            ? "Wasser, Tagesrhythmus, Küche und Gewohnheiten in einem verantwortungsvollen, nicht-medizinischen Bildungsrahmen. Die KI- und DaniniHub-Methode unterstützt bessere Fragen und bewusstere Entscheidungen – ohne Ergebnisversprechen."
            : "Voda, dnevni ritam, kuhinja i navike kroz edukativan, nemedicinski okvir. AI i DaniniHub metoda služe za jasnije pitanje i odgovorniju odluku, ne za obećanja rezultata."}</p>
          <p><small>{isGerman
            ? "DaniniLans ist die eigenständige Health- und Lifestyle-Vertikale des Danini-Systems."
            : "DaniniLans je posebna health/lifestyle vertikala Danini sistema."}</small></p>
        </div>
        <div className="footerColumns" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <div><span className="smallCaps">{isGerman ? "Grundlagen" : "Osnova"}</span>{mainLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
          <div><span className="smallCaps">{isGerman ? "Inhalte" : "Sadržaj"}</span>{contentLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
          <div><span className="smallCaps">Danini System</span>{systemLinks.map(([label, href]) => <a key={href} href={href} rel="noreferrer">{label}</a>)}</div>
          <div><span className="smallCaps">{isGerman ? "Rechtliches" : "Pravno"}</span>{legalLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
        </div>
      </div>
    </footer>
  );
}