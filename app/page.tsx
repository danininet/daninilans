import Link from "next/link";

const dayFlow = [
  ["Jutro", "Voda na vidljivom mestu, kratka beleška i početak bez pritiska da dan odmah bude savršen."],
  ["Radni ritam", "Pauza, čaša vode i jedno pitanje koje sređuje sledeći korak umesto da se gomila deset zadataka."],
  ["Veče", "Kuhinja, priprema za sutra i miran prelaz iz obaveza u odmor, bez velikih obećanja i bez dramatičnih pravila."],
];

const guideLinks = [
  ["Voda i ritam", "Osnovni princip DaniniLans-a: voda kao orijentir dana, ne kao medicinsko obećanje.", "/voda-i-ritam"],
  ["Rutine", "Neutralne dnevne rutine za jutro, rad, pauzu i veče — bez ekstremnih režima.", "/rutine"],
  ["AI u svakodnevici", "Kako metoda Pitaj AI — AI pita tebe pomaže da pitanje bude jasnije, a odluka odgovornija.", "/vodici/ai-u-svakodnevici"],
  ["Disclaimer", "Granice sadržaja: edukativno, nemedicinski i bez obećanja zdravstvenih rezultata.", "/disclaimer"],
];

const contentTracks = [
  ["Osnovni vodiči", "voda, ritam, neutralne rutine i granice sadržaja", "/vodici"],
  ["Recepti i kuhinja", "čajevi, bokali, priprema i kuhinjski reset bez terapijskih tvrdnji", "/recepti"],
  ["Stara znanja", "porodične navike i kulturno iskustvo kao trag reda, ne dokaz lečenja", "/stara-znanja"],
  ["Knjiga utisaka", "moderirani zapisi o svakodnevici, bez tvrdnji o zdravstvenom ishodu", "/recenzije"],
];

export default function HomePage() {
  return (
    <div>
      <section className="hero container premiumHero">
        <div className="heroCopy">
          <div className="eyebrow">DaniniLans · rutina · balans · voda · navike</div>
          <h1>Rutina ne mora da bude stroga da bi imala smisla.</h1>
          <p className="lead">DaniniLans je edukativni prostor za zdraviji stil života kroz vodu, dnevni ritam, neutralne navike i odgovornu upotrebu AI. Ne obećava lečenje, rezultate ili savršen život. Pomaže da se dan pogleda mirnije: šta je stvarno potrebno, gde su granice i koji mali korak danas ima smisla.</p>
          <div className="ctaRow">
            <Link className="btn primary" href="/voda-i-ritam">Počni od vode i ritma</Link>
            <Link className="btn secondary" href="/rutine">Pogledaj rutine</Link>
          </div>
        </div>
        <aside className="heroPanel">
          <img className="heroImage" src="/images/daninilans-hero-water-rhythm-ai.webp" alt="DaniniLans rutina, voda, kuhinja, beležnica i odgovorna AI organizacija" />
          <div className="heroPanelText">
            <span className="smallCaps">DaniniLans pristup</span>
            <h3>Prvo ritam. Zatim alat.</h3>
            <p>Voda, beležnica, kuhinja i AI nisu predstava. Oni su pomoćni elementi da dan postane čitljiviji, a odluka odgovornija.</p>
          </div>
        </aside>
      </section>

      <section className="section container featureBand">
        <div>
          <div className="eyebrow">Osovina sajta</div>
          <h2>Balans se ne gradi sloganom, nego malim ponovljivim tačkama.</h2>
        </div>
        <p>DaniniLans ne glumi medicinski autoritet i ne prodaje čudesnu rutinu. Voda, pauza, prostor, kuhinja i AI beleška ovde služe kao okvir za jasnije pitanje: šta mogu da uredim danas, bez pritiska i bez preterivanja?</p>
      </section>

      <section className="section container">
        <div className="sectionHead"><div className="eyebrow">Dnevni ritam</div><h2>Tri mesta na kojima se vidi da li navika ima smisla.</h2></div>
        <div className="grid three">{dayFlow.map(([title,text])=><article className="card numberCard" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section container splitBand">
        <div>
          <div className="eyebrow">Uloga metode i AI</div>
          <h2>Pitaj AI — AI pita tebe.</h2>
          <p>DaniniHub metoda u DaniniLans-u ne služi da AI odlučuje umesto čoveka. Služi da pitanje bude bolje postavljeno: šta želiš da promeniš, šta ne sme da se tvrdi, šta treba proveriti i koji korak je dovoljno mali da ostane realan.</p>
          <div className="ctaRow"><Link className="btn secondary" href="/metoda">Kako metoda radi</Link><Link className="btn secondary" href="/ai-disclosure">AI Disclosure</Link></div>
        </div>
        <div className="methodSteps"><div><strong>Pitaj</strong><p>Šta danas traži red?</p></div><div><strong>Proveri</strong><p>Gde prestaje edukacija, a počinje stručni savet?</p></div><div><strong>Odluči</strong><p>Koji mali korak ostaje tvoj?</p></div></div>
      </section>

      <section className="section container">
        <div className="sectionHead"><div className="eyebrow">Sadržajni pravci</div><h2>Članci, recepti i utisci nisu ukras. Oni grade arhivu svakodnevice.</h2></div>
        <div className="grid four">{contentTracks.map(([title,text,href])=><Link className="card" key={title} href={href}><h3>{title}</h3><p>{text}</p><span className="smallCaps">Otvori pravac</span></Link>)}</div>
      </section>

      <section className="section container">
        <div className="sectionHead"><div className="eyebrow">Biblioteka</div><h2>Relevantni ulazi za vodu, rutine, AI i granice sadržaja.</h2></div>
        <div className="grid four">{guideLinks.map(([title,text,href])=><Link className="card" key={title} href={href}><h3>{title}</h3><p>{text}</p><span className="smallCaps">Otvori</span></Link>)}</div>
      </section>

      <section className="section container"><div className="card disclaimer"><h3>Nemedicinski okvir</h3><p>DaniniLans govori o vodi, ritmu, navikama, kuhinji, tehnologiji i AI kao o delovima organizacije svakodnevice. Ne predstavlja ih kao terapiju, dijagnozu ili garanciju zdravstvenog rezultata.</p><Link className="btn secondary" href="/disclaimer">Pročitaj disclaimer</Link></div></section>
    </div>
  );
}
