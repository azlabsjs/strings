import { after, afterLast, before, beforeLast, toBinary } from '../src';

describe('Strings utilities functions', () => {
  it('should return World! when afterLast(" ", "Hello World!") is called', () => {
    expect(afterLast(' ', ' Hello World!')).toEqual('World!');
  });
  it('should return World! when after("o", "Hello World!") is called', () => {
    expect(after('o', 'Hello World!')).toEqual(' World!');
  });
  it('should return Hello when before("W", "Hello World!") is called', () => {
    expect(before('W', 'Hello World!')).toEqual('Hello ');
  });
  it('should return Hello when beforeLast("o", "Hello World!") is called', () => {
    expect(beforeLast('o', 'Hello World!')).toEqual('Hello W');
  });

  it('should return "" for toBinary("Hello World!")', () => {
    const str = toBinary("Hello World!");
    console.log(str);
    expect(typeof str).toBe('string');
  });
});
