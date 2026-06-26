import Link from "next/link";

const priorities = [
  ["🌿", "Zdrav stil života", "Krovna tema DaniniLans-a: voda, ritam, kuhinja, stare navike, prostor, tehnologija i AI metoda bez medicinskih obećanja.", "/vodici"],
  ["💧", "Voda i ritam", "Voda kao vidljiva tačka dana: jutro, radni sto, pauza, obrok, kuhinja i veče.", "/voda-i-ritam"],
  ["🕯️", "Rutine", "Neutralni okviri za jutro, rad, pauzu, kuhinju i večernji završetak, bez ekstremnih režima.", "/rutine"],
  ["🤖", "Metoda", "Pitaj AI — AI pita tebe: dijalog, granice, provera i odluka koja ostaje ljudska.", "/metoda"],
];

const pillars = [
  ["💧", "Voda", "Ne kao čudo, nego kao najjednostavniji vidljivi oslonac dana: čaša, bokal, čaj, filter, pauza i kuhinja.", "/voda-i-ritam"],
  ["🌿", "Ritam", "Dan ne mora biti savršen. Treba da ima nekoliko tačaka koje se mogu ponoviti bez pritiska.", "/rutine"],
  ["🍵", "Kuhinja", "Mesto gde se zdravi stil života vidi najbrže: voda, obrok, priprema, uređaji i red za sutra.", "/vodici/kuhinja-kao-centar-rutine"],
  ["📜", "Tradicija", "Balkan i porodične navike kao kulturno iskustvo, ne kao medicinski dokaz ili mit bez granice.", "/stara-znanja"],
  ["🤖", "AI dijalog", "AI ne komanduje životom. AI pita bolje pitanje, a odluka ostaje ljudska i proverljiva.", "/vodici/ai-u-svakodnevici"],
];

const contentTracks = [
  ["🍵", "Recepti i kuhinja", "čajevi, sezonski bokali, kuhinjski reset i praktična priprema dana", "/recepti"],
  ["📜", "Stara znanja", "porodične navike, Balkan iskustvo i kulturni trag reda bez terapijskih tvrdnji", "/stara-znanja"],
  ["⚙️", "Voda, tehnologija i AI", "UMH, Welan, filteri, aparati i AI kao odgovorne edukativne teme", "/vodici/voda-tehnologija-i-ai"],
  ["✍️", "Knjiga utisaka", "moderirani zapisi o svakodnevici, bez tvrdnji o zdravstvenom ishodu", "/recenzije"],
];

const rhythm = [
  ["01", "Vidljivo", "Voda, kuhinja i beleška moraju biti na mestu gde ih korisnik stvarno vidi."],
  ["02", "Mirno", "Navika nije kazna. Ako ne rasterećuje dan, mora biti manja i jednostavnija."],
  ["03", "Provereno", "Sve što dodiruje zdravlje, uređaje ili rezultate dobija jasan disclaimer i granicu."],
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

      <section className="section container featureBand softBand">
        <div>
          <div className="eyebrow">Prioriteti</div>
          <h2>DaniniLans nije još jedan wellness blog. To je mapa zdravog stila života bez lažnih tvrdnji.</h2>
        </div>
        <p>Fokus je na sadržaju koji može da traje: voda, rutina, recepti, kuhinja, stara znanja, tehnologija i AI metoda. Svaka tema mora imati granicu, kategoriju i prirodno linkovanje.</p>
      </section>

      <section className="section container pillarSection">
        <div className="sectionHead"><div className="eyebrow">DaniniLans stubovi</div><h2>Pet stubova koji nas odvajaju od generičkog wellness sadržaja.</h2></div>
        <div className="pillarList">{pillars.map(([icon,title,text,href])=><Link className="pillarItem" key={title} href={href}><span className="pillarIcon">{icon}</span><span><strong>{title}</strong><p>{text}</p></span></Link>)}</div>
      </section>

      <section className="section container spaciousSection">
        <div className="sectionHead"><div className="eyebrow">Glavne kategorije</div><h2>Četiri ulaza kroz koja korisnik razume ceo DaniniLans.</h2></div>
        <div className="grid four iconGrid">{priorities.map(([icon,title,text,href])=><Link className="card iconCard" key={title} href={href}><span className="iconBubble">{icon}</span><h3>{title}</h3><p>{text}</p><span className="smallCaps">Otvori kategoriju</span></Link>)}</div>
      </section>

      <section className="section container splitBand methodBand">
        <div>
          <div className="eyebrow">Uloga metode i AI</div>
          <h2>Pitaj AI — AI pita tebe.</h2>
          <p>Metoda ne služi da AI odlučuje umesto čoveka. Služi da pitanje bude bolje postavljeno: šta želiš da promeniš, šta ne sme da se tvrdi, šta treba proveriti i koji korak je dovoljno mali da ostane realan.</p>
          <div className="ctaRow"><Link className="btn secondary" href="/metoda">Kako metoda radi</Link><Link className="btn secondary" href="/ai-disclosure">AI Disclosure</Link></div>
        </div>
        <div className="methodSteps"><div><strong>Pitaj</strong><p>Šta danas traži red?</p></div><div><strong>Proveri</strong><p>Gde prestaje edukacija, a počinje stručni savet?</p></div><div><strong>Odluči</strong><p>Koji mali korak ostaje tvoj?</p></div></div>
      </section>

      <section className="section container"><div className="card disclaimer"><h3>Partneri za vodu, kuhinju i zdrav stil života</h3><p>DaniniLans prima samo proizvode i saradnje koje se mogu predstaviti odgovorno, bez medicinskih obećanja i bez agresivne prodaje.</p><a className="btn secondary" href="https://danininet.daninihub.com/sr/blog/poziv-za-saradnike-proizvode-i-partnere">Poziv za saradnike</a></div></section>

      <section className="section container spaciousSection">
        <div className="sectionHead"><div className="eyebrow">Sadržajni pravci</div><h2>Članci, recepti i utisci grade arhivu, a ne dekoraciju.</h2></div>
        <div className="grid four iconGrid">{contentTracks.map(([icon,title,text,href])=><Link className="card iconCard" key={title} href={href}><span className="iconBubble">{icon}</span><h3>{title}</h3><p>{text}</p><span className="smallCaps">Otvori pravac</span></Link>)}</div>
      </section>

      <section className="section container">
        <div className="sectionHead"><div className="eyebrow">Raspored sadržaja</div><h2>Manje zbijeno. Jasnije. Svaki blok ima svoju ulogu.</h2></div>
        <div className="grid three rhythmGrid">{rhythm.map(([num,title,text])=><article className="card rhythmCard" key={num}><span className="stepNumber">{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section container"><div className="card disclaimer"><h3>Nemedicinski okvir</h3><p>DaniniLans govori o zdravom stilu života, vodi, ritmu, navikama, kuhinji, tehnologiji i AI kao o delovima organizacije svakodnevice. Ne predstavlja ih kao terapiju, dijagnozu ili garanciju zdravstvenog rezultata.</p><Link className="btn secondary" href="/disclaimer">Pročitaj disclaimer</Link></div></section>
    </div>
  );
}
