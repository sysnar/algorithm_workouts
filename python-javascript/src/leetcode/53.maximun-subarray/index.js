const maxSubArray2 = function (nums) {
  for (let index = 1; index < nums.length; index++) {
    nums[index] += nums[index - 1] > 0 ? nums[index - 1] : 0;
  }
  return Math.max(...nums);
};

// Kadane Algorithm
// 아래 사항은 카데인 알고리즘을 적용해본 예시입니다.
export const maxSubArray = function (nums) {
  let sum = 0;
  let max = -Math.max(...nums);

  for (let num of nums) {
    sum = Math.max(num, num + sum);
    max = Math.max(sum, max);
  }

  return max;
};
