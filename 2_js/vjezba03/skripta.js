// Operatori
// = perator dodjeljivanja 
//typeof omogučuje pristup podataka
// == operator uspoređivanja samo po vrijednosti
// === operator uspoređuje po tipu i vrijednosti

// aritmetički operatori + - * /

const a=2, b=3; // simulacija unosa od korisnika (ulaz)

let rez = a+b; // algoritam (obrada)
console.log(rez);// 5 izlaz

// modulo operator %
// ostatak nakon cjelobrojnog djeljenja
console.log(9 % 2); // mora ispisati 1
console.log(10 % 2); // mora ispisati 0

console.log( 1000 % 100 === 0); // mora ispisati true

// operatori dodjele =
// želim vrijednost varijable uvećati za 2
rez = rez + 2 // umatematici se prvo izvodi desna strana i dodjeljuje lijevoj strani
console.log(rez); // ispisuje 7
rez += 2;
console.log(rez); // ispisuje 9
rez -= 5;
console.log(rez); // ispisuje 4

const x = 2;
rez += x;
console.log(rez); // ispisuje 6

rez += 1;
console.log(rez); // ispisuje 7
// ovo se ne koristi često

// koriste se operatori inkrement i dekrement

rez++; // ali niti ovo se ne radi često
console.log(rez); // ispisuje 8
// u isto vrijeme možeš koristiti i uvačavnje/umanjivanj vrijednosti varijable
console.log(rez++); // 8 prvo sam ispisao trenutnu vrijednost od rez(8) i nakon toga je uvećao
console.log(++rez); // 10 ( 9 je bilo nakon ispisa u predhodnoj liniji)pa prvo uvećanje pa onda ispis
console.log(--rez); // 9
console.log(rez--); // 9
console.log(rez); //8

// operatori uspoređivanja
// == uspoređuje samo po vrijednosti

console.log( 5 == 5); // ispisuje true
console.log( '5' == 5); // ispisuje true
console.log( 5 == 7); // ispisuje false

// === uspoređuje i po tipu i po vrijednosti
console.log( 'Osijek' === 'Osijek' ); // ispisuje true
console.log( 'Osijek' === 'osijek'); // ispisuje false
console.log( '5' === 5); // ispisuje false
console.log( 'Edunova' === 'Druga škola'); // ispisuje false

// != različito
console.log( 4 != 3); // ispisuje true
console.log( '4' != 4); // ispisuje false

// veće od >
// veće jednako od >=
let godine = 18
console.log(godine > 18); // ispisuje false
console.log(godine >= 18); // ispisuje true

// manje od <
// manje jednako ili od <=
godine = 21;
console.log(godine < 21); // ispisuje false
console.log(godine <= 21); // ispisuje true

// logički operatori: and(i), or(ili) i not(ne)
// booleova tablica za and (&&) operator za and
const i1 = 5 == '5'; // i1 = ispisuje true
const i2 = 7 > 9; // i2 =Izlaz  false
//i1	i2	rez (i1 && i2) 
//false	false	false
//false	true	false
//true	false	false
//true	true	true



console.log( i1 && i2);// ispisuje false


// booleova tablica za or (||) ALTGR+W mora se u js||
//i1	i2	    rez (i1 || i2) 
//false	false	false
//false	true	true
//true	false	true
//true	true	true
console.log( i1 || i2); // ispisuje true zato jer je bar jedan true

// booleova tablica za not (!) 
// i1  rez (!i1)
// false    true
// true     false
console.log( !i1); // ispisuje false jer je i1 bio true

// ternarni operator - koristiti ćemo ga u if naredbi
// ? :
const poruka = godine >= 18 ? 'Punoljetan' : 'Maloljetan';
console.log(poruka);// ispisuje Punoljetan

// spajanje stringova (concatenation) znak +
const skola = 'Edunova';
console.log('Najbolje škola je' + skola);// ovo se ne preporuča, vač se preporuča bectiks ALTGR+7
console.log(`Najbolja škola je ${skola}`);// ovo je preporučeno za korištenje u modernom JS-u
const razred = 5;
console.log('Idem u ' + razred + '.razred');
console.log(`idem u ${razred}.razred`);

// spread operator(...)
// koristi se na nizovima i objektima

// na nitu
const niz = [2,2,2,3];// varijablu niz ne smijem mijenjati
console.log(niz);
const noviNiz =[1,...niz,4];
console.log(noviNiz);

// na objektu
const osoba = {
    ime : 'Pero',
    prezime : 'Perić'
}
console.log(osoba);
// želim proširiti pojam osobe na polaznika
const polaznik = {
    ...osoba,
    edukacija : 'Fronted'
};
console.log(polaznik);

// destructing -suprotno od spread operatora
// na niz
const [prvi,drugi] = [1,2];// s desne strane se nalazi niz s dva elemenata on je napravio dvije varijable koje imaju vrijednosti iz niza
console.log(prvi);
console.log(drugi);

// objekt destructing
const {prezime,...objektBezPrezimena} = polaznik;
console.log(objektBezPrezimena);
console.log(prezime);// ovo mi je škart koji postoji ,ali nemoram ga koristiti

// nullish coalescing operator (??)
let sifra = null;
console.log(sifra ?? 'Šifra nije postavljen');// ako je šifra postavljena ispisuje se njezina vrijednost,inače ispisuje se : Šifra nije postavljena

// Optional chaining operator (?.)
// malo kompleksniji JSON
const korisnik = {
    adresa: {
        grad: 'Osijek'

    }
};
console.log(korisnik.adresa.grad);// ispisuje  Osijek
console.log(korisnik.adresa.ulica);// Undifined jer ne postoji ulica , kod korisnika greška


console.log(korisnik?.adresa?.ulica);// Undifinded, bez greška

// typeof, instanceof
console.log([1,2,3] instanceof Array);// ispis thrue

// in operator
console.log('prezime' in osoba); // ispisuje true
console.log('prezime' in objektBezPrezimena);// ispisuje false

// NEČEMO KORISTITI - operatori na bitovima bitwise (and & i or |). tko želi neka samostalno proući    ' in objektBezPrezimena); // ispisuje false












