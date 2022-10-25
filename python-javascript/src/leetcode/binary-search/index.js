/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export function Search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let pivot;

  while (left <= right) {
    console.log(left, right);
    pivot = Math.floor((left + right) / 2);

    if (nums[pivot] == target) {
      return pivot;
    } else if (nums[pivot] < target) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }

  return -1;
}
