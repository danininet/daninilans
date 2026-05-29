import Link from "next/link";

const entries = [
  ["Voda i ritam", "Praktičan vodič kroz dan: jutro, posao, pauze, obrok i večernje smirivanje."],
  ["Rutine", "Kratki rituali za početak dana, radni blok, pauzu od ekrana i završetak večeri."],
  ["Recepti", "Jednostavni predlozi za vodu, čajeve, lagane obroke i sezonske navike."],
  ["Stara znanja", "Porodična iskustva, narodne beleške i običaji prikazani odgovorno, bez medicinskih tvrdnji."],
];

export default function HomePage() {
  return (
    <div>
      <section className="hero container">
        <div className="grid two">
          <div>
            <div className="eyebrow">DaniniLans · voda · ritam · navike</div>
            <h1>Mirniji dnevni ritam počinje od jednostavnih stvari.</h1>
            <p className="lead">
              DaniniLans je prostor za praktične rutine, vodu u svakodnevnom ritmu, recepte, stare beleške i utiske ljudi koji žele više reda u danu bez velikih obećanja i bez medicinskih tvrdnji.
            </p>
            <div className="ctaRow">
              <Link className="btn primary" href="/voda-i-ritam">Počni od vode i ritma</Link>
              <Link className="btn secondary" href="/rutine">Pogledaj rutine</Link>
            </div>
          </div>
          <aside className="card visualCard">
            <div className="waterCircle">DL</div>
            <h3>Dan se ne menja velikom pričom, nego redom koji može da se ponovi.</h3>
            <p>
              Čaša vode, kratak predah, jednostavan obrok, beleška u knjizi utisaka i večernji završetak dana — to je osnova DaniniLans pristupa.
            </p>
          </aside>
        </div>
      </section>

      <section className="section container">
        <div className="sectionHead">
          <div className="eyebrow">Šta se ovde nalazi</div>
          <h2>Četiri ulaza u isti cilj: više reda u svakodnevici.</h2>
        </div>
        <div className="grid four">
          {entries.map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container splitBand">
        <div>
          <div className="eyebrow">SR / DE / EN</div>
          <h2>Srpska osnova, zatim nemački i engleski sloj.</h2>
          <p>
            Prvo se gradi stabilna srpska verzija sa jasnim identitetom. Nakon toga slede nemačka i engleska verzija ključnih stranica, uz isti odgovoran ton i iste granice.
          </p>
        </div>
        <div className="languageBox"><span>SR</span><span>DE</span><span>EN</span></div>
      </section>

      <section className="section container">
        <div className="card disclaimer">
          <h3>Važna granica</h3>
          <p>
            DaniniLans je edukativni projekat. Sadržaj nije medicinski savet, dijagnoza, terapija ili zamena za stručno lice. Rutine i recepti su opšti primeri za organizaciju dana.
          </p>
          <Link className="btn secondary" href="/disclaimer">Pročitaj disclaimer</Link>
        </div>
      </section>
    </div>
  );
}
