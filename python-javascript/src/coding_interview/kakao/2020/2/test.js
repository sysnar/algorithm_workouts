import { solution } from ".";

test("예제 1번", () => {
  expect(solution("(()())()")).toBe("(()())()");
});

test("예제 2번", () => {
  expect(solution(")(")).toBe("()");
});

test("예제 3번", () => {
  expect(solution("()))((()")).toBe("()(())()");
});
