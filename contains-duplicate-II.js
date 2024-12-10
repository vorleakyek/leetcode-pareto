// https://leetcode.com/problems/contains-duplicate-ii/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// Way #1
// Time: O(n*k)
// Space: O(1)
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


// Way #2 - using Hash Table
// Time: O(n)
// Space: O(n)
// ref: https://www.algo.monster/liteproblems/219

var containsNearbyDuplicate = function (nums, k) {
  const indexMap = new Map(); // {}

  for (let ind = 0; ind < nums.length; ind++) {
    if (!indexMap.has(nums[ind])) {
      indexMap.set(nums[ind], ind);
    } else {
      if (ind - indexMap.get(nums[ind]) > k) {
        indexMap.set(nums[ind], ind);
      } else {
        return true
      }
    }
  }
  return false;
};
