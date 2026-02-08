// nizovi su struktura podataka
const niz = []; // ovo je prazan niz
console.log(niz, niz.length);


// nizovi služe za pohranjivnje više vrijednosti pod istim nazivom varijable
//potreba unosa 12 mjesečnih temperatura
const temperature = [-2,2,10,15,21,25,29,31,28,19,10,4];
console.log(temperature,length);// 12
//niz ima pojam index i index kreče od broja 0
// prvi element se nalazi na indexu 0 , a tzadnji element se nalazi na lenght -1
console.log('siječanj',temperature[0]);// prvi element niza
const zadnji = temperature.length-1;
console.log('prosinac',temperature[zadnji]);// zadnji element niza

console.log(temperature);

// const se ne može mijenjati
//kod nizova to znaći da ga ne mogu redeklarirati niti promjeniti tip
// temperature=222; ovo ne mogu
//vrijednosti u nizu se mogu mijenjati !!!
//npr. postaviti za mjesec ožujak 17 
temperature[2]=17;
console.log(temperature);
//niz može imati bilo koji tip podatka i može se miješati
//ponavljanje tipova podataka (ptp)
const ptp = [
    'Osijek',//String
    12,// Number
    {ime:'Pero'},//objekt
    15n,//BigInt
    [], // Niz
    true,//Boolean
    null,//Nepoznata vrijednost ojekta
    undefined,//Nedefinirana vrijednost
    Symbol('id'), // jedinstvena vrijednost

];
console.log(ptp);

//nakon zadnjeg elementa niza dozvoljen je zarez
// sve ovo gore je jednodimenzionalni niz

// nizovi mogu biti višedimenzionalni- u teoriji beskonačni niz dimenzija
// 2D niz je tablica (matrica)

const tablica = [
    [1,2,3],// index reda 0
    [4,5,6],// index reda 1
    [7,8,9] // index reda 2

];

console.log(tablica);

// indeksi idu prvo po redovime ,pa u redu po koloni
// npr. ispisati broj 6

console.log(tablica[1] [2]);
// na mjesto gdje se nalazi 7 postaviti 10
tablica[2][0] = 10;

// 3D niz je kocka
// 4D niz je Tensor
// itd ...




