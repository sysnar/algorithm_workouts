import { renewalMenu } from ".";

test("1번 예시", () => {
  expect(renewalMenu(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])).toEqual([
    "AC",
    "ACDE",
    "BCFG",
    "CDE",
  ]);
});

test("2번 예시", () => {
  expect(renewalMenu(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])).toEqual([
    "ACD",
    "AD",
    "ADE",
    "CD",
    "XYZ",
  ]);
});

test("3번 예시", () => {
  expect(renewalMenu(["XYZ", "XWY", "WXA"], [2, 3, 4])).toEqual(["WX", "XY"]);
});
