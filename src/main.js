import { getPokemons, filterData, sortNameAZ, typeWeaknessSort} from './data.js';

import data from './data/pokemon/pokemon.js';

const pokemonsMainDiv = document.getElementById('main__div-Characteres');
// DATA VARIABLES funcion -- // pokemonNew
const pokeData = getPokemons(data.pokemon);
const pokeData1 = getPokemons(data.pokemon);
// funcion mostrar pokemones
const showPokemonsDiv = (pokeData) => {
  let showAll = "";
  for (let i = 0; i < pokeData.length; i++){
    let showEachOne =
      `<div id="pokemonCard1" class="card">
        <div class="card-div__Img">
          <img class="card__Img"src= "${pokeData[i].image}"/>
        </div>
        <div class="cardInfo">
          <p class="cardInfo__Number">N° ${pokeData[i].number}</p>
          <button class="cardInfo__Boton">${pokeData[i].name}</button>
        </div>
      </div>`;

      // <div id="pokemonCard2" class="card">
      //   <div class="card-div__Img">
      //     <img class="card__Img"src= "${pokeData[i].image}"/>
      //   </div>
      //   <div class="cardInfo">
      //     <!-- <p class="cardInfo__Number">N° ${pokeData[i].number}</p>  -->
      //     <button class="cardInfo__Boton">${pokeData[i].name}</button>
      //   </div>
      // </div>

    showAll += showEachOne;
  }
  return showAll;
}
pokemonsMainDiv.innerHTML = showPokemonsDiv(pokeData);

// ------------------- mostrar la parte de atras del card  --------------------------HELPPPPPP
// const card_class = document.getElementById("pokemonCard1");
// card_class.addEventListener("click", () => {
//   console.log("HOLAAAA");
//   const frontCard = document.getElementById("pokemonCard1");
//   const backCard = document.getElementById("pokemonCard2");
//   frontCard.style.display = 'none';
//   backCard.style.display = 'block';
// })
// ------------------- buscar por NOMBRE --------------------------
const inputName = document.getElementById("inputName");

inputName.addEventListener('input', event => {
  const nameFiltered = filterData(pokeData, event.target.value.toUpperCase());

  pokemonsMainDiv.innerHTML = showPokemonsDiv(nameFiltered);
});

// --------------------------/
// BOTON: ORDENAR POKEMONES /............................................................
// ------------------------/
const desplegableBTN = document.getElementById("desplegar");
const botonOrdenar = document.getElementById("ordenar");
botonOrdenar.addEventListener("click", ()=>{
  desplegableBTN.removeAttribute("hidden");
})
// ....................... SORT FROM A TO Z ......................................
const botton_AZ = document.getElementById("A-Z_sort");
botton_AZ.addEventListener("click",()=>{
  desplegableBTN.setAttribute("hidden", true)
  const nameSorted = sortNameAZ(pokeData);
  pokemonsMainDiv.innerHTML = showPokemonsDiv(nameSorted);
})
// ....................... SORT FROM Z TO A ......................................
const botton_ZA = document.getElementById("Z-A_sort");
botton_ZA.addEventListener("click",()=>{
  desplegableBTN.setAttribute("hidden", true)
  const nameSorted = (sortNameAZ(pokeData)).reverse();
  pokemonsMainDiv.innerHTML = showPokemonsDiv(nameSorted);
})
// ....................... SORT ASCENDENT ......................................
const ascendent = document.getElementById("menor-mayor");
ascendent.addEventListener("click", () => {
  desplegableBTN.setAttribute("hidden", true);
  pokemonsMainDiv.innerHTML = showPokemonsDiv(pokeData1);
})

// ....................... SORT DESCENDENT ......................................
const descendentBTN = document.getElementById("mayor_menor");
descendentBTN.addEventListener("click", () => {
  desplegableBTN.setAttribute("hidden", true);
  const descendent = pokeData1.reverse();
  pokemonsMainDiv.innerHTML = showPokemonsDiv(descendent);
})

// --------------------------/
// BOTON: BUSQUEDA AVANZADA /............................................................
// ------------------------/
const searchAvancedButton =document.getElementById("searchAvancedButton");
const searchAvancedButtonOcultar= document.getElementById("ocultarbusqueda");
const desplegabledeBusquedaAvanzada= document.getElementById("desplegabledeBusquedaAvanzada");
const optionByType= document.getElementById("type");
const optionByDebilidad= document.getElementById("debilidad");
const optionByResistencia= document.getElementById("resistencia");
// mostrar despliegue
searchAvancedButton.addEventListener("click", ()=>{
  desplegabledeBusquedaAvanzada.removeAttribute("hidden");
  searchAvancedButton.setAttribute("hidden", true);
  searchAvancedButtonOcultar.removeAttribute("hidden")
})
// ocultar despliegue
searchAvancedButtonOcultar.addEventListener("click", ()=>{
  desplegabledeBusquedaAvanzada.setAttribute("hidden", true);
  searchAvancedButton.removeAttribute("hidden");
  searchAvancedButtonOcultar.setAttribute("hidden", true)
})
// mostrar opcion de filtrar por tipos
optionByType.addEventListener("click", ()=>{
  const typeSort = typeWeaknessSort(pokeData, "type");
    console.log(typeSort)
    })
// mostrar opcion de filtrar por debilidad
optionByDebilidad.addEventListener("click", ()=>{
  const weaknessSort = typeWeaknessSort(pokeData, "weakness")
  console.log(weaknessSort)})
// mostrar opcion de filtrar por resistencia
optionByResistencia.addEventListener("click", ()=>{
  const resistantSort= typeWeaknessSort(pokeData, "resistant")
  console.log(resistantSort);
})




// ------------------------- TIPOS Y DEBILIDADES ------------------------------



// const weaknessSort = typeWeaknessSort(pokeData, "weakness");
// console.log(typeSort);
// console.log(weaknessSort);

// ....................... FILTER TYPES AND WEAKNESSES ....................................
