import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wasser, Tagesrhythmus und verantwortungsvolle KI-Nutzung",
  description:
    "DaniniLans verbindet Wasser, Tagesstruktur und verantwortungsvolle KI-Nutzung zu nachvollziehbaren Orientierungshilfen für den Alltag – ohne medizinische Versprechen.",
  alternates: {
    canonical: "/de",
    languages: { "sr-RS": "/", "de-DE": "/de", "x-default": "/" },
  },
  openGraph: {
    title: "DaniniLans | Wasser, Tagesrhythmus und KI-Methode",
    description:
      "Verständliche Orientierung zu Wasser, Tagesstruktur und verantwortungsvoller KI-Nutzung.",
    url: "/de",
    locale: "de_DE",
    alternateLocale: ["sr_RS"],
    type: "website",
  },
};

export default function GermanHomePage() {
  return (
    <div lang="de" className="container section legalText">
      <div className="eyebrow">DaniniLans · Deutsch</div>
      <h1>Ein gesünderer Alltag braucht keine Perfektion, sondern nachvollziehbare Entscheidungen.</h1>
      <p className="lead">
        DaniniLans veröffentlicht Bildungsinhalte zu Wasser, Tagesstruktur und verantwortungsvoller KI-Nutzung. Die deutsche Fassung beginnt bewusst mit drei geprüften Seiten. Nicht übersetzte Bereiche werden nicht als deutschsprachiges Angebot ausgegeben.
      </p>

      <section className="grid two section">
        <article className="card">
          <div className="smallCaps">WASSER</div>
          <h2>Wasser und Tagesrhythmus</h2>
          <p>
            Der Leitfaden zeigt, wie Wasser an bereits bestehende Momente des Tages angebunden werden kann – ohne starre Vorgaben und ohne Wirkungsversprechen.
          </p>
          <Link className="btn secondary" href="/de/wasser-und-rhythmus">
            Leitfaden lesen
          </Link>
        </article>

        <article className="card">
          <div className="smallCaps">METHODE</div>
          <h2>Frag KI – KI fragt dich</h2>
          <p>
            Die Methode hilft dabei, Fragen genauer zu formulieren, Annahmen zu prüfen und die Verantwortung für Entscheidungen beim Menschen zu belassen.
          </p>
          <Link className="btn secondary" href="/de/methode">
            Methode ansehen
          </Link>
        </article>
      </section>

      <section className="featureBand section">
        <div>
          <div className="eyebrow">Redaktioneller Rahmen</div>
          <h2>Bildung, Methode und Partnerschaften bleiben voneinander unterscheidbar.</h2>
        </div>
        <p>
          DaniniLans verantwortet die Bildungsinhalte. DaniniHub stellt die Dialogmethode bereit. Verkaufs- oder CRM-Prozesse gehören zu DaniniNet und werden nicht als redaktionelle Empfehlung dargestellt.
        </p>
      </section>

      <section className="card disclaimer section">
        <h2>Gesundheitlicher Hinweis</h2>
        <p>
          Die Inhalte dienen der allgemeinen Information und Bildung. Sie ersetzen weder eine ärztliche Diagnose oder Behandlung noch eine individuelle Beratung durch qualifizierte Fachpersonen.
        </p>
      </section>
    </div>
  );
}
