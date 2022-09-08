import retry from './retry';
import all from './all';
import race from './race';
import allSettled from './allSettiled';

describe('promise', () => {
  it('all', async () => {
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'foo');
    });

    const result = await all([promise1, promise2, promise3]).then((values) => {
      return values;
    });
    expect(result.join('')).toEqual('342foo');
  });
  it('race', async () => {
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'foo');
    });

    const result = await race([promise1, promise2, promise3]).then((values) => {
      return values;
    });
    expect(result).toEqual(3);
  });
  it('allSettled', async () => {
    const promise1 = Promise.reject(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'foo');
    });

    const result = await allSettled([promise1, promise2, promise3]).then(
      (values) => {
        return values
          .filter((v) => v.status === 'fullfilled')
          .map((v) => v.value);
      },
    );
    expect(result.join('')).toEqual('42foo');
  });
  // it('retry', async () => {
  //   let isSuccess = false;
  //   let result;
  //   function getProm() {
  //     const n = Math.random();
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         result = n;
  //         if (n > 0.9) {
  //           isSuccess = true;
  //           resolve(n);
  //         } else {
  //           isSuccess = false;
  //           reject(n);
  //         }
  //       }, 200);
  //     });
  //   }
  //   await retry(getProm);
  //   if (isSuccess) expect(result).toBeGreaterThan(0.9);
  //   if (!isSuccess) expect(result).toBeLessThanOrEqual(0.9);
  // });
});
