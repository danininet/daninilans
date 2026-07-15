# DaniniLans — Danini sistemsko usklađivanje

Status: implementacioni audit  
Datum: 2026-07-15

## 1. Zaključana uloga

DaniniLans je posebna health/lifestyle vertikala Danini sistema. Njena primarna oblast je zdrav stil života kroz vodu, dnevni ritam, kuhinju, navike, odgovornu tehnologiju i AI dijalog.

DaniniLans nije:

- centralni DaniniHub OS,
- DPL ili real-estate prodajni sajt,
- privatni repozitorijum zdravstvenih ili pregovaračkih podataka,
- medicinski portal,
- generički wellness blog sa obećanjima rezultata.

## 2. Veza sa ostalim domenima

| Površina | Uloga | Primarni izlaz |
|---|---|---|
| `daninihub.com` | sistem i metod | Ustav, proces, AI/decision framework |
| `danininet.daninihub.com` | prodaja i monetizacija | ponude, partnerstva, checkout, CRM ulaz |
| `daninilans.daninihub.com` | voda i zdrav stil života | edukacija, vodiči, affiliate i partner sadržaj |
| `calije.daninihub.com` | DPL Case Study #001 | investitorski, zakupni i oglašivački lead gateway |

Svaki sajt mora imati sopstvenu jasnu svrhu, ali zajedničku sistemsku logiku: transparentnost, odgovornost, proverljivost, ljudska odluka i kontrolisani CTA tok.

## 3. Šta je već dobro

- Jasna pozicija: voda, ritam, kuhinja, tradicija i AI metoda.
- Nemedicinski okvir je vidljiv na početnoj i pravnim stranicama.
- Postoje SEO metadata, sitemap i robots konfiguracija.
- Postoje pravne i transparentnost stranice.
- Struktura sadržaja nije vezana samo za članke, već za tematske stubove.
- Vizuelni pravac je svetliji i prirodniji, što ga pravilno razlikuje od Čalije real-estate identiteta.

## 4. Kritične korekcije

### P1 — Brend i arhitektura

- Na sajtu jasno prikazati da je DaniniLans deo Danini sistema, ali ne podređeni klon DaniniHub početne.
- U footer dodati kontrolisane veze ka DaniniHub OS i DaniniNet-u.
- Ne uvoditi Čalije/DPL sadržaj u glavnu navigaciju DaniniLans-a.
- Izbegavati stare nazive i legacy domene.

### P1 — Konverziona logika

DaniniLans treba da ima tri glavna CTA pravca:

1. **Uči** — vodiči, voda, ritam, kuhinja i rutina.
2. **Proveri metod** — „Pitaj AI — AI pita tebe“, AI transparentnost i granice.
3. **Sarađuj** — proizvodi, affiliate, stručni doprinos i partnerski sadržaj preko kontrolisanog DaniniNet ulaza.

Sajt ne treba da gura agresivni checkout sa početne stranice.

### P1 — Editorial trust

Za svaki vodič koji dotiče zdravlje, vodu ili uređaje potrebno je standardizovati:

- datum objave i poslednje provere,
- autora/urednika,
- vrstu teksta: edukativni, iskustveni, partnerski ili affiliate,
- izvore i metod provere,
- kontekst i ograničenja,
- jasan CTA koji odgovara vrsti sadržaja.

### P2 — SEO i strukturirani podaci

- Uvesti `Organization`, `WebSite`, `BreadcrumbList` i `Article` JSON-LD gde je primenljivo.
- Svaka stranica treba da ima sopstveni canonical, title, description i OG sliku.
- Izbegavati generičke keyword liste i fokusirati se na stvarni search intent.
- Formirati sadržajne klastere oko vode, dnevnog ritma, kuhinje i odgovorne tehnologije.

### P2 — UX i pristupačnost

- Dodati mobilni meni umesto prelamanja svih linkova u sticky header-u.
- Dodati vidljiv focus state za tastaturu.
- Poštovati `prefers-reduced-motion`.
- Validirati kontrast i alt tekstove.
- Ukloniti emoji ikone iz ključnih navigacionih elemenata kada se uvede jedinstveni SVG icon set.

### P2 — Analitika i privatnost

- Definisati analytics događaje: otvaranje vodiča, klik na partner CTA, odlazak ka DaniniHub metodi i kontakt.
- Ne aktivirati neobavezne analitičke/marketinške skripte pre pristanka.
- Kontakt i newsletter forme moraju jasno navesti svrhu obrade i očekivani follow-up.

### P3 — Višejezičnost

Srpski je primarni jezik DaniniLans-a. Nemačka verzija treba da bude zasebno uređena, ne samo automatski prevedena. Pre uvođenja locale ruta potrebno je zaključati:

- URL strategiju (`/sr`, `/de` ili primarni SR bez prefiksa),
- `hreflang`,
- canonical pravila,
- odgovorne prevode pravnih stranica,
- urednički workflow za paralelno održavanje.

## 5. Ciljna struktura početne stranice

1. Hero: zdrav stil života kroz vodu i čitljiv dnevni ritam.
2. Dokaz pozicije: šta DaniniLans jeste i šta nije.
3. Četiri glavna tematska ulaza.
4. Najvažniji vodiči i urednički trust signali.
5. Metoda „Pitaj AI — AI pita tebe“.
6. Partnerstva i transparentna komercijalna saradnja.
7. Newsletter ili periodični vodič, bez agresivnih obećanja.
8. Nemedicinski okvir i veza sa Danini sistemom.

## 6. Definition of Done

DaniniLans je sistemski usklađen kada:

- korisnik za deset sekundi razume čemu sajt služi,
- ni jedna stranica ne meša DPL, centralni OS i lifestyle ponudu,
- svaki zdravstveno relevantan tekst ima uredničku granicu i trust signal,
- svi CTA tokovi imaju vlasnika, cilj i CRM/analitički događaj,
- pravne stranice odgovaraju stvarno korišćenim servisima,
- mobilna navigacija i pristupačnost prolaze osnovni audit,
- README i Drive dokumentacija opisuju istu arhitekturu,
- produkcioni build, lint i link provera prolaze pre spajanja.

## 7. Sledeći implementacioni paket

1. Urednički metadata model za vodiče.
2. JSON-LD komponente i breadcrumb sistem.
3. Mobilni meni i accessibility pass.
4. Jedinstveni CTA/event tracking model.
5. Content inventory i redirect mapa za stare URL-ove.
6. SR/DE internacionalizaciona odluka i pilot prevod tri ključne stranice.
