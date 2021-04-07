/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('');
  const res = [];
  const obj = {};

  array.forEach((elem, i, arr) => {
    if (arr[i - 1] === arr[i]) {
      obj[elem]++;
      if (obj[elem] < 3) {
        const ind = res.indexOf(elem);
        delete res[ind];
      } else {
        const numWithLetters = `${obj[elem] - 1}${elem}`;
        const ind = res.indexOf(numWithLetters);
        delete res[ind];
      }
      res.push(obj[elem] + elem);
    } else {
      res.push(elem);
      obj[elem] = 1;
    }
  });

  return res.join('');
}

module.exports = encodeLine;
