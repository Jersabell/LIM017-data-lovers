import {getPokemons, filterData, sortNameAZ, typeWeaknessSort, filterProperties,computeStats} from '../src/data.js';
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
    "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
    "size": {
      "height": "0.99 m",
      "weight": "13.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
    "encounter": {
      "base-flee-rate": "0.07",
      "base-capture-rate": "0.1"
    },
    "spawn-chance": "0.042",
    "stats": {
      "base-attack": "151",
      "base-defense": "143",
      "base-stamina": "155",
      "max-cp": "1699",
      "max-hp": "134"
    },
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
    "quick-move": [
      {
        "name": "razor leaf",
        "type": "grass",
        "base-damage": "13",
        "energy": "7",
        "move-duration-seg": "1"
      },
      {
        "name": "vine whip",
        "type": "grass",
        "base-damage": "7",
        "energy": "6",
        "move-duration-seg": "0.6"
      }
    ],
    "special-attack": [
      {
        "name": "sludge bomb",
        "type": "poison",
        "base-damage": "80",
        "energy": "-50",
        "move-duration-seg": "2.3"
      },
      {
        "name": "solar beam",
        "type": "grass",
        "base-damage": "180",
        "energy": "-100",
        "move-duration-seg": "4.9"
      },
      {
        "name": "power whip",
        "type": "grass",
        "base-damage": "90",
        "energy": "-50",
        "move-duration-seg": "2.6"
      }
    ],
    "egg": "not in eggs",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "bulbasaur candy",
      "next-evolution": [{
        "num": "003",
        "name": "venusaur",
        "candy-cost": "100"
      }],
      "prev-evolution": [{
        "num": "001",
        "name": "bulbasaur",
        "candy-cost": "25"
      }]
    }
  }];
describe('getPokemons', () => {
  it('debería ser una función', () => {
    expect(typeof getPokemons).toBe('function');
  });

  it('getpokemons recibe data y devuelve un array', () => {
    expect(getPokemons(data)).toEqual(response);
  });
});
////////////////////////////////////////////////////////////////////////////////
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
    "egg": "2 km",

  }];


describe('filterData', () => {
  it('debería ser una función', () => {
    expect(typeof filterData).toBe('function');
  });

it('returns `filterData`', () => {
   expect(filterData(data,'b')).toEqual(arrayFilter);
 });
});


describe('sortNameAZ', () => {
  it('debería ser una función', () => {
    expect(typeof sortNameAZ).toBe('function');
  });

  // it('returns `sortNameAZ`', () => {
  //   expect(sortNameAZ()).toBe('sortNameAZ');
  // });
});

describe('typeWeaknessSort', () =>{
  it('debería ser una función', () => {
    expect(typeof typeWeaknessSort).toBe('function')
  });
});

describe('filterProperties', () =>{
  it('debería ser una función', () => {
    expect(typeof filterProperties). toBe('function')
  })
})

describe('computeStats', () => {
  it('debería ser una función', () => {
  expect(computeStats()).toBe('function');
})
});
