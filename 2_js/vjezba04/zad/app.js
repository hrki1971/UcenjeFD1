
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
rezultat.innerHTML='';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;



// zadatak 2
if(zadatak === 2){
  const x = Number(a);
  if(!x){
    rezultat.innerHTML = 'A nije broj';
    return;
  }
const y = Number(b);
if(!y){
  rezultat.innerHTML = 'B nije broj';
  return;
}
const z = Number(c);
if(!z){
  rezultat.innerHTML = 'C nije broj';
  return;
}
if(x<y&&x<z){
  rezultat.innerHTML = x;
}else if(y<x&& y<z){
  rezultat.innerHTML = y;
}else{
  rezultat.innerHTML = z;
}







  return;
}

  // zadatak 3

  if(zadatak === '3'){
    const x = Number(a);
    const y = Number(b);
    const z = Number(c);
    const w = Number(d);
    if(isNaN(x)){
      rezultat.innerHTML = 'A nije broj';
      return;
    }
      if(isNaN(y)){
      rezultat.innerHTML = 'B nije broj';
      return;
    }
    if(isNaN(z)){
      rezultat.innerHTML = 'C nije broj';
      return;
    }
    if(isNaN(w)){
      rezultat.innerHTML = 'D nije broj';
      return;
    }
    rezultat.innerHTML = x+y+z+w;
    // rezultat.inner.HTML = a+b+c+d (ovdje spaja stringove)





    return;
  }

// zadatak 4
if(zadatak === '4') {





  return;
}

if(zadatak === '5'){
  console.log('Rješavam zadatak 5');
  const x = Number(a);
 const y = Number(b);
 const z = Number(c);
 const q = Number(d);

 if(!x || !y || !z || !q){
  rezultat.innerHTML='Jedno od unosnih polja nije broj';
  
 }
 if(x>y && z>q){
  rezultat.innerHTML=x+z;
 }
 else if(x>y && q>z){
  rezultat.innerHTML=x+q;

 }
 else if(x>y && z>q){
  rezultat.innerHTML=y+z;
 }
 else if(y>x && q>z){
 rezultat.innerHTML=y+q;
 }

 



 return;

  

 

  
}
// if zadatak=1
  // Za svaki zadatak zahtijevamo određene ulaze
  if(zadatak === '1') {
    //console.log('1. zadatak');
   // console.log(a);
    const x = Number(a);
    if(!x){
      rezultat.innerHTML = 'A nije broj';
      return;
    }
    const y = Number(b);
    if(!y){
      rezultat.innerHTML = 'B nije broj';
      return;

    }
    // ovdje sam siguran kako imam brojeve u varijablama x i y
  if(x>y){
    rezultat.innerHTML=x;

  }else if(y>x){
    rezultat.innerHTML=y;
  }else{
    rezultat.innerHTML='A i B su isti';
  }
    
    

    
    
    return; // short curcuiting
  }
 


if(zadatak === '6'){
//  Za upisani broj u polju D Ispiši 10 puta veći broj
const x = Number(d);
if(!x ||  x===0){
  rezultat.innerHTML='Vrijednost u polju D nije broj ili je 0';
  return;
}

rezultat.innerHTML = x*10;


  return;
}

if(zadatak === '7'){
// Za uneseno ima grada u polju B ispiši dali je sjedište Edunive
if(!b){
  rezultat.innerHTML = 'Obavezan unos grada pod vrijednost B';
  return;

}
if(b === 'Osijek'){
  rezultat.innerHTML= '${b} je sjedište Edunove'
}
else{
  rezultat.innerHTML='${b} nije sjedište Edunove'
}




  return;
}

if(zadatak==='8'){
//za upisane pojmove u polju A i B ispiši ih jednog pored drugog
rezultat.innerHTML = `${a} ${b}`






  return;
}

if(zadatak==='9'){
const x = Number(a);
const y = Number(d);
if(!x || x===0){
  rezultat.innerHTML='Greška';
  return;

}if(!y || y===0){
  rezultat.innerHTML='Greška';
  return;







}
rezultat.innerHTML=x*y;
return;

}

