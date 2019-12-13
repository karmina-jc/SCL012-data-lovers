/* Manejo de data */
import POKEMON from './data/pokemon/pokemon.js';

// Funcion fultrado
export function filtradoTypo(valor) {
  const pkmType = POKEMON.filter((pkm) => (pkm.type.includes(valor)));
  return pkmType;
} 

export function filtradoWeakness(valor) {
  const pkmWeak = POKEMON.filter((pkm) => (pkm.weaknesses.includes(valor)));
  return pkmWeak;  
} 

// sort by numero decreciente
export function sortBy(dato) {
  if (dato === 'number') {
    POKEMON.sort(function sortNumDesc(a, b) {
    return b.num - a.num;
  })  
  }
  if (dato == 'aToZ'){
      POKEMON.sort(function sortNameAZ(a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1 }
    });
  }
  if (dato == 'ZtoA'){
      POKEMON.sort(function sortNameZA(a, b) {
      if (b.name < a.name) { return -1; }
      if (b.name > a.name) { return 1 }
    });
  }
};