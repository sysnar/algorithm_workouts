/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Solution #1
// var sortedSquares = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] *= nums[i];
//   }
//   nums.sort((a, b) => a - b);

//   return nums;
// };

// Solution #2 -> Push Array Hight to Low
// export var sortedSquares = function (nums) {
// let length = nums.length;
// let result = [];
// let left = 0;
// let right = length - 1;

// while (left <= right) {
//   if (Math.abs(nums[left]) < Math.abs(nums[right])) {
//     result.unshift(nums[right] * nums[right]);
//     right--;
//   } else {
//     result.unshift(nums[left] * nums[left]);
//     left++;
//   }
// }

// return result;
// };

// Solution #2 -> Push Array Hight to Low
export var sortedSquares = function (nums) {
  let length = nums.length;
  let result = new Array(length);
  let left = 0;
  let right = length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      result[i] = nums[right] ** 2;
      right--;
    } else {
      result[i] = nums[left] ** 2;
      left++;
    }
  }

  return result;
};
