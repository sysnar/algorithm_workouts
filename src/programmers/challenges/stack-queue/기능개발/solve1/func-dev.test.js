import { solution } from "./func-dev";

test("asdfasdf", () => {
  const progresses = [93, 30, 55];
  const speeds = [1, 30, 5];

  expect(solution(progresses, speeds)).toEqual([2, 1]);
});
