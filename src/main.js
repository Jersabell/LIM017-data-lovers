import { getPokemons } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(filterData, data);

const pokemons = document.getElementById('pokemons');

// DATA VARIABLES
const showPokemons = getPokemons(data.pokemon);

console.log(showPokemons)
