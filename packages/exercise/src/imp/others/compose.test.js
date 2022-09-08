import { compose1, compose2, compose3 } from './compose';

describe('compose', () => {
  it('recursion compose', () => {
    function fn1(num1) {
      return num1 + 1;
    }
    function fn2(num1) {
      return num1 * 10;
    }
    function fn3(num1) {
      return num1 + 3;
    }
    const composeFn = compose1(fn1, fn2, fn3);
    const res = composeFn(0);
    expect(res).toEqual(31);
  });
  it(`reduce compose`, () => {
    function fn1(num1) {
      return num1 + 1;
    }
    function fn2(num1) {
      return num1 * 10;
    }
    function fn3(num1) {
      return num1 + 3;
    }
    const composeFn = compose2(fn1, fn2, fn3);
    const res = composeFn(0);
    expect(res).toEqual(13);
  });
  it(`async add`, async () => {
    const nums = [1, 2, 3];
    async function fn(num1, num) {
      await sleep(500);
      return num1 + num;
    }
    const composeFn = compose3(...nums.map((num) => (num1) => fn(num1, num)));
    const res = await composeFn(0);
    expect(res).toEqual(6);
  });
});

const sleep = (timeout) =>
  new Promise((res) => {
    setTimeout(() => {
      res('');
    }, timeout);
  });
