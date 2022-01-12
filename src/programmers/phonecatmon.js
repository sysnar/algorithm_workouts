const array = 	[3, 3, 3, 2, 2, 4];


function solution(nums) {
  let ponNum = nums.length;
  let maxAnswer = parseInt(ponNum / 2);
  let maxKind = [...new Set(nums)].length;

  if (maxAnswer < maxKind) return maxAnswer

  return maxKind;
}

console.log(solution(array));