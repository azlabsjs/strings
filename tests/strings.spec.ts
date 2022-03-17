import { after, afterLast, before, beforeLast, compareHash, hashCode, hashEquals, toBinary } from '../src';

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
    const str = toBinary('Hello World!');
    console.log(str);
    expect(typeof str).toBe('string');
  });

  it('should return false for hasEquals("Hello World!", "hello world!") ', () => {
    expect(hashEquals('Hello World!', 'hello world!')).toBe(false);
    expect(hashEquals('hello world!', 'hello world!')).toBe(true);
  });

  it('should return false for compareHash("Hello World!", "hello world!") ', () => {
    expect(compareHash('Hello World!', 'hello world!')).toBe(false);
    expect(compareHash('hello world!', 'hello world!')).toBe(true);
  });

  it('should return int value for hashCode("Hello World!") ', () => {
    expect(typeof hashCode('Hello World!') === 'number').toBe(true);
  });
});
