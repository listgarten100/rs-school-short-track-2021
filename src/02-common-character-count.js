/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;

  const arr1 = s1.split('');
  const arr2 = s2.split('');

  const minLength = Math.min(arr1.length, arr2.length);

  for (let i = 0; i < minLength; i++) {
    if (arr2.includes(arr1[i])) {
      const index = arr2.indexOf(arr1[i]);
      delete arr2[index];
      res += 1;
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
