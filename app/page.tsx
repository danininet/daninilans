import Link from "next/link";

const rhythm = [
  ["01", "Jutro", "Čaša vode, kratka beleška i kuhinja koja ne traži dodatnu odluku čim se dan otvori."],
  ["02", "Rad", "Voda na vidljivom mestu, pauza koja nije izgovor i AI beleška koja sređuje sledeći korak."],
  ["03", "Dom", "Svetlo, prostor, sto, filter, aparat i mirniji prelaz iz obaveza u veče."],
];

const library = [
  ["Voda, tehnologija i AI", "UMH, Welan, filteri, pametni uređaji i AI kao tema svakodnevne organizacije, bez medicinskih obećanja.", "/vodici/voda-tehnologija-i-ai"],
  ["Stanovanje i kvalitet dana", "Kuhinja, svetlo, mir, terasa, radni sto i okruženje kao deo realnog ritma života.", "/vodici/stanovanje-i-kvalitet-svakodnevice"],
  ["Stara znanja", "Porodične beleške, navike i običaji kao kulturni trag reda, ne kao dokaz lečenja.", "/stara-znanja"],
  ["Recepti", "Voda, čajevi, sezonski bokali i kuhinjski reset kao praktične ideje, ne kao terapija.", "/recepti"],
];

export default function HomePage() {
  return (
    <div>
      <section className="hero container premiumHero">
        <div className="heroCopy">
          <div className="eyebrow">DaniniLans · voda · ritam · prostor · AI</div>
          <h1>Voda je početak. Ritam je način. Odluka ostaje tvoja.</h1>
          <p className="lead">DaniniLans je edukativni prostor za svakodnevicu u kojoj se voda, kuhinja, stanovanje, tehnologija i AI posmatraju zajedno. Bez medicinskih obećanja. Bez pritiska. Bez šablona. Samo jasnije pitanje, proveren okvir i mali korak koji ima smisla.</p>
          <div className="ctaRow">
            <Link className="btn primary" href="/vodici">Otvori biblioteku vodiča</Link>
            <Link className="btn secondary" href="/metoda">Kako metoda radi</Link>
          </div>
        </div>
        <aside className="heroPanel">
          <img className="heroImage" src="/images/daninilans-hero-water-rhythm-ai.webp" alt="DaniniLans voda, kuhinja, beležnica, prostor i odgovorna AI organizacija" />
          <div className="heroPanelText">
            <span className="smallCaps">DaniniLans pristup</span>
            <h3>Prvo vidi dan. Onda biraj alat.</h3>
            <p>Čaša vode, beležnica, kuhinja i AI u pozadini nisu dekoracija. To su tačke iz kojih se gradi mirniji odnos prema danu.</p>
          </div>
        </aside>
      </section>

      <section className="section container featureBand">
        <div>
          <div className="eyebrow">Osovina sajta</div>
          <h2>Ne gradimo wellness predstavu, nego mapu svakodnevnih odluka.</h2>
        </div>
        <p>DaniniLans povezuje vodu, prostor, kuhinju, stare navike, pametne uređaje i AI tako da korisnik razume granice: šta je organizacija dana, šta je lično iskustvo, a šta zahteva stručno mišljenje.</p>
      </section>

      <section className="section container">
        <div className="sectionHead"><div className="eyebrow">Dnevni ritam</div><h2>Tri mesta na kojima se vidi da li sistem radi.</h2></div>
        <div className="grid three">{rhythm.map(([num,title,text])=><article className="card numberCard" key={title}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section container splitBand">
        <div>
          <div className="eyebrow">DaniniHub metoda u svakodnevici</div>
          <h2>Pitaj. Proveri granice. Odluči.</h2>
          <p>AI ovde nije ukras i nije autoritet. On pomaže da se pitanje izoštri, beleška skrati i sledeći korak učini vidljivim. Granica je obavezna: kada tema dodiruje zdravlje, terapiju, pravo ili novac, odluka se ne prepušta algoritmu.</p>
          <div className="ctaRow"><Link className="btn secondary" href="/vodici/ai-u-svakodnevici">AI u svakodnevici</Link><Link className="btn secondary" href="/ai-disclosure">AI Disclosure</Link></div>
        </div>
        <div className="methodSteps"><div><strong>Pitaj</strong><p>Šta mi danas stvarno treba?</p></div><div><strong>Proveri</strong><p>Gde su granice i rizik?</p></div><div><strong>Odluči</strong><p>Koji mali korak ima smisla?</p></div></div>
      </section>

      <section className="section container">
        <div className="sectionHead"><div className="eyebrow">Biblioteka</div><h2>Vodiči koji grade indeksiranje i smisao sajta.</h2></div>
        <div className="grid four">{library.map(([title,text,href])=><Link className="card" key={title} href={href}><h3>{title}</h3><p>{text}</p><span className="smallCaps">Otvori</span></Link>)}</div>
      </section>

      <section className="section container"><div className="card disclaimer"><h3>Granica koja čuva poverenje</h3><p>DaniniLans govori o vodi, UMH, Welan kontekstu, filterima, kuhinjskim aparatima, prostoru, tehnologiji i AI kao o delovima organizacije svakodnevice. Ne predstavlja ih kao terapiju, dijagnozu ili garanciju zdravstvenog rezultata.</p><Link className="btn secondary" href="/disclaimer">Pročitaj granice sadržaja</Link></div></section>
    </div>
  );
}
