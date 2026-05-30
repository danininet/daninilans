import Link from "next/link";

export const metadata = {
  title: "Voda, tehnologija i AI | DaniniLans",
  description: "DaniniLans vodič o vodi, UMH, Welan kontekstu, filterima, kuhinji, pametnim uređajima i AI metodi u zdravom stilu života, bez medicinskih tvrdnji.",
};

const themes = [
  ["Voda kao nit zdravog stila života", "Voda se ne predstavlja kao lek ili čudo, nego kao svakodnevna tačka reda: jutro, kuhinja, radni sto, pauza, obrok i veče."],
  ["UMH, Welan i filteri", "Ove teme se obrađuju edukativno: kao oprema, iskustvo, kvalitet korišćenja i kućni kontekst. Bez tvrdnji da leče, sprečavaju bolest ili garantuju rezultat."],
  ["Pametna kuhinja", "Bokal, filter, čajnik, aparat, podsetnik i beleška mogu pomoći da se navika vidi i ponovi. Tehnologija služi ritmu, ne dominira čovekom."],
  ["AI kao metod pitanja", "AI pomaže da korisnik uporedi potrebe, postavi granice, napravi belešku i prepozna šta treba stručno proveriti."],
];

const checks = [
  ["Pitaj", "Zašto mi je ova tehnologija potrebna u danu: ukus, praktičnost, organizacija, praćenje ili radoznalost?"],
  ["Proveri", "Da li tvrdnja ulazi u zdravlje, terapiju, bolest ili rezultat koji mora imati stručnu potvrdu?"],
  ["Odluči", "Da li je ovo realna pomoć za rutinu ili samo još jedan uređaj koji komplikuje dan?"],
];

export default function Page() {
  return (
    <article className="container section legalText">
      <div className="eyebrow">DaniniLans vodič</div>
      <h1>Voda, tehnologija i AI u zdravom stilu života</h1>
      <p className="lead">DaniniLans posmatra vodu kao centralnu nit svakodnevnog ritma: u kuhinji, radu, odmoru, prostoru, tehnologiji i digitalnim navikama. Tehnologija može pomoći da se navika lakše vidi i ponovi, ali ne sme postati medicinsko obećanje.</p>

      <section className="section featureBand">
        <div><div className="eyebrow">Pravilo poverenja</div><h2>Uređaj može pomoći organizaciji. Ne sme zameniti istinu.</h2></div>
        <p>Filteri, UMH, Welan kontekst, pametni uređaji i AI ulaze u DaniniLans samo ako su predstavljeni odgovorno: šta mogu praktično da olakšaju, šta ne znamo i gde počinje potreba za stručnom proverom.</p>
      </section>

      <section className="grid four">{themes.map(([title,text])=><article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</section>

      <section className="section splitBand">
        <div>
          <div className="eyebrow">Pitaj AI — AI pita tebe</div>
          <h2>Pre kupovine, tvrdnje ili preporuke: prvo pitanje.</h2>
          <p>DaniniLans ne pravi listu čudesnih proizvoda. Metoda prvo traži nameru, granicu i kontekst. Tek onda se može pisati vodič, recenzija ili affiliate napomena.</p>
          <div className="ctaRow"><Link className="btn secondary" href="/voda-i-ritam">Voda i ritam</Link><Link className="btn secondary" href="/affiliate-disclosure">Affiliate transparentnost</Link></div>
        </div>
        <div className="methodSteps">{checks.map(([title,text])=><div key={title}><strong>{title}</strong><p>{text}</p></div>)}</div>
      </section>

      <section className="card">
        <h3>Prirodno linkovanje</h3>
        <p>Za praksu pogledaj <Link href="/voda-i-ritam">Voda i ritam</Link>, <Link href="/recepti">Recepti</Link>, <Link href="/vodici/kuhinja-kao-centar-rutine">Kuhinja kao centar rutine</Link>, <Link href="/vodici/ai-u-svakodnevici">AI u svakodnevici</Link> i <Link href="/affiliate-disclosure">affiliate transparentnost</Link>.</p>
      </section>

      <section className="card disclaimer">
        <h3>Granica poverenja</h3>
        <p>Tehnologija može poboljšati organizaciju i korisničko iskustvo, ali DaniniLans ne tvrdi da uređaji, filteri, UMH, Welan ili AI leče, sprečavaju bolest ili garantuju zdravstveni rezultat.</p>
      </section>
    </article>
  );
}
