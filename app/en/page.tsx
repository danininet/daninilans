import Link from "next/link";

const pillars = [
  ["💧", "Water", "Not as a miracle claim, but as the simplest visible anchor of the day: glass, carafe, tea, filter, pause and kitchen.", "/voda-i-ritam"],
  ["🌿", "Rhythm", "The day does not need to be perfect. It needs a few points that can be repeated without pressure.", "/rutine"],
  ["🍵", "Kitchen", "The place where a healthy lifestyle becomes practical: water, meal, preparation, simple order and tomorrow's setup.", "/vodici/kuhinja-kao-centar-rutine"],
  ["🤖", "AI dialogue", "AI does not command life. AI asks better questions; the decision remains human and verifiable.", "/metoda"],
];

export default function EnglishPage() {
  return (
    <div>
      <section className="hero container premiumHero">
        <div className="heroCopy">
          <div className="eyebrow">DaniniLans · healthy lifestyle · water · routine · AI method</div>
          <h1>A healthy lifestyle begins when the day becomes readable.</h1>
          <p className="lead">DaniniLans connects water, daily rhythm, kitchen habits, old everyday wisdom, responsible technology and the Ask AI — AI asks you method. No medical promises. No guru rules. Just clear questions, boundaries and small steps that make sense in real life.</p>
          <div className="ctaRow">
            <Link className="btn primary" href="/vodici">Healthy lifestyle</Link>
            <Link className="btn secondary" href="/voda-i-ritam">Water and rhythm</Link>
            <Link className="btn secondary" href="/metoda">Method</Link>
          </div>
        </div>
        <aside className="heroPanel">
          <img className="heroImage" src="/images/daninilans-hero-water-rhythm-ai.webp" alt="DaniniLans healthy lifestyle, water, kitchen, notebook and responsible AI method" />
          <div className="heroPanelText">
            <span className="smallCaps">DaniniLans approach</span>
            <h3>Life first. Then the tool.</h3>
            <p>Water, kitchen, old habits and AI notes are not a show. They are points through which the day can be understood.</p>
          </div>
        </aside>
      </section>

      <section className="section container featureBand softBand">
        <div>
          <div className="eyebrow">Positioning</div>
          <h2>DaniniLans is not another generic wellness blog. It is a calm map for a healthy lifestyle without false claims.</h2>
        </div>
        <p>The focus is durable content: water, routine, recipes, kitchen, old habits, technology and AI method. Every health-adjacent topic needs boundaries and a non-medical frame.</p>
      </section>

      <section className="section container pillarSection">
        <div className="sectionHead"><div className="eyebrow">DaniniLans pillars</div><h2>Four practical pillars instead of interchangeable wellness language.</h2></div>
        <div className="pillarList">{pillars.map(([icon,title,text,href])=><Link className="pillarItem" key={title} href={href}><span className="pillarIcon">{icon}</span><span><strong>{title}</strong><p>{text}</p></span></Link>)}</div>
      </section>

      <section className="section container splitBand methodBand">
        <div>
          <div className="eyebrow">Method and AI</div>
          <h2>Ask AI — AI asks you.</h2>
          <p>The method does not mean AI decides for a person. It helps the question become clearer: what should change, what must not be claimed, what should be checked and which step is small enough to remain realistic?</p>
          <div className="ctaRow"><Link className="btn secondary" href="/metoda">How the method works</Link><Link className="btn secondary" href="/ai-disclosure">AI Disclosure</Link></div>
        </div>
        <div className="methodSteps"><div><strong>Ask</strong><p>What needs order today?</p></div><div><strong>Check</strong><p>Where does education end and expert advice begin?</p></div><div><strong>Decide</strong><p>Which small step remains yours?</p></div></div>
      </section>

      <section className="section container"><div className="card disclaimer"><h3>Non-medical frame</h3><p>DaniniLans speaks about healthy lifestyle, water, rhythm, habits, kitchen, technology and AI as parts of everyday organization. It is not therapy, diagnosis or a guarantee of health outcomes.</p><Link className="btn secondary" href="/disclaimer">Read disclaimer</Link></div></section>
    </div>
  );
}
