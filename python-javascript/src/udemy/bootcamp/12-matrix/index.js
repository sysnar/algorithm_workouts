// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

export function matrix(number) {
  const results = [];

  for (let index = 0; index < number; index++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = number - 1;
  let startRow = 0;
  let endRow = number - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top Row
    for (let cIdx = startColumn; cIdx <= endColumn; cIdx++) {
      results[startRow][cIdx] = counter;
      counter++;
    }
    startRow++;

    // Right of Column
    for (let rIdx = startRow; rIdx <= endRow; rIdx++) {
      results[rIdx][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom Row
    for (let cIdx = endColumn; cIdx >= startColumn; cIdx--) {
      results[endRow][cIdx] = counter;
      counter++;
    }
    endRow--;

    // Left of Column
    for (let rIdx = endRow; rIdx >= startRow; rIdx--) {
      results[rIdx][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}
