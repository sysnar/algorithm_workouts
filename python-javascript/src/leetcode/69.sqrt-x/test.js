import { mySqrt } from ".";

test("Get square root of X", () => {
  expect(mySqrt(4)).toEqual(2);
});

test("Get square root of X", () => {
  expect(mySqrt(8)).toEqual(2);
});

test("Get square root of X", () => {
  expect(mySqrt(10)).toEqual(3);
});
