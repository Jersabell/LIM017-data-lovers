import {getPokemons, filterData, sortNameAZ, gettingProperties, gettingEgg, filterProperties} from '../src/data.js';


// Constante para la función getPokemons
const response = [{"egg": "2 km", "generation": "KANTO", "image": "https://www.serebii.net/pokemongo/pokemon/001.png", "name": "BULBASAUR", "number": "001", "resistant": ["water", "electric", "grass", "fighting", "fairy"], "type": ["grass", "poison"], "weakness": ["fire", "ice", "flying", "psychic"]}, {"egg": "not in eggs", "generation": "KANTO", "image": "https://www.serebii.net/pokemongo/pokemon/002.png", "name": "IVYSAUR", "number": "002", "resistant": ["water", "electric", "grass", "fighting", "fairy"], "type": ["grass", "poison"], "weakness": ["fire", "ice", "flying", "psychic"]}];
const data =  [{
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],

    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "egg": "2 km",

  },
  {
    "num": "002",
    "name": "ivysaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    
    "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "egg": "not in eggs",
  },

  ];

describe('getPokemons', () => {
  it('debería ser una función', () => {
    expect(typeof getPokemons).toBe('function');
  });

  it('getpokemons recibe data y devuelve un array', () => {
    expect(getPokemons(data)).toEqual(response);
  });
});

// Constante para la función filterData
const arrayFilter = [{"num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],

    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "egg": "2 km",}
  ];

describe('filterData', () => {
  it('debería ser una función', () => {
    expect(typeof filterData).toBe('function');
  });

it('returns `filterData`', () => {
   expect(filterData(data,'b')).toEqual(arrayFilter);
 });
});

// Constante para la función sortNameAZ
const data2 = [{
  "num": "063",
  "name": "abra",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "img": "https://www.serebii.net/pokemongo/pokemon/063.png",
  "size": {
    "height": "0.89 m",
    "weight": "19.5 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "psychic"
  ],
  "resistant": [
    "fighting",
    "psychic"
  ],
  "weaknesses": [
    "bug",
    "ghost",
    "dark"
  ],   
  "egg": "5 km",
},

{
  "num": "041",
  "name": "zubat",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "img": "https://www.serebii.net/pokemongo/pokemon/041.png",
  "type": [
    "poison",
    "flying"
  ],
  "resistant": [
    "grass",
    "fighting",
    "poison",
    "bug",
    "fairy"
  ],
  "weaknesses": [
    "electric",
    "ice",
    "psychic",
    "rock"
  ],
  "egg": "2 km",
}]

describe('sortNameAZ', () => {
  it('debería ser una función', () => {
    expect(typeof sortNameAZ).toBe('function');
  });

  it('recibe data y devuelve un array ordenado alfabeticamente', () => {
    expect(sortNameAZ(data2)).toEqual(data2);
  });
});

// Constante para gettingProperties
const prop = ["fighting","psychic","grass","poison","bug","fairy"]
describe('gettingProperties', () =>{
  it('debería ser una función', () => {
    expect(typeof gettingProperties).toBe('function')
  });
  it('recibe data y devuelve las propiedades por item', () => {
    expect(gettingProperties(data2,"resistant")).toEqual(prop);
  });
});

// constante para la funcion gettingEgg
const eggspc=["5 km","2 km"]
describe('gettingEgg', () =>{
  it('debería ser una función', () => {
    expect(typeof gettingEgg).toBe('function')
  });
  it('recibe data y devuelve las propiedades por item', () => {
    expect(gettingEgg(data2,"egg")).toEqual(eggspc);
  });
});

// Constante para  la función filterProperties
const oneProp= [{
  "num": "041",
  "name": "zubat",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "img": "https://www.serebii.net/pokemongo/pokemon/041.png",
  "type": [
    "poison",
    "flying"
  ],
  "resistant": [
    "grass",
    "fighting",
    "poison",
    "bug",
    "fairy"
  ],
  "weaknesses": [
    "electric",
    "ice",
    "psychic",
    "rock"
  ],
  "egg": "2 km",
}]
describe('filterProperties', () =>{
  it('debería ser una función', () => {
    expect(typeof filterProperties). toBe('function')
  })
  it('recibe data y devuelve las propiedades por item', () => {
    expect(filterProperties(data2,"resistant","grass")).toEqual(oneProp);
  });
})




