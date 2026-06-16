import Link from "next/link";

const links = [
  ["Zdrav stil života", "/vodici"],
  ["Voda i ritam", "/voda-i-ritam"],
  ["Rutine", "/rutine"],
  ["Metoda", "/metoda"],
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
            <span className="brandSub">zdrav stil života · voda · rutina · AI metoda</span>
          </span>
        </Link>
        <nav className="links" aria-label="Glavna navigacija">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
