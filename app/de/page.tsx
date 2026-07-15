import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gesunder Lebensstil, Wasser, Routinen und KI-Methode",
  description: "DaniniLans verbindet Wasser, Tagesrhythmus, Küche, Routinen und verantwortungsvolle KI-Nutzung – alltagstauglich und ohne medizinische Versprechen.",
  alternates: { canonical: "/de", languages: { "sr-RS": "/", "de-DE": "/de", "x-default": "/" } },
  openGraph: { title: "DaniniLans | Gesunder Lebensstil und KI-Methode", description: "Wasser, Rhythmus, Küche, Routinen und verantwortungsvolle KI-Nutzung.", url: "/de", locale: "de_DE", alternateLocale: ["sr_RS"], type: "website" },
};

export default function GermanHomePage() {
  return (
    <div lang="de" className="container section legalText">
      <div className="eyebrow">DaniniLans · Deutsch</div>
      <h1>Gesunder Lebensstil beginnt nicht mit Perfektion, sondern mit einem klaren Rhythmus.</h1>
      <p className="lead">DaniniLans ist die Bildungs- und Lifestyle-Säule des DaniniHub-Systems. Im Mittelpunkt stehen Wasser, Tagesstruktur, Küche, bewährte Gewohnheiten und eine verantwortungsvolle KI-Methode – ohne Diagnosen oder Therapieversprechen.</p>
      <section className="grid three section">
        <article className="card"><h2>Wasser & Rhythmus</h2><p>Wasser wird als sichtbare, wiederholbare Alltagsentscheidung betrachtet – nicht als Wunderlösung.</p><Link href="/de/wasser-und-rhythmus">Zum Leitfaden</Link></article>
        <article className="card"><h2>Routinen</h2><p>Kleine Schritte verbinden Morgen, Arbeit, Pausen, Küche und Abend zu einem tragfähigen Ablauf.</p><Link href="/rutine">Inhaltsbibliothek</Link></article>
        <article className="card"><h2>KI-Methode</h2><p>„Frag KI – KI fragt dich“ hilft, Fragen zu klären, Grenzen zu erkennen und Entscheidungen beim Menschen zu lassen.</p><Link href="/de/methode">Methode verstehen</Link></article>
      </section>
      <section className="featureBand section"><div><div className="eyebrow">Klare Rolle im System</div><h2>Inhalte und Partnerschaften – getrennt von Verkauf und Immobilienprojekten.</h2></div><p>DaniniLans bleibt eine eigenständige Health- und Lifestyle-Vertikale. DaniniHub stellt die Methode bereit, DaniniNet übernimmt bei Bedarf Verkaufs- und CRM-Prozesse.</p></section>
      <section className="card disclaimer section"><h2>Wichtiger Hinweis</h2><p>Die Inhalte dienen der allgemeinen Information und Bildung. Sie ersetzen keine ärztliche Diagnose, Behandlung oder individuelle Beratung.</p></section>
    </div>
  );
}
