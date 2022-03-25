/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export function searchInsert(nums, target) {
  // 1. 이진 탐색으로 검색
  // 2.1. 찾았을 경우 인덱스 반환
  // 2.2. 못 찾았을 경우 최종 인덱스 반환
  //
  // nums = [1,3,5,6,10,12,16], target = 2
  // left = 0 / right = 6 -> mid = 3
  //
  // nums = [1,3,5], target = 2
  // left = 0 / right = 2 -> mid = 1
  //
  // left = 0 / right = 0 -> mid = 0

  let left = 0;
  let right = nums.length - 1;
  let pivot;

  while (left <= right) {
    pivot = Math.floor((left + right) / 2);
    console.log(left, right, pivot);

    if (nums[pivot] == target) {
      return pivot;
    } else if (nums[pivot] > target) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }
  console.log("ENDEND : " + left, right);
  return right + 1;
}
console.log("!@#!@# " + searchInsert([2, 3, 5, 10, 12], 1));
