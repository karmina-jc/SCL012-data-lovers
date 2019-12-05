/**
 * import POKEMON from './data/pokemon/pokemon.js'
 */
import POKEMON from './data/pokemon/pokemon.js'
console.log(POKEMON);
/* muestra los objetos */
const section = document.getElementById("todos");
//section.innerHTML = Object.values(POKEMON[1]); // muestra los datos 

for (let i = 0; i < POKEMON.length; i++) {
    let parrafo = document.createElement('div'); // crea paragrafo
    let datosPokemon = document.createTextNode(POKEMON[i].name);
    parrafo.appendChild(datosPokemon);
    section.appendChild(parrafo);
} 

