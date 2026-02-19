const ocjena = 3;

switch(ocjena){
    case 1:
    console.log('Nedovoljan');
    break;
    case 2:
    console.log('Dovoljan');
    break;
    case 3:
    console.log('Dobar');
    break;
    case 4:
    console.log('Vrlo dobar');
    break;
    case 5:
    console.log('Izvrstan');
    break;
    default:

    case 5:

    const doBroja = Number(a);
    if(!a){
        rezultat.innerHtml = 'unesi broj';
        return;
    }
    let s = '';
    for(let i=1;i<=doBroja;i++){
        console.log(i + ',');
        if(i===doBroja){
            s += i;
        }else{
            s += i + ',';
        }
    }
rezultat.innerHtml = s;
    break;
    
    
    
}