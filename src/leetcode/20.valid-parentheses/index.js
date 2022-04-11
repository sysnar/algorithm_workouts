/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (inputString) {
  // While the string contains a pair of brackets
  while (
    inputString.indexOf("()") !== -1 ||
    inputString.indexOf("{}") !== -1 ||
    inputString.indexOf("[]") !== -1
  ) {
    // Remove any occurrences of whole brackets
    inputString = inputString.replace("()", "").replace("{}", "").replace("[]", "");
  }

  // Return based on whether or not anything remains
  // (indicates that there were incorrect brackets)
  return !inputString.length;
};
