var productExceptSelf = function (nums) {
  const length = nums.length;
  const result = new Array(length);

  for (let i=0, leftProd = 1; i<length; i++) {
    result[i] = leftProd; //intial to 1 because nothing to mulitiply to the left of the first index
    leftProd *= nums[i]; // update the accumulate product to the left of the index
  }

  for (let i=length-1, rightProd = 1; i>=0; i--) {
    result[i] *= rightProd; //initial to 1 since nothing to the right of the last index
    rightProd *= nums[i];
  }

  return result;

}
