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
  for (let i=0; i<1; i++){
    onePokemon.push({
      'number': data[i].num,
      'nombre': data[i].name,
      'imagen': data[i].img,
      'tipo': data[i].type
    });
  } //*/
  return onePokemon;
  //console.log(onePokemon[0]);
}
//getPokemons(pok);
//import pok from './data/pokemon/pokemon.js'
