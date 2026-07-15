import type { Metadata } from "next";
import Link from "next/link";
import EditorialTrust from "../../../components/EditorialTrust";
import StructuredData from "../../../components/StructuredData";

const baseUrl = "https://daninilans.daninihub.com";
const canonicalPath = "/de/wasser-und-rhythmus";

export const metadata: Metadata = {
  title: "Wasser und Tagesrhythmus",
  description:
    "Ein verantwortungsvoller DaniniLans-Leitfaden über Wasser als sichtbaren Teil des Tagesrhythmus – ohne medizinische Versprechen.",
  alternates: {
    canonical: canonicalPath,
    languages: {
      "sr-RS": "/voda-i-ritam",
      "de-DE": canonicalPath,
      "x-default": "/voda-i-ritam",
    },
  },
  openGraph: {
    title: "Wasser und Tagesrhythmus | DaniniLans",
    description:
      "Morgen, Arbeit, Pausen und Abend durch eine einfache, sichtbare Wasser-Routine strukturieren.",
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
      headline: "Wasser und Tagesrhythmus",
      description:
        "Ein DaniniLans-Leitfaden über Wasser als sichtbaren Teil eines realistischen Tagesrhythmus.",
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
        { "@type": "ListItem", position: 2, name: "Wasser und Tagesrhythmus", item: `${baseUrl}${canonicalPath}` },
      ],
    },
  ],
};

export default function GermanWaterAndRhythmPage() {
  return (
    <article lang="de" className="container section legalText">
      <StructuredData data={schema} />
      <nav className="breadcrumbs" aria-label="Brotkrumen-Navigation">
        <Link href="/de">Startseite</Link><span aria-hidden="true">/</span><span>Wasser und Tagesrhythmus</span>
      </nav>
      <div className="eyebrow">Leitfaden · Deutsch</div>
      <h1>Wasser und Tagesrhythmus</h1>
      <p className="lead">Bei DaniniLans ist Wasser weder Wunderlösung noch Disziplinbeweis. Es ist ein einfacher, sichtbarer Orientierungspunkt, der sich mit Morgen, Arbeit, Pausen, Mahlzeiten und Abend verbinden lässt.</p>

      <EditorialTrust
        author="DaniniLans Redaktion"
        contentType="Bildungsleitfaden"
        published="15. Juli 2026"
        reviewed="15. Juli 2026"
      />

      <section className="card articleCard">
        <h2>Ein realistischer Rhythmus statt starrer Regeln</h2>
        <h3>Morgen: ruhig und sichtbar beginnen</h3>
        <p>Ein Glas Wasser kann den Tagesbeginn markieren, bevor Telefon, Nachrichten und Aufgaben die Aufmerksamkeit übernehmen. Das ist keine Therapie, sondern eine kleine organisatorische Entscheidung.</p>

        <h3>Arbeit: die Umgebung erinnert mit</h3>
        <p>Steht Wasser sichtbar am Arbeitsplatz, muss daraus kein zusätzlicher Punkt auf einer Aufgabenliste werden. Die Umgebung unterstützt die Gewohnheit, ohne Druck und ohne Perfektionsanspruch.</p>

        <h3>Pausen und Mahlzeiten: mit dem Tagesablauf verbinden</h3>
        <p>Eine Wasser-Routine funktioniert eher, wenn sie an bereits bestehende Momente gekoppelt wird: Arbeitsbeginn, Pause, Küche, Essen oder Rückkehr nach Hause.</p>

        <h3>Abend: den nächsten Tag erleichtern</h3>
        <p>Am Abend genügt oft eine kleine Vorbereitung: Flasche oder Glas bereitstellen, die Küche ordnen und den Tag bewusst abschließen.</p>
      </section>

      <section className="card sourceCard">
        <h2>Redaktioneller Rahmen</h2>
        <p>Der Leitfaden beschreibt alltagstaugliche Organisationsideen. Individuelle Bedürfnisse, Erkrankungen, Medikamente, Schwangerschaft oder ärztlich begleitete Ernährung müssen fachlich geprüft werden.</p>
        <div className="ctaRow">
          <Link className="btn secondary" href="/de/methode">KI-Methode verstehen</Link>
          <Link className="btn secondary" href="/voda-i-ritam" hrefLang="sr">Srpska verzija</Link>
        </div>
      </section>

      <section className="card disclaimer">
        <h2>Wichtiger Hinweis</h2>
        <p>Diese Inhalte dienen der allgemeinen Information und Bildung. Sie ersetzen keine Diagnose, Behandlung oder individuelle medizinische Beratung.</p>
      </section>
    </article>
  );
}
