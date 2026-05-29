import Link from "next/link";

export const metadata = {
  title: "Stanovanje i kvalitet svakodnevice | DaniniLans",
  description: "Vodič o vezi prostora, svetla, kuhinje, okruženja, digitalne prezentacije i dnevnog ritma bez investicionih ili zdravstvenih obećanja.",
};

export default function Page() {
  return (
    <article className="container section legalText">
      <div className="eyebrow">Vodič</div>
      <h1>Stanovanje i kvalitet svakodnevice</h1>
      <p className="lead">
        Stan ili kuća nisu samo kvadrati. Prostor utiče na dnevni ritam kroz svetlo, tišinu, kuhinju, raspored, pristup, okruženje i način na koji se čovek vraća kući posle rada.
      </p>
      <section className="card">
        <h3>Prostor kao deo rutine</h3>
        <p>DaniniLans posmatra stanovanje kroz praktična pitanja: gde stoji voda, kako izgleda kuhinja, da li postoji mirna zona za rad, koliko je lako napraviti pauzu i kako prostor podržava večernji završetak dana.</p>
        <h3>Kuhinja, svetlo i ritam</h3>
        <p>Kuhinja je često centar porodične rutine. Prirodno svetlo, red na radnoj površini, pristup vodi i jednostavna priprema obroka mogu smanjiti dnevni haos bez velikih obećanja.</p>
        <h3>Okruženje i osećaj adrese</h3>
        <p>Mir, pristup, zelenilo, komšiluk i veza sa gradom utiču na doživljaj svakodnevice. O tome se može govoriti kulturno i arhitektonski, bez pretvaranja prostora u medicinsku tvrdnju.</p>
        <h3>Calije kao primer digitalnog gateway-a</h3>
        <p>Calije Park Residence se na DaniniLans-u može pomenuti kao primer kako se prostor, okruženje i budući ritam stanovanja predstavljaju kroz javni digitalni sloj. To nije investicioni savet i ne otvara privatni Brief.</p>
        <p><a href="https://calije.daninihub.com/sr">Pogledaj javni Calije primer</a></p>
        <h3>Unutrašnje veze</h3>
        <p>Za dnevnu primenu pogledaj <Link href="/rutine">rutine</Link>, za kuhinjski sloj <Link href="/vodici/kuhinja-kao-centar-rutine">kuhinju kao centar rutine</Link>, a za granice sadržaja <Link href="/disclaimer">disclaimer</Link>.</p>
      </section>
    </article>
  );
}
