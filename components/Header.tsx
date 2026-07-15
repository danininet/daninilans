"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const srLinks = [
  ["Zdrav stil života", "/vodici"],
  ["Voda i ritam", "/voda-i-ritam"],
  ["Rutine", "/rutine"],
  ["Metoda", "/metoda"],
  ["Kontakt", "/kontakt"],
];

const deLinks = [
  ["Gesunder Lebensstil", "/de"],
  ["Wasser & Rhythmus", "/de/wasser-und-rhythmus"],
  ["Methode", "/de/methode"],
  ["Kontakt", "/kontakt"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isGerman = pathname === "/de" || pathname.startsWith("/de/");
  const links = isGerman ? deLinks : srLinks;

  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" href={isGerman ? "/de" : "/"} aria-label={isGerman ? "DaniniLans Startseite" : "DaniniLans početna"} onClick={() => setOpen(false)}>
          <span className="logoMark" aria-hidden="true"><span>DL</span></span>
          <span>
            <span className="brandTitle">DaniniLans</span>
            <span className="brandSub">{isGerman ? "gesunder Lebensstil · Wasser · Routinen · KI-Methode" : "zdrav stil života · voda · rutina · AI metoda"}</span>
          </span>
        </Link>

        <div className="navActions">
          <LanguageSwitcher />
          <button
            className="menuButton"
            type="button"
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            <span className="menuButtonLabel">{isGerman ? "Menü" : "Meni"}</span>
            <span className="menuIcon" aria-hidden="true"><i /><i /><i /></span>
          </button>
        </div>

        <nav id="primary-navigation" className={`links ${open ? "isOpen" : ""}`} aria-label={isGerman ? "Hauptnavigation" : "Glavna navigacija"}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
