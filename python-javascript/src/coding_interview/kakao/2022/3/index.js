// @ts-check

/**
 * @param {number[]} fees
 * @param {string[]} records
 */
export function calculate(fees, records) {
  const [basicTime, basicFee, countTime, countFee] = fees;
  const sumTimes = {};
  const cars = {};
  const result = [];

  for (let record of records) {
    const [time, carNumber, history] = record.split(" ");

    if (cars[carNumber] == undefined) {
      cars[carNumber] = [toMinute(time)];
    } else {
      cars[carNumber].push(toMinute(time));
    }
  }

  for (let car in cars) {
    const times = cars[car];
    for (let i = 0; i < times.length; i += 2) {
      if (times[i + 1]) {
        sumTimes[car] = (sumTimes[car] || 0) + times[i + 1] - times[i];
      } else {
        sumTimes[car] = (sumTimes[car] || 0) + 1439 - times[i];
      }
    }
  }

  Object.keys(sumTimes)
    .sort()
    .forEach((car) => {
      if (sumTimes[car] <= basicTime) {
        result.push(basicFee);
      } else {
        result.push(basicFee + Math.ceil((sumTimes[car] - basicTime) / countTime) * countFee);
      }
    });

  //   for (let car in sumTimes) {
  //     if (sumTimes[car] <= basicTime) {
  //       result.push(basicFee);
  //     } else {
  //       result.push(basicFee + Math.ceil((sumTimes[car] - basicTime) / countTime) * countFee);
  //     }
  //   }

  // basicFee + [(sumTime - basicTime) / countTime] * countFee
  console.log("cars", cars);
  console.log("sumTimes", sumTimes);
  console.log(result);
}

/**
 * @param {string} time
 * @returns {number}
 */
function toMinute(time) {
  const [hour, minute] = time.split(":");
  return parseInt(hour) * 60 + parseInt(minute);
}
