import debounce from './debounce';

describe('debounce', () => {
  it('no params', async () => {
    let num = 1;
    function add() {
      num += 1;
    }
    const debounceAdd = debounce(() => {
      add();
    }, 500);
    for (let i = 0; i < 999; i++) {
      debounceAdd();
    }
    await sleep(1600);
    expect(num).toEqual(2);
  });
  it('with params', async () => {
    let num = 1;
    function add(cal) {
      num += cal;
    }
    const debounceAdd = debounce((v) => {
      add(v);
    }, 500);
    for (let i = 0; i < 999; i++) {
      debounceAdd(2);
    }
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
