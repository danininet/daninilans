import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metoda | DaniniLans",
  description: "DaniniLans metoda Pitaj AI — AI pita tebe za rutinu, balans, vodu, navike i odgovornu upotrebu AI bez medicinskih tvrdnji.",
  alternates: {
    canonical: "/metoda",
    languages: {
      "sr-RS": "/metoda",
      "de-DE": "/de/methode",
      "x-default": "/metoda",
    },
  },
  openGraph: {
    title: "Pitaj AI — AI pita tebe | DaniniLans",
    description: "Odgovorna AI metoda za jasnije pitanje, proveru granica i ljudsku odluku.",
    url: "/metoda",
    locale: "sr_RS",
    alternateLocale: ["de_DE"],
    type: "article",
  },
};

const steps = [
  ["Pitaj", "Ne počinje se komandom AI-u, nego jasnim pitanjem: šta u danu traži red, gde voda nestaje iz ritma i koja navika se stalno raspada?"],
  ["AI pita tebe", "AI ne daje gotov autoritet. Vraća pitanja: da li je ovo zdravstvena tema, da li treba stručna provera, šta je dokaz, šta je samo osećaj?"],
  ["Proveri granice", "DaniniLans blokira medicinska obećanja, dijagnoze, terapije, garancije rezultata i tvrdnje koje ne mogu da se potvrde."],
  ["Odluči", "Odluka ostaje ljudska: jedna čaša vode, jedna pauza, jedna beleška, jedan realan korak — ne savršen sistem."],
];

export default function Page() {
  return (
    <div className="container section legalText">
      <div className="eyebrow">Metoda</div>
      <h1>Pitaj AI — AI pita tebe.</h1>
      <p className="lead">DaniniLans koristi DaniniHub metodu da zdraviji stil života ne postane ni marketing ni slepa poslušnost algoritmu. AI pomaže da se pitanje razjasni, ali ne preuzima odgovornost, ne leči i ne odlučuje umesto čoveka.</p>
      <section className="grid two">{steps.map(([title, description]) => <article className="card" key={title}><h2>{title}</h2><p>{description}</p></article>)}</section>
      <section className="section featureBand"><div><div className="eyebrow">Uloga u DaniniLans-u</div><h2>Metoda povezuje vodu, rutinu, kuhinju, stare navike i digitalne alate.</h2></div><p>Voda i ritam su početak. Rutine daju okvir. Recepti, stara znanja i utisci grade sadržajnu arhivu. AI pomaže da se sve to ne pretvori u copy-paste savete, nego u dijalog sa jasnom granicom.</p></section>
      <section className="card disclaimer section"><h2>Granica metode</h2><p>DaniniLans metoda je edukativna. Kod zdravlja, terapije, bolesti, trudnoće, ishrane pod nadzorom, pravnih i finansijskih odluka potrebna je stručna provera.</p><div className="ctaRow"><Link className="btn secondary" href="/voda-i-ritam">Voda i ritam</Link><Link className="btn secondary" href="/rutine">Rutine</Link><Link className="btn secondary" href="/de/methode" hrefLang="de">Deutsche Version</Link><Link className="btn secondary" href="/ai-disclosure">AI Disclosure</Link></div></section>
    </div>
  );
}