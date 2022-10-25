import { solution } from ".";

test("예제 1번", () => {
  expect(solution("aabbaccc")).toBe(7);
});

test("예제 2번", () => {
  expect(solution("ababcdcdababcdcd")).toBe(9);
});

test("예제 3번", () => {
  expect(solution("abcabcdede")).toBe(8);
});

test("예제 4번", () => {
  expect(solution("abcabcabcabcdededededede")).toBe(14);
});

test("예제 5번", () => {
  expect(solution("xababcdcdababcdcd")).toBe(17);
});
