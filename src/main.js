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
      </div>
      <div class="card__boton">
        <button class="cardInfo__Boton">${pokeData[i].name}</button>
      </div>
    </div>
    <div class="backCard" id= "${pokeData[i].number}">
      <div class="cardInfo__back">
        <p class="cardInfo__back__generation">GENERATION: ${pokeData[i].generation}</p>
        <table class="tabla">
        <tr><td><p class="cardInfo__back__type estiloparraf">Type ${crearVariosParrafos(pokeData[i].type)}</p></td></tr>
        <tr><td><p class="cardInfo__back__weakness estiloparraf">Weakness ${crearVariosParrafos(pokeData[i].weakness)}</p></td></tr>
        <tr><td><p class="cardInfo__back__resistant estiloparraf">Resistant ${crearVariosParrafos(pokeData[i].resistant)}</p></td></tr>
        </table>
        <table class="tabla2">
        <tr>
        <td><p class="cardInfo__back__egg estiloparraf">Egg</p></td>
        <td><p class="cardInfo__back__egg estiloparraf etiquetadelBack">${pokeData[i].egg}</p></td>
        </tr>
        </table>
      </div>
      <div class="card__boton">
        <button class="cardInfo__Boton">${pokeData[i].name}</button>
      </div>
    </div>
    </div>`;

    showAll += showEachOne;
  }
  return showAll;
}
// FUNCION PARA LA INFORMACION DEL BACKCARD
function crearVariosParrafos(datos){
  let almacenar=[]
  for(let i=0;i<datos.length;i++){
    const uno=`<p class="etiquetadelBack">${datos[i]}</p>`;
    almacenar += uno
  }
  return almacenar
}

pokemonsMainDiv.innerHTML = showPokemonsDiv(pokeData);
showBackCard();
//-------------------------------------------------------------/
//-------------------- LOOK FOR NAME -------------------------/
//-----------------------------------------------------------/
const inputName = document.getElementById("inputName");

inputName.addEventListener('input', event => {
  const nameFiltered = filterData(pokeData, event.target.value.toUpperCase());
  pokemonsMainDiv.innerHTML = showPokemonsDiv(nameFiltered);
  showBackCard();
  textHTML.innerHTML="";
});

// --------------------------/
// BOTON: ORDENAR POKEMONES /
// ------------------------/
const desplegableBTN = document.getElementById("desplegar");
const botonOrdenar = document.getElementById("ordenar");
const botonOrdenar1 = document.getElementById("ordenar1")
botonOrdenar.addEventListener("click", ()=>{
  botonOrdenar.setAttribute("hidden", true);
  botonOrdenar1.removeAttribute("hidden");
  desplegableBTN.removeAttribute("hidden");
  showBackCard();
})
botonOrdenar1.addEventListener("click", ()=>{
  botonOrdenar.removeAttribute("hidden");
  botonOrdenar1.setAttribute("hidden", true);
  desplegableBTN.setAttribute("hidden", true);
})
desplegableBTN.addEventListener("mouseleave",()=>{
  desplegableBTN.setAttribute("hidden", true)
  botonOrdenar1.setAttribute("hidden", true);
  botonOrdenar.removeAttribute("hidden");
})
// ....................... SORT FROM A TO Z ......................................
const textHTML = document.getElementById('div_statsInformation');
const botton_AZ = document.getElementById("A-Z_sort");
botton_AZ.addEventListener("click",()=>{
  desplegableBTN.setAttribute("hidden", true);
  const nameSorted = sortNameAZ(pokeData);
  pokemonsMainDiv.innerHTML = showPokemonsDiv(nameSorted);
  showBackCard();
  textHTML.innerHTML="";
})

// ....................... SORT FROM Z TO A ......................................
const botton_ZA = document.getElementById("Z-A_sort");
botton_ZA.addEventListener("click",()=>{
  desplegableBTN.setAttribute("hidden", true)
  const nameSorted = (sortNameAZ(pokeData)).reverse();
  pokemonsMainDiv.innerHTML = showPokemonsDiv(nameSorted);
  showBackCard();
  textHTML.innerHTML="";
})
//....................... SORT ASCENDENT ......................................
const ascendent = document.getElementById("menor-mayor");
ascendent.addEventListener("click", () => {
  desplegableBTN.setAttribute("hidden", true);
  pokemonsMainDiv.innerHTML = showPokemonsDiv(pokeData1);
  showBackCard();
  textHTML.innerHTML="";
})

// ....................... SORT DESCENDENT ......................................
const descendentBTN = document.getElementById("mayor_menor");
descendentBTN.addEventListener("click", () => {
  desplegableBTN.setAttribute("hidden", true);
  pokemonsMainDiv.innerHTML = showPokemonsDiv(pokeData2);
  showBackCard();
  textHTML.innerHTML="";
})
//....................... BUSQUEDA AVANZADA FILTROS/ ......................................
const showProperties = (propertyList_li, property_ul)=>{
  let allPropertyList = '';
  //console.log(property_ul);
  const name = property_ul.className;
  // console.log(name + ": "+ propertyList_li.length);
  // console.log("Porcentaje: "+ (propertyList_li.length * 100)/251);
  //console.log(name);
    for (let i = 0; i < propertyList_li.length; i++){
      let eachOne =
          `<li><a class='bottonFilter' id='${propertyList_li[i]}' name='${name}'>${propertyList_li[i]}</a></li>`;
          allPropertyList += eachOne;
      }
    return property_ul.innerHTML= allPropertyList;
}
const typeList_ul= document.getElementById("typeList_ul");
const weaknessList_ul= document.getElementById("weaknessList_ul");
const resistantList_ul= document.getElementById("resistantList_ul");
const eggList_ul= document.getElementById("eggList_ul");
const typeList= gettingProperties(pokeData, "type");
const weaknessList= gettingProperties(pokeData, "weakness");
const resistantList= gettingProperties(pokeData, "resistant");
const eggList= gettingEgg(pokeData, "egg");
showProperties(typeList, typeList_ul);
showProperties(weaknessList, weaknessList_ul);
showProperties(resistantList, resistantList_ul);
showProperties(eggList, eggList_ul);

//--------------------------------------------------------------/
//---------------- SHOW CARDS BY FILTERS  ----------------------/
//------------------------------------------------------------/
  const bottonFilter = document.querySelectorAll('.bottonFilter');

  bottonFilter.forEach(item =>
  {
    const oneProperty = item.id;
    const property = item.name;
    //console.log(property, oneProperty);
    item.addEventListener('click', () =>{

      const pokemonFiltered= filterProperties(pokeData, property, oneProperty);
      console.log(property + ": "+ oneProperty + ": "+pokemonFiltered.length);
      console.log("Porcentaje: "+ (pokemonFiltered.length * 100)/251);

              // VISTA DE INFORMACIÓN
      let htmlInfo = 
      `
      <div class="titleFilter">
        <p class="titleFilter__p" id="p_propertyAndOption"></p>
      </div>
      <div class="infoDetailed">
        <p id="p_InfoDetailed">HOLA</p>
      </div>`;
      const textHTML = document.getElementById('div_statsInformation');
      textHTML.innerHTML = htmlInfo;

      const propertyAndOption = document.getElementById('p_propertyAndOption');
      propertyAndOption.innerHTML = property.toUpperCase() + ": "+ oneProperty.toUpperCase() ;

      const InfoDetailed = document.getElementById('p_InfoDetailed');
      InfoDetailed.innerHTML = "There are " + pokemonFiltered.length + " Pokemons, that represent " + Math.round((pokemonFiltered.length * 100)/251) + "%.";

      pokemonsMainDiv.innerHTML = showPokemonsDiv(pokemonFiltered);
      showBackCard();
    });
  }
  );
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
