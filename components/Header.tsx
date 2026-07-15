"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Zdrav stil života", "/vodici"],
  ["Voda i ritam", "/voda-i-ritam"],
  ["Rutine", "/rutine"],
  ["Metoda", "/metoda"],
  ["Kontakt", "/kontakt"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="DaniniLans početna" onClick={() => setOpen(false)}>
          <span className="logoMark" aria-hidden="true"><span>DL</span></span>
          <span>
            <span className="brandTitle">DaniniLans</span>
            <span className="brandSub">zdrav stil života · voda · rutina · AI metoda</span>
          </span>
        </Link>

        <button
          className="menuButton"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="menuButtonLabel">Meni</span>
          <span className="menuIcon" aria-hidden="true"><i /><i /><i /></span>
        </button>

        <nav id="primary-navigation" className={`links ${open ? "isOpen" : ""}`} aria-label="Glavna navigacija">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
