const findLowerNumber = (arr) => {
  let nonDup = new Set(arr);
  let index = 0;

  while (true) {
    if (nonDup.has(index)) {
      return nonDup.has(index);
    }
    index++;
  }

  return nonDup.length++;
};
// const findLowerNumber = (arr) => {
//   let nonDup = [...new Set(arr)].sort();
//   for (let index in arr) {
//     if (parseInt(index) != nonDup[index]) return index++;
//   }
//   return nonDup.length++;
// };

console.log(findLowerNumber([0, 1, 2, 5, 3]));
