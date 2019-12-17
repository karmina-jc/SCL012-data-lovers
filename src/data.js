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

/* export function filterStrength(valor) {
  if(valor === '')
  const pkmWeak = POKEMON.filter((pkm) => (pkm.weaknesses.includes(valor)));
  return pkmWeak;
} */

// sort by numero decreciente
export function sortBy(dato) {
  if (dato === 'number') {
    const numOrder = POKEMON.sort((a, b) => (b.num - a.num));
    return numOrder;
  }
  if (dato === 'aToZ') {
    const azOrder = POKEMON.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return azOrder;
    });
  }
  if (dato === 'ZtoA') {
    const zaOrder = POKEMON.sort((a, b) => {
      if (b.name < a.name) { return -1; }
      if (b.name > a.name) { return 1; }
      return zaOrder;
    });
  }

}
