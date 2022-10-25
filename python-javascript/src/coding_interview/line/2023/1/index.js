// @ts-check

/**
 * 1. 아이디어
 * 2. 시간복잡도
 * 3. 자료구조
 */
/**
 * @param {number[][]} queries
 */
export function solution(queries) {
  const result = Array(1000).fill(0);
  const count = Array.from(Array(1000), () => Array(2).fill(0));

  // count
  /**
   * count = {
   *    0: [2, 1]
   *    1: [16, 13]
   * }
   */
  for (let query of queries) {
    const [index, newNumber] = query;
    // 저장된 배열의 크기가 기존번호 + 새번호 보다 작을 경우 추가해줌
    let sum = count[index][1] + newNumber;
    console.log(count[index][0], result, sum);

    if (count[index][0] < sum) {
      if (count[index][0] > 0) {
        result[index] += count[index][1];
      }
      count[index][0] = getPow(sum);
    }

    count[index][1] = sum;
  }
  console.log(count);

  let answer = 0;
  for (let i = 0; i < result.length; i++) {
    answer += result[i];
  }
  return answer;
}

function getPow(number) {
  let i = 0;
  while (true) {
    const powNumber = Math.pow(2, i);
    if (number <= powNumber) {
      return powNumber;
    }
    i++;
  }
}
