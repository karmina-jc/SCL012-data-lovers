/* Manejo de data */
import POKEMON from './data/pokemon/pokemon.js'


// Funcion fultrado
export function filtrado (valor){
  let pkmType = POKEMON.filter(pkm => (pkm.type.includes(valor)));
  return pkmType;   
}; 


/*
export const tipoPlanta = POKEMON.filter(POKEMON.type === 'Grass') => {
  return tipoPlanta;
};
*/


/*
export const example = () => {
  return 'example';
}
*/
/*
export const imagenes = POKEMON.filter(item => (item.img)) => {
  return imagenes;
}*/