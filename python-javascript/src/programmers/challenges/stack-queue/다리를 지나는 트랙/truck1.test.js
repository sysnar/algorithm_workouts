import { solution } from "./truck1";

test("case1", () => {
  expect(solution(2, 10, [7, 4, 5, 6])).toBe(8);
});

test("case2", () => {
  expect(solution(100, 100, [10])).toBe(101);
});

test("case3", () => {
  expect(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(110);
});
