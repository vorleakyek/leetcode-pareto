/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentElement = nums[i];

    if (map.has(currentElement)) {
      const currentValue = map.get(currentElement);
      map.set(currentElement, currentValue + 1);
    } else {
      map.set(currentElement, 1);
    }
  }

  const mapArr = Array.from(map);
  console.log(mapArr)
  mapArr.sort((a, b) => b[1] - a[1]);

  const result = [];

  for (let i = 0; i < k; i++) {
    result.push(mapArr[i][0])
  }

  return result;

};
