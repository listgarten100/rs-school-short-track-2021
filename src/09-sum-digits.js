/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const str = n.toString().split('');

  function getSmallInt(arr) {
    let sum = 0;
    let newArr = [];
    let res = 0;

    arr.forEach((elem) => {
      sum += +elem;
      const handleArr = sum.toString().split('');
      newArr = [...handleArr];
      res = [...newArr[0]];
    });

    if (sum >= 10) return getSmallInt(newArr);
    return +res;
  }
  return getSmallInt(str);
}

module.exports = getSumOfDigits;
