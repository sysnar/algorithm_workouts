// Solution #1
// export function steps(number) {
//   for (let row = 0; row < number; row++) {
//     let stair = "";

//     for (let column = 0; column < number; column++) {
//       if (column <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }

//     console.log(stair);
//   }
// }

// Solution #2
// problem solved with recursion
export function steps(number, row = 0, stair = "") {
  if (number === row) {
    return;
  }

  if (number === stair.length) {
    console.log(stair);
    return steps(number, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(number, row, stair);
}
