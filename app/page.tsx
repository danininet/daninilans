import Link from "next/link";

const entries = [
  ["Voda i ritam", "Jutro, rad, pauza, obrok i vece kao prirodan raspored dana, bez ekstremnih pravila."],
  ["Kuhinja i recepti", "Jednostavne ideje za vodu, caj, sezonske napitke i obroke koji podrzavaju red u svakodnevici."],
  ["Stanovanje i okruzenje", "Svetlo, mir, kuhinja, terasa, zelenilo i kvalitet prostora kao deo ritma zivota."],
  ["Stara znanja", "Porodicne beleške i obicaji cuvaju se kao kulturno iskustvo, ne kao medicinska tvrdnja."],
];

export default function HomePage() {
  return (
    <div>
      <section className="hero container">
        <div className="grid two">
          <div>
            <div className="eyebrow">DaniniLans · zdrav stil zivota bez medicinskih obecanja</div>
            <h1>Svakodnevica kao sistem: voda, prostor, kuhinja, ritam i odluka.</h1>
            <p className="lead">DaniniLans povezuje vodu, rutine, recepte, stara znanja, kvalitet stanovanja i odgovornu upotrebu AI u svakodnevici. Nastaje iz DaniniHub metode: prvo pitanje, zatim granice, pa tek onda odluka.</p>
            <div className="ctaRow">
              <Link className="btn primary" href="/metoda">Pogledaj metodu</Link>
              <Link className="btn secondary" href="/voda-i-ritam">Voda i ritam</Link>
            </div>
          </div>
          <aside className="card visualCard">
            <div className="waterCircle">DL</div>
            <h3>Krovno ime: DaniniLans</h3>
            <p>Opis ispod imena mora da ostane jasan: voda, ritam, rutine, kuhinja, okruzenje i stara znanja. Ne klinika. Ne guru obecanje. Ne kopija drugog sajta.</p>
          </aside>
        </div>
      </section>

      <section className="section container">
        <div className="sectionHead"><div className="eyebrow">Tematski klasteri</div><h2>Link juice se gradi kroz povezane teme, ne kroz nasumicne stranice.</h2></div>
        <div className="grid four">{entries.map(([title,text])=><article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section container splitBand">
        <div><div className="eyebrow">Ekosistem</div><h2>DaniniLans ostaje poseban, ali nije izolovan.</h2><p>DaniniHub daje metod i disciplinu odluke. DaniniNet nosi poslovni i affiliate sloj. Calije pokazuje kako prostor, okruzenje i kvalitet stanovanja mogu biti deo sire price o svakodnevici. DaniniLans sve to prevodi u prirodan, edukativan i nemedicinski stil zivota.</p><div className="ctaRow"><a className="btn secondary" href="https://danininet.com">DaniniNet</a><a className="btn secondary" href="https://calije.daninihub.com/sr">Calije</a><Link className="btn secondary" href="/affiliate-disclosure">Affiliate transparentnost</Link></div></div>
        <div className="languageBox"><span>SR</span><span>DE</span><span>EN</span></div>
      </section>

      <section className="section container"><div className="card disclaimer"><h3>Granica koja cuva poverenje</h3><p>Filteri, Welan, UMH tehnologija, kuhinjski aparati, prostor i rutine mogu biti deo price o kvalitetu svakodnevice, ali se ne predstavljaju kao terapija ili dokaz zdravstvenog ishoda.</p><Link className="btn secondary" href="/disclaimer">Procitaj disclaimer</Link></div></section>
    </div>
  );
}
