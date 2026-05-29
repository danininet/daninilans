import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <strong>DaniniLans</strong>
          <p>
            Edukativni projekat o vodi, ritmu dana, rutinama, receptima i starim znanjima.
          </p>
        </div>
        <div className="footerLinks">
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/affiliate-disclosure">Affiliate</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </div>
    </footer>
  );
}
