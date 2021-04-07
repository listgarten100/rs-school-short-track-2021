/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const res = email.match(/@(([a-z]|[0-9]|-)+\.[a-z]{2,3})$/);

  return res[1];
}

module.exports = getEmailDomain;
