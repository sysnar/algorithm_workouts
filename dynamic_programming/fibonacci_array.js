function fib_array(num) {
  const result = [0, 1];
  for (let i = 2; i <= num; i++) {
    const a = result[i - 2];
    const b = result[i - 1];

    result.push(a + b);
  }

  return result[num];
}

module.exports = fib_array;

// function fib_array(num) {
//   cache = Array.from({ length: num }, () => 0);
//   cache[0] = 0;
//   cache[1] = 1;
//   cache.splice(0, 2);

//   console.log(cache)
//   for (const index of cache) {
//     console.log(index)
//     cache[index] = cache[index - 1] + cache[index - 2];
//   }
//   return cache[num];
// }