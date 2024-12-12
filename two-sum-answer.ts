// Define the function signature with input types and return type
function twoSum(nums: number[], target: number): number[] {
  // Initialize a map to store the numbers and their indices
  const numIndexMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]; // The current number in the array
    const complement = target - currentNum; // The number that complements the current number to reach the target

    // Check if the complement is already in the map
    if (numIndexMap.has(complement)) {
      // If complement is found, return its index along with the current index
      return [numIndexMap.get(complement)!, i];
    }

    // If complement is not found, add current number and its index to the map
    numIndexMap.set(currentNum, i);
  }

  // Since the problem guarantees exactly one solution, the loop should never finish without returning.
  // If no solution is found (which violates the problem's constraints), throw an error.
  throw new Error('No two sum solution exists');
}

// The function `twoSum` can now be used as per its signature with TypeScript type checking.
// NOTE: By setting the key-value pair in the object at the end of the function, this ensure that there are two indices of the same values.
//'numIndexMap.set(currentNum, i);'
