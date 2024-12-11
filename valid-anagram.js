// https://leetcode.com/problems/valid-anagram/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sLen = s.length;
  const tLen = t.length;

  if (sLen !== tLen) return false;

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < sLen; i++) {
    if (!sMap.has(s[i])) {
      sMap.set(s[i], 1);
    } else {
      const freq = sMap.get(s[i]);
      sMap.set(s[i], freq + 1);
    }
  }

  for (let j = 0; j < tLen; j++) {
    if (!tMap.has(t[j])) {
      tMap.set(t[j], 1);
    } else {
      const freq = tMap.get(t[j]);
      tMap.set(t[j], freq + 1)
    }
  }


  for (let k = 0; k < sLen; k++) {
    if (tMap.get(s[k]) !== sMap.get(s[k])) {
      return false
    }
  }

  return true;
};


//a more efficient solution can be found in https://algo.monster/liteproblems/242
