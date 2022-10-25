import { maxSubArray, sortedSquares } from ".";

test("연속된 배열 값의 합 중, 최대인 경우", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  expect(maxSubArray([1])).toEqual(1);
  expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
});
