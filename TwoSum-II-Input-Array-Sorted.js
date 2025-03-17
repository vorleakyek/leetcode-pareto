/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {

    let startInd = 0;
    let endInd = numbers.length - 1; 


    while (startInd < endInd) {

        let sum = numbers[startInd] + numbers[endInd];

        if (sum === target) {
            return [startInd +1, endInd +1]; 
        }

        if (sum < target) {
            startInd++;
        } else {
            endInd--;
        }

    }

    return [];
}



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



