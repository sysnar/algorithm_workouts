/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) nums[i] *= -1;
  }

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    nums[i] *= nums[i];
  }

  return nums;
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));
