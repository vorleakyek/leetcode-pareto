// https://leetcode.com/problems/contains-duplicate-ii/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i <= nums.length - 2; i++) {
    for (let j = i + 1; j <= i + k; j++) {
      if (j <= nums.length - 1) {
        if (nums[i] === nums[j]) {
          return true
        }
      }
    }
  }
  return false;
};
