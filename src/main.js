import POKEMON from './data/pokemon/pokemon.js';
import {filtradoTypo} from './data.js';
import {filtradoWeakness} from './data.js';
import {sortBy} from './data.js';

/* muestra los objetos */
//const section = document.getElementById("todos");
const main = document.getElementById("all")
const overlay = document.getElementById("overlay");
const fortaleza = ["Ground", "Rock", "water"]

function createCard(data) {
    for (let i = 0; i < data.length; i++) {
        let newBtn = document.createElement('button'); // crea boton
        newBtn.setAttribute('class','indPkm'); //da clase al boton
        newBtn.setAttribute('name', data[i].name)
        let newImg = document.createElement('img'); //crea una imagen
        newImg.setAttribute('src', data[i].img); //toma la source de la imagen
        newBtn.appendChild(newImg); //dice que la imagen esta dentro del boton
        let nameP = document.createElement('p'); // crea un <p>
        let namePokemon = document.createTextNode(data[i].name); // tome el nombre desde la base de datos
        nameP.appendChild(namePokemon);//pone el nombre en el <p> creado
        newBtn.appendChild(nameP); //dice que el nombre esta dentro del boton
        let numberP = document.createElement('p');
        let numberPokemon = document.createTextNode(data[i].num);
        numberP.appendChild(numberPokemon);
        newBtn.appendChild(numberP);

        main.appendChild(newBtn);
    };
};

//todos por defecto
createCard(POKEMON);

function createOverCard(data) {
    for (let i = 0; i < data.length; i++){
        let divOne = document.createElement('div');
        divOne.setAttribute('class', 'contImg');
        divOne.setAttribute('id', data[i].id)
        let btnCerrar = document.createElement('button');
        let btnX = document.createTextNode('X');
        btnCerrar.appendChild(btnX);
        divOne.appendChild(btnCerrar);
        let pkmImg = document.createElement('img');
        pkmImg.setAttribute('src', data[i].img);
        divOne.appendChild(pkmImg);
        let nameP = document.createElement('p'); 
        let namePokemon = document.createTextNode(data[i].name +" "+ data[i].num); 
        nameP.setAttribute('id', 'name');
        nameP.appendChild(namePokemon);
        divOne.appendChild(nameP);
        let typePokemon = document.createTextNode(data[i].type);
        let typePkm = document.createElement('p');
        typePkm.appendChild(typePokemon);        
        divOne.appendChild(typePkm);
        let fortePokemon = document.createTextNode(fortaleza);
        let frtPkm = document.createElement('p');
        frtPkm.setAttribute('class', 'strength')
        frtPkm.appendChild(fortePokemon);        
        divOne.appendChild(frtPkm);
        let weakPokemon = document.createTextNode(data[i].weaknesses);
        let wkPkm = document.createElement('p');
        wkPkm.setAttribute('class', 'weakness')
        wkPkm.appendChild(weakPokemon);        
        divOne.appendChild(wkPkm);       
        
        overlay.appendChild(divOne);
    }
    document.querySelector('.contImg button').addEventListener("click", () =>{
        overlay.innerHTML = ""
        overlay.classList.remove('activo')
    })
}  
// Filtrado por Tipo

document.querySelectorAll('.typeOption button').forEach((elemento) => {
    elemento.addEventListener("click", () => {
        let valor = elemento.value;
        main.innerHTML = ""   
        const pkmType = filtradoTypo(valor);
        console.log(pkmType);
        createCard(pkmType);
    })
});

// Filtrado por Debilidad

document.querySelectorAll('.typeWeakness button').forEach((elemento) => {
    elemento.addEventListener("click", () => {
        let valor = elemento.value;
        main.innerHTML = ""   
        let pkmWeak = filtradoWeakness(valor);
        console.log(pkmWeak);
        createCard(pkmWeak);
    })
});

//listener para las imagenes para overlay
document.querySelectorAll('#all .indPkm').forEach((elemento) => {
    elemento.addEventListener("click", () => {
        console.log('onCLick()');
        let imgOver = elemento.getAttribute('name');
        function filtroOver (valor){
            return POKEMON.filter(pkm => (pkm.name === valor))}
        let pkmOver = filtroOver(imgOver);
        overlay.classList.add('activo');
        createOverCard(pkmOver);
    })
});

//ordenar por
const sortData = document.getElementById("sortData");
sortData.addEventListener("change", () => {
    let dato = document.getElementById("sortData").value;
    main.innerHTML = "";
    sortBy(dato);
    createCard(POKEMON);
    
})
const btnTipo = document.getElementById("filterType");
const btntipo2 = document.getElementById('filterType2');
const btnWkn = document.getElementById('"filterWeakness"')
const btnWkn2 = document.getElementById('"filterWeakness2"')

btnTipo.addEventListener("click", () => {    
    const optionList = document.getElementById("typeOption");
    optionList.style.display = 'block';
    btntipo2.style.display = 'block';  
    btnTipo.style.display = 'none';
});

btnTipo2.addEventListener("click", () => {    
    optionList.style.display = 'none';    
    btnTipo.style.display = 'block';
    btntipo2.style.display = 'none';
});
btnWkn.addEventListener("click", () => {    
    const optionList = document.getElementById("typeWeakness");
    optionList.style.display = 'block';
    btnWkn2.style.display = 'block';  
    btnWkn.style.display = 'none';
});

btnWkn2.addEventListener("click", () => {    
    optionList.style.display = 'none';    
    btnWkn.style.display = 'block';
    btnWkn2.style.display = 'none';
});
