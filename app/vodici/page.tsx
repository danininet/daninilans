import Link from "next/link";

export const metadata={title:"Vodiči | DaniniLans",description:"Evergreen DaniniLans vodiči za vodu, dnevni ritam, neutralne rutine, AI metodu i nemedicinski okvir."};

const guides=[
  ["Voda i dnevni ritam","/voda-i-ritam","Kako voda postaje vidljiva tačka dana bez medicinskih obećanja."],
  ["Neutralne rutine","/rutine","Jutro, radni blok, pauza i veče bez ekstremnih režima i pritiska."],
  ["AI u svakodnevici","/vodici/ai-u-svakodnevici","Kako metoda Pitaj AI — AI pita tebe pomaže da pitanje bude jasnije."],
  ["Voda, tehnologija i AI","/vodici/voda-tehnologija-i-ai","Filteri, UMH, Welan, pametni uređaji i AI u granicama svakodnevne organizacije."],
  ["Stanovanje i kvalitet dana","/vodici/stanovanje-i-kvalitet-svakodnevice","Svetlo, kuhinja, mir, radni sto i prostor kao deo ritma života."],
  ["Stara znanja","/stara-znanja","Porodične navike i kulturno iskustvo kao trag reda, ne kao dokaz lečenja."],
];

export default function Page(){return <div className="container section"><div className="eyebrow">DaniniLans biblioteka</div><h1>Vodiči za ritam dana, vodu, navike i odgovornu upotrebu AI.</h1><p className="lead">Biblioteka nije zbir nasumičnih članaka. Svaki vodič mora imati jasnu ulogu: da objasni jednu naviku, jednu granicu ili jedan način da se dan postavi mirnije, bez medicinskih tvrdnji i bez obećanja rezultata.</p><div className="grid three">{guides.map(([title,href,text])=><article className="card" key={href}><h3>{title}</h3><p>{text}</p><Link className="btn secondary" href={href}>Otvori vodič</Link></article>)}</div><section className="card disclaimer section"><h3>Kako se čita biblioteka</h3><p>DaniniLans vodiči su edukativni. Kada tema dodiruje zdravlje, terapiju, trudnoću, bolest, ishranu pod nadzorom ili tehničku bezbednost uređaja, potreban je stručan savet i provera dokumentacije.</p></section></div>}
