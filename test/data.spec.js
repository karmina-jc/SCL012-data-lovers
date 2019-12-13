import POKEMON from './data/pokemon/pokemon.js';
import {filtradoTypo} from './data.js';
import {filtradoWeakness} from './data.js';
import {sortBy} from './data.js';

describe('data-lover', () => {

   it('debería ser un objeto', () => {
    assert.equal(typeof POKEMON, 'object');
  })

  describe('funcion filtrado por tipo', () => {

    it('debería ser una función', () => {
      expect(typeof filtradoTypo).toBe('function');
    })
  
    it('debería retornar "Bulbasaur" para typePkm[0].name con filtrado por tipo "Grass', () => {
      const typePkm = filtradoTypo('Grass');
      expect(typePkm[0].name).toBe('Bulbasaur');
    })
    it('debería retornar "Slowpoke" para typePkm[3].name con filtrado por tipo Psychic', () => {
      const typePkm = filtradoTypo('Psychic');
      expect(typePkm[3].name).toBe('Slowpoke');
    })
  })

  describe('funcion filtrado Debil contra', () => {

    it('debería ser una función', () => {
      expect(typeof filtradoWeakness).toBe('function');
    })
  
    it('debería retornar "Pikachu" para wknPkm[4].name con filtrado por tipo debilidad contra "Ground', () => {
      const wknPkm = filtradoWeakness('Ground');
      expect(wknPkm[4].name).toBe('Pikachu');
    })
    it('debería retornar "Butterfree" para wknPkm[5].num con filtrado por tipo debilidad contra Fire', () => {
      const wknPkm = filtradoWeakness('Fire');
      expect(wknPkm[5].num).toBe('Butterfree');
    })
  })
  
  describe('funcion filtrado Ordenar por', () => {

    it('debería ser una función', () => {
      expect(typeof sortBy).toBe('function');
    })
  
    it('debería retornar "Kabuto" para sortPkm[11].name con Orden por numero decreciente"', () => {
      const sortPkm = sortBy('number');
      expect(sortPkm[11].name).toBe('Kabuto');
    })
    it('debería retornar "Arcanine" para sortPkm[4].name con Orden de la A a la Z', () => {
      const sortPkm = sortBy('aToZ');
      expect(sortPkm[4].name).toBe('Arcanine');
    })
    it('debería retornar "Ratata" para sortPkm[35].name con Orden de la Z a la A', () => {
      const sortPkm = sortBy('ZtoA');
      expect(sortPkm[35].name).toBe('Ratata');
    })
  })
})