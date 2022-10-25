// Solution #1
// Time Complexity : O(N)
// export function fib(number) {
//   const result = [0, 1];

//   for (let index = 2; index <= number; index++) {
//     const prev = result[index - 1];
//     const cur = result[index - 2];

//     result.push(prev + cur);
//   }

//   return result[number];
// }

// Solution #2 - slow version
// Recursive solution for problem
// Time Complexity : O(2^N)
// export function fib(number) {
//   if (number < 2) {
//     return number;
//   }

//   return fib(number - 2) + fib(number - 1);
// }

// Solution #3 - cached version
// Problem solved with memoization!!
// Time Complexity : O()
function memoize(callback) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = callback.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(number) {
  if (number < 2) {
    return number;
  }

  return fib(number - 2) + fib(number - 1);
}

export const fib = memoize(slowFib);
