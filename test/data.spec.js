import { procesar, filterData, sortData, computeStats} from '../src/data.js';

describe('procesar', () => {
  it('is a function', () => {
    expect(typeof procesar).toBe('function');
  });

  it('returns `procesar`', () => {
    expect(procesar()).toBe('procesar');
  });
});

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns `filterData`', () => {
    expect(filterData()).toBe('filterData');
  });
});


describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns `sortData`', () => {
    expect(sortData()).toBe('sortData');
  });
});

describe('computeStats', () => {
  expect(computeStats()).toBe('function');
});
