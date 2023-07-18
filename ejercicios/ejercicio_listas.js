const compras = ["huevos" , "atun" , "leche", "pan" , "avena"];
compras.push("Aceite de Girasol");
console.log(compras)
compras.pop()
console.log(compras)
const listaPeliculas = [
    { titulo: "john wick 3:Parabellum", director: "Chad Stahelski",fecha: new Date(2023,5,14)},
    { titulo: "Demon Slayer: El tren infinito", director: "Haruo Sotozaki", fecha: new Date(2020,4,22)},
    { titulo: "Jujutsu Kaisen Cero",director:"Park Sung-hoo", fecha:new Date(2021,12,24)}
]
const fechaReferencia = new Date (2010,1,1);
const nuevaLista = listaPeliculas.filter(obj => obj.fecha > fechaReferencia  )
console.log(nuevaLista)
const listadirectores = listaPeliculas.map(obj => obj.director)
const listatitulos = listaPeliculas.map(obj => obj.titulo)
console.log(listadirectores)
//const listatitulos = listaPeliculas.map(obj => obj.titulo)
const listadirectoresytitulos = listadirectores.concat(listatitulos)
console.log(listadirectoresytitulos)
const listadirectoresytitulos2 = [...listadirectores, ...listatitulos];
console.log( listadirectoresytitulos2)
