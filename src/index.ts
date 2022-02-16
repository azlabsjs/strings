/**
 * Returns the substring after the last occurrence of the specified character
 *
 * @example
 * const substr = afterLast(' ', ' Hello World!'); // output World!
 *
 * @param char
 * @param haystack
 * @returns
 */
export const afterLast = (char: string, haystack: string) => {
  const index = haystack.lastIndexOf(char);
  return haystack.slice(index + 1);
};

/**
 * Returns the strings after the first occurence the specified character
 *
 * @example
 * const substr = after('o', 'Hello World!'); // output " World!"
 *
 * @param char
 * @param haystack
 * @returns
 */
export const after = (char: string, haystack: string) => {
  const index = haystack.indexOf(char);
  return haystack.slice(index + 1);
};

/**
 * Returns the strings before the first occurence the specified character
 *
 * @example
 * const substr = before('W', 'Hello World!'); // outputs -> "Hello "
 *
 * @param char
 * @param haystack
 * @returns
 */
export const before = (char: string, haystack: string) =>
  haystack.slice(0, haystack.indexOf(char));

/**
 * Returns the strings before the last occurence the specified character
 *
 * @example
 * const substr = beforeLast('o', 'Hello World!'); // outputs -> "Hello W"
 * @param char
 * @param haystack
 * @returns
 */
export const beforeLast = (char: string, haystack: string) =>
  haystack.slice(0, haystack.lastIndexOf(char));

export const toBinary = (value: string) => {
  const codeUnits = new Uint16Array(value.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = value.charCodeAt(i);
  }
  const charCodes = new Uint8Array(codeUnits.buffer);
  let result = '';
  for (let i = 0; i < charCodes.byteLength; i++) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
};
