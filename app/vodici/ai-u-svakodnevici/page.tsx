import Link from "next/link";

export const metadata={title:"AI u svakodnevici | DaniniLans",description:"DaniniLans vodič za odgovornu upotrebu AI u zdravom stilu života: pitanja, beleške, rutine, voda, kuhinja i granice odlučivanja."};

const useCases=[
  ["Jutarnje pitanje", "Umesto da AI dobije komandu, korisnik počinje pitanjem: šta danas traži najviše reda i koji mali korak ima smisla?"],
  ["Voda i pauze", "AI može pomoći da se napravi neutralan podsetnik za vodu, pauzu ili pripremu boce, bez tvrdnji o zdravstvenom ishodu."],
  ["Kuhinja i recepti", "AI može predložiti sezonsku ideju, listu kupovine ili kuhinjski reset, ali ne sme glumiti nutricionistu ili terapeuta."],
  ["Stara znanja", "AI može pomoći da se porodična navika prevede u savremeno pitanje: šta je iskustvo, šta je običaj, a šta treba proveriti?"],
  ["Utisci", "AI može pomoći da se utisak skrati i anonimizuje, ali ne sme pojačavati medicinske tvrdnje ili izmišljati rezultate."],
  ["Odluka", "AI završava kao pomoćnik za jasnoću. Konačna odluka ostaje ljudska i odgovorna."],
];

const promptless=[
  ["Ne traži gotov odgovor", "Pitaj: šta propuštam, šta je rizik, šta ne smem da tvrdim?"],
  ["Ne koristi AI kao autoritet", "Koristi ga kao sagovornika koji postavlja bolja potpitanja."],
  ["Ne kopiraj šablone", "Prilagodi pitanje svom danu, vodi, kuhinji, poslu i realnom kapacitetu."],
];

export default function Page(){return <article className="container section legalText"><div className="eyebrow">Vodič · AI metoda</div><h1>AI u svakodnevici: pomoć za pitanje, ne zamena za odluku.</h1><p className="lead">Poenta AI u DaniniLans-u nije da korisnik preda zdrav stil života algoritmu, nego da lakše postavi pitanje, vidi sledeći mali korak i proveri granice pre odluke. Metoda je jednostavna: Pitaj AI — AI pita tebe.</p><section className="section featureBand"><div><div className="eyebrow">Anti-prompt pristup</div><h2>DaniniLans ne gradi biblioteku komandi, nego kulturu boljeg pitanja.</h2></div><p>Copy-paste prompt može dati brz tekst. Dijalog daje razumevanje. Zato AI u DaniniLans-u prvo vraća korisnika na kontekst: dan, naviku, granicu, rizik i realan korak.</p></section><section className="grid three">{useCases.map(([t,d])=><article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</section><section className="section splitBand"><div><div className="eyebrow">Kako koristiti AI</div><h2>Manje komandi. Više razumevanja.</h2><p>AI je najkorisniji kada pomaže da se smanji haos: šta je važno, šta nije provereno, šta je opasno tvrditi i koji mali korak može da se ponovi.</p><div className="ctaRow"><Link className="btn secondary" href="/metoda">Metoda</Link><Link className="btn secondary" href="/rutine">Rutine</Link><Link className="btn secondary" href="/disclaimer">Disclaimer</Link></div></div><div className="methodSteps">{promptless.map(([t,d])=><div key={t}><strong>{t}</strong><p>{d}</p></div>)}</div></section><section className="card"><h3>Prirodno linkovanje</h3><p>AI vodič povezuje <Link href="/voda-i-ritam">vodu i ritam</Link>, <Link href="/recepti">receptе</Link>, <Link href="/stara-znanja">stara znanja</Link>, <Link href="/recenzije">knjigu utisaka</Link> i <Link href="/ai-disclosure">AI Disclosure</Link>.</p></section><section className="card disclaimer"><h3>Granica</h3><p>AI ne daje dijagnozu, terapiju, plan lečenja, individualni zdravstveni savet, pravni savet ili garanciju rezultata. Kada tema dodiruje zdravlje, bolest, lekove, trudnoću, ishranu pod nadzorom ili bezbednost uređaja, potrebna je stručna provera.</p></section></article>}
