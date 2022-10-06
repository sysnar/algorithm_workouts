import { solution } from ".";

test("예제 1번", () => {
  expect(solution(3, 2, [[1, 1]], [[3, 3]])).toEqual([
    [2, 2, 0],
    [2, 1, -1],
    [0, -1, -1],
  ]);
});
