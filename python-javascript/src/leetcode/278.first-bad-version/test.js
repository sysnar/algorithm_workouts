import { badVersion } from ".";

test("First Bad Version", () => {
  function isBadVersion(num) {
    if (num >= 7) {
      return true;
    }

    return false;
  }
  expect(badVersion(isBadVersion)(67)).toBe(7);
});

test("First Bad Version", () => {
  function isBadVersion(num) {
    if (num >= 5) {
      return true;
    }

    return false;
  }
  expect(badVersion(isBadVersion)(11)).toBe(5);
});
