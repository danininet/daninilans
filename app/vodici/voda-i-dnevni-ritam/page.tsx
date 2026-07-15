import type { Metadata } from "next";
import Link from "next/link";
import EditorialTrust from "../../../components/EditorialTrust";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Voda i dnevni ritam",
  description: "Evergreen vodič o vodi kao delu dnevnog ritma: jutro, rad, pauza, obrok i veče, bez medicinskih tvrdnji.",
  alternates: { canonical: "/vodici/voda-i-dnevni-ritam" },
  openGraph: {
    title: "Voda i dnevni ritam | DaniniLans",
    description: "Praktičan i nemedicinski vodič o vodi kao vidljivoj tački reda tokom dana.",
    url: "https://daninilans.daninihub.com/vodici/voda-i-dnevni-ritam",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Voda i dnevni ritam",
  description: "Evergreen vodič o vodi kao delu dnevnog ritma, bez medicinskih obećanja.",
  datePublished: "2026-07-15",
  dateModified: "2026-07-15",
  inLanguage: "sr",
  mainEntityOfPage: "https://daninilans.daninihub.com/vodici/voda-i-dnevni-ritam",
  author: { "@type": "Organization", name: "DaniniLans uredništvo" },
  publisher: { "@id": "https://daninilans.daninihub.com/#organization" },
  isPartOf: { "@id": "https://daninilans.daninihub.com/#website" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: "https://daninilans.daninihub.com" },
    { "@type": "ListItem", position: 2, name: "Vodiči", item: "https://daninilans.daninihub.com/vodici" },
    { "@type": "ListItem", position: 3, name: "Voda i dnevni ritam", item: "https://daninilans.daninihub.com/vodici/voda-i-dnevni-ritam" },
  ],
};

export default function Page() {
  return (
    <article className="container section legalText">
      <StructuredData data={[articleSchema, breadcrumbSchema]} />
      <nav className="breadcrumbs" aria-label="Putanja stranice">
        <Link href="/">Početna</Link><span aria-hidden="true">/</span><Link href="/vodici">Vodiči</Link><span aria-hidden="true">/</span><span>Voda i dnevni ritam</span>
      </nav>
      <div className="eyebrow">Vodič · voda i svakodnevica</div>
      <h1>Voda i dnevni ritam</h1>
      <p className="lead">Voda u DaniniLans pristupu nije čudo, lek ili dokaz discipline. Ona je jednostavna tačka reda: nešto što se može videti, ponoviti i povezati sa tokom dana.</p>
      <EditorialTrust published="15. jul 2026." reviewed="15. jul 2026." />

      <section className="card articleCard">
        <h2>Navika koja ne traži predstavu</h2>
        <p>Najstabilnije navike obično nisu spektakularne. One su dovoljno male da se ponove i dovoljno vidljive da ne zavise samo od pamćenja. Zato se voda u ovom vodiču povezuje sa prostorom, pauzom, kuhinjom i završetkom dana.</p>

        <h3>Jutro: početak bez žurbe</h3>
        <p>Čaša vode na početku dana može biti signal da se dan ne otvara odmah telefonom. To nije terapija; to je mala organizaciona odluka. Količina i potrebe nisu iste za svakoga, pa univerzalne brojke nisu cilj ovog teksta.</p>

        <h3>Radni dan: vidljiva navika</h3>
        <p>Kada je voda na stolu, korisnik ne mora da pamti još jedan zadatak. Prostor ga podseća. Zato se voda posmatra zajedno sa radnim blokom, kuhinjom i pauzama, a ne kao test discipline ili dokaz uspeha.</p>

        <h3>Obrok i kuhinja: mesto pripreme</h3>
        <p>Kuhinja je prirodna tačka za pripremu bokala, čaja ili boce za naredni deo dana. Cilj nije komplikovan režim, već smanjenje trenja: ono što je pripremljeno lakše postaje deo rutine.</p>

        <h3>Veče: spuštanje tempa</h3>
        <p>Večernji ritam nije stroga rutina. Dovoljno je pripremiti sto, kuhinju i bocu za sutra, zapisati jednu belešku i zatvoriti dan bez pritiska.</p>

        <h3>Povezani sadržaji</h3>
        <p><Link href="/rutine">Rutine</Link> pokazuju kako se ova logika prevodi u korake, a <Link href="/recepti">recepti</Link> daju praktične ideje za vodu, čajeve i sezonske napitke. Za metod postavljanja boljih pitanja pogledaj <Link href="/metoda">Pitaj AI — AI pita tebe</Link>.</p>
      </section>

      <section className="card sourceCard">
        <div className="eyebrow">Urednička napomena</div>
        <h2>Kako je sadržaj postavljen</h2>
        <p>Tekst je organizacioni i edukativni okvir. Ne propisuje količinu vode, ne procenjuje zdravstveno stanje i ne predstavlja proizvod ili uređaj kao terapiju. Svaka buduća stručna ili partnerska dopuna mora biti jasno označena i proverljiva.</p>
      </section>

      <section className="card disclaimer">
        <h2>Granica sadržaja</h2>
        <p>Ovaj vodič nije medicinski savet i ne obećava zdravstveni rezultat. Individualne potrebe mogu zavisiti od zdravstvenog stanja, terapije, fizičke aktivnosti i drugih okolnosti. Za zdravstvena pitanja obrati se kvalifikovanom stručnjaku i pogledaj <Link href="/disclaimer">DaniniLans disclaimer</Link>.</p>
      </section>
    </article>
  );
}
