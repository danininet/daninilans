import Link from "next/link";

export const metadata = {
  title: "AI Disclosure | DaniniLans",
  description: "Kako DaniniLans koristi AI za strukturu, beleške, SEO i edukativni sadržaj uz ljudsku proveru i bez medicinskih tvrdnji.",
};

export default function Page() {
  return (
    <div className="container section legalText">
      <div className="eyebrow">AI transparentnost</div>
      <h1>AI Disclosure</h1>
      <p className="lead">
        DaniniLans može koristiti AI kao pomoć u strukturisanju pitanja, beleški, vodiča, SEO opisa, prevoda i radnih nacrta. AI nije autoritet, lekar, pravnik, nutricionista niti zamena za ljudsku proveru.
      </p>
      <section className="card">
        <h3>Kako se AI koristi</h3>
        <p>AI može pomoći da se nejasna ideja pretvori u strukturu: tema, pitanja, redosled, naslov, meta opis, nacrt vodiča ili okvir rutine.</p>
        <h3>Kako se AI ne koristi</h3>
        <p>AI se ne koristi za dijagnoze, terapije, medicinske tvrdnje, garancije rezultata, skriveno ubeđivanje ili agresivni marketing.</p>
        <h3>DaniniHub metoda</h3>
        <p>Osnovni princip je: pitaj, proveri granice, pa tek onda odluči. Ako sadržaj dodiruje zdravlje, lekove, terapiju, pravne obaveze ili finansijske odluke, potreban je stručni i ljudski pregled.</p>
        <h3>Ljudska validacija</h3>
        <p>Sadržaj koji ide javno mora proći pregled značenja, tona, linkova, disclaimera i reputacionog rizika. AI može pomoći procesu, ali ne sme biti jedini donosilac odluke.</p>
        <p><Link href="/disclaimer">Disclaimer</Link> i <Link href="/datenschutz">Datenschutz</Link> objašnjavaju dodatne granice.</p>
      </section>
    </div>
  );
}
