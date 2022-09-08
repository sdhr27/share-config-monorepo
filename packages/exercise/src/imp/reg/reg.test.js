import urlParser from './urlParser';
import { template1, template2 } from './template';
import { phoneSplit, moneySplit } from './str_split';
import camel from './camel';
import capital from './capital';

describe('reg', () => {
  it(`url parser`, () => {
    const url = `https://www.zhihu.com/search?type=content&q=javascript&bool&q=typescript`;
    const obj = urlParser(url);
    let str = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(obj)) {
      str += `${key}:${value};`;
    }

    expect(str).toEqual('type:content;q:javascript,typescript;bool:true;');
  });
  it('template{{}}', () => {
    const str = '我是{{name}} 年龄{{age}}';
    const obj = {
      name: 'djl',
      age: 18,
    };
    const newStr = template1(str, obj);

    expect(newStr).toEqual('我是djl 年龄18');
  });
  it('template${}', () => {
    // eslint-disable-next-line no-template-curly-in-string
    const str = '我是${name} 年龄${age}';
    const obj = {
      name: 'djl',
      age: 18,
    };
    const newStr = template2(str, obj);

    expect(newStr).toEqual('我是djl 年龄18');
  });
  it('moneySplit', () => {
    const str = '213564732955';
    const newStr = moneySplit(str);
    expect(newStr).toEqual('213,564,732,955');
  });
  it('phone 3-4-4', () => {
    const str = '13564732955';
    const newStr = phoneSplit(str);
    expect(newStr).toEqual('135-6473-2955');
  });
  it('camel', () => {
    // 1. foo Bar => fooBar
    // 2. foo-bar---- => fooBar
    // 3. foo_bar__ => fooBar
    let str = 'foo bar__';
    expect(camel(str)).toEqual('fooBar'); // 【 b】【b】;【__】【undefined】
    str = 'foo-bar';
    expect(camel(str)).toEqual('fooBar'); // 【-b】【b】
    str = 'foo_bar--';
    expect(camel(str)).toEqual('fooBar'); // 【_b】【b】;【--】【undefined】
  });
  it('capital', () => {
    let str = 'hello world.my friend';
    expect(capital(str)).toEqual('Hello World.My Friend');
    str = 'hello world. my friend. z';
    expect(capital(str)).toEqual('Hello World. My Friend. Z');
  });
});
