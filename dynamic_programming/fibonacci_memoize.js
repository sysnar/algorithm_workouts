function fib_function(num) {
  if (num < 2) {
    return num;
  }

  return fib(num - 1) + fib(num - 2);
}

function fib_memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}
const fib = fib_memoize(fib_function);
module.exports = fib;

