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

/**
 * @description Hash function implementation
 * It computes the hash value from user provided string
 *
 * @example
 * const hash = hashCode('Hello Worl');
 *
 * console.log(hash);
 */
 export function hashCode(str: any) {
  const typeofs = typeof str;
  if (typeofs === 'number') {
    return str;
  }
  str = typeofs === 'string' ? str : JSON.stringify(str);
  let hash = 0;
  const length = str.length;
  if (length === 0) return hash;
  for (let i = 0; i < length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash = hash & hash;
  }
  return hash;
}

/**
 * @description This function compare the hash value of 2 strings
 * and returns true if returned hash are equals
 *
 * @example
 * const result = compareHash('Hello', 'hello');
 *
 * console.log(result); // false
 */
export function compareHash(str1: string, str2: string) {
  return (
    (hashCode(str1) & 0x7fffffff) % str1.length ===
    (hashCode(str2) & 0x7fffffff) % str2.length
  );
}

/**
 * @description Timing attack safe string comparison
 *
 * Compares two strings using the same time whether they're equal or not.
 * This function should be used to mitigate timing attacks.
 *
 * @example
 * const result = hashEquals('Hello', 'hello');
 *
 * console.log(result); // false
 */
export function hashEquals(str1: string, str2: string) {
  const lenstr1 = str1.length;
  const lenstr2 = str2.length;
  if (lenstr1 !== lenstr2) {
    return false;
  }
  const length = Math.min(lenstr1, lenstr2);
  let result = 0;
  for (let i = 0; i < length; i++) {
    result = result | (str1.charCodeAt(i) ^ str2.charCodeAt(i));
  }
  return 0 === result;
}
