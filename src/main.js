import { getPokemons, filterData, sortNameAZ, typeWeaknessSort, eggSort, filterProperties} from './data.js';

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
            <button class="cardInfo__Boton" id="clNombre">${pokeData[i].name}</button>
          </div>
        </div>`;
    showAll += showEachOne;
  }
  return showAll;
}

pokemonsMainDiv.innerHTML = showPokemonsDiv(pokeData);


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
// por tipo
const byTypeButton= document.getElementById("typeButton")
const byTypeOptions= document.getElementById("typeOptions");
const typeSort= typeWeaknessSort(pokeData, "type") 
console.log(typeSort)

  let allTypes =[];
  for (let i = 0; i < typeSort.length; i++){
    let eachOne =
      `<option id="typeOptions__id">${typeSort[i]}</option>`;
      allTypes+= eachOne;
  }
  byTypeOptions.innerHTML= allTypes;
// por debilidad
const byWeaknessButton= document.getElementById("weaknessButton")
const byWeaknessOptions= document.getElementById("weaknessOptions");
const weaknessSort= typeWeaknessSort(pokeData, "weakness");
console.log(weaknessSort);
  let allWeakness =[];
    for (let i = 0; i < weaknessSort.length; i++){
      let eachOne =
        `<option id="weaknessOptions__id">${weaknessSort[i]}</option>`;
      allWeakness+= eachOne;
    }
byWeaknessOptions.innerHTML= allWeakness;
// por resistencia
const byResistantButton= document.getElementById("resistantButton");
const byResistantOptions=document.getElementById("resistantOptions");
const resistantSort= typeWeaknessSort(pokeData, "resistant");
console.log(resistantSort);
  let allResistants =[];
    for (let i = 0; i < resistantSort.length; i++){
      let eachOne =
        `<option id="weaknessOptions__id">${resistantSort[i]}</option>`;
        allResistants+= eachOne;
    }
byResistantOptions.innerHTML= allResistants;
// por huevo
const byEggButton= document.getElementById("eggButton");
const byEggOptions=document.getElementById("eggOptions");
const eggsSort = eggSort(pokeData, "egg")
console.log(eggsSort)
  let allEggs =[];
      for (let i = 0; i < eggsSort.length; i++){
        let eachOne =
          `<option id="weaknessOptions__id">${eggsSort[i]}</option>`;
          allEggs+= eachOne;
      }
  byEggOptions.innerHTML= allEggs;







// ------------------------- TIPOS Y DEBILIDADES ------------------------------



// const weaknessSort = typeWeaknessSort(pokeData, "weakness");
// console.log(typeSort);
// console.log(weaknessSort);

// ....................... FILTER TYPES AND WEAKNESSES ....................................
console.log(filterProperties(pokeData, "type", "values"))
