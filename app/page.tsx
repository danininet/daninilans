import Link from "next/link";

const paths = [
  ["Voda", "Ne kao čudo i ne kao obećanje, nego kao najjednostavnija tačka reda u danu."],
  ["Kuhinja", "Mesto gde se ritam vidi: čaša, čaj, obrok, filter, aparat, beleška i priprema za sutra."],
  ["Prostor", "Svetlo, mir, raspored, terasa, zelenilo i osećaj doma utiču na to kako dan stvarno teče."],
  ["AI", "Alat za pitanja, beleške i odluke. Nikada autoritet, nikada zamena za stručnu proveru."],
];

export default function HomePage() {
  return (
    <div>
      <section className="hero container">
        <div className="grid two">
          <div>
            <div className="eyebrow">DaniniLans · voda · prostor · tehnologija · odluka</div>
            <h1>Dan počinje mnogo pre nego što postane haos.</h1>
            <p className="lead">DaniniLans ne prodaje savršenu rutinu. On gradi mirniji način gledanja na svakodnevicu: gde je voda, kako radi kuhinja, kakav je prostor, šta tehnologija olakšava i koje pitanje treba postaviti pre sledeće odluke.</p>
            <div className="ctaRow">
              <Link className="btn primary" href="/vodici">Istraži vodiče</Link>
              <Link className="btn secondary" href="/metoda">Kako metoda radi</Link>
            </div>
          </div>
          <aside className="card visualCard">
            <div className="waterCircle">DL</div>
            <h3>Voda je polazna tačka, ne zaključak.</h3>
            <p>Čaša na stolu, beležnica pored nje, kuhinja u kojoj se dan priprema i AI koji pomaže da pitanje bude jasnije. To je DaniniLans: svakodnevica posmatrana kao sistem.</p>
          </aside>
        </div>
      </section>

      <section className="section container">
        <div className="sectionHead"><div className="eyebrow">Četiri sloja svakodnevice</div><h2>Ne pravimo wellness dekoraciju, nego mapu malih odluka.</h2></div>
        <div className="grid four">{paths.map(([title,text])=><article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section container splitBand">
        <div><div className="eyebrow">Veza sistema</div><h2>DaniniLans je praktična strana DaniniHub metode.</h2><p>DaniniHub postavlja okvir: pitaj, proveri granice, odluči. DaniniLans taj okvir spušta u kuhinju, stan, radni sto, putovanje, recepte, filtere, pametne uređaje i AI beleške. DaniniNet ostaje poslovni i affiliate sloj, a Calije pokazuje kako prostor i okruženje mogu postati deo ozbiljnije priče o kvalitetu svakodnevice.</p><div className="ctaRow"><Link className="btn secondary" href="/vodici/voda-tehnologija-i-ai">Voda, tehnologija i AI</Link><Link className="btn secondary" href="/vodici/stanovanje-i-kvalitet-svakodnevice">Stanovanje i ritam</Link></div></div>
        <div className="languageBox"><span>SR</span><span>DE</span><span>EN</span></div>
      </section>

      <section className="section container"><div className="card disclaimer"><h3>Granica koja čuva poverenje</h3><p>DaniniLans govori o vodi, UMH, Welan kontekstu, filterima, kuhinjskim aparatima, prostoru, tehnologiji i AI kao o delovima organizacije svakodnevice. Ne predstavlja ih kao terapiju, dijagnozu ili garanciju zdravstvenog rezultata.</p><Link className="btn secondary" href="/disclaimer">Pročitaj granice sadržaja</Link></div></section>
    </div>
  );
}
