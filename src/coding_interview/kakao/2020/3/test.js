import { solution } from ".";

test("예제 1번", () => {
  expect(
    solution(
      [
        [0, 0, 0],
        [1, 0, 0],
        [0, 1, 1],
      ],
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ]
    )
  ).toBeTruthy();
});
