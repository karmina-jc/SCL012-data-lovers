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

// funciones de multiplicador de CP

export function filterByNAme(valor) {
  return POKEMON.filter((pkm) => (pkm.name === valor));
}

export function multiplierCP (cp, pkmByName) {
  let multiplicador = pkmByName.filter((pkm) => (pkm.multipliers));
  console.log(multiplicador)
  return cp * multiplicador;

}


/* export function filterStrength(valor) {
  if (valor === 'Grass') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Flying' || 'Fire' || 'Ice' || 'Bug' || 'Poison')));
    return pkmStg;
  }
  if (valor === 'Poison') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Psychic' || 'Ground')));
    return pkmStg;
  }
  if (valor === 'Fire') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Ground' || 'water' || 'Rock')));
    return pkmStg;
  }
  if (valor === 'Ice') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Fighting' || 'Rock' || 'Steel' || 'Fire')));
    return pkmStg;
  }
  if (valor === 'Flying') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Rock' || 'Ice' || 'Electric')));
    return pkmStg;
  }
  if (valor === 'Psychic') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Bug' || 'Ghost' || 'Dark')));
    return pkmStg;
  }
  if (valor === 'Water') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Grass' || 'Electric')));
    return pkmStg;
  }
  if (valor === 'Ground') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Water' || 'Grass' || 'Ice')));
    return pkmStg;
  }
  if (valor === 'Rock') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Water' || 'Grass' || 'Steel' || 'Fighting' || 'Ground')));
    return pkmStg;
  }
  if (valor === 'Electric') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Ground')));
    return pkmStg;
  }
  if (valor === 'Bug') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Flying' || 'Fire' || 'Rock')));
    return pkmStg;
  }
  if (valor === 'Normal') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Fighting')));
    return pkmStg;
  }
  if (valor === 'Fighting') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Flying' || 'Psychic' || 'Fairy')));
    return pkmStg;
  }
  if (valor === 'Ghost') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Ghost' || 'Dark')));
    return pkmStg;
  }
  if (valor === 'Dark') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Fighting' || 'Bug' || 'Fairy')));
    return pkmStg;
  }
  if (valor === 'Steel') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Ground' || 'Fighting')));
    return pkmStg;
  }
  if (valor === 'Dragon') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Dragon' || 'Fairy' || 'Ice')));
    return pkmStg;
  }
  if (valor === 'Fairy') {
    const pkmStg = POKEMON.filter((pkm) => (pkm.type.includes('Poison' || 'Steel')));
    return pkmStg;
  }
  return filterStrength;
} */

// sort by numero decreciente
export function sortBy(dato) {
  if (dato === 'number') {
    const numOrder = POKEMON.sort((a, b) => (b.num - a.num));
    return numOrder;
  }
  if (dato === 'aToZ') {
    POKEMON.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return sortBy;
    });
  }
  if (dato === 'ZtoA') {
    POKEMON.sort((a, b) => {
      if (b.name < a.name) { return -1; }
      if (b.name > a.name) { return 1; }
      return sortBy;
    });
  }
  return sortBy;
}
