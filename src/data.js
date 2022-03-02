export const procesar = () => {
  return 'procesar';
};

export const filterData = (data, condition) => {
  return 'filterData';
};
// sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar.
// sortOrder, indica si se quiere ordenar de manera ascendente o descendente.
export const sortData = (data, sortBy, sortOrder) => {
  return 'sortData';
};
// compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.
export const computeStats = () => {
  return 'computeStats';
};

export const getPokemons = (data) => {
  const onePokemon = [];
  //console.log(data[0]);
  for (let i=0; i<3; i++){
    onePokemon.push({
      'number': data[i].num,
      'name': data[i].name,
      'image': data[i].img,
      'type': data[i].type
    });
  } //*/
  return onePokemon;
  //console.log(onePokemon[0]);
}
window.getPokemons = getPokemons;
//getPokemons(pok);
//import pok from './data/pokemon/pokemon.js'


