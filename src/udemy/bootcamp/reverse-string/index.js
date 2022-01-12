// export function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// }

// Solution #1
// export function reverse(str) {
//   const arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }

// Solution #2
// export function reverse(str) {
//   return str.split("").reverse().join("");
// }

//Solution #3
// export function reverse(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

//Solution #4
export function reverse(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

//Solution #5
// can debud with following commnad
// -> node inspect index.js
// OR you can just with your IDE's debudder (: VSCODE, WEBSTRORM)
// export function reverse(str) {
//   debugger;
//   return str
//     .split("")
//     .reduce((reversed, character) => character + reversed, "");
// }

// reverse("asdf");
