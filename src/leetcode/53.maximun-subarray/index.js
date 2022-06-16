export const maxSubArray = function (nums) {
  for (let index = 1; index < nums.length; index++) {
    nums[index] += nums[index - 1] > 0 ? nums[index - 1] : 0;
  }
  return Math.max(...nums);
};
