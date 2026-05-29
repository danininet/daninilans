import Link from "next/link";

const pillars = [
  ["Voda i ritam", "Dnevni odnos prema vodi bez preterivanja, bez straha i bez medicinskih obecanja."],
  ["Rutine", "Jutro, radni blok, pauza, obrok, vece i vikend kao jednostavni ritmovi koji se mogu pratiti."],
  ["Recepti", "Prakticni sezonski predlozi za sto, termos, flasu, pauzu i porodicni ritam."],
  ["Stara znanja", "Narodna iskustva, domacinski red i price koje se mogu citati kriticki i odgovorno."],
];

export default function HomePage() {
  return (
    <div>
      <section className="hero container">
        <div className="eyebrow">DaniniLans · sr / de / en</div>
        <div className="grid two">
          <div>
            <h1>Voda, ritam i navike koje ne glume medicinu.</h1>
            <p className="lead">
              DaniniLans je miran digitalni prostor za vodu, dnevni ritam, rutine, recepte, stara znanja i knjigu utisaka. Nije klinika, nije guru program i nije obecanje brzog rezultata.
            </p>
            <div className="badges">
              <span className="badge">Nemedicinski pristup</span>
              <span className="badge">Dnevne rutine</span>
              <span className="badge">Recepti i navike</span>
              <span className="badge">Stara znanja</span>
            </div>
            <div className="ctaRow">
              <Link className="btn primary" href="/rutine">Pogledaj rutine</Link>
              <Link className="btn secondary" href="/voda-i-ritam">Voda i ritam</Link>
            </div>
          </div>
          <div className="card visualCard" aria-label="DaniniLans vizuelni motiv">
            <div className="waterCircle">DL</div>
            <h3>Ritam dana se ne kupuje. On se slaze.</h3>
            <p>
              Casa vode na stolu, kratka pauza, jednostavan obrok, zapis utiska i granica prema ekranu. To je polaziste DaniniLans-a.
            </p>
            <ul className="list">
              <li>bez dijagnoza i terapija</li>
              <li>bez ekstremnih pravila</li>
              <li>bez kopiranja tudjeg zivota</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="sectionHead">
          <div className="eyebrow">Krovna struktura</div>
          <h2>Jedan sajt, cetiri mirna ulaza.</h2>
          <p className="lead">Sadrzaj je podeljen tako da korisnik odmah zna gde ide: voda, rutina, recept ili iskustvo.</p>
        </div>
        <div className="grid four">
          {pillars.map(([title, text]) => (
            <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section container splitBand">
        <div>
          <div className="eyebrow">Jezici</div>
          <h2>Prvo srpski, zatim nemacki i engleski sloj.</h2>
          <p>
            Struktura sajta je spremna za SR / DE / EN. Prvo se stabilizuje srpska verzija, zatim se prevode kljucne stranice bez menjanja identiteta i bez automatskog medicinskog tona.
          </p>
        </div>
        <div className="languageBox">
          <span>SR</span><span>DE</span><span>EN</span>
        </div>
      </section>

      <section className="section container">
        <div className="card disclaimer">
          <h3>Jasna granica</h3>
          <p>
            DaniniLans je edukativan i informativan. Sadrzaj nije medicinski savet, dijagnoza, terapija ili zamena za strucno lice. Kod zdravstvenih tegoba, terapije, trudnoce, hronicnih bolesti ili sumnje, odluka ide uz kvalifikovanog strucnjaka.
          </p>
          <Link className="btn secondary" href="/disclaimer">Procitaj kompletan disclaimer</Link>
        </div>
      </section>
    </div>
  );
}
