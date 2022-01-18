//  Solution #1
// export function pyramid(number) {
//   const midPoint = Math.floor((2 * number - 1) / 2);

//   for (let row = 0; row < number; row++) {
//     let level = "";

//     for (let column = 0; column < 2 * number - 1; column++) {
//       if (midPoint - row <= column && column <= midPoint + row) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }

//     console.log(level);
//   }
// }

// Solution #1
// problem solve with recursion
export function pyramid(number, row = 0, level = "") {
  if (row === number) {
    return;
  }

  if (level.length === 2 * number - 1) {
    console.log(level);
    return pyramid(number, row + 1);
  }

  const midPoint = Math.floor((2 * number - 1) / 2);
  let add;

  if (midPoint - row <= level.length && level.length <= midPoint + row) {
    add = "#";
  } else {
    add = " ";
  }

  pyramid(number, row, level + add);
}
