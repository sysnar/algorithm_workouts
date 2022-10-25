import { notation } from ".";

test("예제 1번", () => {
  expect(notation(437674, 3)).toBe(3);
});

test("예제 2번", () => {
  expect(notation(110011, 10)).toBe(2);
});
