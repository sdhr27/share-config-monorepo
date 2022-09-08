import call2 from './call';
import apply2 from './apply';
import bind2 from './bind';
import { addPrototype, deletePrototype } from '../../utils/protoype_manage';

const obj1 = {
  name: 'djl',
};
function myName(...args) {
  return `${this.name}${args.join('')}`;
}
function Name(name) {
  this.name = name;
}

describe('reg', () => {
  const fns = [call2, apply2, bind2];
  afterEach(() => {
    deletePrototype(Function, fns);
  });
  beforeEach(() => {
    addPrototype(Function, fns);
  });
  it(`call2`, () => {
    expect(myName.call2(obj1, 1, 2, 3)).toEqual('djl123');
  });
  it(`apply2`, () => {
    expect(myName.apply2(obj1, [1, 2, 3])).toEqual('djl123');
  });
  it(`bind2`, () => {
    expect(myName.bind2(obj1)(1, 2, 3)).toEqual('djl123');
  });
  it(`bind2 constructor`, () => {
    const Name2 = Name.bind2(obj1);
    const obj = new Name2('ljd');
    expect(obj.name).toEqual('ljd');
  });
});
