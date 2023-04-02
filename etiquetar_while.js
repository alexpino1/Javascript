//label 
let unidaddes = 0 
let decenas = 0 

bucleDecenas: while (true){
    bucleUnidades:while (true){
        console.log('el numero actual es: ${decenas}${unidades} ')
        unidaddes++
        if(unidades ===10){
            unidaddes=0
            break bucleUnidades
        }
        if(decenas===2){
            break bucleDecenas
        }
    }
    decenas++
}