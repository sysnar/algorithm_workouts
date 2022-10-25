// @ts-check

/**
 * @param {number} n
 * @param {number[]} info
 */
export function archery(n, info) {
  /**
   * 1. 어피치가 쏜 점수의 합보다 라이언이 쏜 점수의 합이 더 큰 경우의 수를 찾아주세요.
   * 2. 두 점수 간의 차이가 가장 큰 경우의 수를 찾아주세요.
   * 3. 가장 낮은 점수로 우승한 경우의 수를 찾아주세요.
   */

  /**
   * 어피치보다 1발 많이 쏘거나, 한발도 쏘지 않는 경우 많이 존재함.
   * 2^11 = 2048에 대한 모든 경우의 수 탐색(완전 탐색)
   */
  let max = 0;
  let lion = Array(11).fill(0);
  let answer = [-1];

  function dfs(level, count) {
    if (level == 10) {
      // 모든 점수에 시도했을 경우 남아 있는 화살을 모두 0점에 몰아 넣는다.
      lion[level] = count;

      // 점수 채점 (최대 점수차)
      let sum = 0;
      for (let i = 0; i < 10; i++) {
        if (lion[i] > info[i]) {
          sum = sum + (10 - i);
        } else if (lion[i] === info[i]) {
          continue;
        } else {
          sum = sum - (10 - i);
        }
      }

      // 가장 낮은 점수 순으로 정답 재확인
      if (sum > max) {
        max = sum;
        answer = [...lion];
      } else if (sum == max) {
        for (let j = 10; j > 0; j--) {
          if (answer[j] == lion[j]) {
            continue;
          } else if (lion[j] > answer[j]) {
            answer = [...lion];
            break;
          } else {
            break;
          }
        }
      }
    } else {
      // 남은 화살이 없는 경우
      if (count == 0 || count < info[level] + 1) {
        dfs(level + 1, count);
      }
      // 남은 화살이 있는 경우
      else {
        // 어피치 보다 N+1 발 많이 쏘는 경우
        lion[level] = info[level] + 1;
        count = count - (info[level] + 1);
        dfs(level + 1, count);

        // 0발 쏘는 경우
        lion[level] = 0;
        count = count + (info[level] + 1);
        dfs(level + 1, count);
      }
    }
  }

  dfs(0, n);

  return answer;
}
