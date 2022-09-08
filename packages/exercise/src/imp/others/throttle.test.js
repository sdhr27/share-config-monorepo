import throttle from './throttle';

describe('throttle', () => {
  it('no params', async () => {
    let num = 1;
    function add() {
      num += 1;
    }
    const throttleAdd = throttle(() => {
      add();
    }, 500);
    for (let i = 0; i < 999; i++) {
      throttleAdd();
    }
    expect(num).toEqual(2);
    await sleep(1600);
    expect(num).toEqual(2);
  });
  it('with params', async () => {
    let num = 1;
    function add(cal) {
      num += cal;
    }
    const throttleAdd = throttle((v) => {
      add(v);
    }, 500);
    for (let i = 0; i < 999; i++) {
      throttleAdd(2);
    }
    expect(num).toEqual(3);
    await sleep(1600);
    expect(num).toEqual(3);
  });
});

const sleep = (time) =>
  new Promise((res) => {
    setTimeout(() => {
      res('');
    }, time);
  });
