/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//VERSION 1 - INEFFICIENT CODE 
var twoSum = function(numbers, target) {
    
    for (let i = 0; i < numbers.length - 1; i++) {
        let j = i + 1; 
        let sum = numbers[i] + numbers[j]; 

        while (sum <= target) {

            if (sum === target) {
                return [i+1, j+1];
            }

            if (j < numbers.length) {
                j++;
                sum = numbers[i] + numbers[j];
            }
        }
    }

};
