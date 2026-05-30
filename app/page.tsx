import Link from "next/link";

const priorities = [
  ["Zdrav stil života", "Krovna tema DaniniLans-a: voda, ritam, kuhinja, stare navike, prostor, tehnologija i AI metoda bez medicinskih obećanja.", "/vodici"],
  ["Voda i ritam", "Voda kao vidljiva tačka dana: jutro, radni sto, pauza, obrok, kuhinja i veče.", "/voda-i-ritam"],
  ["Rutine", "Neutralni okviri za jutro, rad, pauzu, kuhinju i večernji završetak, bez ekstremnih režima.", "/rutine"],
  ["Metoda", "Pitaj AI — AI pita tebe: dijalog, granice, provera i odluka koja ostaje ljudska.", "/metoda"],
];

const contentTracks = [
  ["Recepti i kuhinja", "čajevi, sezonski bokali, kuhinjski reset i praktična priprema dana", "/recepti"],
  ["Stara znanja", "porodične navike, Balkan iskustvo i kulturni trag reda bez terapijskih tvrdnji", "/stara-znanja"],
  ["Voda, tehnologija i AI", "UMH, Welan, filteri, aparati i AI kao odgovorne edukativne teme", "/vodici/voda-tehnologija-i-ai"],
  ["Knjiga utisaka", "moderirani zapisi o svakodnevici, bez tvrdnji o zdravstvenom ishodu", "/recenzije"],
];

const clusters = [
  ["Voda", "voda-i-ritam, filteri, bokali, čaj, kuhinja"],
  ["Rutina", "jutro, radni blok, pauza, veče, nedeljni pregled"],
  ["Tradicija", "stara znanja, porodične beleške, Balkan navike"],
  ["AI", "pitanja, beleške, granice, odgovorna odluka"],
];

export default function HomePage() {
  return (
    <div>
      <section className="hero container premiumHero">
        <div className="heroCopy">
          <div className="eyebrow">DaniniLans · zdrav stil života · voda · rutina · AI metoda</div>
          <h1>Zdrav stil života počinje kada dan postane čitljiv.</h1>
          <p className="lead">DaniniLans spaja vodu, dnevni ritam, kuhinju, stare navike, odgovornu tehnologiju i metodu Pitaj AI — AI pita tebe. Bez medicinskih obećanja. Bez guru pravila. Sa jasnim pitanjima, granicama i malim koracima koji imaju smisla u stvarnom životu.</p>
          <div className="ctaRow">
            <Link className="btn primary" href="/vodici">Zdrav stil života</Link>
            <Link className="btn secondary" href="/voda-i-ritam">Voda i ritam</Link>
            <Link className="btn secondary" href="/metoda">Metoda</Link>
          </div>
        </div>
        <aside className="heroPanel">
          <img className="heroImage" src="/images/daninilans-hero-water-rhythm-ai.webp" alt="DaniniLans zdrav stil života, voda, kuhinja, beležnica i odgovorna AI metoda" />
          <div className="heroPanelText">
            <span className="smallCaps">DaniniLans pristup</span>
            <h3>Prvo život. Zatim alat.</h3>
            <p>Voda, kuhinja, stara znanja i AI beleška nisu predstava. Oni su tačke kroz koje se dan razume, a ne ukrašava.</p>
          </div>
        </aside>
      </section>

      <section className="section container featureBand">
        <div>
          <div className="eyebrow">Prioriteti</div>
          <h2>DaniniLans nije još jedan wellness blog. To je mapa zdravog stila života bez lažnih tvrdnji.</h2>
        </div>
        <p>Fokus je na sadržaju koji može da traje: voda, rutina, recepti, kuhinja, stara znanja, tehnologija i AI metoda. Svaka tema mora imati granicu, kategoriju i prirodno linkovanje.</p>
      </section>

      <section className="section container">
        <div className="sectionHead"><div className="eyebrow">Glavne kategorije</div><h2>Četiri ulaza kroz koja korisnik razume ceo DaniniLans.</h2></div>
        <div className="grid four">{priorities.map(([title,text,href])=><Link className="card" key={title} href={href}><h3>{title}</h3><p>{text}</p><span className="smallCaps">Otvori kategoriju</span></Link>)}</div>
      </section>

      <section className="section container splitBand">
        <div>
          <div className="eyebrow">Uloga metode i AI</div>
          <h2>Pitaj AI — AI pita tebe.</h2>
          <p>Metoda ne služi da AI odlučuje umesto čoveka. Služi da pitanje bude bolje postavljeno: šta želiš da promeniš, šta ne sme da se tvrdi, šta treba proveriti i koji korak je dovoljno mali da ostane realan.</p>
          <div className="ctaRow"><Link className="btn secondary" href="/metoda">Kako metoda radi</Link><Link className="btn secondary" href="/ai-disclosure">AI Disclosure</Link></div>
        </div>
        <div className="methodSteps"><div><strong>Pitaj</strong><p>Šta danas traži red?</p></div><div><strong>Proveri</strong><p>Gde prestaje edukacija, a počinje stručni savet?</p></div><div><strong>Odluči</strong><p>Koji mali korak ostaje tvoj?</p></div></div>
      </section>

      <section className="section container">
        <div className="sectionHead"><div className="eyebrow">Sadržajni pravci</div><h2>Članci, recepti i utisci grade arhivu, a ne dekoraciju.</h2></div>
        <div className="grid four">{contentTracks.map(([title,text,href])=><Link className="card" key={title} href={href}><h3>{title}</h3><p>{text}</p><span className="smallCaps">Otvori pravac</span></Link>)}</div>
      </section>

      <section className="section container">
        <div className="sectionHead"><div className="eyebrow">SEO klasteri</div><h2>Svaki tekst mora pripadati jednoj logičnoj grupi.</h2></div>
        <div className="grid four">{clusters.map(([title,text])=><article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section container"><div className="card disclaimer"><h3>Nemedicinski okvir</h3><p>DaniniLans govori o zdravom stilu života, vodi, ritmu, navikama, kuhinji, tehnologiji i AI kao o delovima organizacije svakodnevice. Ne predstavlja ih kao terapiju, dijagnozu ili garanciju zdravstvenog rezultata.</p><Link className="btn secondary" href="/disclaimer">Pročitaj disclaimer</Link></div></section>
    </div>
  );
}
