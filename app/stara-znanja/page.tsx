import Link from "next/link";

export const metadata={title:"Stara znanja | DaniniLans",description:"DaniniLans stara znanja o vodi, kući, kuhinji, radu, ritmu dana i AI beleškama kao kulturno iskustvo bez medicinskih tvrdnji."};

const notes=[
  ["Voda na stolu","U mnogim kućama voda nije bila trend, nego znak reda: sto je spreman, obrok počinje, razgovor može da krene."],
  ["Kuhinja kao mera dana","Kada je kuhinja uređena, lakše se vidi šta nedostaje: voda, čaj, obrok, posuda za sutra, mir pre spavanja."],
  ["Rad i predah","Stara domaćinstva su znala za smenu posla i odmora, čak i kada to nisu zvala rutinom."],
  ["Put i boca vode","Na put se nije kretalo bez osnovnih stvari. Danas to može biti mala boca, beleška i plan pauze."],
  ["Prozor, svetlo i dom","Svetlo, vazduh, sto i raspored prostora utiču na osećaj dana, ali se ne pretvaraju u medicinsku tvrdnju."],
  ["AI i nova beležnica","Ono što je nekad bila sveska, danas može biti i AI beleška. Vrednost nije u alatu, nego u jasnijem pitanju."],
];

const bridge=[
  ["Tradicija", "Ne uzima se kao autoritet, nego kao trag iskustva koji treba razumeti i proveriti."],
  ["Savremeni život", "Navike se prevode u današnji ritam: ekran, posao, put, kuhinja, porodica i umor."],
  ["AI metoda", "Pitanje se izoštrava: šta je korisno, šta je samo navika, gde je granica i šta ne smemo tvrditi?"],
];

export default function Page(){return <div className="container section legalText"><div className="eyebrow">Stara znanja</div><h1>Stara znanja nisu dokaz lečenja. Ona su sećanje na red.</h1><p className="lead">DaniniLans čuva porodične beleške, navike i običaje kao kulturni sloj zdravog stila života. Ne pravimo mit od prošlosti. Tražimo ono što se i danas može razumeti: voda na stolu, uredna kuhinja, pauza, svetlo, put i beleška.</p><section className="section featureBand"><div><div className="eyebrow">Most starog i novog</div><h2>Vrednost nije u nostalgiji, nego u proverljivom smislu navike.</h2></div><p>Stara znanja ulaze u DaniniLans samo kada mogu da se predstave odgovorno: kao iskustvo, običaj, kućna praksa ili kulturni zapis — nikada kao terapijska tvrdnja.</p></section><div className="grid three">{notes.map(([t,d])=><article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div><section className="section"><div className="grid three">{bridge.map(([t,d])=><article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section><section className="card section"><h3>Kako AI pomaže ovom delu</h3><p>AI ne potvrđuje staru praksu kao istinu. On pomaže da se praksa prevede u pitanja: kada se koristila, zašto je ljudima imala smisla, šta se danas promenilo i da li tema traži stručnu proveru.</p><div className="ctaRow"><Link className="btn secondary" href="/metoda">Metoda</Link><Link className="btn secondary" href="/recepti">Recepti</Link><Link className="btn secondary" href="/voda-i-ritam">Voda i ritam</Link></div></section><section className="card disclaimer section"><h3>Kako se čita ovaj deo</h3><p>Stara znanja nisu medicinski dokaz i ne zamenjuju stručno mišljenje. Ona služe kao kulturni i edukativni materijal za razumevanje navika, prostora i ritma života.</p><Link className="btn secondary" href="/disclaimer">Granice sadržaja</Link></section></div>}
