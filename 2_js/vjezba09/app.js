
// funkcija je skup naredbi s određenom svrhom,koji ćemo više puta pozivati=>DRY

//osnovne vrste funkcija

//1. neprima vrijednost ne vraća vrijednost
//definiranje funkcije
function pozdraviSvijet(){
    console.log('Hllo world');
}
//poziv funkcije
pozdraviSvijet();


function parniBrojevi(odBroja,doBroja){
    const max = odBroja>doBroja ? odBroja : doBroja;
    const min = odBroja<doBroja ? odBroja : doBroja;
    for(let i=odBroja;i<doBroja;i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}
// poziv funkcije
log('prvi poziv')
parniBrojevi(3,8);
log('drugi poziv');
parniBrojevi(59,65);
log('treći poziv');
parniBrojevi(12,7);

function log(poruka){
    console.log('===========');
    console.log(poruka);
    console.log('===================');

}

//ne prima parametre , vraća vrijednost
//definiranje funkcije
function slucajniBroj(){
    const broj = Math.random();
    log(broj);
    return broj 
}
