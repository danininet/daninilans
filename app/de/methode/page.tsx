import type { Metadata } from "next";
import Link from "next/link";
import EditorialTrust from "../../../components/EditorialTrust";
import StructuredData from "../../../components/StructuredData";

const baseUrl = "https://daninilans.daninihub.com";
const canonicalPath = "/de/methode";

export const metadata: Metadata = {
  title: "Frag KI – KI fragt dich",
  description:
    "Die DaniniLans-Methode für einen verantwortungsvollen KI-Dialog: Fragen präzisieren, Annahmen prüfen und Entscheidungen beim Menschen belassen.",
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
      "Eine nachvollziehbare Methode, mit der KI Rückfragen stellt, Grenzen sichtbar macht und menschliche Entscheidungen unterstützt.",
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
        "Die DaniniLans-Methode für einen verantwortungsvollen und überprüfbaren KI-Dialog im Alltag.",
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
  [
    "Ausgangsfrage klären",
    "Der Dialog beginnt mit einem konkreten Anliegen: Was soll im Alltag verständlicher, leichter oder besser organisiert werden?",
  ],
  [
    "Rückfragen zulassen",
    "Die KI fragt nach Kontext, Unsicherheiten und Grenzen, statt aus einer unvollständigen Eingabe sofort eine endgültige Empfehlung abzuleiten.",
  ],
  [
    "Aussagen prüfen",
    "Gesundheitsbezogene, rechtliche, finanzielle oder technische Behauptungen werden von Annahmen getrennt und dort, wo es nötig ist, anhand geeigneter Quellen oder durch Fachpersonen geprüft.",
  ],
  [
    "Selbst entscheiden",
    "Am Ende steht kein automatischer Befehl, sondern ein nachvollziehbarer nächster Schritt, für den der Mensch die Verantwortung behält.",
  ],
];

export default function GermanMethodPage() {
  return (
    <article lang="de" className="container section legalText">
      <StructuredData data={schema} />
      <nav className="breadcrumbs" aria-label="Brotkrumen-Navigation">
        <Link href="/de">Startseite</Link>
        <span aria-hidden="true">/</span>
        <span>Methode</span>
      </nav>

      <div className="eyebrow">Methode · Deutsch</div>
      <h1>Frag KI – KI fragt dich.</h1>
      <p className="lead">
        Die Methode verwendet KI nicht als Autorität, sondern als strukturierten Gesprächspartner. Rückfragen, überprüfbare Aussagen und klar benannte Grenzen stehen vor jeder Empfehlung.
      </p>

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
          <div className="eyebrow">Anwendung bei DaniniLans</div>
          <h2>Die Methode ordnet Fragen zu Wasser, Routinen, Küche und digitalen Werkzeugen.</h2>
        </div>
        <p>
          Sie trennt Beobachtung, persönliche Erfahrung, belegbare Information und fachliche Beratung. Dadurch wird sichtbar, was im Alltag selbst entschieden werden kann und wo zusätzliche Prüfung erforderlich ist.
        </p>
      </section>

      <section className="card sourceCard">
        <h2>Verantwortung und fachliche Prüfung</h2>
        <p>
          Bei Erkrankungen, Medikamenten, Schwangerschaft, therapeutischer Ernährung sowie rechtlichen oder finanziellen Entscheidungen reicht ein KI-Dialog nicht aus. In diesen Fällen ist eine qualifizierte individuelle Beratung erforderlich.
        </p>
        <div className="ctaRow">
          <Link className="btn secondary" href="/de/wasser-und-rhythmus">
            Wasser und Tagesrhythmus
          </Link>
          <Link className="btn secondary" href="/metoda" hrefLang="sr">
            Srpska verzija
          </Link>
        </div>
      </section>

      <section className="card disclaimer">
        <h2>Hinweis zur Nutzung</h2>
        <p>
          Die Methode unterstützt die Strukturierung von Fragen. Sie ersetzt keine medizinische, rechtliche, finanzielle oder andere individuelle Fachberatung.
        </p>
      </section>
    </article>
  );
}
