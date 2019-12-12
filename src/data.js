/* Manejo de data */
import POKEMON from './data/pokemon/pokemon.js'

// Funcion filtrado
export function filtrado (valor){
  let pkmType = POKEMON.filter(pkm => (pkm.type.includes(valor)));
  return pkmType;   
}; 

// sort 
export function sortBy (dato){
  if (dato === "number"){
    POKEMON.sort(function sortNumDesc (a, b){
    return b.num - a.num;
  });  
  }
  if (dato == "aToZ"){
      POKEMON.sort(function sortNameAZ (a, b) {
      if (a.name < b.name) {return -1;}
      if (a.name > b.name) {return 1};
    });  
  }
  if (dato == "ZtoA"){
      POKEMON.sort(function sortNameZA (a, b) {
      if (b.name < a.name) {return -1;}
      if (b.name > a.name) {return 1};
    });
  }  
}






