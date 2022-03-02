import { getPokemons } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(filterData, data);
const pokemonsMainDiv = document.getElementById('main__div-Characteres');

// DATA VARIABLES funcion -- // pokemonNew
const pokeData = getPokemons(data.pokemon);

// funcion mostrar pokemones
const showPokemonsDiv = (pokeData) => {
  let showAll = "";
  //for (let i = 0; i < pokeData.length; i++)
  for (let i = 0; i < 3; i++){
    let showEachOne =
      `<div id="pokemonCard" class="card">
        <div class="cardImg">
          <img class="main__div-P-Img"src= "${pokeData[i].image}" />
        </div>
        <div class="cardInfo">
          <p class="main__div-P-Numero">${pokeData[i].number}</p>
          <p class="main__div-P-Nombre">${pokeData[i].name}</p>
          <button class="main__div-P-Boton">Ver información</button>
        </div>
      </div>`;
    showAll += showEachOne;
  }
  return showAll;
}
pokemonsMainDiv.innerHTML = showPokemonsDiv(pokeData);
// imprime la data de los pokemones
//console.log(pokeData)