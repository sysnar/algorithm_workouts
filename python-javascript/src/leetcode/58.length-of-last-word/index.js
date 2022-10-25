/**
 * @param {string} s
 * @return {number}
 */
export var lengthOfLastWord1 = function (s) {
  return s.trim().split(" ").pop().length;
};

export var lengthOfLastWord2 = function (s) {
  let result = 0;

  if (s.length === 0) {
    return result;
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == " " && result != 0) {
      return result;
    } else if (s[i] != " ") {
      result++;
    }
  }

  return result;
};
