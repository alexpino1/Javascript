let lista =[1,4,5,8,9,4,1,100]
for (let i=0; i < 10; i++){
console.log(i)
}

for (let i = 0; i< lista.length; i++) {
    console.log(lista[i]*2)
    
}
//for of
for (let valor of lista) {
    console.log(valor)
}
//foe each 
lista.forEach(valor => {
    console.log(valor)
});

let persona = {
    nombre:"gorka",
    apellido:"villar",
    edad:34,
    isdeveloper:true
}

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona.nombre)
}
