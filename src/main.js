import POKEMON from './data/pokemon/pokemon.js';
import {
  filtradoTypo, filtradoWeakness, filterByNAme, multiplierCP, sortBy,
} from './data.js';

/* muestra los objetos */
const main = document.getElementById('all');
const overlay = document.getElementById('overlay');
const fortaleza = ['Ground', 'Rock', 'water'];

function createCard(data) {
  for (let i = 0; i < data.length; i += 1) {
    const newBtn = document.createElement('button');
    newBtn.setAttribute('class', 'indPkm');
    newBtn.setAttribute('name', data[i].name);
    const newImg = document.createElement('img');
    newImg.setAttribute('src', data[i].img);
    newBtn.appendChild(newImg);
    const nameP = document.createElement('p');
    const namePokemon = document.createTextNode(data[i].name);
    nameP.appendChild(namePokemon);
    newBtn.appendChild(nameP);
    const numberP = document.createElement('p');
    const numberPokemon = document.createTextNode(data[i].num);
    numberP.appendChild(numberPokemon);
    newBtn.appendChild(numberP);

    main.appendChild(newBtn);
  }
}

// crea calculadora de puntos de combate

function createCalculator() {
  const nameCalc = document.createElement('h3');
  const txtCalc = document.createTextNode('Calculadora de PC');
  nameCalc.appendChild(txtCalc);
  main.appendChild(nameCalc);
  const inputName = document.createElement('input');
  inputName.setAttribute('class', 'inptxt');
  inputName.setAttribute('id', 'inpName');
  inputName.setAttribute('placeholder', 'Ingresa el nombre de tu Pokemon');
  main.appendChild(inputName);
  const inputCP = document.createElement('input');
  inputCP.setAttribute('class', 'inptxt');
  inputCP.setAttribute('placeholder', 'Ingresa el PC de tu Pokemon');
  inputCP.setAttribute('id', 'inpCP')
  main.appendChild(inputCP);  
  const btnCalcular = document.createElement('button');
  btnCalcular.setAttribute('class', 'btn')
  btnMultiplier.setAttribute('id', 'btnMulti')
  const infCalcular = document.createTextNode('Calcular');
  btnCalcular.appendChild(infCalcular);
  main.appendChild(btnCalcular);
  const outputCP = document.createElement('input');
  outputCP.setAttribute('class', 'inptxt');
  outputCP.setAttribute('id', 'outputCP')
  main.appendChild(outputCP); 

  const btnMulti = document.getElementById('btnMulti')

  btnMulti.addEventListener('click', () => {
    console.log('Hola')
    const inputPkmName = document-getElementById('inpName').value;
    const inputPkmCp = document.getElementById('inpCP').value;
    const pkmByName = filterByNAme(inputPkmName);
    multiplierCP(inputPkmCp, pkmByName);
  })
}

// todos por defecto

createCard(POKEMON);

function createOverCard(data) {
  for (let i = 0; i < data.length; i += 1) {
    const divOne = document.createElement('div');
    divOne.setAttribute('class', 'contImg');
    divOne.setAttribute('id', data[i].id);
    const btnCerrar = document.createElement('button');
    const btnX = document.createTextNode('X');
    btnCerrar.appendChild(btnX);
    divOne.appendChild(btnCerrar);
    const pkmImg = document.createElement('img');
    pkmImg.setAttribute('src', data[i].img);
    divOne.appendChild(pkmImg);
    const nameP = document.createElement('p');
    const espacio = ' ';
    const namePokemon = document.createTextNode(data[i].name + espacio + data[i].num);
    nameP.setAttribute('id', 'name');
    nameP.appendChild(namePokemon);
    divOne.appendChild(nameP);
    const typePokemon = document.createTextNode(data[i].type);
    const typePkm = document.createElement('p');
    typePkm.appendChild(typePokemon);
    divOne.appendChild(typePkm);
    const fortePokemon = document.createTextNode(fortaleza);
    const frtPkm = document.createElement('p');
    frtPkm.setAttribute('class', 'strength');
    frtPkm.appendChild(fortePokemon);
    divOne.appendChild(frtPkm);
    const weakPokemon = document.createTextNode(data[i].weaknesses);
    const wkPkm = document.createElement('p');
    wkPkm.setAttribute('class', 'weakness');
    wkPkm.appendChild(weakPokemon);
    divOne.appendChild(wkPkm);

    overlay.appendChild(divOne);
  }
  document.querySelector('.contImg button').addEventListener('click', () => {
    overlay.innerHTML = '';
    overlay.classList.remove('activo');
  });
}

// Filtrado por Tipo

document.querySelectorAll('.typeOption button').forEach((elemento) => {
  elemento.addEventListener('click', () => {
    const valor = elemento.value;
    main.innerHTML = '';
    const pkmType = filtradoTypo(valor);
    createCard(pkmType);
  });
});

// Filtrado "Debil contra"

document.querySelectorAll('.typeWeakness button').forEach((elemento) => {
  elemento.addEventListener('click', () => {
    const valor = elemento.value;
    main.innerHTML = '';
    const pkmWeak = filtradoWeakness(valor);
    createCard(pkmWeak);
  });
});

// filtrado "Fuerte contra"

/* document.querySelectorAll('.typeStrength button').forEach((elemento) => {
  elemento.addEventListener('click', () => {
    const valor = elemento.value;
    main.innerHTML = '';
    const pkmStg = filterStrength(valor);
    createCard(pkmStg);
  });
}); */

// listener imagenes para overlay

document.querySelectorAll('#all .indPkm').forEach((elemento) => {
  elemento.addEventListener('click', () => {
    const imgOver = elemento.getAttribute('name');
    const pkmOver = filterByNAme(imgOver);
    overlay.classList.add('activo');
    createOverCard(pkmOver);
  });
});

// ordenar por
const sortData = document.getElementById('sortData');
sortData.addEventListener('change', () => {
  const dato = document.getElementById('sortData').value;
  main.innerHTML = '';
  sortBy(dato);
  createCard(POKEMON);
});

// Calculadora de puntos de combate

const btnMultiplier = document.getElementById('multipliers');

btnMultiplier.addEventListener('click', () => {
  main.innerHTML = '';
  createCalculator();
})




const menuImg = document.getElementById('menuImg');
const menuList = document.getElementById('subnavi');
const menuImg2 = document.getElementById('menuImg2');
menuImg.addEventListener('click', () => {
  menuImg2.style.display = 'flex';
  menuList.style.display = 'block';
  menuImg.style.display = 'none';
});
menuImg2.addEventListener('click', () => {
  menuList.style.display = 'none';
  menuImg.style.display = 'flex';
  menuImg2.style.display = 'none';
});

const btnTipo = document.getElementById('filterType');
const btntipo2 = document.getElementById('filterType2');
const btnWkn = document.getElementById('filterWeakness');
const btnWkn2 = document.getElementById('filterWeakness2');

btnTipo.addEventListener('click', () => {
  const optionList = document.getElementById('typeOption');
  optionList.style.display = 'block';
  btntipo2.style.display = 'block';
  btnTipo.style.display = 'none';
});

btntipo2.addEventListener('click', () => {
  const optionList = document.getElementById('typeOption');
  optionList.style.display = 'none';
  btnTipo.style.display = 'block';
  btntipo2.style.display = 'none';
});
btnWkn.addEventListener('click', () => {
  const optionList = document.getElementById('typeWeakness');
  optionList.style.display = 'block';
  btnWkn2.style.display = 'block';
  btnWkn.style.display = 'none';
});

btnWkn2.addEventListener('click', () => {
  const optionList = document.getElementById('typeWeakness');
  optionList.style.display = 'none';
  btnWkn.style.display = 'block';
  btnWkn2.style.display = 'none';
});
