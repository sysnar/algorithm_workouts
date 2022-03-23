// 1 ~ 11 -> 7에서 문제발생
// (6) -> false
// (11) -> true
// (8) -> true
// (7) -> true

// -> 4에서 문제발생
// (6) -> true
// (1) -> false
// (3) -> false
// (4) -> true
function isBadVersion(num) {
  if (num >= 242) {
    return true;
  }

  return false;
}

export function badVersion(isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;
    let mid;

    while (left < right) {
      mid = left + Math.floor((right - left) / 2);

      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };
}

console.log(badVersion(isBadVersion)(11111));
