/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};

  domains.forEach((elem) => {
    const strDomain = (elem.match(/[a-z]+(\.[a-z]{2,3})$/))[1];
    const strName = `${strDomain}.${(elem.match(/([a-z]+)\.[a-z]{2,3}$/))[1]}`;

    res[strDomain] = 0;
    res[strName] = 0;

    let strNameSite;

    if (/^[a-z]+\.[a-z]+\.[a-z]{2,3}$/.test(elem)) {
      strNameSite = `${strName}.${(elem.match(/^([a-z]+)\.[a-z]+\.[a-z]{2,3}$/))[1]}`;
      res[strNameSite] = 0;
    }
  });

  domains.forEach((elem) => {
    const strDomain = (elem.match(/[a-z]+(\.[a-z]{2,3})$/))[1];
    const strName = `${strDomain}.${(elem.match(/([a-z]+)\.[a-z]{2,3}$/))[1]}`;
    let strNameSite;
    if (/^[a-z]+\.[a-z]+\.[a-z]{2,3}$/.test(elem)) {
      strNameSite = `${strName}.${(elem.match(/^([a-z]+)\.[a-z]+\.[a-z]{2,3}$/))[1]}`;
    }
    if (/[a-z]+\.([a-z]{2,3})/.test(elem)) {
      res[strDomain] += 1;
      res[strName] += 1;
    }
    if (/^[a-z]+\.[a-z]+\.[a-z]{2,3}$/.test(elem)) {
      res[strNameSite] += 1;
    }
  });

  return res;
}

module.exports = getDNSStats;
