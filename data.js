//------------ FUNCION OBTENER LA DATA DE POKEMONES --------------------
export const getPokemons = (data) => {
  const onePokemon = [];
  for (let i=0; i<data.length; i++){
    onePokemon.push({
      'number': data[i].num,
      'name': data[i].name.toUpperCase(),
      'image': data[i].img,
      'type': data[i].type,
      'weakness': data[i].weaknesses,
      'resistant': data[i].resistant,
      'egg': data[i].egg,
      // 'height': data[i].size.height,
      // 'weight': data[i].size.weight,
      // 'candy': data[i].candy,
      // 'candyCount': data[i].candy_count,
      'generation' :data[i].generation.name.toUpperCase(),
    });
  }
  return onePokemon;
}

//----------------- FUNCION PARA BUSCAR POR NOMBRE--------------------------------
export const filterData = (pokeData, busqueda) => {
  return pokeData.filter(poke => poke.name.startsWith(busqueda));
}
//----------------- FUNCION PARA ORDENAR DE A-Z --------------------------------
export const sortNameAZ = (pokeData) => {
  pokeData.sort((poke1, poke2) => poke1.name.localeCompare(poke2.name))
  return pokeData;
};
//----FUNCION PARA OBTENER LA LISTA DE PROPIEDADES, (EJM: TYPO: GRASS, POISON, ROCK ICE, ETC
export const gettingProperties = (pokeData, propiedad) => {
  let array = [], num = 0;
  for (let i = 0; i < pokeData.length; i++){
    for (let j = 0; j < pokeData[i][propiedad].length; j++){
      array[num] = pokeData[i][propiedad][j];//array.push(pokeData[i][propiedad][i]);
      num += 1;
    }
  }
  const resultado=array.filter((item, index)=>{
  return array.indexOf(item)===index;
  })
  return resultado;
}
// getting eggs
export const gettingEgg = (pokeData, propiedad) => {
  let array = [];
  for (let i = 0; i < pokeData.length; i++){
    array.push(pokeData[i][propiedad])}
    const resultado=array.filter((item, index)=>{
      return array.indexOf(item)===index});

  return resultado
  }

// FILTRA POKEMONES QUE TENGA UNA DETERMINADA PROPIEDAD
export const filterProperties = (pokeData, property, oneProperty) => {
  const result = pokeData.filter(objeto => objeto[property].indexOf(oneProperty) > -1)
  return result;
}
// compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.
//import pok from './data/pokemon/pokemon.js'
//--------------------------------------------------------------/
//---------------- SHOW CARDS BY FILTERS  ----------------------/
//------------------------------------------------------------/

  // export const computeStats = () => {
  // const bottonFilter = document.querySelectorAll('.bottonFilter');
  // console.log(bottonFilter);
// };
  //computeStats()
  // bottonFilter.forEach(item =>
  // {
  //   const oneProperty = item.id;
  //   const property = item.name;
  //   //console.log(property, oneProperty);
  //     const pokemonFiltered= filterProperties(pokeData, property, oneProperty);
  //     console.log(property + ": "+ oneProperty + ": "+pokemonFiltered.length);
  //     console.log("Porcentaje: "+ (pokemonFiltered.length * 100)/251);
  //     pokemonsMainDiv.innerHTML = showPokemonsDiv(pokemonFiltered);
  //     showBackCard();
  // }
  // );
