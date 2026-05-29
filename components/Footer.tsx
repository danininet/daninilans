import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <strong>DaniniLans</strong>
          <p>Voda, ritam, prostor, tehnologija i AI u svakodnevici. Edukativno, odgovorno i bez medicinskih obećanja.</p>
        </div>
        <div className="footerLinks">
          <Link href="/vodici">Vodiči</Link>
          <Link href="/metoda">Metoda</Link>
          <Link href="/recepti">Recepti</Link>
          <Link href="/stara-znanja">Stara znanja</Link>
          <Link href="/recenzije">Knjiga utisaka</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/ai-disclosure">AI Disclosure</Link>
          <Link href="/affiliate-disclosure">Affiliate</Link>
          <Link href="/cookie-policy">Cookie</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </div>
    </footer>
  );
}
