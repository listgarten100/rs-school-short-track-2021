/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  const res = [];

  for (let i = 0; i < str.length; i++) {
    let resStr = '';
    const initialStr = str;
    resStr = initialStr.replace(str[i], '');
    res.push(resStr);
  }
  return Math.max.apply(this, res);
}

module.exports = deleteDigit;
