import Link from "next/link";

export const metadata={title:"Vodiči | DaniniLans",description:"Evergreen vodiči DaniniLans biblioteke: voda, kuhinja, stanovanje, AI u svakodnevici i odgovoran stil života."};

const guides=[
  ["Voda i dnevni ritam","/vodici/voda-i-dnevni-ritam","Kako voda postaje deo rasporeda dana bez medicinskih obećanja."],
  ["Kuhinja kao centar rutine","/vodici/kuhinja-kao-centar-rutine","Kuhinja, aparati, filteri i priprema dana kao praktičan sistem."],
  ["Stanovanje i kvalitet svakodnevice","/vodici/stanovanje-i-kvalitet-svakodnevice","Prostor, svetlo, mir, okruženje i navike u dnevnom ritmu."],
  ["AI u svakodnevici","/vodici/ai-u-svakodnevici","Kako AI može pomoći u pitanjima, beleškama i rutini bez preuzimanja odgovornosti."],
];

export default function Page(){return <div className="container section"><div className="eyebrow">Evergreen biblioteka</div><h1>Vodiči za vodu, prostor, kuhinju i svakodnevne odluke.</h1><p className="lead">Ovo nije brz blog, nego biblioteka tekstova koji povezuju DaniniLans teme sa DaniniHub metodom, DaniniNet poslovnim slojem i realnim primerima kvaliteta svakodnevice.</p><div className="grid two">{guides.map(([title,href,text])=><article className="card" key={href}><h3>{title}</h3><p>{text}</p><Link className="btn secondary" href={href}>Otvori vodič</Link></article>)}</div><section className="card disclaimer section"><h3>SEO princip</h3><p>Svaki vodič mora imati prirodne unutrašnje linkove ka rutini, receptima, disclaimeru i relevantnim ekosistemskim stranicama. Nema keyword stuffing-a i nema zdravstvenih obećanja.</p></section></div>}
