/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const mapObj = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sortedWord = strs[i].split('').sort().join('');

    if (!mapObj.has(sortedWord)) {
      mapObj.set(sortedWord, [strs[i]]);
    } else {
      mapObj.set(sortedWord, [...mapObj.get(sortedWord), strs[i]]);
    }
  }

  const result = [];

  // function logMapElements(value, key, map) {
  //  result.push(value)
  // }

  mapObj.forEach((value) => result.push(value))

  return result;
};
