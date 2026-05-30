import Link from "next/link";

export const metadata={title:"Knjiga utisaka | DaniniLans",description:"Moderirana DaniniLans knjiga utisaka za zdrav stil života, vodu, ritam, rutinu, kuhinju i AI beleške bez medicinskih tvrdnji."};

const rules=[
  ["Šta je dobar utisak","Kratak opis jedne promene u danu: voda na stolu, bolja pauza, jasnija kuhinja, beleška, AI podsetnik ili večernja priprema."],
  ["Šta ne objavljujemo","Ne objavljuju se tvrdnje o lečenju, dijagnozama, terapiji, mršavljenju, bolestima, garantovanim efektima ili tuđim privatnim podacima."],
  ["Kako se koristi","Utisci pomažu da se vidi šta ljudima zaista olakšava svakodnevicu, ali nisu dokaz zdravstvenog ishoda."],
];

const reviewTypes=[
  ["Ritam dana", "Kako je jedna mala navika promenila početak, pauzu ili završetak dana."],
  ["Voda i kuhinja", "Kako je čaša, boca, čaj, filter ili kuhinjski red postao vidljiviji deo svakodnevice."],
  ["AI metoda", "Kako je pitanje postalo jasnije kroz princip Pitaj AI — AI pita tebe."],
  ["Stara znanja", "Kako je porodična navika ili stari običaj dobio savremen, odgovoran oblik."],
];

export default function Page(){return <div className="container section legalText"><div className="eyebrow">Knjiga utisaka</div><h1>Utisci nisu dokaz. Oni su trag svakodnevice.</h1><p className="lead">DaniniLans knjiga utisaka čuva male zapise o zdravom stilu života, vodi, ritmu, kuhinji, prostoru, tehnologiji i AI beleškama. Objavljuje se samo ono što ostaje u granicama edukativnog, odgovornog i nemedicinskog sadržaja.</p><section className="section featureBand"><div><div className="eyebrow">Trust sloj</div><h2>Poverenje se ne gradi tvrdnjama, nego moderacijom.</h2></div><p>Knjiga utisaka nije mesto za reklame, lečenje, senzaciju ili preuveličavanje. Ona pokazuje kako ljudi zaista koriste male navike i gde DaniniLans može da bude koristan bez lažnog autoriteta.</p></section><div className="grid three">{rules.map(([t,d])=><article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div><section className="section"><div className="sectionHead"><div className="eyebrow">Kategorije utisaka</div><h2>Svaki zapis mora imati jasnu temu i granicu.</h2></div><div className="grid four">{reviewTypes.map(([t,d])=><article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section><section className="card section"><h3>Primer prihvatljivog tona</h3><p>“Počeo sam da ostavljam čašu vode i belešku na istom mestu svako jutro. Ne znam da li je to promenilo zdravlje, ali mi pomaže da dan počnem mirnije.”</p><p>Takav utisak govori o organizaciji dana, ne o medicinskom rezultatu.</p><div className="ctaRow"><Link className="btn secondary" href="/kontakt">Pošalji utisak</Link><Link className="btn secondary" href="/disclaimer">Granice sadržaja</Link></div></section><section className="card disclaimer"><h3>Moderacija</h3><p>Svaki utisak se može skratiti, anonimizovati ili odbiti ako prelazi granice sadržaja. Lažni review-i, medicinske tvrdnje, affiliate manipulacija i tuđi privatni podaci se ne objavljuju.</p><Link className="btn secondary" href="/disclaimer">Granice sadržaja</Link></section></div>}
