hashMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  // 결과값 변수
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    // 삼항연산자를 활용해서 규칙을 실현
    hashMap[s[i]] < hashMap[s[i + 1]] ? (value -= hashMap[s[i]]) : (value += hashMap[s[i]]);
  }
  return value;
};
