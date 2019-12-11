/**
 * import POKEMON from './data/pokemon/pokemon.js'
 */
//section.innerHTML = Object.values(POKEMON[1]); // muestra los datos 
import POKEMON from './data/pokemon/pokemon.js'
console.log("database", POKEMON);
/* muestra los objetos */
//const section = document.getElementById("todos");
import * as data from './data.js';

const main = document.getElementById("all");
for (let i = 0; i < POKEMON.length; i++) {
    let newBtn = document.createElement('button'); // crea boton
    newBtn.setAttribute('class', 'indPkm'); //da clase al boton
    let newImg = document.createElement('img'); //crea una imagen
    let imgPokemon = (POKEMON[i].img); // toma la imagen desde la base de datos
    newImg.setAttribute('src', imgPokemon); //toma la source de la imagen
    newBtn.appendChild(newImg); //dice que la imagen esta dentro del boton
    let nameP = document.createElement('p'); // crea un <p>
    let namePokemon = document.createTextNode(POKEMON[i].name); // tome el nombre desde la base de datos
    nameP.appendChild(namePokemon);//pone el nombre en el <p> creado
    newBtn.appendChild(nameP); //dice que el nombre esta dentro del boton
    let numberP = document.createElement('p');
    let numberPokemon = document.createTextNode(POKEMON[i].num);
    numberP.appendChild(numberPokemon);
    newBtn.appendChild(numberP)

    main.appendChild(newBtn);
} 

// filtro por multiplicadores
let multipliersFilter = document.getElementById("filterMultipliers");
multipliersFilter.addEventListener ('click', 
function clickMultipliers() {
const filterMultipliers = POKEMON.filter(POKEMON => (POKEMON.multipliers >= 0 && POKEMON.multipliers <= 1.5));
console.log("filtro multipliers", filterMultipliers);

});
// filtro por spawn chance
let spawnChanceFilter = document.getElementById("filterSpawnChance");
spawnChanceFilter.addEventListener ('click', 
function clickSpawnChance() {
const filterSpawn = POKEMON.filter(POKEMON => (POKEMON.multipliers >= 0 && POKEMON.multipliers <= 1.5));
console.log("filtro por chance", filterSpawn);
});









