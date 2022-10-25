import { solution } from ".";

test("예제 1번", () => {
  expect(
    solution([
      [2, 10],
      [7, 1],
      [2, 5],
      [2, 9],
      [7, 32],
    ])
  ).toEqual(16);
});
