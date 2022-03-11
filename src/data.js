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
      'height': data[i].height,
      'weight': data[i].weight,
      'candy': data[i].candy,
      'candyCount': data[i].candy_count
    });
  }
  return onePokemon;
}
//----------------- FUNCION PARA BUSCAR POR NOMBRE--------------------------------
export const filterData = (pokeData, busqueda) => {
  return pokeData.filter(poke => poke.name.startsWith(busqueda));
}

export const sortNameAZ = (pokeData) => {
  pokeData.sort((poke1, poke2) => poke1.name.localeCompare(poke2.name))
  return pokeData;
};
// getting all types an weaknesses
export const typeWeaknessSort = (pokeData, propiedad) => {
  let array = [], num = 0;
  for (let i = 0; i < pokeData.length; i++){
    for (let j = 0; j < pokeData[i][propiedad].length; j++){
      array[num] = pokeData[i][propiedad][j];// ;  array.push(pokeData[i][propiedad][i]);
      num = num + 1;
    }
  }
  const resultado=array.filter((item, index)=>{
  return array.indexOf(item)===index;
  })
  return resultado;
}
// getting eggs
export const eggSort = (pokeData, propiedad) => {
  let array = [];
  for (let i = 0; i < pokeData.length; i++){
    array.push(pokeData[i][propiedad])}
    const resultado=array.filter((item, index)=>{
      return array.indexOf(item)===index});

  return resultado
  }

// FILTER BY TYPES AND WEAKNESSES
export const filterProperties = (pokeData, property, oneProperty) => {
  return pokeData.filter(objeto => objeto[property].indexOf(oneProperty) > -1)
}
// compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.
export const computeStats = () => {
  return 'computeStats';
};
//import pok from './data/pokemon/pokemon.js'
