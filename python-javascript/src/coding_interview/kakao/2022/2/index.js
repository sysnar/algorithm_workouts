// @ts-check

/**
 * @param {number} n
 * @param {number} k
 */
export function notation(n, k) {
  // k진법으로 나눈 후 split
  const candidates = n.toString(k).split("0");
  // 소수 개수 세기
  return candidates.filter((v) => isPrime(+v)).length;
}

function isPrime(num) {
  if (!num || num === 1) return false;
  for (let i = 2; i <= +Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
