import create2 from './object_create';
import assign2 from './object_assign';
import map from './object_map';
import { addPrototype, deletePrototype } from '../../utils/protoype_manage';

describe('promise', () => {
  const fns = [create2, assign2, map];
  afterEach(() => {
    deletePrototype(Object, fns);
  });
  beforeEach(() => {
    addPrototype(Object, fns);
  });
  it(`Object.create`, () => {
    const obj = Object.create2({ name: 'djl' });
    expect(obj.name).toEqual('djl');
  });
  it(`Object.create defineProperties`, () => {
    const obj = Object.create2(
      {},
      {
        name: {
          value: 'djl',
          writable: true,
        },
      },
    );
    expect(obj.name).toEqual('djl');
  });
  it(`Object.assign`, () => {
    let obj1 = { a: 0, b: { c: 0 } };
    let obj2 = Object.assign2({}, obj1);
    expect(JSON.stringify(obj2)).toEqual('{"a":0,"b":{"c":0}}');
  });
  it(`Object.assign mul`, () => {
    let obj1 = { a: 0, b: { c: 0 } };
    let obj2 = { d: 0, e: 1 };
    let obj3 = Object.assign2({}, obj1, obj2);
    expect(JSON.stringify(obj3)).toEqual('{"a":0,"b":{"c":0},"d":0,"e":1}');
  });
  it(`Object.map`, () => {
    let obj1 = { a: 0, b: 1, c: 2 };
    let obj2 = obj1.map((item) => {
      return item + 1;
    });
    expect(JSON.stringify(obj2)).toEqual('{"a":1,"b":2,"c":3}');
  });
});
