import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="hero container">
        <div className="eyebrow">DaniniLans</div>
        <h1>Voda, ritam i navike koje imaju smisla u stvarnom životu.</h1>
        <p className="lead">
          DaniniLans okuplja iskustva, rutine, recepte, stara znanja i svakodnevne navike povezane sa vodom i ritmom dana. Edukativno, odgovorno i bez medicinskih obećanja.
        </p>
        <div className="badges">
          <span className="badge">Voda i ritam</span>
          <span className="badge">Rutine</span>
          <span className="badge">Recepti</span>
          <span className="badge">Stara znanja</span>
          <span className="badge">Knjiga utisaka</span>
        </div>
        <div className="ctaRow">
          <Link className="btn primary" href="/voda-i-ritam">Istraži sadržaj</Link>
          <Link className="btn secondary" href="/disclaimer">Pročitaj disclaimer</Link>
        </div>
      </section>

      <section className="section container">
        <div className="grid three">
          <article className="card"><h3>Voda i ritam</h3><p>Kako organizovati dan bez ekstremnih pravila i bez kopiranja tuđih rutina.</p></article>
          <article className="card"><h3>Recepti</h3><p>Jednostavni recepti inspirisani svakodnevicom, sezonom i praktičnim navikama.</p></article>
          <article className="card"><h3>Stara znanja</h3><p>Priče, običaji i iskustva koja su generacijama oblikovala odnos prema vodi i ritmu života.</p></article>
        </div>
      </section>
    </div>
  );
}
