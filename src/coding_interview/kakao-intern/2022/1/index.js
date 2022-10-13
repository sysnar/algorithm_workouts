// @ts-check

/**
 * 1. 아이디어
 * 2. 시간복잡도
 * 3. 자료구조
 */
/**
 * @param {string[]} survey
 * @param {number[]} choices
 * @returns
 */
export function solution(survey, choices) {
  let answer = "";
  const hashMap = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    let point = choices[i] - 4;
    if (point > 0) {
      hashMap[survey[i][1]] = hashMap[survey[i][1]] + Math.abs(point);
    } else if (point === 0) {
      continue;
    } else if (point < 0) {
      hashMap[survey[i][0]] = hashMap[survey[i][0]] + Math.abs(point);
    }
  }

  if (hashMap["R"] >= hashMap["T"]) {
    answer += "R";
  } else {
    answer += "T";
  }

  console.log(hashMap["C"], hashMap["F"], hashMap["C"] >= hashMap["F"]);
  if (hashMap["C"] >= hashMap["F"]) {
    answer += "C";
  } else {
    answer += "F";
  }

  if (hashMap["J"] >= hashMap["M"]) {
    answer += "J";
  } else {
    answer += "M";
  }

  if (hashMap["A"] >= hashMap["N"]) {
    answer += "A";
  } else {
    answer += "N";
  }

  return answer;
}
