import POKEMON from './data/pokemon/pokemon.js';
console.log(POKEMON);
import{filtrado}from './data.js';
import{sortBy}from './data.js';

/* muestra los objetos */
//const section = document.getElementById("todos");
const main = document.getElementById("all")
const overlay = document.getElementById("overlay");
const fortaleza = ["Ground", "Rock", "water"]

function createCard (data){
    for (let i = 0; i < data.length; i++){
        let newBtn = document.createElement('button'); // crea boton
        newBtn.setAttribute('class','indPkm'); //da clase al boton
        newBtn.setAttribute("name", data[i].name)
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

function createOverCard(data){
    for (let i = 0; i < data.length; i++){
        let divOne = document.createElement("div");
        divOne.setAttribute("class", "contImg");
        divOne.setAttribute("id", data[i].id)
        let btnCerrar = document.createElement("button");
        let btnX = document.createTextNode("X");
        btnCerrar.appendChild(btnX);
        divOne.appendChild(btnCerrar)
        let pkmImg = document.createElement("img");
        pkmImg.setAttribute("src", data[i].img);
        divOne.appendChild(pkmImg);
        let nameP = document.createElement('p'); 
        let namePokemon = document.createTextNode(data[i].name +" "+ data[i].num ); 
        nameP.setAttribute("id", "name");
        nameP.appendChild(namePokemon);
        divOne.appendChild(nameP);
        let typePokemon = document.createTextNode(data[i].type);
        let typePkm = document.createElement('p');
        typePkm.appendChild(typePokemon);        
        divOne.appendChild(typePkm);
        let fortePokemon = document.createTextNode(fortaleza);
        let frtPkm = document.createElement('p');
        frtPkm.setAttribute("class", "strength")
        frtPkm.appendChild(fortePokemon);        
        divOne.appendChild(frtPkm);
        let weakPokemon = document.createTextNode(data[i].weaknesses);
        let wkPkm = document.createElement('p');
        wkPkm.setAttribute("class", "weakness")
        wkPkm.appendChild(weakPokemon);        
        divOne.appendChild(wkPkm);       
        
        overlay.appendChild(divOne);
    }
    document.querySelector(".contImg button").addEventListener("click", () =>{
        overlay.innerHTML = ""
        overlay.classList.remove("activo")
    })
}  
//todos por defecto
for (let i = 0; i < POKEMON.length; i++) {
    let newBtn = document.createElement('button'); // crea boton
    newBtn.setAttribute('class', 'indPkm'); //da clase al boton
    newBtn.setAttribute("name", POKEMON[i].name)
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

// Filtrado

document.querySelectorAll(".typeOption button").forEach((elemento) => {
    elemento.addEventListener("click", () => {
        let valor = elemento.value;
        main.innerHTML = ""   
        let pkmType = filtrado(valor);
        console.log(pkmType);
        createCard(pkmType);
    })
});

//listener para las imagenes
document.querySelectorAll("#all .indPkm").forEach((elemento)=>{
    elemento.addEventListener("click", () => {
        console.log("onCLick()");
        let imgOver = elemento.getAttribute("name");
        function filtroOver (valor){
            return POKEMON.filter(pkm => (pkm.name === valor))}
        let pkmOver = filtroOver(imgOver);
        overlay.classList.add('activo');
        createOverCard(pkmOver);
    })
});

const sortData = document.getElementById("sortData");

sortData.addEventListener("change", () => {
    let dato = document.getElementById("sortData").value;
    main.innerHTML = "";
    let pkmSort = sortBy(dato);
    console.log(pkmSort)
    
})
/*btnTipo = document.getElementById("filterType")

btnTipo.addEventListener("clik", () =>{

}) */