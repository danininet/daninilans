import Link from "next/link";

export const metadata={title:"Zdrav stil života vodiči | DaniniLans",description:"DaniniLans biblioteka vodiča za zdrav stil života: voda, rutine, kuhinja, recepti, stara znanja, tehnologija i AI metoda."};

const clusters=[
  ["Voda", "Voda i dnevni ritam", "Kako voda postaje vidljiva tačka dana bez medicinskih obećanja.", "/voda-i-ritam"],
  ["Rutine", "Neutralne rutine", "Jutro, radni blok, pauza, kuhinja i veče bez ekstremnih režima i pritiska.", "/rutine"],
  ["Kuhinja", "Kuhinja kao centar rutine", "Kuhinja, aparati, filteri, recepti i priprema prostora kao praktičan sistem.", "/vodici/kuhinja-kao-centar-rutine"],
  ["Recepti", "Recepti i kuhinjski ritam", "Čajevi, sezonski bokali, voda i jednostavna priprema dana bez terapijskih tvrdnji.", "/recepti"],
  ["Stara znanja", "Tradicija i svakodnevica", "Porodične navike i Balkan iskustvo kao kulturni trag reda, ne kao dokaz lečenja.", "/stara-znanja"],
  ["Tehnologija", "Voda, tehnologija i AI", "UMH, Welan, filteri, pametni uređaji i AI u granicama odgovorne edukacije.", "/vodici/voda-tehnologija-i-ai"],
  ["AI metoda", "AI u svakodnevici", "Kako metoda Pitaj AI — AI pita tebe pomaže da pitanje bude jasnije.", "/vodici/ai-u-svakodnevici"],
  ["Poverenje", "Knjiga utisaka", "Moderirani zapisi o svakodnevici, bez tvrdnji o zdravstvenom ishodu.", "/recenzije"],
];

export default function Page(){return <div className="container section legalText"><div className="eyebrow">DaniniLans biblioteka</div><h1>Zdrav stil života kroz vodu, rutinu, kuhinju, tradiciju i AI metodu.</h1><p className="lead">Biblioteka nije zbir nasumičnih članaka. Svaki vodič pripada jednoj kategoriji i vodi ka sledećem smislenom koraku: voda, rutina, recept, staro znanje, tehnologija, AI pitanje ili granica sadržaja.</p><section className="section featureBand"><div><div className="eyebrow">Kategorije i linkovanje</div><h2>Svaka tema mora imati mesto u sistemu.</h2></div><p>DaniniLans gradi evergreen arhivu za zdrav stil života. Tekstovi se ne pišu da popune stranicu, nego da objasne jedan deo svakodnevice i prirodno povežu korisnika sa sledećom temom.</p></section><div className="grid four">{clusters.map(([cat,title,text,href])=><Link className="card" key={href} href={href}><span className="smallCaps">{cat}</span><h3>{title}</h3><p>{text}</p><span className="smallCaps">Otvori vodič</span></Link>)}</div><section className="card disclaimer section"><h3>Kako se čita biblioteka</h3><p>DaniniLans vodiči su edukativni. Kada tema dodiruje zdravlje, terapiju, trudnoću, bolest, ishranu pod nadzorom ili tehničku bezbednost uređaja, potreban je stručan savet i provera dokumentacije.</p><Link className="btn secondary" href="/disclaimer">Granice sadržaja</Link></section></div>}
