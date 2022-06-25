var addBinary = function (a, b) {
  if (a === "0" && b === "0") return "0";

  let output = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    const num1 = a[i] === undefined ? 0 : +a[i];
    const num2 = b[j] === undefined ? 0 : +b[j];
    if (num1 + num2 + carry < 2) {
      output = (num1 + num2 + carry).toString() + output;
      carry = 0;
    } else if (num1 + num2 + carry >= 2) {
      output = (num1 + num2 + carry - 2).toString() + output;
      carry = 0;
      carry++;
    }
    i--, j--;
  }
  return `${carry || ""}${output}`;
};
