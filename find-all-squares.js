const arr = [4, 10, 3, 100, 5, 2, 10000]; 
// outpute:  [[5, 0], [1, 3], [3, 6]] 

const hashTable = new Map(); 
const result = [];

for (let i=0; i<arr.length; i++) {
    if (!hashTable.has(arr[i])) {
        hashTable.set(arr[i], i);
    }
}

for(let i=0; i<arr.length; i++) {
    const squared = arr[i]**2;  
    if(hashTable.has(squared)) {
        const indexVal = hashTable.get(squared); 
        result.push([i,indexVal])}
    }

console.log(result)

// # Find All Squares

// Given an array of unique integers, `arr`, return a list with all pairs of indices, `[i, j]`, such that `arr[i]^2 == arr[j]`. You can return the pairs in any order.

// ```
// Example 1: arr = [4, 10, 3, 100, 5, 2, 10000]
// Output: [[5, 0], [1, 3], [3, 6]]. The 3 pairs of values that satisfy the constraint are (2, 4), (10, 100), and (100, 10000). We return [5, 0] because arr[5] is 2 and arr[0] is 4, and similarly for the other two pairs. Other orders like [[1, 3], [0, 5], [3, 6]] would also be valid.

// Example 2: arr = [1]
// Output: [[0, 0]]. Since 1 is its own square, a 1 forms a pair with itself.
// ```

// Constraints:

// - The length of arr is at most 10^6
// - 1 ≤ arr[i] ≤ 10^9
// - All elements in arr are unique
