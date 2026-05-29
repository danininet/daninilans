import Link from "next/link";

export const metadata = { title: "Rutine", description: "DaniniLans rutine za jutro, radni blok, pauzu, obrok, vecernji red i vikend reset." };

const routines = [
  ["Jutarnji red", "Voda, svetlo, kratak plan i jedan mali zadatak pre buke telefona."],
  ["Radni blok", "Jedan fokus, jedna casa vode, jedna pauza. Bez pretrpavanja liste."],
  ["Pauza od ekrana", "Oci, ramena, dah, prozor ili kratka setnja. Pet minuta koji vracaju ritam."],
  ["Vecernji zavrsetak", "Kuhinja, flasa za sutra, kratka beleška i gasenje nepotrebnih ekrana."],
];

export default function Page(){return <div className="container section"><div className="eyebrow">Rutine</div><h1>Male rutine koje se mogu ponoviti.</h1><p className="lead">DaniniLans rutine nisu strogi program. One su jednostavni okviri za ljude koji žele vise reda u danu, bez pritiska i bez obecanja rezultata.</p><div className="grid two">{routines.map(([t,d])=><article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div><section className="card disclaimer section"><h3>Napomena</h3><p>Rutine su opsti primeri za organizaciju dana. Nisu zdravstveni plan.</p><Link className="btn secondary" href="/disclaimer">Granice sadrzaja</Link></section></div>}
