let saldo = 50;
let efectivo = 20;

if (efectivo<saldo){
    console.log("el retiro se realiza satisfactoriamente")
}
if(efectivo<saldo){
    console.log("es verdadero")
}
else{
    console.log("el saldo n oes suficiente ")
}   

//if else
/* 
let nota = 5 ;
if (nota == 5){
    console.log("Enhorabuena has obtenido un sobresaliente");
} else if (nota == 4){
    console.log("buen trabajo mejora mas");
}else if (nota==3){
    console.log("Enhorabuena has obtenido un sobresaliente");
}else if (nota==2){
    console.log("Enhorabuena has obtenido un sobresaliente");
}else if (nota==1){
    console.log("Enhorabuena has obtenido un sobresaliente");
} else{
    console.log("nota ingresada incorrecta vuelva adigitarlo");
}
*/
// switch
let nota = 5;
switch (nota){
    case 5:
        console.log("Enhorabuena has obtenido un sobresaliente");
        break;
    case 4:
        console.log("buen trabajo mejora mas");
        break;
    case 3:
        console.log("Enhorabuena has obtenido un sobresaliente");
        break;
    case 2:
        console.log("Enhorabuena has obtenido un sobresaliente");
        break;
    case 1:
        console.log("Enhorabuena has obtenido un sobresaliente");
        break;
    default:
        console.log("nota ingresada incorrecta vuelva adigitarlo");
        break;
}