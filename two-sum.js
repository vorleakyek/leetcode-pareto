/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  const numsSort = nums.sort((a, b) => a - b > 0);

  for (let i = 0; i < nums.length; i++) {
    const complement = target - numsSort[i];

    if (complement === numsSort[i]) {
      const index = numsSort.find((ele, ind) => (ind > i && ele === complement))
      console.log(index)
      if (index !== undefined) {
        const firstInd = nums.indexOf(numsSort[i]);
        const secondInd = nums.lastIndexOf(complement);
        return [firstInd, secondInd];
      }
    } else {

      if (numsSort.includes(complement)) {
        const firstInd = nums.indexOf(numsSort[i]);
        const secondInd = nums.indexOf(complement);
        return [firstInd, secondInd];
      }

    }
  }

}
