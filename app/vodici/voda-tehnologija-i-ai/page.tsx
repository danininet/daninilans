import Link from "next/link";

export const metadata = {
  title: "Voda, tehnologija i AI | DaniniLans",
  description: "Vodič o vodi, UMH tehnologiji, Welan kontekstu, pametnim uređajima i AI kao pomoći u svakodnevnom ritmu bez medicinskih tvrdnji.",
};

export default function Page() {
  return (
    <article className="container section legalText">
      <div className="eyebrow">Vodič</div>
      <h1>Voda, tehnologija i AI u svakodnevici</h1>
      <p className="lead">
        DaniniLans posmatra vodu kao centralnu nit svakodnevnog ritma: u kuhinji, radu, odmoru, prostoru, tehnologiji i digitalnim navikama. Tehnologija može pomoći da se navika lakše vidi i ponovi, ali ne sme postati medicinsko obećanje.
      </p>

      <section className="card">
        <h3>Voda kao osovina dana</h3>
        <p>Voda je prisutna u gotovo svakoj dnevnoj tački: jutro, kuvanje, čaj, obrok, radni sto, fizički predah i večernja priprema. Zato se na DaniniLans-u ne tretira kao trend, nego kao jednostavan element reda.</p>

        <h3>UMH, Welan i filteri</h3>
        <p>UMH tehnologija, Welan kontekst i filteri mogu biti obrađeni kao edukativne teme povezane sa kvalitetom vode, opremom doma i korisničkim iskustvom. Svaka takva stranica mora jasno reći da sadržaj nije terapija, dijagnoza niti dokaz zdravstvenog ishoda.</p>

        <h3>Pametni uređaji i kuhinja</h3>
        <p>Pametni bokali, filter sistemi, kuhinjski aparati, podsetnici i senzori mogu pomoći organizaciji dana. Njihova uloga je praktična: manje zaboravljanja, bolja priprema prostora i jasniji dnevni ritam.</p>

        <h3>AI kao pomoć za primenu</h3>
        <p>AI može pomoći da korisnik napravi listu pitanja za kupovinu uređaja, uporedi sopstvene potrebe, napiše belešku o navici ili napravi raspored vode i pauza. AI ne sme donositi medicinski zaključak niti zameniti stručno lice.</p>

        <h3>Prirodno linkovanje</h3>
        <p>Za praksu pogledaj <Link href="/voda-i-ritam">Voda i ritam</Link>, <Link href="/vodici/kuhinja-kao-centar-rutine">Kuhinja kao centar rutine</Link>, <Link href="/vodici/ai-u-svakodnevici">AI u svakodnevici</Link> i <Link href="/affiliate-disclosure">affiliate transparentnost</Link>.</p>
      </section>

      <section className="card disclaimer">
        <h3>Granica poverenja</h3>
        <p>Tehnologija može poboljšati organizaciju i korisničko iskustvo, ali DaniniLans ne tvrdi da uređaji, filteri, UMH, Welan ili AI leče, sprečavaju bolest ili garantuju rezultat.</p>
      </section>
    </article>
  );
}
