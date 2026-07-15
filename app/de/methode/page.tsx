import type { Metadata } from "next";
import Link from "next/link";
import EditorialTrust from "../../../components/EditorialTrust";
import StructuredData from "../../../components/StructuredData";

const baseUrl = "https://daninilans.daninihub.com";
const canonicalPath = "/de/methode";

export const metadata: Metadata = {
  title: "Frag KI – KI fragt dich",
  description:
    "Die DaniniLans-Methode für verantwortungsvolle KI-Nutzung: Fragen klären, Grenzen prüfen und Entscheidungen beim Menschen lassen.",
  alternates: {
    canonical: canonicalPath,
    languages: {
      "sr-RS": "/metoda",
      "de-DE": canonicalPath,
      "x-default": "/metoda",
    },
  },
  openGraph: {
    title: "Frag KI – KI fragt dich | DaniniLans",
    description:
      "Eine verantwortungsvolle KI-Methode für Alltag, Wasser, Routinen und klare menschliche Entscheidungen.",
    url: canonicalPath,
    locale: "de_DE",
    alternateLocale: ["sr_RS"],
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${baseUrl}${canonicalPath}#article`,
      headline: "Frag KI – KI fragt dich",
      description:
        "Die DaniniLans-Methode für verantwortungsvolle KI-Nutzung im Alltag.",
      inLanguage: "de-DE",
      datePublished: "2026-07-15",
      dateModified: "2026-07-15",
      author: { "@type": "Organization", name: "DaniniLans Redaktion" },
      publisher: { "@id": `${baseUrl}/#organization` },
      mainEntityOfPage: `${baseUrl}${canonicalPath}`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: `${baseUrl}/de` },
        { "@type": "ListItem", position: 2, name: "Methode", item: `${baseUrl}${canonicalPath}` },
      ],
    },
  ],
};

const steps = [
  ["Fragen", "Der Prozess beginnt nicht mit einem Befehl an die KI, sondern mit einer klaren Frage: Was braucht im Alltag mehr Ordnung, welche Gewohnheit bricht immer wieder ab und wo fehlt ein realistischer nächster Schritt?"],
  ["KI fragt zurück", "Die KI liefert keinen endgültigen Autoritätsanspruch. Sie stellt Rückfragen: Ist das eine Gesundheitsthematik, welche Annahme muss geprüft werden und was ist belegbar?"],
  ["Grenzen prüfen", "Medizinische Versprechen, Diagnosen, Therapien, garantierte Ergebnisse und unbelegte Behauptungen werden nicht als belastbare Entscheidung ausgegeben."],
  ["Menschlich entscheiden", "Die Entscheidung bleibt beim Menschen: ein Glas Wasser, eine Pause, eine Notiz oder ein kleiner umsetzbarer Schritt – kein perfektes System."],
];

export default function GermanMethodPage() {
  return (
    <article lang="de" className="container section legalText">
      <StructuredData data={schema} />
      <nav className="breadcrumbs" aria-label="Brotkrumen-Navigation">
        <Link href="/de">Startseite</Link><span aria-hidden="true">/</span><span>Methode</span>
      </nav>
      <div className="eyebrow">Methode · Deutsch</div>
      <h1>Frag KI – KI fragt dich.</h1>
      <p className="lead">DaniniLans nutzt die DaniniHub-Methode, damit ein gesünderer Lebensstil weder zum Marketingversprechen noch zur blinden Befolgung eines Algorithmus wird. KI hilft, Fragen zu klären, übernimmt aber weder Verantwortung noch Behandlung oder Entscheidung.</p>

      <EditorialTrust
        author="DaniniLans Redaktion"
        contentType="Methodenleitfaden"
        published="15. Juli 2026"
        reviewed="15. Juli 2026"
      />

      <section className="grid two">
        {steps.map(([title, description]) => (
          <article className="card" key={title}>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <section className="section featureBand">
        <div>
          <div className="eyebrow">Rolle in DaniniLans</div>
          <h2>Die Methode verbindet Wasser, Routinen, Küche, bewährte Gewohnheiten und digitale Werkzeuge.</h2>
        </div>
        <p>Wasser und Tagesrhythmus bilden den Einstieg. Routinen geben Orientierung. Inhalte und Erfahrungen werden nicht als Copy-and-paste-Ratschläge behandelt, sondern als strukturierter Dialog mit klaren Grenzen.</p>
      </section>

      <section className="card sourceCard">
        <h2>Verantwortung und Prüfung</h2>
        <p>Bei Gesundheit, Erkrankungen, Medikamenten, Schwangerschaft, therapeutischer Ernährung sowie rechtlichen oder finanziellen Entscheidungen ist eine qualifizierte fachliche Prüfung erforderlich.</p>
        <div className="ctaRow">
          <Link className="btn secondary" href="/de/wasser-und-rhythmus">Wasser und Rhythmus</Link>
          <Link className="btn secondary" href="/metoda" hrefLang="sr">Srpska verzija</Link>
        </div>
      </section>

      <section className="card disclaimer">
        <h2>Wichtiger Hinweis</h2>
        <p>Die Methode dient der allgemeinen Information und Strukturierung. Sie ersetzt keine medizinische, rechtliche, finanzielle oder andere individuelle Fachberatung.</p>
      </section>
    </article>
  );
}