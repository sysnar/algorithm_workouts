import { twoSum } from "./index";

test("TwoSum function exists", () => {
  expect(twoSum).toBeDefined();
});

test("TwoSum returns indexs", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("TwoSum returns indexs", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test("TwoSum returns indexs", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test("TwoSum returns null", () => {
  expect(twoSum([3, 3], 7)).toEqual(null);
});
