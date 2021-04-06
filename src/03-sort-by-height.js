/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const handleArr = [...arr];
  const arrOfIndexs = [];
  let count = 0;

  arr.forEach((elem, i) => {
    if (elem === -1) {
      arrOfIndexs.push(i);
      handleArr.splice(i - count, 1);
      count++;
    }
  });

  const res = handleArr.sort((a, b) => a - b);

  for (let i = 0; i < arrOfIndexs.length; i++) {
    res.splice(arrOfIndexs[i], 0, -1);
  }

  return res;
}

module.exports = sortByHeight;
