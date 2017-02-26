module.exports = function flatten(array) {
  return Array.isArray(array) ? array.reduce((acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item), []) : [];
}
