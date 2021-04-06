/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = [];
  const checkArr = [];
  let objOfCount;

  names.forEach((elem, i) => {
    if (i === 0) {
      res.push(elem);
      checkArr.push(elem);
    } else if (res.includes(elem)) {
      let str = '';
      let k = 0;
      if (!objOfCount[elem]) {
        k = 1;
      } else {
        k = objOfCount[elem];
      }

      str = `${elem}(${k})`;
      res.push(str);

      if ((/\w+\(\d\)$/g).test(str)) {
        checkArr.push(elem);
      }
    } else {
      res.push(elem);
    }

    objOfCount = checkArr.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
  });
  return res;
}

module.exports = renameFiles;
