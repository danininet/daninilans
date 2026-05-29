import Link from "next/link";

const links = [
  ["Voda i ritam", "/voda-i-ritam"],
  ["Rutine", "/rutine"],
  ["Recepti", "/recepti"],
  ["Stara znanja", "/stara-znanja"],
  ["Knjiga utisaka", "/recenzije"],
  ["Kontakt", "/kontakt"],
];

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="DaniniLans pocetna">
          <span className="logoMark" aria-hidden="true" />
          <span>
            <span className="brandTitle">DaniniLans</span>
            <span className="brandSub">voda · ritam · navike · stara znanja</span>
          </span>
        </Link>
        <nav className="links" aria-label="Glavna navigacija">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
