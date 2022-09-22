import { archery } from ".";

test("예제 1번", () => {
  expect(archery(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0])).toEqual([0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0]);
});

test("예제 2번", () => {
  expect(archery(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual([-1]);
});

test("예제 3번", () => {
  expect(archery(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1])).toEqual([1, 1, 2, 0, 1, 2, 2, 0, 0, 0, 0]);
});

test("예제 4번", () => {
  expect(archery(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3])).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2]);
});
