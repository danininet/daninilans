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
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <strong>DaniniLans</strong>
          <p>Voda, dnevni ritam, kuhinja i navike kroz edukativan, nemedicinski okvir. AI i DaniniHub metoda služe za jasnije pitanje i odgovorniju odluku, ne za obećanja rezultata.</p>
          <p className="ecosystemNote">DaniniLans je posebna health/lifestyle vertikala Danini sistema.</p>
        </div>
        <div className="footerColumns footerColumnsFour">
          <div><span className="smallCaps">Osnova</span>{mainLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
          <div><span className="smallCaps">Sadržaj</span>{contentLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
          <div><span className="smallCaps">Danini sistem</span>{systemLinks.map(([label, href]) => <a key={href} href={href} rel="noreferrer">{label}</a>)}</div>
          <div><span className="smallCaps">Pravno</span>{legalLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
        </div>
      </div>
    </footer>
  );
}
