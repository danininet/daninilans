import type { Metadata } from "next";
import Link from "next/link";
import EditorialTrust from "../../../components/EditorialTrust";
import StructuredData from "../../../components/StructuredData";

const baseUrl = "https://daninilans.daninihub.com";
const canonicalPath = "/de/wasser-und-rhythmmus";

export const metadata: Metadata = {
  title: "Wasser und Tagesrhythmus",
  description:
    "Ein sachlicher DaniniLans-Leitfaden darüber, wie Wasser in bestehende Tagesabläufe eingebunden werden kann – ohne starre Vorgaben oder medizinische Versprechen.",
  alternates: {
    canonical: "/de/wasser-und-rhythmus",
    languages: {
      "sr-RS": "/voda-i-ritam",
      "de-DE": "/de/wasser-und-rhythmus",
      "x-default": "/voda-i-ritam",
    },
  },
  openGraph: {
    title: "Wasser und Tagesrhythmus | DaniniLans",
    description:
      "Wasser an Morgen, Arbeit, Pausen, Mahlzeiten und Abend anbinden – ohne Perfektionsdruck.",
    url: "/de/wasser-und-rhythmus",
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
      "@id": `${baseUrl}/de/wasser-und-rhythmus#article`,
      headline: "Wasser und Tagesrhythmus",
      description:
        "Ein DaniniLans-Leitfaden über Wasser als sichtbaren Bestandteil eines realistischen Tagesablaufs.",
      inLanguage: "de-DE",
      datePublished: "2026-07-15",
      dateModified: "2026-07-15",
      author: { "@type": "Organization", name: "DaniniLans Redaktion" },
      publisher: { "@id": `${baseUrl}/#organization` },
      mainEntityOfPage: `${baseUrl}/de/wasser-und-rhythmus`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: `${baseUrl}/de` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Wasser und Tagesrhythmus",
          item: `${baseUrl}/de/wasser-und-rhythmus`,
        },
      ],
    },
  ],
};

export default function GermanWaterAndRhythmPage() {
  return (
    <article lang="de" className="container section legalText">
      <StructuredData data={schema} />
      <nav className="breadcrumbs" aria-label="Brotkrumen-Navigation">
        <Link href="/de">Startseite</Link>
        <span aria-hidden="true">/</span>
        <span>Wasser und Tagesrhythmus</span>
      </nav>

      <div className="eyebrow">Leitfaden · Deutsch</div>
      <h1>Wasser und Tagesrhythmus</h1>
      <p className="lead">
        Wasser ist hier weder Heilmittel noch Leistungsnachweis. Es dient als sichtbarer Orientierungspunkt, der sich an bereits bestehende Momente des Tages anbinden lässt.
      </p>

      <EditorialTrust
        author="DaniniLans Redaktion"
        contentType="Bildungsleitfaden"
        published="15. Juli 2026"
        reviewed="15. Juli 2026"
      />

      <section className="card articleCard">
        <h2>Ein tragfähiger Ablauf statt starrer Regeln</h2>

        <h3>Morgens: sichtbar beginnen</h3>
        <p>
          Ein bereitgestelltes Glas Wasser kann den Tagesbeginn markieren, bevor Nachrichten und Aufgaben die Aufmerksamkeit übernehmen. Entscheidend ist nicht eine feste Menge, sondern ein leicht wiederholbarer Ablauf.
        </p>

        <h3>Bei der Arbeit: die Umgebung mitdenken</h3>
        <p>
          Steht Wasser sichtbar am Arbeitsplatz, muss daraus kein weiterer Punkt auf einer Aufgabenliste werden. Die Umgebung unterstützt die Gewohnheit, ohne zusätzlichen Druck aufzubauen.
        </p>

        <h3>In Pausen und zu Mahlzeiten: an Bestehendes anknüpfen</h3>
        <p>
          Eine Routine bleibt eher bestehen, wenn sie mit vorhandenen Übergängen verbunden wird: Arbeitsbeginn, Pause, Küche, Mahlzeit oder Heimkehr.
        </p>

        <h3>Am Abend: den nächsten Tag vorbereiten</h3>
        <p>
          Eine Flasche auffüllen, ein Glas bereitstellen oder die Küche ordnen kann den nächsten Morgen vereinfachen. Mehr muss daraus nicht gemacht werden.
        </p>
      </section>

      <section className="card sourceCard">
        <h2>Redaktioneller Rahmen</h2>
        <p>
          Der Leitfaden beschreibt organisatorische Ideen für den Alltag. Bei Erkrankungen, Medikamenteneinnahme, Schwangerschaft, besonderen Trinkmengen oder ärztlich begleiteten Ernährungsplänen ist eine individuelle fachliche Einschätzung erforderlich.
        </p>
        <div className="ctaRow">
          <Link className="btn secondary" href="/de/methode">
            KI-Methode ansehen
          </Link>
          <Link className="btn secondary" href="/voda-i-ritam" hrefLang="sr">
            Srpska verzija
          </Link>
        </div>
      </section>

      <section className="card disclaimer">
        <h2>Gesundheitlicher Hinweis</h2>
        <p>
          Diese Inhalte dienen der allgemeinen Information und Bildung. Sie ersetzen weder eine Diagnose oder Behandlung noch eine individuelle medizinische Beratung.
        </p>
      </section>
    </article>
  );
}
