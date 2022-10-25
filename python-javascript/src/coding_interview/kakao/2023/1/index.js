/**
 * 1. 아이디어
 * 2. 시간복잡도
 * 3. 자료구조
 */
/**
 *
 * @param {string} today
 * @param {string[]} terms
 * @param {string[]} privacies
 */
export function solution(today, terms, privacies) {
  const result = [];
  const termList = {};
  const todayDate = today.split(".").map(Number);

  // 약관별 유효기간을 저장한다.
  for (let term of terms) {
    const [type, duration] = term.split(" ");
    termList[type] = Number(duration);
  }

  let index = 1;
  for (let privacie of privacies) {
    const [day, type] = privacie.split(" ");
    const agreeDate = day.split(".").map(Number);

    // 1. 약관의 유효기간을 가져온다.
    // 2. 유효기간이 만료되는 날을 계산한다.
    let endDate = addMonth(agreeDate, termList[type]);

    // 3. 오늘과 만료일을 비교한다.
    console.log(todayDate, endDate, index);
    compareDate(calcTime(todayDate), calcTime(endDate), index);
    index++;
  }

  console.log(result);
  return result;

  function addMonth(agreeDate, month) {
    let endDate = [...agreeDate];
    endDate[1] += month;
    // if (endDate[1] / 12 >= 1) {
    //   endDate[0] = endDate[0] + Math.floor((endDate[1] - 1) / 12);
    //   endDate[1] = endDate[1] == 12 ? 12 : endDate[1] % 12;
    // }

    return endDate;
  }

  function compareDate(today, endDate, index) {
    // if (new Date(today.join(".")).getTime() >= new Date(endDate.join("."))) {
    //   result.push(index);
    // }
    console.log(today, endDate, today - endDate);
    if (today >= endDate) {
      result.push(index);
    }
  }

  function calcTime(date) {
    return date[0] * 28 * 12 + date[1] * 28 + date[2];
  }
}
