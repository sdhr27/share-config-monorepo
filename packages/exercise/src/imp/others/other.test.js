import { loopAdd, asyncAdd } from './add';

describe('others', () => {
  it('add 1 2 3 4 ...n', () => {
    expect(loopAdd(3)).toEqual(6);
    expect(loopAdd(4)).toEqual(10);
  });
  it('async add [1,2,3]', () => {
    asyncAdd([1, 2, 3]);
  });
});
