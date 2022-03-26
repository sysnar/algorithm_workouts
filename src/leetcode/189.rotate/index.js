const rotate = (nums, k) => {
  if (nums.length < k) k %= nums.length;
  const spliceArray = nums.splice(0, nums.length - k);
  spliceArray.forEach((el) => nums.push(el));
};
