import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const locales = ["sr", "de", "en"] as const;
type Locale = (typeof locales)[number];

type PageProps = {
  params: Promise<{ locale: string }>;
};

const pageCopy: Record<Locale, {
  htmlLang: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  primaryCta: string;
  secondaryCta: string;
  methodCta: string;
  panelKicker: string;
  panelTitle: string;
  panelText: string;
  positionEyebrow: string;
  positionTitle: string;
  positionText: string;
  pillarsEyebrow: string;
  pillarsTitle: string;
  methodEyebrow: string;
  methodTitle: string;
  methodText: string;
  methodLink: string;
  disclosureLink: string;
  disclaimerTitle: string;
  disclaimerText: string;
  disclaimerLink: string;
  pillars: [string, string, string, string][];
}> = {
  sr: {
    htmlLang: "sr",
    title: "DaniniLans | Zdrav stil života, voda, rutina i AI metoda",
    description: "DaniniLans je edukativni sajt o zdravom stilu života kroz vodu, dnevni ritam, kuhinju, stare navike, tehnologiju i metodu Pitaj AI — AI pita tebe.",
    eyebrow: "DaniniLans · zdrav stil života · voda · rutina · AI metoda",
    h1: "Zdrav stil života počinje kada dan postane čitljiv.",
    lead: "DaniniLans spaja vodu, dnevni ritam, kuhinju, stare navike, odgovornu tehnologiju i metodu Pitaj AI — AI pita tebe. Bez medicinskih obećanja. Bez guru pravila. Sa jasnim pitanjima, granicama i malim koracima koji imaju smisla u stvarnom životu.",
    primaryCta: "Zdrav stil života",
    secondaryCta: "Voda i ritam",
    methodCta: "Metoda",
    panelKicker: "DaniniLans pristup",
    panelTitle: "Prvo život. Zatim alat.",
    panelText: "Voda, kuhinja, stara znanja i AI beleška nisu predstava. Oni su tačke kroz koje se dan razume, a ne ukrašava.",
    positionEyebrow: "Pozicioniranje",
    positionTitle: "DaniniLans nije još jedan wellness blog. To je mapa zdravog stila života bez lažnih tvrdnji.",
    positionText: "Fokus je na sadržaju koji može da traje: voda, rutina, recepti, kuhinja, stara znanja, tehnologija i AI metoda. Svaka tema mora imati granicu, kategoriju i prirodno linkovanje.",
    pillarsEyebrow: "DaniniLans stubovi",
    pillarsTitle: "Četiri praktična stuba koji nas odvajaju od generičkog wellness sadržaja.",
    methodEyebrow: "Uloga metode i AI",
    methodTitle: "Pitaj AI — AI pita tebe.",
    methodText: "Metoda ne služi da AI odlučuje umesto čoveka. Služi da pitanje bude bolje postavljeno: šta želiš da promeniš, šta ne sme da se tvrdi, šta treba proveriti i koji korak je dovoljno mali da ostane realan.",
    methodLink: "Kako metoda radi",
    disclosureLink: "AI Disclosure",
    disclaimerTitle: "Nemedicinski okvir",
    disclaimerText: "DaniniLans govori o zdravom stilu života, vodi, ritmu, navikama, kuhinji, tehnologiji i AI kao o delovima organizacije svakodnevice. Ne predstavlja ih kao terapiju, dijagnozu ili garanciju zdravstvenog rezultata.",
    disclaimerLink: "Pročitaj disclaimer",
    pillars: [
      ["💧", "Voda", "Ne kao čudo, nego kao najjednostavniji vidljivi oslonac dana: čaša, bokal, čaj, filter, pauza i kuhinja.", "/voda-i-ritam"],
      ["🌿", "Ritam", "Dan ne mora biti savršen. Treba da ima nekoliko tačaka koje se mogu ponoviti bez pritiska.", "/rutine"],
      ["🍵", "Kuhinja", "Mesto gde se zdravi stil života vidi najbrže: voda, obrok, priprema, uređaji i red za sutra.", "/vodici/kuhinja-kao-centar-rutine"],
      ["🤖", "AI dijalog", "AI ne komanduje životom. AI pita bolje pitanje, a odluka ostaje ljudska i proverljiva.", "/metoda"],
    ],
  },
  de: {
    htmlLang: "de",
    title: "DaniniLans | Gesunder Lebensstil, Wasser, Rhythmus und AI-Methode",
    description: "DaniniLans ist ein edukativer Raum für Wasser, Tagesrhythmus, Küche, alte Alltagsgewohnheiten, verantwortliche Technologie und die Methode Frag AI — AI fragt dich.",
    eyebrow: "DaniniLans · gesunder Lebensstil · Wasser · Routine · AI-Methode",
    h1: "Gesunder Lebensstil beginnt, wenn der Tag lesbar wird.",
    lead: "DaniniLans verbindet Wasser, Tagesrhythmus, Küche, alte Alltagsgewohnheiten, verantwortliche Technologie und die Methode Frag AI — AI fragt dich. Ohne medizinische Versprechen. Ohne Guru-Regeln. Mit klaren Fragen, Grenzen und kleinen Schritten für das echte Leben.",
    primaryCta: "Gesunder Lebensstil",
    secondaryCta: "Wasser und Rhythmus",
    methodCta: "Methode",
    panelKicker: "DaniniLans Ansatz",
    panelTitle: "Erst das Leben. Dann das Werkzeug.",
    panelText: "Wasser, Küche, alte Gewohnheiten und AI-Notizen sind keine Show. Sie sind Punkte, durch die der Tag verstanden wird.",
    positionEyebrow: "Positionierung",
    positionTitle: "DaniniLans ist kein generischer Wellness-Blog. Es ist eine ruhige Karte für gesunden Lebensstil ohne falsche Heilversprechen.",
    positionText: "Der Fokus liegt auf langlebigem Inhalt: Wasser, Routine, Rezepte, Küche, alte Gewohnheiten, Technologie und AI-Methode. Jede gesundheitsnahe Aussage braucht klare Grenzen und einen nicht-medizinischen Rahmen.",
    pillarsEyebrow: "DaniniLans Säulen",
    pillarsTitle: "Vier praktische Säulen statt austauschbarer Wellness-Sprache.",
    methodEyebrow: "Methode und AI",
    methodTitle: "Frag AI — AI fragt dich.",
    methodText: "Die Methode bedeutet nicht, dass AI für den Menschen entscheidet. Sie hilft, die Frage besser zu stellen: Was soll sich ändern, was darf nicht behauptet werden, was muss geprüft werden und welcher Schritt bleibt realistisch?",
    methodLink: "Wie die Methode funktioniert",
    disclosureLink: "AI Disclosure",
    disclaimerTitle: "Nicht-medizinischer Rahmen",
    disclaimerText: "DaniniLans spricht über gesunden Lebensstil, Wasser, Rhythmus, Gewohnheiten, Küche, Technologie und AI als Teile der Alltagsorganisation. Es ist keine Therapie, Diagnose oder Garantie für gesundheitliche Ergebnisse.",
    disclaimerLink: "Disclaimer lesen",
    pillars: [
      ["💧", "Wasser", "Nicht als Wunder, sondern als sichtbarer Anker des Tages: Glas, Karaffe, Tee, Filter, Pause und Küche.", "/voda-i-ritam"],
      ["🌿", "Rhythmus", "Der Tag muss nicht perfekt sein. Er braucht wenige Punkte, die ohne Druck wiederholbar bleiben.", "/rutine"],
      ["🍵", "Küche", "Der Ort, an dem gesunder Lebensstil praktisch sichtbar wird: Wasser, Mahlzeit, Vorbereitung und Ordnung für morgen.", "/vodici/kuhinja-kao-centar-rutine"],
      ["🤖", "AI-Dialog", "AI entscheidet nicht über das Leben. AI stellt bessere Fragen; die Entscheidung bleibt menschlich und überprüfbar.", "/metoda"],
    ],
  },
  en: {
    htmlLang: "en",
    title: "DaniniLans | Healthy lifestyle, water, rhythm and AI method",
    description: "DaniniLans is an educational space for water, daily rhythm, kitchen habits, old everyday wisdom, responsible technology and the Ask AI — AI asks you method.",
    eyebrow: "DaniniLans · healthy lifestyle · water · routine · AI method",
    h1: "A healthy lifestyle begins when the day becomes readable.",
    lead: "DaniniLans connects water, daily rhythm, kitchen habits, old everyday wisdom, responsible technology and the Ask AI — AI asks you method. No medical promises. No guru rules. Just clear questions, boundaries and small steps that make sense in real life.",
    primaryCta: "Healthy lifestyle",
    secondaryCta: "Water and rhythm",
    methodCta: "Method",
    panelKicker: "DaniniLans approach",
    panelTitle: "Life first. Then the tool.",
    panelText: "Water, kitchen, old habits and AI notes are not a show. They are points through which the day can be understood.",
    positionEyebrow: "Positioning",
    positionTitle: "DaniniLans is not another generic wellness blog. It is a calm map for a healthy lifestyle without false claims.",
    positionText: "The focus is durable content: water, routine, recipes, kitchen, old habits, technology and AI method. Every health-adjacent topic needs boundaries and a non-medical frame.",
    pillarsEyebrow: "DaniniLans pillars",
    pillarsTitle: "Four practical pillars instead of interchangeable wellness language.",
    methodEyebrow: "Method and AI",
    methodTitle: "Ask AI — AI asks you.",
    methodText: "The method does not mean AI decides for a person. It helps the question become clearer: what should change, what must not be claimed, what should be checked and which step is small enough to remain realistic?",
    methodLink: "How the method works",
    disclosureLink: "AI Disclosure",
    disclaimerTitle: "Non-medical frame",
    disclaimerText: "DaniniLans speaks about healthy lifestyle, water, rhythm, habits, kitchen, technology and AI as parts of everyday organization. It is not therapy, diagnosis or a guarantee of health outcomes.",
    disclaimerLink: "Read disclaimer",
    pillars: [
      ["💧", "Water", "Not as a miracle claim, but as the simplest visible anchor of the day: glass, carafe, tea, filter, pause and kitchen.", "/voda-i-ritam"],
      ["🌿", "Rhythm", "The day does not need to be perfect. It needs a few points that can be repeated without pressure.", "/rutine"],
      ["🍵", "Kitchen", "The place where a healthy lifestyle becomes practical: water, meal, preparation, simple order and tomorrow's setup.", "/vodici/kuhinja-kao-centar-rutine"],
      ["🤖", "AI dialogue", "AI does not command life. AI asks better questions; the decision remains human and verifiable.", "/metoda"],
    ],
  },
};

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = pageCopy[locale];
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        sr: "/sr",
        de: "/de",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: `https://daninilans.daninihub.com/${locale}`,
      siteName: "DaniniLans",
      type: "website",
      images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "DaniniLans" }],
    },
  };
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = pageCopy[locale];

  return (
    <div lang={copy.htmlLang}>
      <section className="hero container premiumHero">
        <div className="heroCopy">
          <div className="eyebrow">{copy.eyebrow}</div>
          <h1>{copy.h1}</h1>
          <p className="lead">{copy.lead}</p>
          <div className="ctaRow">
            <Link className="btn primary" href="/vodici">{copy.primaryCta}</Link>
            <Link className="btn secondary" href="/voda-i-ritam">{copy.secondaryCta}</Link>
            <Link className="btn secondary" href="/metoda">{copy.methodCta}</Link>
          </div>
        </div>
        <aside className="heroPanel">
          <img className="heroImage" src="/images/daninilans-hero-water-rhythm-ai.webp" alt="DaniniLans" />
          <div className="heroPanelText">
            <span className="smallCaps">{copy.panelKicker}</span>
            <h3>{copy.panelTitle}</h3>
            <p>{copy.panelText}</p>
          </div>
        </aside>
      </section>

      <section className="section container featureBand softBand">
        <div>
          <div className="eyebrow">{copy.positionEyebrow}</div>
          <h2>{copy.positionTitle}</h2>
        </div>
        <p>{copy.positionText}</p>
      </section>

      <section className="section container pillarSection">
        <div className="sectionHead"><div className="eyebrow">{copy.pillarsEyebrow}</div><h2>{copy.pillarsTitle}</h2></div>
        <div className="pillarList">{copy.pillars.map(([icon,title,text,href])=><Link className="pillarItem" key={title} href={href}><span className="pillarIcon">{icon}</span><span><strong>{title}</strong><p>{text}</p></span></Link>)}</div>
      </section>

      <section className="section container splitBand methodBand">
        <div>
          <div className="eyebrow">{copy.methodEyebrow}</div>
          <h2>{copy.methodTitle}</h2>
          <p>{copy.methodText}</p>
          <div className="ctaRow"><Link className="btn secondary" href="/metoda">{copy.methodLink}</Link><Link className="btn secondary" href="/ai-disclosure">{copy.disclosureLink}</Link></div>
        </div>
      </section>

      <section className="section container"><div className="card disclaimer"><h3>{copy.disclaimerTitle}</h3><p>{copy.disclaimerText}</p><Link className="btn secondary" href="/disclaimer">{copy.disclaimerLink}</Link></div></section>
    </div>
  );
}
