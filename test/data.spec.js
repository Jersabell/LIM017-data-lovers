import { getPokemons, filterData, sortNameAZ, typeWeaknessSort, filterProperties,computeStats} from '../src/data.js';

describe('getPokemons', () => {
  it('debería ser una función', () => {
    expect(typeof getPokemons).toBe('function');
  });

  // it('returns `getPokemons`', () => {
  //   expect(getPokemons()).toBe('getPokemons');
  // });
});

describe('filterData', () => {
  it('debería ser una función', () => {
    expect(typeof filterData).toBe('function');
  });

  // it('returns `filterData`', () => {
  //   expect(filterData()).toBe('filterData');
  // });
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
