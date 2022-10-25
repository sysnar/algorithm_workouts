/**
 * Input:
 * a = "11"
 * b = "1"
 *
 * Output:
 * "100"
 */

/**
 * Input:
 * a = "1010"
 * b = "1011"
 *
 * Output:
 * "10101"
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export const addBinary = function (a, b) {
  let aLength = a.length - 1;
  let bLength = b.length - 1;
  let result = "";
  let carry = 0;

  while (aLength >= 0 || bLength >= 0) {
    let left = a[aLength] === undefined ? 0 : +a[aLength];
    let right = b[bLength] === undefined ? 0 : +b[bLength];

    if (left + right + carry >= 2) {
      result = (left + right + carry - 2).toString() + result;
      carry = 0;
      carry++;
    } else if (left + right + carry < 2) {
      result = (left + right + carry).toString() + result;
      carry = 0;
    }
    aLength--;
    bLength--;
  }

  return `${carry || ""}${result}`;
};
