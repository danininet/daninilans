import Link from "next/link";

export const metadata={title:"Recepti | DaniniLans",description:"DaniniLans recepti za vodu, čaj, sezonske napitke, kuhinjski reset i dnevni ritam, bez medicinskih tvrdnji."};

const recipes=[
  ["Jutarnja voda sa limunom i nanom","Voda, nekoliko listova nane i malo limuna kao miran početak dana. Ne kao terapija, već kao ritual koji se lako ponavlja."],
  ["Sezonski bokal","Voda sa krastavcem, jabukom, bobičastim voćem ili začinskim biljem, prema sezoni i ukusu. Ideja je da voda postane vidljiva i prijatna."],
  ["Topli večernji čaj","Biljni čaj kao signal da se radni deo dana završava. Bez tvrdnji o lečenju ili snu, samo kao deo večernjeg reda."],
  ["Radni sto: voda i beleška","Čaša vode pored kratke beleške o sledećem zadatku. Recept je jednostavan: vidljiva navika, manje zaboravljanja."],
  ["Kuhinjski reset","Priprema boce za sutra, brisanje radne površine i jedna kratka beleška. To je recept za prostor, ne za bolest."],
  ["Putni ritam","Mala boca, jednostavan obrok i plan pauze kada se putuje. Korisno za organizaciju, bez zdravstvenih obećanja."],
];

const method=[
  ["Pitaj", "Koji deo dana se najčešće raspadne: jutro, rad, obrok ili veče?"],
  ["AI pita tebe", "Da li tražiš ritual, ukus, organizaciju ili stručni savet koji ovaj sajt ne sme da zameni?"],
  ["Odluči", "Izaberi jedan mali recept za ritam, ne deset novih pravila."],
];

export default function Page(){return <div className="container section legalText"><div className="eyebrow">Recepti i kuhinjski ritam</div><h1>Recepti koji ne obećavaju čudo, nego čuvaju ritam dana.</h1><p className="lead">DaniniLans recepti nisu dijete, terapije ni dokaz zdravlja. To su praktične ideje za vodu, čaj, kuhinju, pauzu i pripremu dana — tamo gde se navika najlakše vidi.</p><section className="section featureBand"><div><div className="eyebrow">Uloga kuhinje</div><h2>Kuhinja je mesto gde rutina postaje konkretna.</h2></div><p>Čaša, boca, čajnik, filter, radna površina i beleška nisu veliki sistem. Ali baš zato mogu da pomognu da se dan ne oslanja samo na motivaciju.</p></section><div className="grid three">{recipes.map(([t,d])=><article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div><section className="section splitBand"><div><div className="eyebrow">Pitaj AI — AI pita tebe</div><h2>Recept počinje pitanjem, ne spiskom sastojaka.</h2><p>AI može da pomogne da se ideja prilagodi danu: jutro, posao, put, veče, gost ili sezona. Ali ne daje medicinski plan i ne tvrdi zdravstvene efekte.</p><div className="ctaRow"><Link className="btn secondary" href="/voda-i-ritam">Voda i ritam</Link><Link className="btn secondary" href="/rutine">Rutine</Link></div></div><div className="methodSteps">{method.map(([t,d])=><div key={t}><strong>{t}</strong><p>{d}</p></div>)}</div></section><section className="card disclaimer section"><h3>Granica</h3><p>Recepti su opšti edukativni predlozi. Kod alergija, terapije, posebne ishrane, trudnoće, hroničnih stanja ili zdravstvenih pitanja potrebno je stručno mišljenje.</p><Link className="btn secondary" href="/disclaimer">Pročitaj disclaimer</Link></section></div>}
