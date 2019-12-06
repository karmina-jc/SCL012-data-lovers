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
    let newBtn = document.createElement('button'); // crea div
    newBtn.setAttribute('class', 'indPkm');
    let newImg = document.createElement('img');
    let imgPokemon = (POKEMON[i].img);
    newImg.setAttribute('src', imgPokemon);
    newBtn.appendChild(newImg);
    let nameP = document.createElement('p');
    let namePokemon = document.createTextNode(POKEMON[i].name);
    nameP.appendChild(namePokemon);
    newBtn.appendChild(nameP);
    let numberP = document.createElement('p');
    let numberPokemon = document.createTextNode(POKEMON[i].num);
    numberP.appendChild(numberPokemon);
    newBtn.appendChild(numberP)

    main.appendChild(newBtn);
} 

