import Link from "next/link";

const mainLinks = [
  ["Voda i ritam", "/voda-i-ritam"],
  ["Rutine", "/rutine"],
  ["Metoda", "/metoda"],
  ["Vodiči", "/vodici"],
  ["Kontakt", "/kontakt"],
];

const contentLinks = [
  ["Recepti", "/recepti"],
  ["Stara znanja", "/stara-znanja"],
  ["Knjiga utisaka", "/recenzije"],
  ["AI u svakodnevici", "/vodici/ai-u-svakodnevici"],
];

const legalLinks = [
  ["Disclaimer", "/disclaimer"],
  ["AI Disclosure", "/ai-disclosure"],
  ["Affiliate", "/affiliate-disclosure"],
  ["Cookie", "/cookie-policy"],
  ["Terms", "/terms"],
  ["Datenschutz", "/datenschutz"],
  ["Impressum", "/impressum"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <strong>DaniniLans</strong>
          <p>Rutina, balans, voda i navike kroz edukativan, nemedicinski okvir. AI i DaniniHub metoda služe za jasnije pitanje i odgovorniju odluku, ne za obećanja rezultata.</p>
        </div>
        <div className="footerColumns">
          <div><span className="smallCaps">Osnova</span>{mainLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
          <div><span className="smallCaps">Sadržaj</span>{contentLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
          <div><span className="smallCaps">Pravno</span>{legalLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
        </div>
      </div>
    </footer>
  );
}
