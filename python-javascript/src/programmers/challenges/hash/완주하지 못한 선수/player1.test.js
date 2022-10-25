import { solution } from "./player1";

test("participant check1", () => {
  expect(solution(["leo", "kiki", "eden"], ["eden", "kiki"])).toBe("leo");
});

test("participant check2", () => {
  expect(
    solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])
  ).toBe("vinko");
});

test("participant check3", () => {
  expect(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])).toBe("mislav");
});
