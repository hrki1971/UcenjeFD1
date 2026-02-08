// uvjetno grananje if

// if radi s boolean tipom podatka

const uvjet = true;

// osnovna if sintaksa treba samo if granu

   if(uvjet){// u if granu se ulazi ako je vrijednost true
    console.log('Uvjet je true');

    
   } 

   //NIKADA NE RADITI OVAKO
   if(uvjet == true){
    console.log('Ovo netreba raditi');

   }
   // a bome ni ovo
   if(uvjet === true){
    console.log('Niti ovo netreba raditi');

   }
   // pošto if radi s boolean imamo i drugu granu else
    if(uvjet){
        console.log('Uvjet je true');

    }else{// ovdje se ulazi ako je vrijednost false
        console.log('Uvjet je false');

        
    } // ako ne postoje {} tada se uvjet odnosi samo na prvu slijedeću liniju
    if(uvjet)
        console.log('bez{} true');
    else
        console.log('bez{} false');
        console.log('Ovo se treba izvesti ako je false');// Ova linija nije dio else grane

// if naredba ima i els if dio
// bolja zamjena za els if je switch

const ocjena = 3;
if(ocjena === 1){
    console.log('Nedovoljan');
}else if(ocjena === 2){
    console.log('Dovoljan');
    
}else if(ocjena === 3){
    console.log('Dobar');
    
}
// možemo imati else if puno
else{
    console.log('Ocjena nije 1,2 ili 3');
}
// ugnježđeni if
if(uvjet){
    if(ocjena>1){
        console.log('Oba uvjeta su zadovoljena');
        
    }
    
}
// ovo gora može kraće
if(uvjet && ocjena>1){
    console.log('Kraći naćin zadovoljavanja oba uvjeta');
    
}

// tercijarni operator ? : je zapravo in line if
// ukoliko rezultat uvjet (true/false)pozove istu akciju ( uprimjeru consol.log)

if(ocjena >=2){
    console.log('Pozitivna');
    
}else{
    console.log('Negativna');
    
}
console.log(ocjena >2 ? 'Pozitivna' : 'Negativna');
    
// falsy/truly vrijednosti
const ime = '';// if(ime) false
// const ime = 'Pero' // if(ime)daje true
if(ime){
console.log('Ime je postavljeno');
}
// ostale falsy vrijednosti
const b=0; // if (b) false
let objekt=null;
let nedefinirano; // undefinde
const broj = Number('aaa');
console.log('broj');// NaN Not a number NaN je falsy


    
        
        
    




