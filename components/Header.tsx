import Link from "next/link";

const links = [
  ["Vodiči", "/vodici"],
  ["Metoda", "/metoda"],
  ["Voda", "/voda-i-ritam"],
  ["Rutine", "/rutine"],
  ["Recepti", "/recepti"],
  ["Stara znanja", "/stara-znanja"],
  ["Utisci", "/recenzije"],
];

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="DaniniLans početna">
          <span className="logoMark" aria-hidden="true" />
          <span>
            <span className="brandTitle">DaniniLans</span>
            <span className="brandSub">voda · prostor · tehnologija · odluka</span>
          </span>
        </Link>
        <nav className="links" aria-label="Glavna navigacija">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
