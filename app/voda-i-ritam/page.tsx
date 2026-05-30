import Link from "next/link";

export const metadata = {
  title: "Voda i ritam | DaniniLans",
  description: "Edukativni, nemedicinski DaniniLans vodič kroz vodu kao deo dnevnog ritma, neutralnih navika i odgovorne AI organizacije.",
};

const rhythm = [
  ["Prvi vidljivi oslonac", "Čaša vode na istom mestu ne rešava život, ali može da označi početak dana bez dodatne komplikacije."],
  ["Pauza kao granica", "Voda na radnom stolu podseća da se dan ne meri samo brojem urađenih zadataka, već i načinom na koji se pravi prekid."],
  ["Kuhinja kao priprema", "Večernje punjenje boce, spremna čaša ili očišćen sto nisu spektakl. To su mali tragovi reda za sutra."],
  ["AI kao beležnica", "AI može pomoći da se napravi jednostavna lista pitanja za dan, ali ne određuje terapiju, ishranu ni zdravstvene odluke."],
];

export default function Page() {
  return (
    <div className="container section legalText">
      <div className="eyebrow">DaniniLans vodič</div>
      <h1>Voda i ritam dana</h1>
      <p className="lead">Voda ovde nije lek, dokaz discipline niti simbol savršenog života. U DaniniLans-u ona je najjednostavnija vidljiva tačka oko koje se može posmatrati dan: jutro, rad, pauza, kuhinja, veče i priprema za sutra.</p>

      <section className="section featureBand">
        <div><div className="eyebrow">Osnovni princip</div><h2>Ritam se ne uvodi silom. Ritam se vidi kroz ponavljanje.</h2></div>
        <p>DaniniLans ne traži ekstremne režime. Ako se jedna mala tačka ponavlja dovoljno mirno — voda na stolu, kratka beleška, pauza bez ekrana — dan postaje čitljiviji bez velikih obećanja.</p>
      </section>

      <div className="grid four">{rhythm.map(([title,text])=><article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>

      <section className="card section"><h3>Kako koristiti ovaj vodič</h3><p>Ne koristi ga kao pravilo koje moraš ispuniti. Koristi ga kao ogledalo: gde tokom dana voda već postoji, gde se zaboravlja, gde pauza ima smisla, a gde je potreban stručan savet umesto internet teksta.</p><div className="ctaRow"><Link className="btn secondary" href="/rutine">Poveži sa rutinama</Link><Link className="btn secondary" href="/vodici/ai-u-svakodnevici">AI u svakodnevici</Link></div></section>

      <div className="card disclaimer section"><h3>Nemedicinski okvir</h3><p>Tekst je edukativan. Ne daje dijagnozu, terapiju, plan ishrane, preporuku za bolest niti garanciju zdravstvenog rezultata. Kod zdravstvenih pitanja odluka ide uz stručno lice.</p><Link className="btn secondary" href="/disclaimer">Disclaimer</Link></div>
    </div>
  );
}
