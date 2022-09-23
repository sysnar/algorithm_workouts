// @ts-check

/**
 * @param {number[][]} array
 */
export function rotate90(array) {
  let max = array.length - 1;
  const result = Array.from(Array(array.length), () => Array(array[0].length).fill(0));

  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[row].length; col++) {
      let afterRow = col;
      let afterCol = max - row;

      result[afterRow][afterCol] = array[row][col];
    }
  }
  console.log(result);
  return result;
}

/**
 * @param {number[][]} array
 */
export function rotate180(array) {
  let max = array.length - 1;
  const result = Array.from(Array(array.length), () => Array(array[0].length).fill(0));

  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[row].length; col++) {
      let afterRow = max - row;
      let afterCol = max - col;

      result[afterRow][afterCol] = array[row][col];
    }
  }
  console.log(result);
  return result;
}
