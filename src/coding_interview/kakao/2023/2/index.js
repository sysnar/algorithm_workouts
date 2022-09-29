// @ts-check

/**
 * 1. 아이디어
 * 2. 시간복잡도
 * 3. 자료구조
 */
/**
 * @param {number} cap
 * @param {number} n 집 수
 * @param {number[]} deliveries
 * @param {number[]} pickups
 */
export function solution(cap, n, deliveries, pickups) {
  const road = [];
  for (let i = 0; i < n; i++) {
    road[i] = [deliveries[i], pickups[i]];
  }

  let goStorage = 0;
  let backStorage = 0;
  while (n) {
    n--;
    if (road[n][0] > 0) {
      let rest = cap - goStorage;
      // 남은 크기 중 넣을 수 있는 만큼
      if (road[n][0] / rest > 1) {
        goStorage += rest;
        road[n][0] -= rest;
      } else {
        goStorage += road[n][0] % rest;
        road[n][0] = 0;
      }
    }

    console.log(goStorage);
    console.log(road);
    if (goStorage === cap) {
      console.log("GO BACK!");
      goStorage = 0;
      continue;
    }
  }
}

function isFinished(cap, deliveries, pickups) {
  for (let i = 0; i < cap; i++) {
    if (deliveries[i] > 0) {
      return false;
    }
    if (pickups[i] > 0) {
      return false;
    }
  }
  return true;
}

// {
//   let goStorage = 0;
//   let backStorage = 0;
//   let result = 0;

//   // 제일 먼 집의 배달물 수를 구한다.
//   while (!isFinished(cap, deliveries, pickups)) {
//     let change = 0;
//     for (let i = n - 1; i >= 0; i--) {
//       /**
//        * 1. 가면서 4를 넘으면 안되고
//        * 2. 오면서 4를 넘으면 안된다.
//        */
//       /**
//        * -1 -0 -3 -1 -2
//        *
//        *    +3    +4
//        */

//       /**
//        * -1 -0 -3 -1 -2
//        *
//        *    +3    +3
//        */
//       if (deliveries[i] > 0 && goStorage + deliveries[i] <= cap) {
//         goStorage = goStorage + deliveries[i];
//         deliveries[i] = 0;
//         change = Math.max(change, i + 1);
//       }

//       if (pickups[i] > 0 && backStorage + pickups[i] <= cap) {
//         backStorage = backStorage + pickups[i];
//         pickups[i] = 0;
//         change = Math.max(change, i + 1);
//       }
//     }

//     if (change > 0) {
//       result += 2 * change;
//     }
//     change = 0;
//     goStorage = 0;
//     backStorage = 0;
//   }

//   return result;
// }

// function isFinished(cap, deliveries, pickups) {
//   for (let i = 0; i < cap; i++) {
//     if (deliveries[i] > 0) {
//       return false;
//     }
//     if (pickups[i] > 0) {
//       return false;
//     }
//   }
//   return true;
// }
