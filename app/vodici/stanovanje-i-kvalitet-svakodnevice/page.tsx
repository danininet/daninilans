import Link from "next/link";

export const metadata = {
  title: "Stanovanje i kvalitet svakodnevice | DaniniLans",
  description: "DaniniLans vodič o prostoru, svetlu, kuhinji, vodi, okruženju i dnevnom ritmu kao delu zdravog stila života, bez investicionih i zdravstvenih obećanja.",
};

const layers = [
  ["Voda u prostoru", "Gde stoji čaša, boca, filter ili bokal? Ako voda nije vidljiva, navika se lakše izgubi."],
  ["Kuhinja", "Kuhinja je mesto gde se ritam konkretno vidi: čaj, obrok, priprema, radna površina i red za sutra."],
  ["Svetlo i mir", "Prirodno svetlo, tišina, raspored i mesto za pauzu utiču na doživljaj dana, bez pretvaranja prostora u terapiju."],
  ["Radni ugao", "Zdrav stil života danas uključuje i digitalni rad: sto, ekran, pauza, voda i jasna granica između rada i odmora."],
];

export default function Page() {
  return (
    <article className="container section legalText">
      <div className="eyebrow">Vodič · Prostor</div>
      <h1>Stanovanje i kvalitet svakodnevice</h1>
      <p className="lead">Stan ili kuća nisu samo kvadrati. Prostor utiče na dnevni ritam kroz svetlo, tišinu, kuhinju, raspored, vodu, radni ugao, pristup i način na koji se čovek vraća kući posle rada.</p>
      <section className="section featureBand"><div><div className="eyebrow">Granica teme</div><h2>Prostor može podržati ritam, ali ne sme postati obećanje zdravlja.</h2></div><p>DaniniLans piše o stanovanju kao delu zdravog stila života: praktično, kulturno i odgovorno. Bez investicionih saveta, bez privatnih briefova i bez medicinskih tvrdnji.</p></section>
      <section className="grid four">{layers.map(([t,d])=><article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</section>
      <section className="card section"><h3>Kako se ova tema povezuje sa DaniniLans-om</h3><p>Prostor nije glavna prodajna priča. On je jedan od slojeva svakodnevice: voda u kuhinji, pauza kod prozora, radni sto, večernji završetak i okruženje koje olakšava ili otežava ritam.</p><div className="ctaRow"><Link className="btn secondary" href="/rutine">Rutine</Link><Link className="btn secondary" href="/vodici/kuhinja-kao-centar-rutine">Kuhinja</Link><Link className="btn secondary" href="/voda-i-ritam">Voda i ritam</Link></div></section>
      <section className="card"><h3>Calije kao javni primer, ne kao fokus DaniniLans-a</h3><p>Calije Park Residence se može pomenuti samo kao javni primer veze prostora, okruženja i digitalne prezentacije. DaniniLans ne daje investicioni savet, ne otvara privatni Brief i ne meša pregovaračku logiku u edukativni sadržaj.</p><a className="btn secondary" href="https://calije.daninihub.com/sr">Javni Calije primer</a></section>
      <section className="card disclaimer"><h3>Granica poverenja</h3><p>Tekst je edukativan. Ne tvrdi da stanovanje, prostor, svetlo, zelenilo ili okruženje leče, sprečavaju bolest ili garantuju zdravstveni rezultat. Za zdravstvena, pravna ili investiciona pitanja potrebna je stručna provera.</p><Link className="btn secondary" href="/disclaimer">Disclaimer</Link></section>
    </article>
  );
}
