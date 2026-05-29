import Link from "next/link";

const pillars = [
  ["Voda", "Čaša vode nije dokaz discipline. Ona je miran početak: nešto vidljivo, jednostavno i dovoljno malo da može da se ponovi."],
  ["Kuhinja", "Kuhinja je mesto gde se dan priprema: voda, čaj, obrok, filter, aparat, beležnica i red na radnoj površini."],
  ["Prostor", "Svetlo, mir, raspored, terasa, zelenilo i osećaj doma utiču na to kako čovek stvarno ulazi u dan i izlazi iz njega."],
  ["AI", "AI pomaže da pitanje bude jasnije, beleška kraća i sledeći korak vidljiviji. Ne zamenjuje stručan savet."],
];

export default function HomePage() {
  return (
    <div>
      <section className="hero container">
        <div className="grid two">
          <div>
            <div className="eyebrow">DaniniLans · voda · ritam · prostor · AI</div>
            <h1>Mirniji dan počinje od jedne jasne tačke.</h1>
            <p className="lead">DaniniLans je edukativni prostor za vodu, rutinu, kuhinju, stanovanje, tehnologiju i odgovornu upotrebu AI. Ne obećava rezultate. Ne glumi medicinu. Pomaže da se svakodnevica posmatra trezvenije: šta je važno, šta je granica i koji mali korak ima smisla danas.</p>
            <div className="ctaRow">
              <Link className="btn primary" href="/vodici">Otvori vodiče</Link>
              <Link className="btn secondary" href="/metoda">DaniniHub metoda</Link>
            </div>
          </div>
          <aside className="card visualCard">
            <img className="heroImage" src="/images/daninilans-hero-water-rhythm-ai.webp" alt="DaniniLans voda, kuhinja, beležnica, prostor i odgovorna AI organizacija" />
            <h3>Voda kao početak reda.</h3>
            <p>Staklena čaša, beležnica, kuhinja i tiha tehnologija u pozadini. To nije dekoracija, nego slika DaniniLans pristupa: dan se ne osvaja velikim obećanjima, nego jasnijim pitanjima.</p>
          </aside>
        </div>
      </section>

      <section className="section container">
        <div className="sectionHead"><div className="eyebrow">Osnovni slojevi</div><h2>DaniniLans povezuje ono što se u stvarnom životu nikada ne odvaja.</h2></div>
        <div className="grid four">{pillars.map(([title,text])=><article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section container splitBand">
        <div>
          <div className="eyebrow">Metoda</div>
          <h2>Pitaj. Proveri granice. Odluči.</h2>
          <p>DaniniLans koristi DaniniHub način rada, ali ga spušta u svakodnevicu: jutro, radni sto, pauza, kuhinja, voda, uređaji, AI beleške i prostor u kome se živi. Cilj nije savršena rutina, nego jasniji odnos prema danu.</p>
          <div className="ctaRow"><Link className="btn secondary" href="/vodici/voda-tehnologija-i-ai">Voda, tehnologija i AI</Link><Link className="btn secondary" href="/vodici/stanovanje-i-kvalitet-svakodnevice">Stanovanje i ritam</Link></div>
        </div>
        <div className="languageBox"><span>SR</span><span>DE</span><span>EN</span></div>
      </section>

      <section className="section container"><div className="card disclaimer"><h3>Granica koja čuva poverenje</h3><p>DaniniLans govori o vodi, UMH, Welan kontekstu, filterima, kuhinjskim aparatima, prostoru, tehnologiji i AI kao o delovima organizacije svakodnevice. Ne predstavlja ih kao terapiju, dijagnozu ili garanciju zdravstvenog rezultata.</p><Link className="btn secondary" href="/disclaimer">Pročitaj granice sadržaja</Link></div></section>
    </div>
  );
}
