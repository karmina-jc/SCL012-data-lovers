/**
 * import POKEMON from './data/pokemon/pokemon.js'
 */
import POKEMON from './data/pokemon/pokemon.js'
console.log(POKEMON);
/* muestra los objetos */
const section = document.getElementById("todos");
const main = document.getElementById("all")
//section.innerHTML = Object.values(POKEMON[1]); // muestra los datos 

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
console.log(filterMultipliers);
});
// filtro por spawn chance
let spawnChanceFilter = document.getElementById("filterSpawnChance");
spawnChanceFilter.addEventListener ('click', 
function clickSpawnChance() {
const filterSpawn = POKEMON.filter(POKEMON => (POKEMON.multipliers >= 0 && POKEMON.multipliers <= 1.5));
console.log(filterSpawn);
});
// click a la imagen
let clickImage = document.getElementById('indPkm');
clickImage.addEventListener ('click', 
function clickOnInmage () {
let newDiv = document.createElement('div');
newDiv.setAttribute('class', 'pkmPopup');
newDiv.appendChild(indPkm);
let modalContent = document.createElement('div');
modalContent.setAttribute('class', 'modalContent');
modalContent.appendChild(pkmPopup);
document.getElementById('modalContent').style.display = 'block';
console.log(newDiv);
})
