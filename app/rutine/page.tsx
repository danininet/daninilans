import Link from "next/link";

export const metadata = {
  title: "Rutine | DaniniLans",
  description: "DaniniLans rutine za jutro, radni blok, pauzu, kuhinju i veče, uz DaniniHub metodu Pitaj AI — AI pita tebe.",
};

const routines = [
  ["Jutro bez žurbe", "Čaša vode na istom mestu, svetlo, kratka beleška i jedno pitanje: šta danas zaista traži moju pažnju?"],
  ["Radni blok", "Jedan fokus, jedna vidljiva pauza, jedna beleška. AI može da skrati haos u listu sledećih koraka, ali ne preuzima odluku."],
  ["Pauza od ekrana", "Oči, ramena, prozor, voda ili kratka šetnja. Pet minuta nije luksuz, nego granica između rada i zamora."],
  ["Kuhinja kao reset", "Čaša, boca za sutra, čist deo radne površine i jednostavna priprema. Kuhinja pokazuje da li je dan završen ili se samo prelio u noć."],
  ["Večernji završetak", "Jedna kratka beleška: šta ostaje za sutra, šta se zatvara danas i šta ne treba nositi u krevet."],
  ["Nedeljni pregled", "Bez velikog plana: samo pogled na vodu, obroke, ekran, rad, prostor i jedno mesto gde se ritam najviše raspao."],
];

const method = [
  ["Pitaj", "Koja navika bi danas najviše smanjila nered?"],
  ["Proveri", "Da li ovo ostaje u edukativnom okviru ili traži stručno mišljenje?"],
  ["Odluči", "Koji korak je dovoljno mali da se stvarno ponovi?"],
];

export default function Page(){return <div className="container section legalText"><div className="eyebrow">Rutine</div><h1>Rutine koje ne glume savršen život.</h1><p className="lead">DaniniLans rutine nisu strogi program, izazov ni dokaz discipline. One su neutralni okviri za ljude koji žele više reda u danu: voda, pauza, kuhinja, ekran, beleška i odluka koja ostaje ljudska.</p><section className="section featureBand"><div><div className="eyebrow">DaniniHub metoda</div><h2>Pitaj AI — AI pita tebe, ali odluka ostaje tvoja.</h2></div><p>AI u rutini služi da postavi bolje pitanje, skrati belešku i pokaže sledeći mali korak. Ne određuje terapiju, ne propisuje ishranu i ne garantuje rezultat.</p></section><div className="grid three">{routines.map(([t,d])=><article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div><section className="section splitBand"><div><div className="eyebrow">Kako se koristi rutina</div><h2>Ne dodaje se još obaveza. Uklanja se nejasnoća.</h2><p>Rutina ima smisla samo ako rasterećuje dan. Ako postane pritisak, vraća se na manji oblik: jedna čaša, jedna pauza, jedna beleška, jedno pitanje.</p><div className="ctaRow"><Link className="btn secondary" href="/voda-i-ritam">Voda i ritam</Link><Link className="btn secondary" href="/vodici/ai-u-svakodnevici">AI u svakodnevici</Link></div></div><div className="methodSteps">{method.map(([t,d])=><div key={t}><strong>{t}</strong><p>{d}</p></div>)}</div></section><section className="card disclaimer section"><h3>Nemedicinski okvir</h3><p>Rutine su opšti edukativni primeri za organizaciju dana. Nisu zdravstveni plan, terapija, dijagnoza, plan ishrane ili garancija rezultata.</p><Link className="btn secondary" href="/disclaimer">Granice sadržaja</Link></section></div>}
