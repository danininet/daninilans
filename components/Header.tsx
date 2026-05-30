import Link from "next/link";

const links = [
  ["Voda i ritam", "/voda-i-ritam"],
  ["Rutine", "/rutine"],
  ["Metoda", "/metoda"],
  ["Vodiči", "/vodici"],
  ["Kontakt", "/kontakt"],
];

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="DaniniLans početna">
          <span className="logoMark" aria-hidden="true"><span>DL</span></span>
          <span>
            <span className="brandTitle">DaniniLans</span>
            <span className="brandSub">rutina · balans · voda · navike</span>
          </span>
        </Link>
        <nav className="links" aria-label="Glavna navigacija">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <span className="langSwitch" aria-label="Jezici"><Link href="/">SR</Link><Link href="/de">DE</Link><Link href="/en">EN</Link></span>
        </nav>
      </div>
    </header>
  );
}
