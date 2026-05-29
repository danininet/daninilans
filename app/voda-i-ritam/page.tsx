import Link from "next/link";

export const metadata = {
  title: "Voda i ritam",
  description: "Praktican, nemedicinski vodič kroz vodu kao deo dnevnog ritma: jutro, rad, pauza, obrok i vece.",
};

export default function Page() {
  return (
    <div className="container section">
      <div className="eyebrow">DaniniLans vodič</div>
      <h1>Voda i ritam dana</h1>
      <p className="lead">Voda ovde nije lek i nije čarobno rešenje. Ona je jednostavan dnevni oslonac oko koga se može urediti početak dana, radna pauza, obrok i večernje smirivanje.</p>
      <div className="grid two">
        <article className="card"><h3>Jutro</h3><p>Dan počinje mirno: čaša vode, nekoliko minuta bez ekrana, kratka beleška šta je danas važno.</p></article>
        <article className="card"><h3>Radni blok</h3><p>Voda stoji vidljivo, ali bez prisile. Pauza se koristi da se telo pomeri, oči odmore i dan nastavi jasnije.</p></article>
        <article className="card"><h3>Obrok</h3><p>Jednostavan obrok i piće ne treba pretvarati u strogo pravilo. Cilj je ritam koji se može ponoviti.</p></article>
        <article className="card"><h3>Veče</h3><p>Veče nije vreme za dokazivanje discipline nego za spuštanje tempa: kuhinja, voda, beleška, priprema za sutra.</p></article>
      </div>
      <div className="card disclaimer section"><h3>Granica</h3><p>Tekst je edukativan. Kod zdravstvenih pitanja odluka ne ide preko sajta nego uz stručno lice.</p><Link className="btn secondary" href="/disclaimer">Disclaimer</Link></div>
    </div>
  );
}
