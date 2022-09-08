import curry from './curry';

describe('curry', () => {
  it('add 1 2 3', () => {
    function add(a, b, c) {
      return a + b + c;
    }

    const curryFn = curry(add);
    expect(curryFn(1, 2, 3)).toEqual(6);
    expect(curryFn(1)(2, 3)).toEqual(6);
    expect(curryFn(1)(2)(3)).toEqual(6);
    expect(curryFn(1, 2)(3)).toEqual(6);
  });
});
