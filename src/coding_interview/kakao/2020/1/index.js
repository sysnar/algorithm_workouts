// @ts-check

/**
 * @param {string} s
 */
export function solution(s) {
  let result = "";
  let min = s.length;

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let count = 0;
    let k = 0;
    let beforeString = "";

    while (s.length >= count) {
      let compareString = s.slice(count, count + i);

      /**
       * 1. 같은 문자열이 있으면 카운트
       * 2. 다른 문자열이 있으면 입력
       *   - 1개면 문자열만 입력
       *   - 2개 이상이면 중복 횟수와 문자열을 같이 입력
       * 3. 마지막 문자열이면 입력
       */
      if (compareString.length < i) {
        result += compareString;
      }

      if (beforeString != compareString) {
        result += `${k <= 1 ? "" : k}${beforeString}`;
        k = 1;
      } else {
        k++;
      }

      beforeString = compareString;
      count += i;
    }

    min = Math.min(min, result.length);
    result = "";
  }

  return min;
}
