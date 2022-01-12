function fib_array(num) {
  const result = [0, 1];
  for (let i = 2; i <= num; i++) {
    const a = result[i - 2];
    const b = result[i - 1];

    result.push(a + b);
  }

  return result[num];
}

function fib_function(num) {
  if (num < 2) {
    return num;
  }

  return fib_array(num - 1) + fib_array(num - 2);
}

module.exports = fib_function;