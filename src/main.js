import {getPokemons, filterData, sortNameAZ, gettingProperties, gettingEgg, filterProperties} from './data.js';
import data from './data/pokemon/pokemon.js';
const pokemonsMainDiv = document.getElementById('main__div-Characteres');
// DATA VARIABLES funcion -- // pokemonNew, filterProperties
const pokeData = getPokemons(data.pokemon);
const pokeData1 = getPokemons(data.pokemon);
const pokeData2 = getPokemons(data.pokemon).reverse();

// funcion mostrar pokemones
const showPokemonsDiv = (pokeData) => {
  let showAll = "";
  for (let i = 0; i < pokeData.length; i++){
    let showEachOne =
    `<div class="card">
    <div class="frontCard" name="${pokeData[i].number}">
      <div class="card-div__Img">
        <img class="card__Img" src= "${pokeData[i].image}"/>
      </div>
      <div class="cardInfo">
        <p class="cardInfo__Number">${pokeData[i].number}</p>
        <button class="cardInfo__Boton">${pokeData[i].name}</button>
      </div>
    </div>
    <div class="backCard" id= "${pokeData[i].number}">
      <div class="card-div__Img">
        <p class="cardInfo__Number">Type: ${pokeData[i].type}</p>
        <p class="cardInfo__Number">Weakness: ${pokeData[i].weakness}</p>
        <p class="cardInfo__Number">Resistant: ${pokeData[i].resistant}</p>
        <p class="cardInfo__Number">Egg: ${pokeData[i].egg}</p>
        <p class="cardInfo__Number">Height: ${pokeData[i].height}</p>
        <p class="cardInfo__Number">Weight: ${pokeData[i].weight}</p>
      </div>
      <div class="cardInfo">
        <p class="cardInfo__Number">HOLI</p>
        <button class="cardInfo__Boton">${pokeData[i].name}</button>
      </div>
    </div>
    </div>`;

    showAll += showEachOne;
  }
  return showAll;
}
pokemonsMainDiv.innerHTML = showPokemonsDiv(pokeData);

//-------------------------------------------------------------/
//-------------------- LOOK FOR NAME -------------------------/
//-----------------------------------------------------------/
const inputName = document.getElementById("inputName");

inputName.addEventListener('input', event => {
  const nameFiltered = filterData(pokeData, event.target.value.toUpperCase());
  pokemonsMainDiv.innerHTML = showPokemonsDiv(nameFiltered);
  showBackCard();
});

// --------------------------/
// BOTON: ORDENAR POKEMONES /
// ------------------------/
const desplegableBTN = document.getElementById("desplegar");
const botonOrdenar = document.getElementById("ordenar");
botonOrdenar.addEventListener("click", ()=>{
  desplegableBTN.removeAttribute("hidden");
  showBackCard();
})
desplegableBTN.addEventListener("mouseleave",()=>{
  desplegableBTN.setAttribute("hidden", true)
})
// ....................... SORT FROM A TO Z ......................................
const botton_AZ = document.getElementById("A-Z_sort");
botton_AZ.addEventListener("click",()=>{
  desplegableBTN.setAttribute("hidden", true);
  const nameSorted = sortNameAZ(pokeData);
  pokemonsMainDiv.innerHTML = showPokemonsDiv(nameSorted);
  showBackCard();
})
// ....................... SORT FROM Z TO A ......................................
const botton_ZA = document.getElementById("Z-A_sort");
botton_ZA.addEventListener("click",()=>{
  desplegableBTN.setAttribute("hidden", true)
  const nameSorted = (sortNameAZ(pokeData)).reverse();
  pokemonsMainDiv.innerHTML = showPokemonsDiv(nameSorted);
  showBackCard();
})
//....................... SORT ASCENDENT ......................................
const ascendent = document.getElementById("menor-mayor");
ascendent.addEventListener("click", () => {
  desplegableBTN.setAttribute("hidden", true);
  pokemonsMainDiv.innerHTML = showPokemonsDiv(pokeData1);
  showBackCard();
})

// ....................... SORT DESCENDENT ......................................
const descendentBTN = document.getElementById("mayor_menor");
descendentBTN.addEventListener("click", () => {
  desplegableBTN.setAttribute("hidden", true);
  pokemonsMainDiv.innerHTML = showPokemonsDiv(pokeData2);
  showBackCard();
})

//---------------------------/
// BOTON: BUSQUEDA AVANZADA /............................................................
// ------------------------/
const opcionesdeBusqueda= document.getElementById("OpcionesdeBusqueda");
const searchAvancedButton= document.getElementById("searchAvancedButton");
const ocultarbusqueda=document.getElementById("ocultarbusqueda")
searchAvancedButton.addEventListener("click", ()=>{
  searchAvancedButton.style.display= "none";
  ocultarbusqueda.style.display="flex";
  opcionesdeBusqueda.style.display="inline-flex";
})
ocultarbusqueda.addEventListener("click", ()=>{
  searchAvancedButton.style.display= "flex";
  ocultarbusqueda.style.display="none";
  opcionesdeBusqueda.style.display="none";
})



// opciones por tipo
// const byTypeButton= document.getElementById("typeButton")
const byTypeOptions= document.getElementById("typeOptions");
const typeSort= gettingProperties(pokeData, "type")
const showProperties= (typeSort, byTypeOptions)=>{
    let allTypes =['<option class="options__id" disabled="disabled" selected="selected">-- Seleccione --</option>',];
    for (let i = 0; i < typeSort.length; i++){
      let eachOne =
          `<option class="options__id" value="${typeSort[i]}">${typeSort[i]}</option>`;
          allTypes+= eachOne;
      }
    return byTypeOptions.innerHTML= allTypes;
}
showProperties(typeSort, byTypeOptions);
//escoger y fitrar por tipo
byTypeOptions.addEventListener("change", (event)=>{
    const selectedOption= event.target.value;
    console.log(`ejecutando por tipo ${event.target.value}...`);
    const allOptionBy= filterProperties(pokeData, "type", selectedOption);
    pokemonsMainDiv.innerHTML =showPokemonsDiv(allOptionBy);
})

// opciones por debilidad
const byWeaknessButton= document.getElementById("weaknessButton")
const byWeaknessOptions= document.getElementById("weaknessOptions");
const weaknessSort= gettingProperties(pokeData, "weakness");
console.log(weaknessSort);
showProperties(weaknessSort, byWeaknessOptions);
//escoger y fitrar por debilidad
byWeaknessOptions.addEventListener("change", (event)=>{
  const selectedOption= event.target.value;
  console.log(`ejecutando por debilidad ${event.target.value}...`);
  const allOptionBy= filterProperties(pokeData, "weakness", selectedOption);
  pokemonsMainDiv.innerHTML =showPokemonsDiv(allOptionBy);
      })

// opciones por resistencia
const byResistantButton= document.getElementById("resistantButton");
const byResistantOptions=document.getElementById("resistantOptions");
const resistantSort= gettingProperties(pokeData, "resistant");
console.log(resistantSort);
showProperties(resistantSort, byResistantOptions);
//escoger y fitrar por resistencia
byResistantOptions.addEventListener("change", (event)=>{
  const selectedOption= event.target.value;
  console.log(`ejecutando por resistencia ${event.target.value}...`);
  const allOptionBy= filterProperties(pokeData, "resistant", selectedOption);
  pokemonsMainDiv.innerHTML =showPokemonsDiv(allOptionBy);
      })

// opiones por huevo
const byEggButton= document.getElementById("eggButton");
const byEggOptions=document.getElementById("eggOptions");
const eggsSort = gettingEgg(pokeData, "egg")
console.log(eggsSort)
showProperties(eggsSort, byEggOptions);
//escoger y fitrar por resistencia
byEggOptions.addEventListener("change", (event)=>{
  const selectedOption= event.target.value;
  console.log(`ejecutando por huevo ${event.target.value}...`);
  const allOptionBy= filterProperties(pokeData, "egg", selectedOption);
  pokemonsMainDiv.innerHTML =showPokemonsDiv(allOptionBy);
      })

//--------------------------------------------------------------/
//------------------- SHOW BACKCARD  --------------------------/
//------------------------------------------------------------/
function showBackCard() {
const card = document.querySelectorAll(".card");
card.forEach(item =>
{
  const frontCard = item.firstElementChild;
  const backCard = item.lastElementChild;

  frontCard.addEventListener('click', () =>
  {
    frontCard.style.display = 'none';
    backCard.style.display = 'flex';
  });

  backCard.addEventListener('click', () =>
  {
    backCard.style.display = 'none';
    frontCard.style.display = 'flex';
  });
});
}
showBackCard();
