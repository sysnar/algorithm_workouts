// Solution #1
// export function reverseInt(number) {
//   const reversed = number
//     .toString() //
//     .split("")
//     .reverse()
//     .join("");

//   if (number < 0) {
//     return parseInt(reversed) * -1;
//   }

//   return parseInt(reversed);
// }

// Solution #2
export function reverseInt(number) {
  const reversed = number
    .toString() //
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(number);
}
