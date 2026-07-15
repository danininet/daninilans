import Link from "next/link";

const priorities = [
  ["01", "Zdrav stil života", "Krovna tema DaniniLans-a: voda, ritam, kuhinja, stare navike, prostor, tehnologija i AI metoda bez medicinskih obećanja.", "/vodici"],
  ["02", "Voda i ritam", "Voda kao vidljiva tačka dana: jutro, radni sto, pauza, obrok, kuhinja i veče.", "/voda-i-ritam"],
  ["03", "Rutine", "Neutralni okviri za jutro, rad, pauzu, kuhinju i večernji završetak, bez ekstremnih režima.", "/rutine"],
  ["04", "Metoda", "Pitaj AI — AI pita tebe: dijalog, granice, provera i odluka koja ostaje ljudska.", "/metoda"],
];

const pillars = [
  ["VODA", "Voda", "Ne kao čudo, nego kao vidljivi oslonac dana: čaša, bokal, čaj, filter, pauza i kuhinja.", "/voda-i-ritam"],
  ["RITAM", "Ritam", "Dan ne mora biti savršen. Treba da ima nekoliko tačaka koje se mogu ponoviti bez pritiska.", "/rutine"],
  ["KUHINJA", "Kuhinja", "Mesto gde se zdravi stil života vidi najbrže: voda, obrok, priprema, uređaji i red za sutra.", "/vodici/kuhinja-kao-centar-rutine"],
  ["TRAG", "Tradicija", "Balkan i porodične navike kao kulturno iskustvo, ne kao medicinski dokaz ili mit bez granice.", "/stara-znanja"],
  ["DIJALOG", "AI dijalog", "AI ne komanduje životom. AI postavlja bolje pitanje, a odluka ostaje ljudska i proverljiva.", "/vodici/ai-u-svakodnevici"],
];

const contentTracks = [
  ["KUHINJA", "Recepti i kuhinja", "Čajevi, sezonski bokali, kuhinjski reset i praktična priprema dana.", "/recepti"],
  ["ARHIVA", "Stara znanja", "Porodične navike, Balkan iskustvo i kulturni trag reda bez terapijskih tvrdnji.", "/stara-znanja"],
  ["TEHNIKA", "Voda, tehnologija i AI", "UMH, Welan, filteri, aparati i AI kao odgovorne edukativne teme.", "/vodici/voda-tehnologija-i-ai"],
  ["ISKUSTVO", "Knjiga utisaka", "Moderirani zapisi o svakodnevici, bez tvrdnji o zdravstvenom ishodu.", "/recenzije"],
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
          <div className="eyebrow">DaniniLans · voda · dnevni ritam · kuhinja · odgovorna AI metoda</div>
          <h1>Zdrav stil života počinje kada dan postane čitljiv.</h1>
          <p className="lead">DaniniLans spaja vodu, dnevni ritam, kuhinju, porodična znanja, odgovornu tehnologiju i metodu „Pitaj AI — AI pita tebe“. Bez medicinskih obećanja, bez guru pravila i bez sadržaja napravljenog samo da popuni stranicu.</p>
          <div className="ctaRow">
            <Link className="btn primary" href="/voda-i-ritam">Počni od vode i ritma</Link>
            <Link className="btn secondary" href="/metoda">Razumi metodu</Link>
          </div>
        </div>
        <aside className="heroPanel">
          <img className="heroImage" src="/images/daninilans-hero-water-rhythm-ai.webp" alt="DaniniLans radni sto sa vodom, kuhinjskim elementima, beležnicom i odgovornom AI metodom" />
          <div className="heroPanelText">
            <span className="smallCaps">DaniniLans princip</span>
            <h2>Prvo život. Zatim alat.</h2>
            <p>Voda, kuhinja, beleška i AI nisu dekoracija. Svaki element mora da pomogne čoveku da vidi šta u njegovom danu već radi, šta se raspada i šta zaista može da promeni.</p>
          </div>
        </aside>
      </section>

      <section className="section container featureBand softBand">
        <div>
          <div className="eyebrow">Urednički kriterijum</div>
          <h2>Na sajtu ostaje samo sadržaj koji ima jasnu ulogu.</h2>
        </div>
        <p>Svaka stranica mora da odgovori na konkretno pitanje, navede granice tvrdnji, pokaže sledeći korak i pripada jednom DaniniLans sadržajnom klasteru. Prazne kategorije, demo kartice i neaktivni pozivi na akciju ne objavljuju se.</p>
      </section>

      <section className="section container pillarSection">
        <div className="sectionHead"><div className="eyebrow">DaniniLans okvir</div><h2>Pet sadržajnih stubova sa različitim zadacima.</h2></div>
        <div className="pillarList">{pillars.map(([code,title,text,href])=><Link className="pillarItem" key={title} href={href}><span className="pillarIcon">{code}</span><span><strong>{title}</strong><p>{text}</p></span></Link>)}</div>
      </section>

      <section className="section container spaciousSection">
        <div className="sectionHead"><div className="eyebrow">Glavni ulazi</div><h2>Četiri puta kroz sadržaj, bez ponavljanja istih kartica pod drugim nazivom.</h2></div>
        <div className="grid four iconGrid">{priorities.map(([code,title,text,href])=><Link className="card iconCard" key={title} href={href}><span className="iconBubble">{code}</span><h3>{title}</h3><p>{text}</p><span className="smallCaps">Otvori sadržaj</span></Link>)}</div>
      </section>

      <section className="section container splitBand methodBand">
        <div>
          <div className="eyebrow">DaniniHub metoda u DaniniLans-u</div>
          <h2>Pitaj AI — AI pita tebe.</h2>
          <p>AI ne odlučuje umesto čoveka. Pomaže da se odvoje činjenica, iskustvo, pretpostavka i sledeći realan korak. Kada tema pređe u zdravlje, dijagnozu ili terapiju, internet tekst prestaje da bude dovoljan.</p>
          <div className="ctaRow"><Link className="btn primary" href="/metoda">Otvori metod</Link><Link className="btn secondary" href="/ai-disclosure">Kako koristimo AI</Link></div>
        </div>
        <div className="methodSteps"><div><strong>Pitaj</strong><p>Šta u stvarnom danu traži red?</p></div><div><strong>Proveri</strong><p>Šta je iskustvo, šta činjenica, a šta zahteva stručno lice?</p></div><div><strong>Odluči</strong><p>Koji mali korak ostaje tvoj i može da se ponovi?</p></div></div>
      </section>

      <section className="section container"><div className="card disclaimer"><span className="smallCaps">Kontrolisana saradnja</span><h2>Partnerstva počinju proverljivim podacima, ne promotivnim obećanjem.</h2><p>Razmatraju se samo proizvodi i saradnje povezani sa vodom, kuhinjom, zdravim stilom života i odgovornom tehnologijom, sa jasnim podacima o firmi i bez medicinskih tvrdnji.</p><Link className="btn secondary" href="/kontakt">Pošalji konkretan partnerski upit</Link></div></section>

      <section className="section container spaciousSection">
        <div className="sectionHead"><div className="eyebrow">Sadržajna arhiva</div><h2>Svaki pravac ima svoju temu, granicu i publiku.</h2></div>
        <div className="grid four iconGrid">{contentTracks.map(([code,title,text,href])=><Link className="card iconCard" key={title} href={href}><span className="iconBubble">{code}</span><h3>{title}</h3><p>{text}</p><span className="smallCaps">Otvori arhivu</span></Link>)}</div>
      </section>

      <section className="section container">
        <div className="sectionHead"><div className="eyebrow">Standard sadržaja</div><h2>Vidljivo, mirno i provereno.</h2></div>
        <div className="grid three rhythmGrid">{rhythm.map(([num,title,text])=><article className="card rhythmCard" key={num}><span className="stepNumber">{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section container"><div className="card disclaimer"><h2>Nemedicinski okvir</h2><p>DaniniLans govori o vodi, ritmu, navikama, kuhinji, tehnologiji i AI kao delovima organizacije svakodnevice. Ne predstavlja ih kao terapiju, dijagnozu ili garanciju zdravstvenog rezultata.</p><Link className="btn secondary" href="/disclaimer">Pročitaj granice sadržaja</Link></div></section>
    </div>
  );
}
