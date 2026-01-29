// Varijebla je prostor u memoriji
// Može biti različitih tipova
// U JS se može definirati na tri različita načina

// Ulaz podatke u program
// Prompt uvijek unosi string
const ime = 'Edunova'; //prompt('Unesi ime');
// Fiksno stavljam neku vrijednosd da  me pri izvođenju ne pita svaki puta za unos
// Ako hoćete testirati obišite 'Edunova'//

console.log(`Dobar dan ${ime}!`);

console.log(typeof ime,ime);
// Unos godina je string
const unosGodina = '2026'// prompt('Unesi godinu');

// Konverzija u broj
const godina = Number(unosGodina);

console.log(typeof godina,godina);

// Odavde više ne koristim prompt već striktno string


// Decimalni broj - floating point
const unosDecimalniBroj = '3.14'; // Decimalni dio se idvaja s točka

const unosdecimalniBroj = parseFloat(unosDecimalniBroj);

console.log(typeof unosDecimalniBroj,unosDecimalniBroj);

// cijeli broj
const cijeliBroj = parseInt('12');

console.log(typeof cijeliBroj,cijeliBroj);

// logička vrijednost
const logickaVrijednost = true; // ili false

console.log(typeof logickaVrijednost,logickaVrijednost);

// const je konstanta varijabla se nemože mijenjati

//"prava" varijebla u JS
let broj = 7;
// let dozvoljava promjenu vrijednosti varijable
broj = 9;

console.log(typeof broj,broj);

// let broj = 2 ; Nemože se redeklarirati varijabla s let

// JS je interpreter
broj= '9'; // Ja sada mijenjam tip varijable
console.log(typeof broj,broj);

// STARO, NE KORISTITI- što ne znači da ne postoji
var i = 7;
console.log(typeof i,i);
i='7';
console.log(typeof i,i);
var i = true;// var omogučava redeklaraciju  i to nije dobro
console.log(typeof i,i)

const velikiCijeliBroj = 45645689212345687n;
console.log(typeof velikiCijeliBroj,velikiCijeliBroj);

let  x; //undefind
console.log(typeof x, x);
x = 6;
console.log(typeof x, x);

let y = null;
console.log(typeof y, y);
// JSON-JavaScript Object Notation
const osobaObjekt = {
    ime: 'Pero',
    godine: 27,
    znaProgramirati: true

};
console.log(typeof osobaObjekt,osobaObjekt);
console.table(osobaObjekt);

const brojevi = [1,2,3,1]; // ALTGR+F daje uglatu zagradu []
console.log(typeof brojevi,brojevi); // piše object , ali to je Array

const podaciBeckend = [
    {
        ime: 'Pero',
        prezime: 'Perić',
        godina: 27
    },
    {
        ime: 'Ana',
        prezime: 'Anić'
    }
];

console.table(podaciBeckend);
// Tradicionalni način pisanja funkcija
function pozdrav(){
    console.log('Hello iz funkcije');
}

console.log(typeof pozdrav, pozdrav);

// Trenutni način pisanja funkcija- Arrow funkcija
const pozdravi = () => console.log('Hello iz funkcije nove');
console.log(typeof pozdravi, pozdravi);

const id1 = Symbol('id');// ovo ispod '' je opis
const id2 = Symbol('id');

console.log(typeof id1, id1);

// operator provjere jednakosti
// == -> provjera samo po vrijednosti '2' jednako je 2
// === -> provjerava po tipu i vrijednosti '20 nije jednako 2

console.log(id1 == id2);
console.log(id1 === id2)













     

