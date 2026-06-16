import Link from "next/link";

const pillars = [
  ["💧", "Wasser", "Nicht als Wunder, sondern als sichtbarer Anker des Tages: Glas, Karaffe, Tee, Filter, Pause und Küche.", "/voda-i-ritam"],
  ["🌿", "Rhythmus", "Der Tag muss nicht perfekt sein. Er braucht wenige Punkte, die ohne Druck wiederholbar bleiben.", "/rutine"],
  ["🍵", "Küche", "Der Ort, an dem gesunder Lebensstil praktisch sichtbar wird: Wasser, Mahlzeit, Vorbereitung und Ordnung für morgen.", "/vodici/kuhinja-kao-centar-rutine"],
  ["🤖", "AI-Dialog", "AI entscheidet nicht über das Leben. AI stellt bessere Fragen; die Entscheidung bleibt menschlich und überprüfbar.", "/metoda"],
];

export default function GermanPage() {
  return (
    <div>
      <section className="hero container premiumHero">
        <div className="heroCopy">
          <div className="eyebrow">DaniniLans · gesunder Lebensstil · Wasser · Routine · AI-Methode</div>
          <h1>Gesunder Lebensstil beginnt, wenn der Tag lesbar wird.</h1>
          <p className="lead">DaniniLans verbindet Wasser, Tagesrhythmus, Küche, alte Alltagsgewohnheiten, verantwortliche Technologie und die Methode Frag AI — AI fragt dich. Ohne medizinische Versprechen. Ohne Guru-Regeln. Mit klaren Fragen, Grenzen und kleinen Schritten für das echte Leben.</p>
          <div className="ctaRow">
            <Link className="btn primary" href="/vodici">Gesunder Lebensstil</Link>
            <Link className="btn secondary" href="/voda-i-ritam">Wasser und Rhythmus</Link>
            <Link className="btn secondary" href="/metoda">Methode</Link>
          </div>
        </div>
        <aside className="heroPanel">
          <img className="heroImage" src="/images/daninilans-hero-water-rhythm-ai.webp" alt="DaniniLans gesunder Lebensstil, Wasser, Küche, Notizbuch und verantwortliche AI-Methode" />
          <div className="heroPanelText">
            <span className="smallCaps">DaniniLans Ansatz</span>
            <h3>Erst das Leben. Dann das Werkzeug.</h3>
            <p>Wasser, Küche, alte Gewohnheiten und AI-Notizen sind keine Show. Sie sind Punkte, durch die der Tag verstanden wird.</p>
          </div>
        </aside>
      </section>

      <section className="section container featureBand softBand">
        <div>
          <div className="eyebrow">Positionierung</div>
          <h2>DaniniLans ist kein generischer Wellness-Blog. Es ist eine ruhige Karte für gesunden Lebensstil ohne falsche Heilversprechen.</h2>
        </div>
        <p>Der Fokus liegt auf langlebigem Inhalt: Wasser, Routine, Rezepte, Küche, alte Gewohnheiten, Technologie und AI-Methode. Jede Gesundheitsnähe braucht klare Grenzen und einen nicht-medizinischen Rahmen.</p>
      </section>

      <section className="section container pillarSection">
        <div className="sectionHead"><div className="eyebrow">DaniniLans Säulen</div><h2>Vier praktische Säulen statt austauschbarer Wellness-Sprache.</h2></div>
        <div className="pillarList">{pillars.map(([icon,title,text,href])=><Link className="pillarItem" key={title} href={href}><span className="pillarIcon">{icon}</span><span><strong>{title}</strong><p>{text}</p></span></Link>)}</div>
      </section>

      <section className="section container splitBand methodBand">
        <div>
          <div className="eyebrow">Methode und AI</div>
          <h2>Frag AI — AI fragt dich.</h2>
          <p>Die Methode bedeutet nicht, dass AI für den Menschen entscheidet. Sie hilft, die Frage besser zu stellen: Was soll sich ändern, was darf nicht behauptet werden, was muss geprüft werden und welcher Schritt bleibt realistisch?</p>
          <div className="ctaRow"><Link className="btn secondary" href="/metoda">Wie die Methode funktioniert</Link><Link className="btn secondary" href="/ai-disclosure">AI Disclosure</Link></div>
        </div>
        <div className="methodSteps"><div><strong>Fragen</strong><p>Was braucht heute Ordnung?</p></div><div><strong>Prüfen</strong><p>Wo endet Bildung und wo beginnt Fachberatung?</p></div><div><strong>Entscheiden</strong><p>Welcher kleine Schritt bleibt deiner?</p></div></div>
      </section>

      <section className="section container"><div className="card disclaimer"><h3>Nicht-medizinischer Rahmen</h3><p>DaniniLans spricht über gesunden Lebensstil, Wasser, Rhythmus, Gewohnheiten, Küche, Technologie und AI als Teile der Alltagsorganisation. Es ist keine Therapie, Diagnose oder Garantie für gesundheitliche Ergebnisse.</p><Link className="btn secondary" href="/disclaimer">Disclaimer lesen</Link></div></section>
    </div>
  );
}
