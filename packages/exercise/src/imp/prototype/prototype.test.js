import Queue from './class_queue';
import Queue2 from './combine_queue';
import new2 from './new';
import instanceof2 from './instanceof';

describe('promise', () => {
  it(`class继承实现队列`, () => {
    const queue = new Queue(3);
    queue.in(1);
    expect(queue.join('')).toEqual('1');
    queue.in(2, 3);
    expect(queue.join('')).toEqual('123');
    queue.in(4);
    expect(queue.join('')).toEqual('234');
    queue.in(5, 6);
    expect(queue.join('')).toEqual('456');
    queue.out();
    expect(queue.join(',')).toEqual('5,6');
  });
  it(`组合继承队列`, () => {
    const queue = new Queue2(3);
    queue.in(1);
    expect(queue.join('')).toEqual('1');
    queue.in(2, 3);
    expect(queue.join('')).toEqual('123');
    queue.in(4);
    expect(queue.join('')).toEqual('234');
    queue.in(5, 6);
    expect(queue.join('')).toEqual('456');
    queue.out();
    expect(queue.join(',')).toEqual('5,6');
  });
  it(`new`, () => {
    function person(name, age) {
      this.name = name;
      this.age = age;
    }
    let p = new2(person, '布兰', 12);
    expect(p.name).toEqual('布兰');
    expect(p.age).toEqual(12);
  });
  it(`instanceof`, () => {
    function person(name, age) {
      this.name = name;
      this.age = age;
    }
    let p = new2(person, '布兰', 12);
    expect(instanceof2([], Array)).toEqual(true);
    expect(instanceof2(p, person)).toEqual(true);
    expect(instanceof2(p, Array)).toEqual(false);
    expect(instanceof2(p, Object)).toEqual(true);
    expect(instanceof2(person, Function)).toEqual(true);
  });
});
