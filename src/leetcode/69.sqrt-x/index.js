export const mySqrt = function (x) {
  let left = 0;
  let right = Math.floor(x / 2) + 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(mid);
    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};
