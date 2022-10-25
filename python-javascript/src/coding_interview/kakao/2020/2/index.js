// @ts-check

/**
 * @param {string} u
 */
export function solution(p) {
  function recursive(string) {
    let left = 0;
    let right = 0;
    let u, v;

    // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
    if (string == "") {
      return "";
    }

    // 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
    // "(", ")"의 갯수가 같아지는 인덱스를 구한뒤 나눈다.
    for (let i = 0; i <= string.length; i++) {
      if (left == right && left != 0) {
        u = string.slice(0, i);
        v = string.slice(i);

        // 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
        //   3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
        if (isPerfect(u)) {
          return u + recursive(v);
        }
        // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
        else {
          return "(" + recursive(v) + ")" + flip(u.slice(1, u.length - 1));
        }
      }

      if (string[i] == "(") left++;
      else if (string[i] == ")") right++;
    }
  }

  function isPerfect(u) {
    let count = 0;

    for (let i = 0; i < u.length; i++) {
      if (count < 0) {
        return false;
      }

      if (u[i] == ")") {
        count--;
      } else if (u[i] == "(") {
        count++;
      }
    }

    return true;
  }

  return recursive(p);
}

function flip(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ")") {
      result += "(";
    } else if (string[i] == "(") {
      result += ")";
    }
  }
  return result;
}
