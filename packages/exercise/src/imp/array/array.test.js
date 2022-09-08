// import React from 'react';
// import { cleanup } from '@testing-library/react';
import forEach2 from './for_each';
import map2 from './map';
import filter2 from './filter';
import reduce2 from './reduce';
import splice2 from './splice';
import { flat1, flat2 } from './flat';
import { addPrototype, deletePrototype } from '../../utils/protoype_manage';

const fns = [forEach2, map2, filter2, reduce2, splice2];

describe('test array', () => {
  // afterEach(cleanup);
  afterEach(() => {
    deletePrototype(Array, fns);
  });
  beforeEach(() => {
    addPrototype(Array, fns);
  });

  it(`forEach`, () => {
    const arr = [1, 2, 3];
    let str = '';
    arr.forEach2((item) => {
      str += item;
    });
    expect(str).toEqual('123');
  });
  it(`map`, () => {
    const arr = [1, 2, 3];
    const arr1 = arr.map2((item) => item);
    expect(arr1.join('')).toEqual('123');
  });
  it(`filter`, () => {
    const arr = [1, 2, 3];
    const arr1 = arr.filter2((item) => item === 1);
    expect(arr1.join('')).toEqual('1');
  });
  it(`reduce`, () => {
    const arr = [1, 2, 3];
    const arr1 = arr.reduce2((prev, cur) => prev + cur);
    expect(arr1).toEqual(6);
  });
  it(`reduce with initialValue`, () => {
    const arr = [1, 2, 3];
    const arr1 = arr.reduce2((prev, cur) => prev + cur, 3);
    expect(arr1).toEqual(9);
  });
  it(`flat`, () => {
    const arr = [1, [2], [3, [1, 2, [3]]]];
    const arr1 = flat1(arr);
    expect(arr1.join('')).toEqual('123123');
    const arr2 = flat2(arr);
    expect(arr2.join('')).toEqual('123123');
  });
  it(`splice`, () => {
    const arr = [1, 2, 3];
    const arr1 = arr.splice2(1, 1, 5);
    expect(arr.join('')).toEqual('153');
    expect(arr1.join('')).toEqual('2');
  });
  it(`splice omit deleteCount`, () => {
    const arr = [1, 2, 3];
    arr.splice2(1);
    expect(arr.join('')).toEqual('1'); // 第二个参数省略，数组只保留start元素前的元素
  });
});
