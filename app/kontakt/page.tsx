import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt i saradnja",
  description:
    "Jasan kontakt za uredničke predloge, pitanja o DaniniLans sadržaju i odgovorne partnerske upite iz oblasti vode, kuhinje i zdravog stila života.",
  alternates: { canonical: "/kontakt" },
};

const editorialSubject = encodeURIComponent("DaniniLans — predlog sadržaja");
const partnerSubject = encodeURIComponent("DaniniLans — partnerski upit");

export default function ContactPage() {
  return (
    <main className="container section legalText">
      <div className="eyebrow">DaniniLans kontakt</div>
      <h1>Dva jasna ulaza. Bez formulara koji nikuda ne vode.</h1>
      <p className="lead">
        DaniniLans prima samo poruke koje imaju stvarnu vezu sa vodom, dnevnim ritmom,
        kuhinjom, starim znanjima, odgovornom tehnologijom i metodom „Pitaj AI — AI pita tebe“.
      </p>

      <section className="grid two">
        <article className="card">
          <span className="smallCaps">Urednički kontakt</span>
          <h2>Predlog teme, iskustva ili pitanja</h2>
          <p>
            Pošalji konkretan predlog za vodič, recept, iskustvo iz svakodnevice ili pitanje koje
            treba istražiti. U poruci napiši šta je činjenica, šta je lično iskustvo i zašto tema
            pripada DaniniLans biblioteci.
          </p>
          <a className="btn primary" href={`mailto:info@daninihub.com?subject=${editorialSubject}`}>
            Pošalji urednički predlog
          </a>
        </article>

        <article className="card">
          <span className="smallCaps">Partnerstva</span>
          <h2>Proizvod ili saradnja koja može javno da se proveri</h2>
          <p>
            Partnerski upit mora da sadrži naziv firme, odgovorno lice, sajt, zemlju poslovanja,
            tačan proizvod ili uslugu i objašnjenje kako se saradnja uklapa u DaniniLans bez
            medicinskih obećanja i prikrivene prodaje.
          </p>
          <a className="btn secondary" href={`mailto:info@daninihub.com?subject=${partnerSubject}`}>
            Pošalji partnerski upit
          </a>
        </article>
      </section>

      <aside className="card disclaimer section">
        <h2>Šta se ne prihvata</h2>
        <p>
          Ne prihvataju se anonimne ponude, neproverljive zdravstvene tvrdnje, obećanja izlečenja,
          kopirani promotivni tekstovi, generički guest-post predlozi ni zahtevi za prikriveno
          affiliate oglašavanje.
        </p>
      </aside>
    </main>
  );
}
