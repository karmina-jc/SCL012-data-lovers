/* Manejo de data */
// esta es una función de ejemplo
/*
export const example = () => {
  return 'example';
}
*/

// sort by numero decreciente
const sortByNum = POKEMON.sort(function sortNumDesc (a, b) {
    return b.num - a.num;
});
console.log("ordenar numero descreciendo", sortByNum);
// sort alfabeticamente de A - Z
const sortByName = POKEMON.sort(function sortNameAZ (a, b) {
    if (a.name < b.name) {return -1;}
    if (a.name > b.name) {return 1};
});
console.log("sort by name", sortByName);
// sort alfabeticamente de Z - A
const sortZtoA = POKEMON.sort(function sortNameZA (a, b) {
    if (b.name < a.name) {return -1;}
    if (b.name > a.name) {return 1};
});
console.log("sort by name Z to A", sortZtoA);