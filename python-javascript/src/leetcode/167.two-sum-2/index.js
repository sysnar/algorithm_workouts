var twoSum = function (numbers, target) {
  let map = new Map();
  for (var i = 0; i < numbers.length; i++) {
    var diff = target - numbers[i];
    if (map.has(diff)) {
      return [map.get(diff), i + 1];
    }
    map.set(numbers[i], i + 1);
  }
};
