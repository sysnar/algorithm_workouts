import { solution } from ".";

test("예제 1번", () => {
  expect(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])).toEqual("TCMA");
});

test("예제 2번", () => {
  expect(solution(["TR", "RT", "TR"], [7, 1, 3])).toEqual("RCJA");
});
