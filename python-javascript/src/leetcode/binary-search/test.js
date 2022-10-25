import { Search } from "./index";

test("TwoSum function exists", () => {
  expect(Search).toBeDefined();
});

test("TwoSum returns indexs", () => {
  expect(Search([-1, 0, 3, 5, 9, 12], 9)).toEqual(4);
});

test("TwoSum returns indexs", () => {
  expect(Search([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1);
});
